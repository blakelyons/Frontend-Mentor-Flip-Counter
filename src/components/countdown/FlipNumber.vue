<template>
    <div
        ref="tick"
        class="tick"
    >
        <span data-view="flip"></span>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

const tick = ref(null);

onMounted(() => {
    const _tick = Tick.DOM.create(tick.value, {
        value: props.value,
    });

    // Remove any branding text that might be added by the library
    const removeBranding = () => {
        if (tick.value) {
            const walker = document.createTreeWalker(
                tick.value,
                NodeFilter.SHOW_TEXT,
                null
            );
            let node;
            while ((node = walker.nextNode())) {
                if (
                    node.textContent &&
                    /powered by|pqina/i.test(node.textContent)
                ) {
                    node.textContent = "";
                }
            }
            // Also remove any elements with branding-related classes or text
            const brandingElements = tick.value.querySelectorAll(
                '[class*="powered"], [class*="branding"], [class*="pqina"]'
            );
            brandingElements.forEach((el) => el.remove());
        }
    };

    // Remove branding immediately and after a short delay (in case it's added dynamically)
    removeBranding();
    setTimeout(removeBranding, 100);

    onBeforeUnmount(() => {
        Tick.DOM.destroy(tick.value);
    });

    watch(
        () => props.value,
        (newValue) => {
            _tick.value = newValue;
            // Remove branding again after value update
            setTimeout(removeBranding, 50);
        }
    );
});

const props = defineProps({
    value: String,
});
</script>

<style scoped>
.tick {
    font-size: 4rem;
}
</style>

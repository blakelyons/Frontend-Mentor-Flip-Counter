<template>
    <main class="countdown-timer-container">
        <div
            :class="`flip-timer grid grid-cols-4 ${props.easein ? `easein` : ``} ${props.easeout ? `easeout` : ``}`"
        >
            <div class="grid grid-item days">
                <Flip
                    :value="props.days"
                    :days="true"
                />
                <h2 class="label">Days</h2>
            </div>
            <div class="grid grid-item hours">
                <Flip
                    :value="props.hours"
                    :hours="true"
                />
                <h2 class="label">Hours</h2>
            </div>
            <div class="grid grid-item minutes">
                <Flip
                    :value="props.minutes"
                    :minutes="true"
                />
                <h2 class="label">Minutes</h2>
            </div>
            <div class="grid grid-item seconds">
                <Flip
                    :value="props.seconds"
                    :seconds="true"
                />
                <h2 class="label">Seconds</h2>
            </div>
        </div>
    </main>
</template>

<script setup>
import Flip from "./FlipNumber.vue";

const props = defineProps({
    days: { type: String, default: "" },
    hours: { type: String, default: "" },
    minutes: { type: String, default: "" },
    seconds: { type: String, default: "" },
    easein: { type: Boolean, default: false },
    easeout: { type: Boolean, default: false },
});
</script>

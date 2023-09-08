<template>
    <Transition name="fade">
        <div class="dark-mode-stars-bg" v-if="props.showStars">
            <BackgroundStars />
        </div>
    </Transition>

    <div class="dark-mode-bg"></div>
    <div :class="`light-mode-bg ${props.showSun ? `sunset-fade-in` : ``}`"></div>
</template>

<script setup>
import BackgroundStars from "./BackgroundStars.vue";
const props = defineProps({
    showSun: {type: Boolean, default: true},
    showMoon: {type: Boolean, default: false},
});
</script>

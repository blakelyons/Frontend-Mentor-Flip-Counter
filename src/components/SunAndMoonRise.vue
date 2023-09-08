<template>
    <div :class="`sunrise ${props.showSun ? `rise` : ``}`">
        <SunIcon />
    </div>
    <div :class="`moonrise ${props.showMoon ? `rise` : ``}`">
        <LargeFullMoon />
    </div>
</template>

<script setup>
import SunIcon from "../components/icons/SunIcon.vue";
import LargeFullMoon from "../components/icons/LargeFullMoon.vue";

const props = defineProps({
    showSun: {type: Boolean, default: true},
    showMoon: {type: Boolean, default: false},
});
</script>

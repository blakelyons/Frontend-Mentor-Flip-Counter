<template>
    <div :class="`sunrise ${props.showSun ? `rise` : ``}`">
        <SunIcon />
    </div>
    <div :class="`moonrise ${props.showMoon ? `rise` : ``}`"></div>
</template>

<script setup>
import SunIcon from "../common/icons/SunIcon.vue";

const props = defineProps({
    showSun: { type: Boolean, default: true },
    showMoon: { type: Boolean, default: false },
});
</script>

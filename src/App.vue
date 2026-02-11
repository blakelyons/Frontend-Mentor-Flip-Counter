<template>
    <AppBackground
        :show-sun="showSun"
        :show-moon="showMoon"
        :show-stars="showStars"
    />
    <HeaderLayout
        :header-title="headerTitleText"
        :loaded="loaded"
        :easein="easein"
        :easeout="easeout"
        :focus="focus"
    />
    <CountdownTimerLayout
        :easein="easein"
        :easeout="easeout"
        :days="days"
        :hours="hours"
        :minutes="minutes"
        :seconds="seconds"
    />
    <FooterLayout
        :lightMode="lightMode"
        :easein="easein"
        :easeout="easeout"
    />
    <CountdownTimerSettings
        @toggle-light-mode="handleToggleMode"
        @save-settings="startCountdown"
        @header-title-text="updateTitle"
    />
    <SunAndMoonRise
        :show-sun="showSun"
        :show-moon="showMoon"
    />
</template>

<script setup>
import { ref, onMounted } from "vue";
import CountdownTimerLayout from "./components/countdown/CountdownTimerLayout.vue";
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
import AppBackground from "./components/layout/AppBackground.vue";
import SunAndMoonRise from "./components/countdown/SunAndMoonRise.vue";
import CountdownTimerSettings from "./components/countdown/CountdownTimerSettings.vue";
import { useCountdown } from "./composables/useCountdown";
import { useTheme } from "./composables/useTheme";
import { useAnimation } from "./composables/useAnimation";
import { DEFAULT_HEADER_TITLE, DEFAULT_END_DATE } from "./utils/constants";

const headerTitleText = ref(DEFAULT_HEADER_TITLE);

// Use composables
const { days, hours, minutes, seconds, startCountdown } =
    useCountdown(DEFAULT_END_DATE);
const { loaded, easein, easeout, focus, initializeAnimation } = useAnimation();
const { lightMode, showSun, showMoon, showStars, toggleMode, initializeTheme } =
    useTheme(easein, easeout, focus);

const updateTitle = (title) => {
    headerTitleText.value = title;
};

const handleToggleMode = () => {
    toggleMode();
};

// onBeforeMount(() => {
//   showMoon.value = false;
// })

onMounted(() => {
    startCountdown();
    initializeAnimation();
    initializeTheme();
});
</script>

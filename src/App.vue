<template>
    <Transition name="fade">
        <div class="dark-mode-stars-bg" v-if="showStars">
            <BackgroundStars />
        </div>
    </Transition>

    <div class="dark-mode-bg"></div>
    <div class="light-mode-bg"></div>
    <header class="header">
        <div class="container">
            <h1 :class="`${loaded ? `loaded` : ``} ${easein ? `easein` : ``} ${easeout ? `easeout` : ``}`">We're Launching Soon</h1>
        </div>
    </header>
    <main class="countdown-timer-container">
        <div :class="`flip-timer grid grid-cols-4 ${easein ? `easein` : ``} ${easeout ? `easeout` : ``}`">
            <div class="grid grid-item days">
                <Flip :value="days" :days="true" />
                <h2 class="label">Days</h2>
            </div>
            <div class="grid grid-item hours">
                <Flip :value="hours" :hours="true" />
                <h2 class="label">Hours</h2>
            </div>
            <div class="grid grid-item minutes">
                <Flip :value="minutes" :minutes="true" />
                <h2 class="label">Minutes</h2>
            </div>
            <div class="grid grid-item seconds">
                <Flip :value="seconds" :seconds="true" />
                <h2 class="label">Seconds</h2>
            </div>
        </div>
    </main>
    <FooterLayout :lightMode="lightMode" :easein="easein" :easeout="easeout" />
    <button @click="toggleMode" :class="`light-mode-toggle ${toggleLightMode ? `light` : `dark`}`">
        <div class="switch-icon">
            <MoonIcon />
            <SunIcon />
        </div>
    </button>
    <div :class="`sunrise ${showSun ? `rise` : ``}`">
        <SunIcon />
        <div class="sun-glow"></div>
    </div>
</template>

<script setup>
import {ref, onMounted, watch} from "vue";
import Flip from "./components/FlipNumber.vue";
import FooterLayout from "./components/FooterLayout.vue";
import BackgroundStars from "./components/BackgroundStars.vue";
import SunIcon from "./components/icons/SunIcon.vue";
import MoonIcon from "./components/icons/FullMoonIcon.vue";

const loaded = ref(false);
const easein = ref(false);
const easeout = ref(false);
const toggleLightMode = ref(false);
const lightMode = ref(false);
const showStars = ref(true);
const showSun = ref(false);

const endDate = new Date("2023-09-30");
const endTime = new Date("2023-09-30T16:30:00");

const days = ref("");
const hours = ref("");
const minutes = ref("");
const seconds = ref("");

const countdownTimer = () => {
    const now = new Date();
    const startTimeInMilliseconds = now.getTime();
    const endTimeInMilliseconds = endDate.getTime() + endTime.getHours() * 3600000 + endTime.getMinutes() * 60000 + endTime.getSeconds() * 1000;
    const timeDifference = endTimeInMilliseconds - startTimeInMilliseconds;

    if (timeDifference <= 0) {
        // Countdown reached its end
        days.value = "0";
        hours.value = "0";
        minutes.value = "0";
        seconds.value = "0";
        return;
    }

    const daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDiff = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDiff = Math.floor((timeDifference % (1000 * 60)) / 1000);

    days.value = daysDiff.toString();
    hours.value = hoursDiff.toString().padStart(2, "0");
    minutes.value = minutesDiff.toString().padStart(2, "0");
    seconds.value = secondsDiff.toString().padStart(2, "0");
};

const toggleMode = () => {
    console.log("Toggle Mode");
    toggleLightMode.value ? (toggleLightMode.value = false) : (toggleLightMode.value = true);
    easein.value ? (easein.value = false) : (easein.value = true);
    easeout.value = true;
    showStars.value = false;

    let body = document.querySelector("body");

    setTimeout(() => {
        easein.value = true;
        easeout.value = false;
    }, 1000);

    const animated = document.querySelector(".flip-timer.easein");

    animated.addEventListener("transitionend", () => {
        console.log("Animation End");
        if (!lightMode.value) {
            lightMode.value = true;
            body.classList.add("light-mode");
        } else {
            lightMode.value = false;
            body.classList.remove("light-mode");
        }
    });

    setTimeout(() => {
        if (!lightMode.value) {
            lightMode.value = true;
            body.classList.add("light-mode");
        } else {
            lightMode.value = false;
            body.classList.remove("light-mode");
            setTimeout(() => {
                showStars.value = true;
            }, 1200);
        }
    }, 1100);

    showSun.value
        ? (showSun.value = false)
        : setTimeout(() => {
              showSun.value = true;
          }, 600);
};

onMounted(() => {
    countdownTimer();
    setInterval(countdownTimer, 1000);

    setTimeout(() => {
        loaded.value = true;
        easein.value = true;
    }, 500);
});
</script>

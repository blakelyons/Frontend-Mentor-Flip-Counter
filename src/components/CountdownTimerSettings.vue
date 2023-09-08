<template>
    <button @click="toggleSettings">
        <div :class="`settings-toggle-btn ${openSettings ? `active` : ``}`">
            <SettingsIcon v-if="!openSettings" />
            <CloseIcon v-else />
            <div class="settings-label" v-if="!hideSettingsLabel">Settings</div>
        </div>
    </button>
    <button @click="toggleMode" :class="`light-mode-toggle ${toggleLightMode ? `light` : `dark`}`">
        <div class="switch-icon">
            <FullMoonIcon />
            <SunIcon />
        </div>
    </button>
    <div :class="`settings-container ${openSettings ? `active` : ``}`">
        <div class="settings-container-form-group">
            <div>
                <label for="date" class="label">Countdown Timer Target Date:</label>
                <input id="date" type="date" class="settings-date-picker" v-model="countdownTimerTargetDate" />
            </div>
            <div class="margin-top-small">
                <label for="title" class="label">Countdown Timer Title:</label>
                <input id="title" type="text" class="header-title" v-model="headerTitleText" placeholder="We're Launching Soon" />
            </div>
            <button class="button button--save" @click="saveSettings">Save</button>
        </div>
    </div>
</template>
<script setup>
import {ref} from "vue";

import SettingsIcon from "./icons/SettingsIcon.vue";
import SunIcon from "./icons/SunIcon.vue";
import FullMoonIcon from "./icons/FullMoonIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";

const emit = defineEmits(["toggleLightMode", "saveSettings", "headerTitleText"]);

const openSettings = ref(false);
const hideSettingsLabel = ref(false);
const countdownTimerTargetDate = ref("09/30/2023");
const headerTitleText = ref("");

const toggleLightMode = ref(false);
const lightMode = ref(false);

const toggleSettings = () => {
    openSettings.value = !openSettings.value;

    // Hide the Settings Label when the Settings Menu is open to prevent the label from showing and overlapping the Settings Menu
    if (openSettings.value) {
        hideSettingsLabel.value = true;
    } else {
        setTimeout(() => {
            hideSettingsLabel.value = false;
        }, 800);
    }
};

const toggleMode = () => {
    toggleLightMode.value = !toggleLightMode.value;
    lightMode.value = !lightMode.value;
    emit("toggleLightMode");
};

const saveSettings = () => {
    // If an existing targetDateTime exists remove it
    if (localStorage.getItem("targetDate")) {
        localStorage.removeItem("targetDate");
    }

    // Save the Target Date and Time to Local Storage
    localStorage.setItem("targetDate", countdownTimerTargetDate.value.replace(/-/g, "/"));

    // Close Settings Menu
    openSettings.value = false;

    // Let the App.vue component know that the settings have been saved
    emit("headerTitleText", headerTitleText.value);
    emit("saveSettings");
};
</script>

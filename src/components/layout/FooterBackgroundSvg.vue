<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="1440"
        height="197"
        :class="props.lightMode ? `footer-hills light-mode` : `footer-hills`"
    >
        <defs>
            <path
                id="a"
                d="M0 0h1440v197H0z"
            />
        </defs>
        <g
            fill="none"
            fill-rule="evenodd"
        >
            <mask fill="#fff"><use xlink:href="#a" /></mask>
            <g mask="url(#b)">
                <path
                    :class="`hills-background ${easeInBackground ? `easein` : `easeout`}`"
                    :fill="props.lightMode ? `hsl(217, 97%, 20%)` : `#211A29`"
                    d="M1440 50.205L1088.504 0 949.669 50.205 878 25.102 556 0 398.525 50.205l-95.807-25.103-51.328 16.761L45.704 0 0 17.701V160h1440z"
                />
                <path
                    :class="`hills-shadow ${easeInShadow ? `easein` : `easeout`}`"
                    :fill="props.lightMode ? `hsl(217, 97%, 10%)` : `#1A1823`"
                    d="M1394.296 1l94.649 69.336 50.047-49.449zM1137.282 42.576l51.328 27.76 80.6-5.426zM884 1l157.475 83.151 80.929-26.062zM351.496 1l138.835 83.151 49.321-28.526z"
                />
                <path
                    :class="`hills-foreground ${easeInForeground ? `easein` : `easeout`}`"
                    :fill="props.lightMode ? `hsl(217, 97%, 70%)` : `#2F2439`"
                    d="M0 84.151L351.496 1l138.835 83.151L562 42.576 884 1l157.475 83.151 95.807-41.575 51.328 27.76L1394.296 1 1440 30.317V266H0z"
                />
            </g>
        </g>
    </svg>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    lightMode: Boolean,
    easein: Boolean,
    easeout: Boolean,
});

const easeInForeground = ref(false);
const easeInBackground = ref(false);
const easeInShadow = ref(false);

const easeInHills = () => {
    // Hide Hills
    setTimeout(() => {
        easeInForeground.value = true;
    }, 0);
    setTimeout(() => {
        easeInShadow.value = true;
    }, 200);
    setTimeout(() => {
        easeInBackground.value = true;
    }, 400);
};

const easeOutHills = () => {
    // Hide Hills
    setTimeout(() => {
        easeInBackground.value = false;
    }, 0);
    setTimeout(() => {
        easeInShadow.value = false;
    }, 200);
    setTimeout(() => {
        easeInForeground.value = false;
    }, 400);
};

watch(
    () => props.easein,
    (newEaseinValue, oldEaseinValue) => {
        // This will be called whenever the easein prop value changes
        if (newEaseinValue) {
            easeInHills();
        } else {
            // Handle when easein becomes false
            console.log(oldEaseinValue);
            easeOutHills();
        }
    }
);
</script>

import "./styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#flip-counter-app");

import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
import { ExpoScaleEase } from "gsap/EasePack";

import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
    SplitText,
    TextPlugin,
    ExpoScaleEase,
    CustomEase,
    CustomBounce
);

// Enable transitions after Vue has mounted and initial render is complete
// Use requestAnimationFrame to ensure DOM is ready
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.body.classList.add("loaded");
    });
});

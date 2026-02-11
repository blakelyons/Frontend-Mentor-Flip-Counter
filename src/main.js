import "./styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#flip-counter-app");

// Enable transitions after Vue has mounted and initial render is complete
// Use requestAnimationFrame to ensure DOM is ready
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.body.classList.add("loaded");
    });
});

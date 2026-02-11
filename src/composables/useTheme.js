import { ref } from "vue";

export function useTheme(easein, easeout, focus) {
    const lightMode = ref(false);
    const toggleLightMode = ref(false);
    const showStars = ref(true);
    const showSun = ref(false);
    const showMoon = ref(false);

    const toggleMode = () => {
        // Capture direction before changing refs so sun/moon hide first like the other
        const goingToDark = toggleLightMode.value === true;
        if (goingToDark) {
            toggleLightMode.value = false;
            showSun.value = false; // Sun animates away first, like moon when going to light
            // Switch text/theme to dark immediately so color doesn’t change last
            const body = document.querySelector("body");
            if (body) {
                lightMode.value = false;
                body.classList.remove("light-mode");
            }
        } else {
            toggleLightMode.value = true;
            showMoon.value = false; // Moon animates away first
            // Switch text/theme to light immediately so color changes first
            const body = document.querySelector("body");
            if (body) {
                lightMode.value = true;
                body.classList.add("light-mode");
            }
        }

        // Match original timing exactly - these happen immediately
        if (easein)
            easein.value ? (easein.value = false) : (easein.value = true);
        if (easeout) easeout.value = true;
        showStars.value = false;

        let body = document.querySelector("body");

        setTimeout(() => {
            if (easein) easein.value = true;
            if (easeout) easeout.value = false;

            // Show moon at 50% through the large mountains (foreground) animation
            // Hills animation starts now (1000ms), foreground takes 700ms, so 50% = 350ms
            if (goingToDark) {
                // Sun already hidden at start; show moon partway through foreground
                setTimeout(() => {
                    showMoon.value = true;
                }, 350);
            } else {
                setTimeout(() => {
                    showSun.value = true;
                    showMoon.value = false;
                }, 50);
            }

            setTimeout(() => {
                if (focus) focus.value = true;
            }, 500);

            const animated = document.querySelector(".flip-timer.easein");

            if (animated) {
                animated.addEventListener("transitionend", () => {
                    console.log("Animation End");
                    // Set theme by direction so we don’t undo immediate dark text
                    if (goingToDark) {
                        lightMode.value = false;
                        body.classList.remove("light-mode");
                    } else {
                        lightMode.value = true;
                        body.classList.add("light-mode");
                    }
                });
            }

            setTimeout(() => {
                // Set theme by direction (don’t toggle) so immediate dark stays correct
                if (goingToDark) {
                    lightMode.value = false;
                    body.classList.remove("light-mode");
                    setTimeout(() => {
                        showStars.value = true;
                    }, 1200);
                } else {
                    lightMode.value = true;
                    body.classList.add("light-mode");
                }
            }, 1100);
        }, 1000);
    };

    const initializeTheme = () => {
        // Show moon at 50% through the large mountains (foreground) animation on initial load
        // initializeAnimation() sets easein.value = true at 500ms
        // Hills foreground animation starts at 500ms + 0ms = 500ms, takes 700ms
        // So 50% = 500ms + 350ms = 850ms
        setTimeout(() => {
            showMoon.value = true;
        }, 850);
    };

    return {
        lightMode,
        toggleLightMode,
        showStars,
        showSun,
        showMoon,
        toggleMode,
        initializeTheme,
    };
}

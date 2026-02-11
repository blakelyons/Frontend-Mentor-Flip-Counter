import { ref } from "vue";

export function useTheme(easein, easeout, focus) {
    const lightMode = ref(false);
    const toggleLightMode = ref(false);
    const showStars = ref(true);
    const showSun = ref(false);
    const showMoon = ref(false);

    const toggleMode = () => {
        toggleLightMode.value
            ? (toggleLightMode.value = false)
            : ((toggleLightMode.value = true), (showMoon.value = false));

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
            showSun.value
                ? ((showSun.value = false),
                  setTimeout(() => {
                      showMoon.value = true;
                  }, 350))
                : setTimeout(() => {
                      ((showSun.value = true), (showMoon.value = false));
                  }, 350);

            setTimeout(() => {
                if (focus) focus.value = true;
            }, 500);

            const animated = document.querySelector(".flip-timer.easein");

            if (animated) {
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
            }

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

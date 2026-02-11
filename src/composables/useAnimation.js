import { ref } from "vue";

export function useAnimation() {
    const loaded = ref(false);
    const easein = ref(false);
    const easeout = ref(false);
    const focus = ref(false);

    const initializeAnimation = () => {
        setTimeout(() => {
            loaded.value = true;
            easein.value = true;
        }, 500);

        setTimeout(() => {
            focus.value = true;
        }, 800);
    };

    const triggerTransition = (callback) => {
        easeout.value = true;
        easein.value = false;

        setTimeout(() => {
            easein.value = true;
            easeout.value = false;

            setTimeout(() => {
                focus.value = true;
                if (callback) callback();
            }, 500);
        }, 1000);
    };

    return {
        loaded,
        easein,
        easeout,
        focus,
        initializeAnimation,
        triggerTransition,
    };
}

import { ref } from "vue";

export function useCountdown(initialEndDate = new Date("2027-01-01")) {
    const endDate = ref(initialEndDate);
    const days = ref("");
    const hours = ref("");
    const minutes = ref("");
    const seconds = ref("");

    const countdownTimer = () => {
        const now = new Date();

        const startTimeInMilliseconds = now.getTime();
        const endTimeInMilliseconds =
            endDate.value.getTime() +
            endDate.value.getHours() * 3600000 +
            endDate.value.getMinutes() * 60000 +
            endDate.value.getSeconds() * 1000;

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
        const hoursDiff = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesDiff = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsDiff = Math.floor((timeDifference % (1000 * 60)) / 1000);

        days.value = daysDiff.toString();
        hours.value = hoursDiff.toString().padStart(2, "0");
        minutes.value = minutesDiff.toString().padStart(2, "0");
        seconds.value = secondsDiff.toString().padStart(2, "0");
    };

    const startCountdown = async () => {
        if (localStorage.getItem("targetDate")) {
            endDate.value = new Date(localStorage.getItem("targetDate"));
        }

        await countdownTimer();
        setInterval(countdownTimer, 1000);
    };

    return {
        endDate,
        days,
        hours,
        minutes,
        seconds,
        startCountdown,
        countdownTimer,
    };
}

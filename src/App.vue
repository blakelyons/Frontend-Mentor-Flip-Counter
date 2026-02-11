<template>
  <AppBackground :show-sun="showSun" :show-moon="showMoon" />
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
  <FooterLayout :lightMode="lightMode" :easein="easein" :easeout="easeout" />
  <CountdownTimerSettings
    @toggle-light-mode="toggleMode"
    @save-settings="startCountdown"
    @header-title-text="updateTitle"
  />
  <SunAndMoonRise :show-sun="showSun" :show-moon="showMoon" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CountdownTimerLayout from './components/CountdownTimerLayout.vue'
import HeaderLayout from './Layout/HeaderLayout.vue'
import FooterLayout from './Layout/FooterLayout.vue'
import AppBackground from './Layout/AppBackground.vue'
import SunAndMoonRise from './components/SunAndMoonRise.vue'
import CountdownTimerSettings from './components/CountdownTimerSettings.vue'

const loaded = ref(false)
const easein = ref(false)
const easeout = ref(false)
const focus = ref(false)
const toggleLightMode = ref(false)
const lightMode = ref(false)
const showStars = ref(true)
const showSun = ref(false)
const showMoon = ref(false)
const headerTitleText = ref("We're Launching Soon")

const endDate = ref(new Date('2023-09-30'))

const days = ref('')
const hours = ref('')
const minutes = ref('')
const seconds = ref('')

const updateTitle = (title) => {
  headerTitleText.value = title
}

const startCountdown = async () => {
  if (localStorage.getItem('targetDate')) {
    endDate.value = new Date(localStorage.getItem('targetDate'))
  }

  await countdownTimer()
  setInterval(countdownTimer, 1000)
}

const countdownTimer = async () => {
  const now = new Date()

  const startTimeInMilliseconds = now.getTime()
  const endTimeInMilliseconds =
    endDate.value.getTime() +
    endDate.value.getHours() * 3600000 +
    endDate.value.getMinutes() * 60000 +
    endDate.value.getSeconds() * 1000

  const timeDifference = endTimeInMilliseconds - startTimeInMilliseconds

  if (timeDifference <= 0) {
    // Countdown reached its end
    days.value = '0'
    hours.value = '0'
    minutes.value = '0'
    seconds.value = '0'
    return
  }

  const daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hoursDiff = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutesDiff = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const secondsDiff = Math.floor((timeDifference % (1000 * 60)) / 1000)

  days.value = daysDiff.toString()
  hours.value = hoursDiff.toString().padStart(2, '0')
  minutes.value = minutesDiff.toString().padStart(2, '0')
  seconds.value = secondsDiff.toString().padStart(2, '0')
}

const toggleMode = () => {
  console.log('Toggle Mode')
  toggleLightMode.value
    ? (toggleLightMode.value = false)
    : ((toggleLightMode.value = true), (showMoon.value = false))
  easein.value ? (easein.value = false) : (easein.value = true)
  easeout.value = true
  showStars.value = false

  let body = document.querySelector('body')

  setTimeout(() => {
    easein.value = true
    easeout.value = false

    setTimeout(() => {
      focus.value = true
    }, 500)
  }, 1000)

  const animated = document.querySelector('.flip-timer.easein')

  animated.addEventListener('transitionend', () => {
    console.log('Animation End')
    if (!lightMode.value) {
      lightMode.value = true
      body.classList.add('light-mode')
    } else {
      lightMode.value = false
      body.classList.remove('light-mode')
    }
  })

  setTimeout(() => {
    if (!lightMode.value) {
      lightMode.value = true
      body.classList.add('light-mode')
    } else {
      lightMode.value = false
      body.classList.remove('light-mode')
      setTimeout(() => {
        showStars.value = true
      }, 1200)
    }
  }, 1100)

  showSun.value
    ? ((showSun.value = false),
      setTimeout(() => {
        showMoon.value = true
      }, 600))
    : setTimeout(() => {
        ;((showSun.value = true), (showMoon.value = false))
      }, 600)
}

onMounted(() => {
  startCountdown()
  setTimeout(() => {
    loaded.value = true
    easein.value = true

    // Show Moon by Default
    showMoon.value = true
  }, 500)

  setTimeout(() => {
    focus.value = true
  }, 800)
})
</script>

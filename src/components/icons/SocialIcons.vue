<template>
  <span
    v-if="props.icon == 'facebook'"
    :class="`icon-facebook ${props.lightMode ? `footer-social-icon light` : `footer-social-icon  dark`}`"
  ></span>

  <span
    v-if="props.icon == 'pinterest'"
    :class="`icon-pinterest ${props.lightMode ? `footer-social-icon light` : `footer-social-icon  dark`}`"
  ></span>
  <span
    v-if="props.icon == 'instagram'"
    :class="`icon-instagram ${props.lightMode ? `footer-social-icon light` : `footer-social-icon  dark`}`"
  ></span>
</template>

<script setup>
const props = defineProps({
  icon: String,
  lightMode: Boolean
})
</script>

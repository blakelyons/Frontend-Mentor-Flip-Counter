<template>
  <div ref="tick" class="tick">
    <span data-view="flip"></span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Tick from '@pqina/flip'
import '@pqina/flip/dist/flip.min.css'

const tick = ref(null)

onMounted(() => {
  const _tick = Tick.DOM.create(tick.value, {
    value: props.value
  })

  onBeforeUnmount(() => {
    Tick.DOM.destroy(tick.value)
  })

  watch(
    () => props.value,
    (newValue) => {
      _tick.value = newValue
    }
  )
})

const props = defineProps({
  value: String
})
</script>

<style scoped>
.tick {
  font-size: 4rem;
}
</style>

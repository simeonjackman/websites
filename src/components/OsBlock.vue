<script setup>
import { useOs } from '../composables/useOs'
import OsToggle from './OsToggle.vue'

const { os } = useOs()

function isWindows() {
  return os.value === 'windows'
}

function isMac() {
  return os.value === 'mac'
}
</script>

<template>
  <section class="os-block">
    <div class="os-block__bar">
      <span class="os-block__label">Betriebssystem</span>
      <OsToggle />
    </div>

    <div v-if="isWindows()" class="os-block__content">
      <slot name="windows" />
    </div>
    <div v-else class="os-block__content">
      <slot name="mac" />
    </div>
  </section>
</template>
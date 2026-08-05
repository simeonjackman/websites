<script setup>
import { useOs } from '../composables/useOs'

const { os, setOs } = useOs()

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
      <div class="os-toggle" role="group" aria-label="Betriebssystem wählen">
        <button
          type="button"
          class="os-toggle__btn"
          :class="{ active: isWindows() }"
          :aria-pressed="isWindows()"
          @click="setOs('windows')"
        >
          Windows
        </button>
        <button
          type="button"
          class="os-toggle__btn"
          :class="{ active: isMac() }"
          :aria-pressed="isMac()"
          @click="setOs('mac')"
        >
          Mac
        </button>
      </div>
    </div>

    <div v-if="isWindows()" class="os-block__content">
      <slot name="windows" />
    </div>
    <div v-else class="os-block__content">
      <slot name="mac" />
    </div>
  </section>
</template>
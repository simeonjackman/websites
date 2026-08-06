<script setup>
import { useOs } from '../composables/useOs'

const { os, setOs } = useOs()
</script>

<template>
  <div class="os-toggle" role="group" aria-label="Betriebssystem wählen">
    <button
      type="button"
      class="os-toggle__btn"
      :class="{ active: os === 'windows' }"
      :aria-pressed="os === 'windows'"
      @click="setOs('windows')"
    >
      Windows
    </button>
    <button
      type="button"
      class="os-toggle__btn"
      :class="{ active: os === 'mac' }"
      :aria-pressed="os === 'mac'"
      @click="setOs('mac')"
    >
      Mac
    </button>
  </div>
</template>
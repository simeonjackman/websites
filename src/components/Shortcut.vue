<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { modifierKey } from '../composables/useOs'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  keys: {
    type: Array,
    required: true,
  },
  separator: {
    type: String,
    default: ' + ',
  },
})

const copied = ref(false)
let resetTimer = null

const resolvedKeys = computed(() => {
  return props.keys.map((key) => (key === 'mod' ? modifierKey() : key))
})

const copyText = computed(() => resolvedKeys.value.join(props.separator))

const displayText = computed(() => {
  return resolvedKeys.value.map((key) => key.toUpperCase()).join(' + ')
})

async function copy() {
  if (!navigator?.clipboard) {
    return
  }

  await navigator.clipboard.writeText(copyText.value)
  copied.value = true

  if (resetTimer) {
    clearTimeout(resetTimer)
  }

  resetTimer = setTimeout(() => {
    copied.value = false
    resetTimer = null
  }, 1800)
}

onBeforeUnmount(() => {
  if (resetTimer) {
    clearTimeout(resetTimer)
  }
})
</script>

<template>
  <div class="shortcut">
    <span class="shortcut__label">{{ label }}</span>
    <span class="shortcut__keys">
      <kbd v-for="key in resolvedKeys" :key="key" class="shortcut__key">{{ key }}</kbd>
    </span>
    <button class="shortcut__copy" type="button" @click="copy" :aria-live="'polite'">
      {{ copied ? 'Kopiert' : 'Kopieren' }}
    </button>
  </div>
</template>
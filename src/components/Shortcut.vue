<script setup>
import { computed } from 'vue'
import { modifierKey, useOs } from '../composables/useOs'

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

const { os } = useOs()

const modifierLabel = (key) => {
  if (key === 'mod') return modifierKey()
  if (key === 'ctrl') return os.value === 'mac' ? '^' : 'ctrl'
  return key
}

const resolvedKeys = computed(() => {
  return props.keys.map(modifierLabel)
})

const displayText = computed(() => {
  return resolvedKeys.value.join(props.separator)
})
</script>

<template>
  <div class="shortcut" :title="`${label}: ${displayText}`">
    <span class="shortcut__label">{{ label }}</span>
    <span class="shortcut__keys">
      <kbd v-for="key in resolvedKeys" :key="key" class="shortcut__key">{{ key }}</kbd>
    </span>
  </div>
</template>
<script setup>
import { computed } from 'vue'
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

const resolvedKeys = computed(() => {
  return props.keys.map((key) => (key === 'mod' ? modifierKey() : key))
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
<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const registry = inject('lessonStepRegistry', null)
const number = ref(0)
const id = computed(() => `step-${props.slug}`)

onMounted(() => {
  if (registry) {
    number.value = registry.registerStep({ id: id.value, title: props.title })
  }
})

onBeforeUnmount(() => {
  if (registry) {
    registry.unregisterStep(id.value)
  }
})
</script>

<template>
  <section :id="id" class="lesson-step">
    <div class="lesson-step__heading">
      <span class="lesson-step__badge">{{ number }}</span>
      <h2 class="lesson-step__title">{{ title }}</h2>
    </div>
    <div class="lesson-step__body">
      <slot />
    </div>
  </section>
</template>
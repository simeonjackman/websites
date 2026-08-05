<script setup>
defineProps({
  term: {
    type: String,
    required: true,
  },
  def: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <abbr class="term" :title="def">{{ term }}</abbr>
</template>
<script setup>
import { onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Code Example',
  },
  language: {
    type: String,
    default: 'html',
    validator(value) {
      return ['html', 'css', 'javascript'].includes(value)
    },
  },
  code: {
    type: String,
    required: true,
  },
})

const copied = ref(false)
let resetTimer = null

const languageLabels = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
}

async function copyCode() {
  if (!navigator?.clipboard) {
    return
  }

  await navigator.clipboard.writeText(props.code)
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
  <section class="code-example">
    <div class="code-example__header">
      <div>
        <p class="code-example__eyebrow">Beispiel</p>
        <h3 class="code-example__title">{{ props.title }}</h3>
      </div>
      <div class="code-example__actions">
        <span class="code-example__language">{{ languageLabels[props.language] }}</span>
        <button class="code-example__copy" type="button" @click="copyCode">
          {{ copied ? 'Kopiert' : 'Kopieren' }}
        </button>
      </div>
    </div>

    <pre class="code-example__block"><code>{{ code }}</code></pre>
  </section>
</template>

<style scoped>
.code-example {
  display: grid;
  gap: 0.9rem;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 1.2rem;
  background: rgba(8, 16, 29, 0.6);
  box-shadow: var(--shadow);
}

.code-example__header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.code-example__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.code-example__eyebrow {
  margin: 0 0 0.2rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  color: var(--accent-cool);
}

.code-example__title {
  margin: 0;
  font-size: 1.05rem;
}

.code-example__language {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  font-size: 0.8rem;
  white-space: nowrap;
}

.code-example__copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.42rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;
}

.code-example__copy:hover {
  background: rgba(255, 255, 255, 0.14);
}

.code-example__copy:focus-visible {
  outline: 2px solid var(--accent-cool);
  outline-offset: 2px;
}

.code-example__block {
  margin: 0;
  padding: 1rem;
  border-radius: 0.95rem;
  overflow: auto;
  background: rgba(1, 7, 18, 0.82);
  border: 1px solid rgba(200, 220, 255, 0.12);
  color: #dfe7f5;
  font-size: 0.92rem;
  line-height: 1.55;
}

.code-example__block code {
  font-family: 'SFMono-Regular', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
}

@media (max-width: 640px) {
  .code-example__header {
    flex-direction: column;
  }
}
</style>

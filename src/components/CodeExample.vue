<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Code Example',
  },
  filename: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'html',
    validator(value) {
      return ['html', 'css', 'javascript', 'bash', 'text'].includes(value)
    },
  },
  code: {
    type: String,
    required: true,
  },
})

const codeLines = computed(() => {
  return props.code
    .replace(/^\s*\n/, '')
    .replace(/\n\s*$/, '')
    .split('\n')
})

const copied = ref(false)
let resetTimer = null

const languageLabels = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  bash: 'bash oder Powershell',
  text: 'Text',
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
        <h3 class="code-example__title">{{ props.title }}</h3>
        <p v-if="props.filename" class="code-example__filename">{{ props.filename }}</p>
      </div>
      <div class="code-example__actions">
        <span class="code-example__language">{{ languageLabels[props.language] }}</span>
        <button class="code-example__copy" type="button" @click="copyCode" :aria-live="'polite'">
          {{ copied ? 'Kopiert' : 'Kopieren' }}
        </button>
      </div>
    </div>

    <pre class="code-example__block"><span v-for="(line, index) in codeLines" :key="index" class="code-example__line"><span class="code-example__gutter" aria-hidden="true">{{ index + 1 }}</span><span class="code-example__text">{{ line }}</span></span></pre>
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

.code-example__filename {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: var(--muted);
  font-family: 'SFMono-Regular', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
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
  padding: 0.5rem 0;
  border-radius: 0.95rem;
  overflow: auto;
  background: rgba(1, 7, 18, 0.82);
  border: 1px solid rgba(200, 220, 255, 0.12);
  color: #dfe7f5;
  font-size: 0.92rem;
  line-height: 1.55;
  white-space: normal;
}

.code-example__line {
  display: flex;
  align-items: stretch;
}

.code-example__line + .code-example__line {
  margin-top: 0;
}

.code-example__gutter {
  flex: 0 0 auto;
  min-width: 2.6rem;
  padding: 0 0.85rem;
  text-align: right;
  white-space: nowrap;
  color: var(--muted);
  opacity: 0.55;
  user-select: none;
  border-right: 1px solid rgba(200, 220, 255, 0.12);
  font-family: 'SFMono-Regular', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
}

.code-example__text {
  flex: 1;
  padding: 0 0.85rem;
  white-space: pre;
  font-family: 'SFMono-Regular', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
}

@media (max-width: 640px) {
  .code-example__header {
    flex-direction: column;
  }
}
</style>

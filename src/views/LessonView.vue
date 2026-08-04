<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { findLessonBySlug } from '../data/siteNavigation'
import CodeExample from '../components/CodeExample.vue'

const props = defineProps({
  sectionSlug: {
    type: String,
    required: true,
  },
  lessonSlug: {
    type: String,
    required: true,
  },
})

const content = computed(() => {
  return findLessonBySlug(props.sectionSlug, props.lessonSlug)
})
</script>

<template>
  <section v-if="content" class="page stack">
    <section class="panel">
      <p class="kicker">{{ content.section.label }}</p>
      <h1 style="font-size: clamp(2.1rem, 4vw, 3.6rem)">{{ content.lesson.title }}</h1>
      <p class="lead">{{ content.lesson.summary }}</p>
    </section>

    <section class="analysis-grid">
      <article class="chart-box">
        <div class="summary-row">
          <div>
            <p class="kicker">Kernaussagen</p>
            <h2>Wichtige Punkte</h2>
          </div>
        </div>

        <ul class="chapter-list">
          <li v-for="point in content.lesson.bullets" :key="point">{{ point }}</li>
        </ul>

        <CodeExample
          v-if="content.lesson.codeExample"
          :title="content.lesson.codeExample.title"
          :language="content.lesson.codeExample.language"
          :code="content.lesson.codeExample.code"
        />
      </article>

      <aside class="detail-box">
        <p class="kicker">Merksatz</p>
        <h2>{{ content.lesson.hint }}</h2>
        <div class="notice" style="margin-top: 1rem">
          <p>
            Diese Unterseite ist ein eigenes Ziel im Menü und kann später beliebig mit weiteren Inhalten gefüllt werden.
          </p>
        </div>
        <RouterLink :to="content.section.path" class="cta link-block">Zur Übersicht</RouterLink>
      </aside>
    </section>
  </section>

  <section v-else class="page stack">
    <section class="panel">
      <p class="kicker">Inhalt nicht gefunden</p>
      <h1 style="font-size: clamp(2.1rem, 4vw, 3.6rem)">Diese Unterseite konnte nicht geladen werden.</h1>
      <p class="lead">
        Bitte wähle einen anderen Menüpunkt aus der Dropdown-Navigation.
      </p>
    </section>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { findLessonBySlug } from '../data/siteNavigation'

const route = useRoute()

const content = computed(() => {
  const sectionSlug = route.params.sectionSlug
  const lessonSlug = route.params.lessonSlug

  if (typeof sectionSlug !== 'string' || typeof lessonSlug !== 'string') {
    return null
  }

  return findLessonBySlug(sectionSlug, lessonSlug)
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
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { findSectionBySlug } from '../data/siteNavigation'

const props = defineProps({
  sectionSlug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  lead: {
    type: String,
    default: '',
  },
})

const section = computed(() => findSectionBySlug(props.sectionSlug))
</script>

<template>
  <section v-if="section" class="page stack">
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">{{ section.label }}</p>
          <h1 v-if="title">{{ title }}</h1>
          <h1 v-else>{{ section.summary }}</h1>
          <p class="lead">{{ lead }}</p>
        </div>
        <div class="hero-aside">
          <div class="panel">
            <h3>In dieser Rubrik</h3>
            <p>{{ section.lessons.length }} Lektionen zum Durcharbeiten – von oben nach unten.</p>
            <div class="stats-grid" style="margin-top: 1rem">
              <div class="metric">
                <span>Lektionen</span>
                <strong>{{ section.lessons.length }}</strong>
              </div>
              <div class="metric">
                <span>Ziel</span>
                <strong>Lernen</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-grid">
      <RouterLink
        v-for="(lesson, index) in section.lessons"
        :key="lesson.slug"
        :to="`${section.path}/${lesson.slug}`"
        class="lesson-card"
      >
        <span class="lesson-card__number">{{ index + 1 }}</span>
        <h3 class="lesson-card__title">{{ lesson.title }}</h3>
        <span class="lesson-card__arrow" aria-hidden="true">→</span>
      </RouterLink>
    </section>

    <slot />
  </section>
</template>
<script setup>
import { computed, provide, ref, useSlots } from 'vue'
import { RouterLink } from 'vue-router'
import { findSectionBySlug, getLessonNavigation } from '../data/siteNavigation'

const props = defineProps({
  sectionSlug: {
    type: String,
    required: true,
  },
  lessonSlug: {
    type: String,
    required: true,
  },
  kicker: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    default: '',
  },
})

const section = findSectionBySlug(props.sectionSlug)
const navigation = getLessonNavigation(props.sectionSlug, props.lessonSlug)

const slots = useSlots()
const hasObjectives = computed(() => Boolean(slots.objectives))
const hasIntro = computed(() => Boolean(slots.intro))
const hasRecap = computed(() => Boolean(slots.recap))
const hasExercise = computed(() => Boolean(slots.exercise))
const hasDisclaimer = computed(() => Boolean(slots.disclaimer))

let stepCounter = 0
const steps = ref([])

function registerStep(step) {
  step.number = ++stepCounter
  steps.value.push(step)
  return step.number
}

function unregisterStep(id) {
  const index = steps.value.findIndex((entry) => entry.id === id)
  if (index !== -1) {
    steps.value.splice(index, 1)
  }
}

provide('lessonStepRegistry', { registerStep, unregisterStep })
</script>

<template>
  <article class="lesson-flow page">
    <header class="lesson-flow__hero hero">
      <RouterLink :to="section.path" class="lesson-flow__breadcrumb">
        ← Zur Rubrik „{{ section.label }}“
      </RouterLink>
      <p class="kicker">{{ kicker || section.label }}</p>
      <h1>{{ title }}</h1>
      <p v-if="summary" class="lead">{{ summary }}</p>
      <p v-if="steps.length" class="lesson-flow__meta">
        {{ steps.length }} Schritt{{ steps.length > 1 ? 'e' : '' }} in dieser Lektion
      </p>
    </header>

    <nav v-if="steps.length || hasObjectives || hasRecap || hasExercise" class="lesson-flow__nav" aria-label="Lernabschnitte">
      <RouterLink v-if="hasObjectives" class="lesson-flow__nav-pill" :to="{ hash: '#lesson-objectives' }">Lernziele</RouterLink>
      <RouterLink v-for="step in steps" :key="step.id" class="lesson-flow__nav-pill" :to="{ hash: `#${step.id}` }">
        {{ step.title }}
      </RouterLink>
      <RouterLink v-if="hasRecap" class="lesson-flow__nav-pill" :to="{ hash: '#lesson-recap' }">Zusammenfassung</RouterLink>
      <RouterLink v-if="hasExercise" class="lesson-flow__nav-pill" :to="{ hash: '#lesson-exercise' }">Übung</RouterLink>
    </nav>

    <section v-if="hasObjectives" id="lesson-objectives" class="lesson-block lesson-block--objectives">
      <h2>Lernziele</h2>
      <div class="lesson-block__body">
        <slot name="objectives" />
      </div>
    </section>

    <section v-if="hasIntro" class="lesson-block lesson-block--intro">
      <slot name="intro" />
    </section>

    <section class="lesson-body">
      <slot name="steps" />
    </section>

    <section v-if="hasRecap" id="lesson-recap" class="lesson-block lesson-block--recap">
      <h2>Das Wichtigste in Kürze</h2>
      <div class="lesson-block__body">
        <slot name="recap" />
      </div>
    </section>

    <section v-if="hasExercise" id="lesson-exercise" class="lesson-block lesson-block--exercise">
      <h2>Übung</h2>
      <div class="lesson-block__body">
        <slot name="exercise" />
      </div>
    </section>

    <aside v-if="hasDisclaimer" class="lesson-disclaimer">
      <slot name="disclaimer" />
    </aside>

    <footer class="lesson-next">
      <template v-if="navigation?.prev">
        <RouterLink :to="`${section.path}/${navigation.prev.slug}`" class="lesson-next__link">
          <span class="lesson-next__label">Vorheriges Thema</span>
          <span class="lesson-next__text">{{ navigation.prev.title }}</span>
        </RouterLink>
      </template>

      <template v-if="navigation?.next">
        <RouterLink :to="`${section.path}/${navigation.next.slug}`" class="lesson-next__link lesson-next__link--next">
          <span class="lesson-next__label">Weiter geht's</span>
          <span class="lesson-next__text">{{ navigation.next.title }}</span>
        </RouterLink>
      </template>

      <RouterLink v-else :to="section.path" class="lesson-next__link lesson-next__link--next">
        <span class="lesson-next__label">Rubrik abgeschlossen</span>
        <span class="lesson-next__text">Zur Übersicht von {{ section.label }}</span>
      </RouterLink>
    </footer>
  </article>
</template>
<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { findSectionBySlug } from '../data/siteNavigation'

const props = defineProps({
  sectionSlug: {
    type: String,
    required: true,
  },
})

const section = computed(() => findSectionBySlug(props.sectionSlug))
const route = useRoute()

const isLessonRoute = computed(() => typeof route.params.lessonSlug === 'string')
</script>

<template>
  <section v-if="section" class="page stack">
    <section v-if="!isLessonRoute" class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">{{ section.label }}</p>
          <h1>{{ section.summary }}</h1>
          <p class="lead">
            Diese Rubrik dient als Überblick. Die Unterseiten unten führen die einzelnen Themen weiter aus.
          </p>
        </div>

        <div class="hero-aside">
          <div class="panel">
            <h3>In dieser Rubrik</h3>
            <p>Hier findest du die Unterseiten zu {{ section.label }} in einer festen Reihenfolge.</p>
            <div class="signature">
              <span class="chip">Übersicht</span>
              <span class="chip">Themen</span>
              <span class="chip">Unterseiten</span>
            </div>
          </div>

          <div class="stats-grid">
            <div class="metric">
              <span>Unterseiten</span>
              <strong>{{ section.lessons.length }}</strong>
            </div>
            <div class="metric">
              <span>Status</span>
              <strong>Aktiv</strong>
            </div>
            <div class="metric">
              <span>Typ</span>
              <strong>Basis</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="!isLessonRoute" class="section-grid">
      <article v-for="lesson in section.lessons" :key="lesson.slug" class="card">
        <h3>{{ lesson.title }}</h3>
        <p>{{ lesson.summary }}</p>
        <RouterLink :to="`${section.path}/${lesson.slug}`" class="ghost link-block">Seite öffnen</RouterLink>
      </article>
    </section>

    <section v-if="!isLessonRoute" class="panel">
      <p class="kicker">Nächster Schritt</p>
      <h2>Öffne eine Unterseite, um das Thema im Detail zu lesen.</h2>
    </section>

    <RouterView v-slot="{ Component, route: childRoute }">
      <transition name="route-fade" mode="out-in">
        <component :is="Component" :key="childRoute.fullPath" />
      </transition>
    </RouterView>
  </section>
</template>
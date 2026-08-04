<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { sections } from './data/siteNavigation'

const route = useRoute()

const navigation = sections

const activeSection = computed(() => {
  return navigation.find(
    (section) => route.path === section.path || route.path.startsWith(`${section.path}/`),
  )
})
</script>

<template>
  <div class="app-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>

    <header class="topbar">
      <nav class="nav-bar" aria-label="Primary navigation">
        <RouterLink to="/" class="nav-pill" :class="{ active: route.path === '/' }">
          Startseite
        </RouterLink>

        <div v-for="section in navigation" :key="section.slug" class="nav-dropdown-group">
          <RouterLink :to="section.path" class="nav-pill nav-pill-main" :class="{ active: activeSection?.slug === section.slug }">
            {{ section.label }}
          </RouterLink>

          <div class="nav-dropdown" :aria-label="`Untermenü für ${section.label}`">
            <RouterLink
              :to="section.path"
              class="subnav-pill"
              :class="{ active: route.path === section.path }"
            >
              Übersicht
            </RouterLink>
            <RouterLink
              v-for="lesson in section.lessons"
              :key="lesson.slug"
              :to="`${section.path}/${lesson.slug}`"
              class="subnav-pill"
              :class="{ active: route.path === `${section.path}/${lesson.slug}` }"
            >
              {{ lesson.title }}
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="page-frame">
      <RouterView v-slot="{ Component, route: viewRoute }">
        <transition name="route-fade" mode="out-in">
          <component :is="Component" :key="viewRoute.fullPath" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

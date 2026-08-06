<script setup>
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { sections } from './data/siteNavigation'

const route = useRoute()

const navigation = sections
const menuOpen = ref(false)

const activeSection = computed(() => {
  return navigation.find(
    (section) => route.path === section.path || route.path.startsWith(`${section.path}/`),
  )
})

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="app-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>

    <header class="topbar">
      <div class="topbar-row">
        <RouterLink to="/" class="brand">
          <img class="brand-mark" src="/favicon.ico" alt="" aria-hidden="true" />
          <span>
            <strong>Webseiten Projekt</strong>
            <small>Starter Guide</small>
          </span>
        </RouterLink>

        <div class="topbar-tools">
          <button
            type="button"
            class="burger-button"
            :class="{ open: menuOpen }"
            :aria-expanded="menuOpen"
            aria-controls="mobile-nav"
            aria-label="Navigation umschalten"
            @click="menuOpen = !menuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" class="nav-bar" :class="{ open: menuOpen }" aria-label="Primary navigation">
        <RouterLink to="/" class="nav-pill nav-home" :class="{ active: route.path === '/' }" @click="closeMenu">
          Startseite
        </RouterLink>

        <article v-for="section in navigation" :key="section.slug" class="nav-section">
          <RouterLink
            :to="section.path"
            class="nav-pill nav-section-title"
            :class="{ active: activeSection?.slug === section.slug }"
            @click="closeMenu"
          >
            {{ section.label }}
          </RouterLink>

          <div class="nav-section-items">
            <RouterLink
              v-for="lesson in section.lessons"
              :key="lesson.slug"
              :to="`${section.path}/${lesson.slug}`"
              class="subnav-pill"
              :class="{ active: route.path === `${section.path}/${lesson.slug}` }"
              @click="closeMenu"
            >
              {{ lesson.title }}
            </RouterLink>
          </div>
        </article>
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

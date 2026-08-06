<script setup>
import { RouterLink } from 'vue-router'
import { sections } from '../data/siteNavigation'
</script>

<template>
  <section class="page stack">
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Webseiten Projekt</p>
          <h1>Übersicht</h1>
        </div>
        <div class="hero-aside">
          <div class="panel">
            <h3>Diese Webseite enthält:</h3>
            <div class="stats-grid" style="margin-top: 1rem">
              <div class="metric">
                <span>Rubriken</span>
                <strong>{{ sections.length }}</strong>
              </div>
              <div class="metric">
                <span>Unterseiten</span>
                <strong>{{ sections.reduce((total, section) => total + section.lessons.length, 0) }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="summary-row">
        <div>
          <p class="kicker">Themen</p>
          <h2>Worum es auf dieser Seite geht</h2>
        </div>
        <RouterLink :to="sections[0].path" class="ghost">Erste Seite öffnen</RouterLink>
      </div>
      <div class="section-grid" style="margin-top: 1rem">
        <article v-for="section in sections" :key="section.slug" class="card">
          <h3>{{ section.label }}</h3>
          <p>{{ section.summary }}</p>
          <p style="margin-top: 0.75rem">{{ section.lessons.length }} Unterseiten</p>
        </article>
      </div>

      <div class="panel-note" style="margin-top: 1rem">
        <p>
          Die Inhalte bauen aufeinander auf und führen durch die Grundlagen, damit du eine einfache
          Webseite mit HTML, CSS und JavaScript erstellen kannst.
        </p>
      </div>
    </section>
  </section>
</template>

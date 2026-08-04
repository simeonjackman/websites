<script setup>
import { sections } from '../data/siteNavigation'

const siteHighlights = [
  {
    title: 'Klare Struktur',
    text: 'Die Navigation ist in Themen und Unterseiten gegliedert, damit Inhalte schnell auffindbar bleiben.',
  },
  {
    title: 'Wiederverwendbare Seiten',
    text: 'Einige wenige Views reichen aus, wenn die Inhalte aus einer zentralen Konfiguration kommen.',
  },
  {
    title: 'Frontend-only',
    text: 'Es gibt kein Backend, keine API und keine Ablenkung von den Grundlagen einer Website.',
  },
]

</script>

<template>
  <section class="page stack">
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Frontend-only Starter</p>
          <h1>Einfaches Webprojekt mit klarer Navigation.</h1>
          <p class="lead">
            Diese Vorlage zeigt die Grundbausteine einer Website: Startseite, Themenstruktur und
            einzelne Unterseiten in deutscher Sprache.
          </p>
          <div class="hero-actions">
            <RouterLink :to="sections[0].path" class="cta">Zur ersten Rubrik</RouterLink>
            <RouterLink :to="sections[1].path" class="ghost">Navigation ansehen</RouterLink>
          </div>
        </div>

        <div class="hero-aside">
          <div class="panel">
            <h3>Was diese Vorlage enthält</h3>
            <p>
              Vue 3, Vite, eine zweistufige Navigation und wiederverwendbare Views für die Inhalte.
            </p>
            <div class="signature">
              <span class="chip">Vue 3</span>
              <span class="chip">Vite</span>
              <span class="chip">Vue Router</span>
              <span class="chip">Deutsch</span>
            </div>
          </div>
          <div class="stats-grid">
            <div class="metric">
              <span>Rubriken</span>
              <strong>{{ sections.length }}</strong>
            </div>
            <div class="metric">
              <span>Unterseiten</span>
              <strong>{{ sections.reduce((total, section) => total + section.lessons.length, 0) }}</strong>
            </div>
            <div class="metric">
              <span>Backend</span>
              <strong>0</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-grid">
      <article v-for="item in siteHighlights" :key="item.title" class="card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </section>

    <section class="panel">
      <div class="summary-row">
        <div>
          <p class="kicker">Themen</p>
          <h2>So ist die Navigation aufgebaut</h2>
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

      <div class="panel-note">
        <p>
          Die Seiten bauen aufeinander auf: erst die Rubrik, dann die Unterseiten mit den einzelnen
          Themen.
        </p>
      </div>
    </section>
  </section>
</template>

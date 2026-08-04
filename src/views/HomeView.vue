<script setup>
import CodeExample from '../components/CodeExample.vue'
import { sections } from '../data/siteNavigation'

const htmlExample = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine Webseite</title>
  </head>
  <body>
    <h1>Hallo Welt</h1>
    <p>Dies ist meine erste Webseite.</p>
  </body>
</html>`

</script>

<template>
  <section class="page stack">
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Frontend-only Starter</p>
          <h1>Kurze Einführung in Webseiten und ihren Aufbau.</h1>
          <p class="lead">
            Webseiten bestehen aus sichtbaren Inhalten, Struktur und Gestaltung. Diese Webseite
            dient dazu, eine einfache Webseite mit HTML, CSS und JavaScript zu erstellen und die
            Grundlagen dafür Schritt für Schritt zu erklären.
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
              Eine einfache Lernumgebung mit Seiten zu HTML, CSS, JavaScript und dem Aufbau einer
              kleinen Website.
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

      <div class="panel-note">
        <p>
          Die Inhalte bauen aufeinander auf und führen durch die Grundlagen, damit du eine einfache
          Webseite mit HTML, CSS und JavaScript erstellen kannst.
        </p>
      </div>

      <div style="margin-top: 1rem">
        <CodeExample
          title="Ein einfaches HTML-Grundgerüst"
          language="html"
          :code="htmlExample"
        />
      </div>
    </section>
  </section>
</template>

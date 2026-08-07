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
            <h3>Dieser Webseitenkurs enthält:</h3>
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
      <div class="summary-row">
        <div>
          <h2>Ziele des Projekts</h2>
        </div>
      </div>
      <div class="panel-note">
        <p>
          Durch dieses Projekt entwickeln Sie Ihre Fähigkeiten in Webentwicklung, Projektplanung und
          eigenständigem Arbeiten weiter. Sie erleben den gesamten Entstehungsprozess einer Webseite
          und lernen, eigene Ideen strukturiert und technisch fundiert umzusetzen. Die kontinuierliche
          Dokumentation schult Sie zudem in professioneller Arbeitsweise und Nachvollziehbarkeit
          Ihrer Entwicklungsfortschritte.
        </p>
      </div>
      <div class="summary-row">
        <div>
          <h2>Vorgehensweise</h2>
        </div>
      </div>
      <div class="panel-note">
        <p>
          Im Rahmen dieses Projekts gestalten Sie eigenständig eine Webseite zu einem selbstgewählten
          Thema. Dabei sollen Sie alle Phasen der Webentwicklung durchlaufen – von der Idee und
          Planung über die Umsetzung bis zur Dokumentation und Abgabe. Die Webseite soll verschiedene
          technische und gestalterische Anforderungen erfüllen, die Sie mit Eigeninitiative umsetzen.
        </p>
      </div>
    </section>

    <section class="panel">
      <div class="summary-row">
        <div>
          <p class="kicker">Themen</p>
          <h2>Was Sie lernen werden:</h2>
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
          Die Inhalte bauen aufeinander auf und führen durch die Grundlagen, damit Sie eine einfache
          Webseite mit HTML, CSS und JavaScript erstellen können.
        </p>
      </div>
    </section>
  </section>
</template>

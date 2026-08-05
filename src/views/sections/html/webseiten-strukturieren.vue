<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="webseiten-strukturieren"
    title="Webseiten Strukturieren"
    summary="Bereiche wie Header, Main und Footer sorgen für eine klare Seitenlogik."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kennst die wichtigsten Strukturbereiche einer Seite.</li>
        <li>Du kannst Inhalte in Semantik-Blöcke gruppieren.</li>
        <li>Du weisst, warum Struktur vor Design kommt.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Eine Webseite wirkt nur dann klar, wenn ihre <strong>Struktur</strong>
        stimmt. Header, Main, Footer und weitere Bereiche geben der Seite eine
        Logik, die Besucher und Entwickler gleichermassen schnell verstehen.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="bereiche-mit-aufgabe" title="1. Jeder Bereich hat eine Aufgabe">
        <p>
          Grosse Seiten bestehen aus klar abgegrenzten Bereichen. Werden sie
          gezielt eingesetzt, findet man den Startpunkt und den Inhalt auf den
          ersten Blick.
        </p>
        <ul class="lesson-list">
          <li>Jeder Bereich sollte eine Aufgabe haben.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="inhalte-gruppieren" title="2. Artikel und Sektionen gruppieren Inhalte">
        <p>
          <code>section</code> und <code>article</code> helfen dabei, den Inhalt
          thematisch zu gruppieren. So bleibt die Seite übersichtlich, auch wenn
          sie wächst.
        </p>
        <ul class="lesson-list">
          <li>Artikel und Sektionen helfen beim Gruppieren von Inhalten.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="struktur-vor-design" title="3. Struktur ist wichtiger als Dekoration">
        <p>
          Bevor du dich um Farben und Abstände kümmerst, ist die Grundstruktur
          entscheidend. Sie trägt die ganze Seite und erleichtert jede spätere
          Anpassung.
        </p>
        <ul class="lesson-list">
          <li>Struktur ist wichtiger als visuelle Dekoration.</li>
        </ul>
        <CodeExample
          title="Eine semantische Seitenstruktur"
          language="html"
          filename="seite.html"
          :code="`<header>\n    <!-- Kopfbereich mit Titel oder Navigation -->\n    <h1>Meine Seite</h1>\n</header>\n\n<main>\n    <section>\n        <h2>Über mich</h2>\n        <p>Ein kurzer Absatz über mich.</p>\n    </section>\n\n    <article>\n        <h2>Neuester Beitrag</h2>\n        <p>Inhalt des Beitrags.</p>\n    </article>\n</main>\n\n<footer>\n    <p>Kontakt und Impressum</p>\n</footer>`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Header, Main und Footer strukturieren die Seite.</li>
        <li>Artikel und Sektionen gruppieren Inhalte.</li>
        <li>Gute Struktur erleichtert die spätere Arbeit.</li>
      </ul>
      <p class="lesson-tip">Erst die Struktur, dann das Design.</p>
    </template>

    <template #exercise>
      <p>
        Baue eine kleine Seite mit <code>header</code>, <code>main</code>,
        einer <code>section</code> und einem <code>footer</code>. Verwende dafür
        ausschliesslich semantische Tags ohne Styling.
      </p>
    </template>
  </LessonScaffold>
</template>
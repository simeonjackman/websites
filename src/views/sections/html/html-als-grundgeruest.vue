<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'

const vollstaendigesGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Projekt</title>
</head>
<body>
    <!-- Hier beginnt der sichtbare Inhalt -->
    <h1>Meine Seite</h1>
    <p>Ich starte gerade mit HTML.</p>
</body>
</html>`

const deinGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Übung</title>
</head>
<body>
    <!-- Inhalt folgt -->
    <h1>Meine Seite</h1>
    <p>Ein erster Absatz.</p>
    <p>Ein zweiter Absatz.</p>
    <p>Ein dritter Absatz.</p>
</body>
</html>`
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="html-als-grundgeruest"
    title="HTML als Grundgerüst"
    summary="HTML strukturiert Inhalte und gibt dem Browser eine klare Bedeutungsebene."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du weisst, wofür HTML zuständig ist.</li>
        <li>Du kennst die wichtigsten Grundbausteine.</li>
        <li>Du kannst ein HTML5-Grundgerüst schreiben.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        HTML ist die Sprache, die einer Webseite die <strong>Struktur</strong>
        gibt. Mit Tags beschreibt es Inhalte wie Überschriften, Absätze und
        Listen – für den Browser, für Leserinnen und für Hilfstechnologien.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="tags-geben-bedeutung" title="1. Tags geben Inhalten Bedeutung">
        <p>
          Tags markieren, was ein Inhalt ist. Dadurch weiss der Browser, dass
          eine Zeile eine Überschrift ist und ein anderer Bereich eine Liste.
        </p>
        <ul class="lesson-list">
          <li>Überschriften, Absätze und Listen strukturieren Inhalte.</li>
          <li>Semantische Tags helfen beim Lesen und bei der Barrierefreiheit.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="wichtige-bausteine" title="2. Die wichtigsten Bausteine">
        <p>
          Einige Tags kommen in fast jeder Seite vor. Sie bilden das Grundgerüst,
          auf dem alles Weitere aufbaut.
        </p>
        <ul class="lesson-list">
          <li><code>html</code> umschliesst das ganze Dokument.</li>
          <li><code>head</code> enthält Metadaten zur Seite.</li>
          <li><code>body</code> enthält den sichtbaren Inhalt.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="basis-fuer-css-js" title="3. Die Basis für CSS und JavaScript">
        <p>
          HTML steht am Anfang jeder Webseite. CSS und JavaScript bauen darauf
          auf und erweitern die Struktur um Aussehen und Verhalten.
        </p>
        <ul class="lesson-list">
          <li>HTML ist die Basis, auf der CSS und JavaScript aufbauen.</li>
        </ul>
        <CodeExample
          title="Ein vollständiges HTML5-Grundgerüst"
          language="html"
          filename="index.html"
          :code="vollstaendigesGrundgeruest"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>HTML beschreibt die Bedeutung des Inhalts.</li>
        <li>Semantische Tags verbessern Lesbarkeit und Barrierefreiheit.</li>
        <li>CSS und JavaScript bauen auf HTML auf.</li>
      </ul>
      <p class="lesson-tip">Gute HTML-Struktur macht spätere Pflege einfacher.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle ein eigenes HTML5-Grundgerüst mit einem Titel, einer Überschrift
        und drei Absätzen. Speichere es als <code>index.html</code>.
      </p>
      <CodeExample
        title="Dein Grundgerüst"
        language="html"
        filename="index.html"
        :code="deinGrundgeruest"
      />
    </template>
  </LessonScaffold>
</template>
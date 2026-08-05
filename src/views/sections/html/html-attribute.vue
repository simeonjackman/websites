<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'

const gaengigeAttribute = `<!-- Verknüpfen mit einem Link -->
<a href="https://example.com">Besuche uns</a>

<!-- Bild einbinden und beschreiben -->
<img src="bild.jpg" alt="Ein beschreibender Text">

<!-- Elemente für CSS markieren -->
<div class="karte">Inhalt</div>
<p id="einleitung">Intro</p>`

const deineUebung = `<p class="einfuehrung">
    Kennst du <a href="https://developer.mozilla.org">MDN</a>?
</p>
<img src="logo.png" alt="Logo des Projekts">`
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="html-attribute"
    title="HTML Attribute"
    summary="Attribute ergänzen Tags um zusätzliche Informationen oder Verhalten."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du weisst, wie Attribute aufgebaut sind.</li>
        <li>Du kennst die wichtigsten Attribute für Links und Bilder.</li>
        <li>Du kannst mit <code>class</code> und <code>id</code> arbeiten.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Attribute stehen innerhalb der öffnenden Tags und liefern zusätzliche
        Informationen. Mal verknüpfen sie Inhalte, mal verbinden sie HTML mit
        CSS – und sie verbessern die Zugänglichkeit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="aufbau-von-attribute" title="1. Wie Attribute aufgebaut sind">
        <p>
          Ein Attribut besteht aus einem Namen, einem Gleichheitszeichen und
          einem in Anführungszeichen gesetzten Wert.
        </p>
        <ul class="lesson-list">
          <li>Das Attribut <code>class</code> verbindet HTML und CSS.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="wichtige-attribute" title="2. Links, Bilder und Beschreibungen">
        <p>
          Viele Attribute verbinden die Seite mit externen Inhalten oder
          beschreiben sie genauer.
        </p>
        <ul class="lesson-list">
          <li>Mit <code>href</code>, <code>src</code> und <code>alt</code> werden Inhalte verknüpft und beschrieben.</li>
        </ul>
        <CodeExample
          title="Gängige Attribute im Einsatz"
          language="html"
          filename="beispiel.html"
          :code="gaengigeAttribute"
        />
      </LessonStep>

      <LessonStep slug="saubere-attribute" title="3. Knapp und sinnvoll einsetzen">
        <p>
          Gute Attribute sind kurz, sprechend und werden nur dort verwendet, wo
          sie nötig sind.
        </p>
        <ul class="lesson-list">
          <li>Saubere Attribute verbessern Lesbarkeit und Zugänglichkeit.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Attribute ergänzen Tags um Informationen.</li>
        <li><code>href</code>, <code>src</code> und <code>alt</code> verknüpfen und beschreiben Inhalte.</li>
        <li><code>class</code> und <code>id</code> verbinden HTML mit Styling.</li>
      </ul>
      <p class="lesson-tip">Attribute sollten knapp und sinnvoll eingesetzt werden.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle einen Absatz mit einem Link und einem Bild. Füge dem Bild einen
        aussagekräftigen <code>alt</code>-Text und dem Absatz eine
        <code>class</code> hinzu.
      </p>
      <CodeExample
        title="Deine Übung"
        language="html"
        filename="uebung.html"
        :code="deineUebung"
      />
    </template>
  </LessonScaffold>
</template>
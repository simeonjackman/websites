<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="verwendung-von-ki"
    lesson-slug="umgang-mit-fehlern"
    title="Umgang mit Fehlern"
    summary="Fehler sind normal und oft der beste Weg, Code wirklich zu verstehen."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du liest <Term term="Fehlermeldungen" def="Hinweisnachrichten vom Programm, die dir sagen, wo und warum etwas schiefgelaufen ist." /> Schritt für Schritt.</li>
        <li>Du änderst nur eine Sache pro Versuch.</li>
        <li>Du nutzt Tests und die Browser-<Term term="Entwicklertools" def="Werkzeuge im Browser, die dir beim Untersuchen und Beheben von Fehlern im Code helfen." /> zum Prüfen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Fehlermeldungen sind keine Niederlage, sondern Hinweise. Wer sie
        systematisch angeht, findet Fehler schneller – und versteht dabei, wie
        der eigene Code eigentlich funktioniert.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="fehlermeldung-lesen" title="Die Fehlermeldung genau lesen">
        <p>
          Fast jede Meldung sagt dir, wo das Problem liegt: Zeilennummer,
          betroffene Datei und eine Beschreibung. Notiere dir, was du siehst,
          bevor du etwas änderst.
        </p>
        <CodeExample
          title="Eine Fehlermeldung im Blick"
          language="text"
          filename="fehler.txt"
          :code="`style.css: Zeile 12, Spalte 5\nUnerwartetes Zeichen '}'\n→ Prüfe die Zeile vor der Meldung,\n  vermutlich fehlt eine geschweifte Klammer.`"
        />
      </LessonStep>

      <LessonStep slug="eine-aenderung-pro-versuch" title="Nur eine Sache pro Versuch ändern">
        <p>
          Änderst du mehrere Dinge gleichzeitig, weisst du danach nicht, welche
          Änderung den Fehler behoben hat. Führe jede Änderung einzeln aus und
          teste direkt danach.
        </p>
        <CodeExample
          title="Eine kurze Check-Liste"
          language="text"
          filename="checkliste.txt"
          :code="`1. Fehler genau beschreiben.\n2. Verdacht notieren.\n3. Eine einzige Änderung vornehmen.\n4. Testen.\n5. Ist der Fehler weg?\n   → Ja: weiterarbeiten. Nein: Schritt 2 erneut.`"
        />
      </LessonStep>

      <LessonStep slug="werkzeuge-nutzen" title="Tests und Entwicklertools nutzen">
        <p>
          Die Entwicklertools im Browser zeigen dir zum Beispiel, welche Styles
          auf ein Element wirken und welche Netzwerk-Anfragen fehlschlagen.
          Automatische Tests prüfen dein Verhalten zusätzlich ab.
        </p>
        <ul class="lesson-list">
          <li>Öffne die Entwicklertools mit der Taste <strong>F12</strong>.</li>
          <li>Prüfe Elemente, Konsole und Netzwerk-Tab.</li>
          <li>Kleiner Test: Ändere eine Style-Eigenschaft und beobachte das Ergebnis.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Lies Fehlermeldungen Schritt für Schritt.</li>
        <li>Ändere nur eine Sache pro Versuch.</li>
        <li>Nutze Tests und Browser-Entwicklertools zum Prüfen.</li>
      </ul>
      <p class="lesson-tip">Probleme werden kleiner, wenn du sie systematisch eingrenzt.</p>
    </template>

    <template #exercise>
      <p>
        Richte in deinem Projekt einen bewussten Fehler ein – etwa eine offene
        Klammer im CSS. Finde ihn anschliessend mithilfe der Check-Liste und
        der Entwicklertools wieder. Beschreibe in einem Satz, was dir beim
        Auffinden geholfen hat.
      </p>
    </template>
  </LessonScaffold>
</template>
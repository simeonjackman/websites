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
        <li>Sie lesen <Term term="Fehlermeldungen" def="Hinweisnachrichten vom Programm, die Ihnen sagen, wo und warum etwas schiefgelaufen ist." /> Schritt für Schritt.</li>
        <li>Sie ändern nur eine Sache pro Versuch.</li>
        <li>Sie nutzen Tests und die Browser-<Term term="Entwicklertools" def="Werkzeuge im Browser, die Ihnen beim Untersuchen und Beheben von Fehlern im Code helfen." /> zum Prüfen.</li>
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
          Fast jede Meldung sagt Ihnen, wo das Problem liegt: Zeilennummer,
          betroffene Datei und eine Beschreibung. Notieren Sie sich, was Sie sehen,
          bevor Sie etwas ändern.
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
          Ändern Sie mehrere Dinge gleichzeitig, wissen Sie danach nicht, welche
          Änderung den Fehler behoben hat. Führen Sie jede Änderung einzeln aus und
          testen Sie direkt danach.
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
          Die Entwicklertools im Browser zeigen Ihnen zum Beispiel, welche Styles
          auf ein Element wirken und welche Netzwerk-Anfragen fehlschlagen.
          Automatische Tests prüfen Ihr Verhalten zusätzlich ab.
        </p>
        <ul class="lesson-list">
          <li>Öffnen Sie die Entwicklertools mit der Taste <strong>F12</strong>.</li>
          <li>Prüfen Sie Elemente, Konsole und Netzwerk-Tab.</li>
          <li>Kleiner Test: Ändern Sie eine Style-Eigenschaft und beobachten Sie das Ergebnis.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Lesen Sie Fehlermeldungen Schritt für Schritt.</li>
        <li>Ändern Sie nur eine Sache pro Versuch.</li>
        <li>Nutzen Sie Tests und Browser-Entwicklertools zum Prüfen.</li>
      </ul>
      <p class="lesson-tip">Probleme werden kleiner, wenn Sie sie systematisch eingrenzen.</p>
    </template>

    <template #exercise>
      <p>
        Richten Sie in Ihrem Projekt einen bewussten Fehler ein – etwa eine offene
        Klammer im CSS. Finden Sie ihn anschliessend mithilfe der Check-Liste und
        der Entwicklertools wieder. Beschreiben Sie in einem Satz, was Ihnen beim
        Auffinden geholfen hat.
      </p>
    </template>
  </LessonScaffold>
</template>
<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="verwendung-von-ki"
    lesson-slug="grundprinzip"
    title="Grundprinzip"
    summary="KI ist ein Werkzeug für Vorschläge, Erklärungen und Routineaufgaben."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du formulierst klare Fragen an ein <Term term="KI" def="Künstliche Intelligenz, ein Programm, das dir Texte und Code-Vorschläge liefert." />-Tool.</li>
        <li>Du prüfst und passt Vorschläge an.</li>
        <li>Du behältst das Ziel eines verständlichen eigenen Codes im Blick.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        KI-Chattools antworten schnell – aber nicht immer genau. Deshalb gilt
        für den Einsatz in deinem Projekt ein einfaches Grundprinzip: Du gibst
        den Rahmen vor, die KI schlägt vor, und du entscheidest.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="klar-fragen-stellen" title="Klare Fragen stellen">
        <p>
          Je konkreter deine Frage ist, desto brauchbarer ist die Antwort.
          Erwähne Sprache, Ziel und Kontext – so bleibt der Vorschlag klein
          genug, damit du ihn wirklich verstehst.
        </p>
        <CodeExample
          title="Eine gut formulierte Anfrage"
          language="text"
          filename="prompt.txt"
          :code="`Ich lerne gerade HTML und CSS.\nErkläre mir kurz, was der Unterschied zwischen\npadding und margin ist.\nNenne ein Beispiel, das ich in ein Stylesheet\nkopieren kann.`"
        />
      </LessonStep>

      <LessonStep slug="nachfragen-statt-akzeptieren" title="Nachfragen statt einfach übernehmen">
        <p>
          Eine einzelne Antwort reicht selten. Stelle eine Rückfrage, wenn dir
          etwas unklar ist – so entsteht ein Gespräch, aus dem du tatsächlich
          etwas lernst.
        </p>
        <CodeExample
          title="Eine klärende Rückfrage"
          language="text"
          filename="prompt.txt"
          :code="`Ich habe den Vorschlag mit padding und margin\nnoch nicht ganz verstanden.\nZeig mir denselben Effekt einmal mit nur\nmargin und einmal mit nur padding,\ndamit ich den Unterschied sehe.`"
        />
      </LessonStep>

      <LessonStep slug="vorschlaege-pruefen" title="Vorschläge prüfen und anpassen">
        <p>
          Prüfe jede Antwort auf Verständlichkeit und Richtigkeit. Passe die
          Vorschläge an deinen eigenen Stil an und ersetze nichts, was du nicht
          erklären kannst.
        </p>
        <ul class="lesson-list">
          <li>Verstehst du jede Zeile des Vorschlags?</li>
          <li>Passt der Vorschlag zu deinem Projekt?</li>
          <li>Kannst du die Antwort in eigenen Worten wiedergeben?</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Gute Ergebnisse entstehen durch klare Fragen.</li>
        <li>Vorschläge müssen geprüft und angepasst werden.</li>
        <li>Das Ziel bleibt immer ein verständlicher eigener Code.</li>
      </ul>
      <p class="lesson-tip">KI unterstützt, sie übernimmt nicht die Verantwortung.</p>
    </template>

    <template #exercise>
      <p>
        Schreibe eine Anfrage zu einem Thema aus deinem aktuellen Projekt und
        formuliere dazu eine klärende Rückfrage. Übernimm nichts aus der
        Antwort, bevor du es nicht selbst nachvollzogen hast.
      </p>
    </template>
  </LessonScaffold>
</template>
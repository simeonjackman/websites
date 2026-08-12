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
        <li>Sie formulieren klare Fragen an ein <Term term="KI" def="Künstliche Intelligenz, ein Programm, das Ihnen Texte und Code-Vorschläge liefert." />-Tool.</li>
        <li>Sie prüfen und passen Vorschläge an.</li>
        <li>Sie behalten das Ziel eines verständlichen eigenen Codes im Blick.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        KI-Chattools antworten schnell – aber nicht immer genau. Deshalb gilt
        für den Einsatz in Ihrem Projekt ein einfaches Grundprinzip: Sie geben
        den Rahmen vor, die KI schlägt vor, und Sie entscheiden.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="klar-fragen-stellen" title="Klare Fragen stellen">
        <p>
          Je konkreter Ihre Frage ist, desto brauchbarer ist die Antwort.
          Erwähnen Sie Sprache, Ziel und Kontext – so bleibt der Vorschlag klein
          genug, damit Sie ihn wirklich verstehen.
        </p>
         <ul class="lesson-list">
          <li>Bereiten Sie eine <strong>kleine Auswahl</strong> Ihres Codes vor und fügen Sie sie in die Anfrage ein.</li>
          <li>Stellen Sie eine konkrete Frage genau zu diesem Stück Code.</li>
          <li>So bleibt die Antwort auf Ihren Ausschnitt bezogen und Sie können den Vorschlag sofort prüfen.</li>
        </ul>
        <CodeExample
          title="Eine gut formulierte Anfrage"
          language="text"
          filename="prompt.txt"
          :code="`Ich lerne gerade HTML und CSS.\nErklären Sie mir kurz, was der Unterschied zwischen\npadding und margin ist.\nNennen Sie ein Beispiel, das ich in ein Stylesheet\nkopieren kann.`"
        />
      </LessonStep>

      <LessonStep slug="nachfragen-statt-akzeptieren" title="Nachfragen statt einfach übernehmen">
        <p>
          Eine einzelne Antwort reicht selten. Stellen Sie eine Rückfrage, wenn Ihnen
          etwas unklar ist – so entsteht ein Gespräch, aus dem Sie tatsächlich
          etwas lernen.
        </p>
        <CodeExample
          title="Eine klärende Rückfrage"
          language="text"
          filename="prompt.txt"
          :code="`Ich habe den Vorschlag mit padding und margin\nnoch nicht ganz verstanden.\nZeigen Sie mir denselben Effekt einmal mit nur\nmargin und einmal mit nur padding,\ndamit ich den Unterschied sehe.`"
        />
      </LessonStep>

      <LessonStep slug="vorschlaege-pruefen" title="Vorschläge prüfen und anpassen">
        <p>
          Prüfen Sie jede Antwort auf Verständlichkeit und Richtigkeit. Passen Sie die
          Vorschläge an Ihren eigenen Stil an und ersetzen Sie nichts, was Sie nicht
          erklären können.
        </p>
        <ul class="lesson-list">
          <li>Verstehen Sie jede Zeile des Vorschlags?</li>
          <li>Passt der Vorschlag zu Ihrem Projekt?</li>
          <li>Können Sie die Antwort in eigenen Worten wiedergeben?</li>
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
        Schreiben Sie eine Anfrage zu einem Thema aus Ihrem aktuellen Projekt und
        formulieren Sie dazu eine klärende Rückfrage. Übernehmen Sie nichts aus der
        Antwort, bevor Sie es nicht selbst nachvollzogen haben.
      </p>
    </template>
  </LessonScaffold>
</template>
<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="verwendung-von-ki"
    lesson-slug="deklaration-von-eigenleistung"
    title="Deklaration von Eigenleistung"
    summary="Es muss nachvollziehbar bleiben, was selbst erarbeitet wurde und was von KI stammt."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kennzeichnest fremde Hilfe transparent.</li>
        <li>Du dokumentierst, welche Teile du angepasst hast.</li>
        <li>Du kannst Ergebnisse aus KI-Vorschlägen erklären.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        KI gehört zu den Werkzeugen, die du in deinem Projekt einsetzen darfst –
        vorausgesetzt, es bleibt klar, was du selbst geleistet hast. Eine
        ehrliche Kennzeichnung schützt dich und deine Arbeit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="fremdes-kennzeichnen" title="1. Fremdes klar kennzeichnen">
        <p>
          Jeder Teil, der nicht vollständig von dir stammt, sollte erkennbar
          sein. Dafür reicht eine kurze Notiz an der richtigen Stelle – etwa als
          Kommentar in der Datei.
        </p>
        <CodeExample
          title="Kennzeichnung als Kommentar"
          language="text"
          filename="deklaration.txt"
          :code="`// Dieses CSS-Grundgerüst stammt von einem KI-Chat.\n// Ich habe Abstände und Farben selbst angepasst.\n// Quelle: ChatGPT, Anfrage vom 12. April.`"
        />
      </LessonStep>

      <LessonStep slug="eigene-leistung-dokumentieren" title="2. Deine eigene Leistung sichtbar machen">
        <p>
          Dokumentiere, welche Teile du verändert hast und warum. So zeigt dein
          Projekt nicht nur das Ergebnis, sondern auch dein Verständnis.
        </p>
        <CodeExample
          title="Eigene Anpassungen notieren"
          language="text"
          filename="deklaration.txt"
          :code="`Dokumentation der Eigenleistung\n\n- Aufbau der Sektion selbst erstellt.\n- Grid-Layout selbst umgesetzt.\n- KI-Vorschlag für die Kartenabstände\n  übernommen und an meinen Stil angepasst.`"
        />
      </LessonStep>

      <LessonStep slug="ergebnisse-erklaeren" title="3. Ergebnisse erklären können">
        <p>
          Eigenleistung heisst auch, dass du deine Abgabe erklären kannst. Ein
          guter Test: Beschreibe deiner Lehrperson, wie ein schwieriger Teil
          deiner Lösung funktioniert – ganz ohne Hilfsmittel.
        </p>
        <ul class="lesson-list">
          <li>Warum hast du diese Lösung gewählt?</li>
          <li>Welchen Teil hast du selbst geschrieben?</li>
          <li>Was hast du aus dem KI-Vorschlag gelernt?</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Kennzeichne fremde Hilfe transparent.</li>
        <li>Dokumentiere, welche Teile du angepasst hast.</li>
        <li>Eigenleistung bedeutet auch, Ergebnisse erklären zu können.</li>
      </ul>
      <p class="lesson-tip">Saubere Kennzeichnung schützt vor Missverständnissen.</p>
    </template>

    <template #exercise>
      <p>
        Lege für dein aktuelles Projekt eine Datei <code>deklaration.txt</code> an und
        halte darin fest, welche Teile du selbst erarbeitet hast und welche aus
        KI-Vorschlägen stammen.
      </p>
    </template>
  </LessonScaffold>
</template>
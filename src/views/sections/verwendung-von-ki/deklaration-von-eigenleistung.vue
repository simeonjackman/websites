<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
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
        <li>Sie kennzeichnen fremde Hilfe transparent.</li>
        <li>Sie dokumentieren, welche Teile Sie angepasst haben.</li>
        <li>Sie können Ergebnisse aus KI-Vorschlägen erklären.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        <Term term="KI" def="Künstliche Intelligenz, ein Programm, das Ihnen Texte und Code-Vorschläge liefert." /> gehört zu den Werkzeugen, die Sie in Ihrem Projekt einsetzen dürfen –
        vorausgesetzt, es bleibt klar, was Sie selbst geleistet haben. Eine
        ehrliche Kennzeichnung schützt Sie und Ihre Arbeit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="fremdes-kennzeichnen" title="Fremdes klar kennzeichnen">
        <p>
          Jeder Teil, der nicht vollständig von Ihnen stammt, sollte erkennbar
          sein. Dafür reicht eine kurze Notiz an der richtigen Stelle – etwa als <Term term="Kommentar" def="Eine kurze Notiz im Code zum Erklären, die das Programm selbst nicht ausführt." /> in der Datei.
        </p>
        <CodeExample
          title="Kennzeichnung als Kommentar"
          language="text"
          filename="deklaration.txt"
          :code="`// Dieses CSS-Grundgerüst stammt von einem KI-Chat.\n// Ich habe Abstände und Farben selbst angepasst.\n// Quelle: ChatGPT, Anfrage vom 12. April.`"
        />
      </LessonStep>

      <LessonStep slug="eigene-leistung-dokumentieren" title="Ihre eigene Leistung sichtbar machen">
        <p>
          Dokumentieren Sie, welche Teile Sie verändert haben und warum. So zeigt Ihr
          Projekt nicht nur das Ergebnis, sondern auch Ihr Verständnis.
        </p>
        <CodeExample
          title="Eigene Anpassungen notieren"
          language="text"
          filename="deklaration.txt"
          :code="`Dokumentation der Eigenleistung\n\n- Aufbau der Sektion selbst erstellt.\n- Grid-Layout selbst umgesetzt.\n- KI-Vorschlag für die Kartenabstände\n  übernommen und an meinen Stil angepasst.`"
        />
      </LessonStep>

      <LessonStep slug="ergebnisse-erklaeren" title="Ergebnisse erklären können">
        <p>
          <Term term="Eigenleistung" def="Der Anteil Ihrer Arbeit, den Sie selbst erstellt und wirklich verstanden haben." /> heisst auch, dass Sie Ihre Abgabe erklären können. Ein
          guter Test: Beschreiben Sie Ihrer Lehrperson, wie ein schwieriger Teil
          Ihrer Lösung funktioniert – ganz ohne Hilfsmittel.
        </p>
        <ul class="lesson-list">
          <li>Warum haben Sie diese Lösung gewählt?</li>
          <li>Welchen Teil haben Sie selbst geschrieben?</li>
          <li>Was haben Sie aus dem KI-Vorschlag gelernt?</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Kennzeichnen Sie fremde Hilfe transparent.</li>
        <li>Dokumentieren Sie, welche Teile Sie angepasst haben.</li>
        <li>Eigenleistung bedeutet auch, Ergebnisse erklären zu können.</li>
      </ul>
      <p class="lesson-tip">Saubere Kennzeichnung schützt vor Missverständnissen.</p>
    </template>

    <template #exercise>
      <p>
        Legen Sie für Ihr aktuelles Projekt eine Datei <code>deklaration.txt</code> an und
        halten Sie darin fest, welche Teile Sie selbst erarbeitet haben und welche aus
        KI-Vorschlägen stammen.
      </p>
    </template>
  </LessonScaffold>
</template>
<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="git"
    lesson-slug="haeufige-fehler"
    title="Häufige Fehler"
    summary="Typische Git-Fehler entstehen durch fehlende Ordnung oder unklare Abläufe."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie erkennen häufige Git-Fehler frühzeitig.</li>
        <li>Sie wissen, wie sie diese Fehler in VS Code vermeident.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Git wirkt auf den ersten Blick kompliziert – die meisten Probleme
        entstehen aber durch fehlende Ordnung oder unklare Abläufe. Dieses
        Kapitel zeigt die typischen Stolpersteine und wie du sie in VS Code
        umgehst.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="zu-grosse-commits" title="Zu grosse Änderungen in einem Commit">
        <p>
          Wenn ein <Term term="Commit" def="Ein gespeicherter Zwischenstand deines Projekts mit einer erklärenden Nachricht." /> viele unzusammenhängende Änderungen enthält, ist die
          <Term term="Versionsgeschichte" def="Der vollständige Verlauf aller gespeicherten Änderungen und Versionen eines Projekts." /> schwer zu lesen und Fehler sind kaum noch zu finden.
        </p>
        <p>
          In der Versionskontrolle von VS Code bereitest du deshalb nur die
          Dateien vor, die zusammengehören – mit dem <strong>+</strong>-Symbol
          neben der jeweiligen Datei. So bleibt jeder Commit klein und
          übersichtlich.
        </p>
        <ul class="lesson-list">
          <li>Zu grosse Commits machen die Suche nach Änderungen schwer.</li>
          <li>Bereite nur zusammengehörige Dateien vor.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="commit-ohne-nachricht" title="Ein Commit ohne Nachricht">
        <p>
          In VS Code kannst du einen Commit nicht ohne Nachricht bestätigen –
          das Feld bleibt leer und der Commit-Button zeigt dir, dass du zuerst
          etwas schreiben musst. Das ist Absicht: Ein
          <Term term="Commit" def="Ein gespeicherter Zwischenstand deines Projekts mit einer erklärenden Nachricht." /> ohne Beschreibung erzählt später niemandem, was passiert ist.
        </p>
        <ul class="lesson-list">
          <li>Schreibe immer eine kurze, klare Commit-Nachricht.</li>
          <li>Beschreibe, was du gemacht hast – und warum.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="leerer-commit" title="Was passiert bei einem leeren Commit?">
        <p>
          Hast du vergessen, Änderungen vorzubereiten, und versuchst trotzdem zu
          committen, antwortet Git: Es gibt nichts zu speichern. In VS Code siehst
          du im Quellcode-Bereich, dass keine Änderungen bereitgestellt sind –
          im Terminal erscheint eine Meldung wie diese:
        </p>
        <CodeExample
          title="Git hat nichts zu speichern"
          language="bash"
          filename="Terminal"
          :code="`git commit\n# nothing to commit, working tree clean`"
        />
        <p>
          Prüfe deshalb vor jedem Commit, welche Dateien bereitgestellt sind.
          Erscheint eine Datei unerwartet nicht in der Liste, hast du sie
          vermutlich nicht mit <strong>+</strong> vorbereitet.
        </p>
        <ul class="lesson-list">
          <li>Ohne vorbereitete Änderungen gibt es keinen Commit.</li>
          <li>Kontrolliere die Liste der bereitgestellten Dateien.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="vergessene-dateien" title="Vergessene Dateien">
        <p>
          Dateien, die du nicht mit dem <strong>+</strong>-Symbol vorbereitest,
          fehlen im Commit. Das führt schnell zu inkonsistenten Ständen – die
          eine Hälfte der Änderung ist gespeichert, die andere nicht.
        </p>
        <CodeExample
          title="Vor dem Commit: aktuellen Stand prüfen"
          language="bash"
          filename="Terminal"
          :code="`git status\n# zeigt, welche Dateien bereitgestellt sind`"
        />
        <p>
          Tipp: Nach dem Vorbereiten zählt die Versionskontrolle in VS Code die
          bereitgestellten Dateien. Stimmt die Zahl nicht, fehlt etwas.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Halte Commits klein und überschaubar.</li>
        <li>Eine Commit-Nachricht ist Pflicht und hilft später.</li>
        <li>Prüfe mit `git status`, ob alle Dateien dabei sind.</li>
      </ul>
      <p class="lesson-tip">Regelmässiges Speichern und Committen reduziert Stress.</p>
    </template>

  </LessonScaffold>
</template>

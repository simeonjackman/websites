<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'

const commitMitNachricht = `git commit -m "Fuege Startseite mit Kontaktformular hinzu"`

const ersterCommit = `git init
# eine Datei anlegen und speichern
git add .
git commit -m "Erste Datei im Projekt"`
</script>

<template>
  <LessonScaffold
    section-slug="git"
    lesson-slug="commits"
    title="Commits"
    summary="Ein Commit beschreibt einen klaren Zustand mit einer passenden Nachricht."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du weisst, was ein Commit ist.</li>
        <li>Du kannst einen Commit erstellen.</li>
        <li>Du weisst, worauf es bei Commit-Nachrichten ankommt.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Ein <strong>Commit</strong> ist ein gespeicherter Zwischenstand deines
        Projekts. Er gehört zu einer verständlichen Nachricht und bildet die
        Grundlage dafür, später sicher zurückspringen zu können.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="repository-erstellen" title="1. Ein Repository anlegen">
        <p>
          Zuerst erstellst du ein Repository. Es verwaltet die gesamte
          Versionsgeschichte deines Projekts.
        </p>
        <CodeExample
          title="Ein neues Git-Repository"
          language="bash"
          filename="Terminal"
          :code="`git init`"
        />
      </LessonStep>

      <LessonStep slug="aenderungen-hinzufuegen" title="2. Änderungen zum Commit vorbereiten">
        <p>
          Bevor du einen Commit erstellst, wählst du aus, welche Dateien
          aufgenommen werden sollen. Kleine, zusammenhängende Änderungen machen
          die Historie leicht lesbar.
        </p>
        <ul class="lesson-list">
          <li>Kleine Commits sind leichter zu lesen.</li>
          <li>Ein Commit ist kein Sammelbecken für unklare Zwischenstände.</li>
        </ul>
        <CodeExample
          title="Dateien bereitstellen"
          language="bash"
          filename="Terminal"
          :code="`git add .`"
        />
      </LessonStep>

      <LessonStep slug="commit-erstellen" title="3. Den Commit abschliessen">
        <p>
          Jetzt wird der Stand mit einer Nachricht gespeichert. Die Nachricht
          sollte erklären, was und warum geändert wurde – nicht wie.
        </p>
        <ul class="lesson-list">
          <li>Die Nachricht sollte erklären, was und warum geändert wurde.</li>
        </ul>
        <CodeExample
          title="Einen Commit erstellen"
          language="bash"
          filename="Terminal"
          :code="commitMitNachricht"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Ein Commit beschreibt einen klaren, nachvollziehbaren Zustand.</li>
        <li>Kleine Commits sind leichter zu lesen.</li>
        <li>Die Nachricht erklärt, was und warum geändert wurde.</li>
      </ul>
      <p class="lesson-tip">Beschreibe Commit-Nachrichten so, dass du sie später noch verstehst.</p>
    </template>

    <template #exercise>
      <p>
        Lege ein neues Repository an, erstelle eine kleine Datei und mache
        deinen ersten Commit mit einer passenden Nachricht.
      </p>
      <CodeExample
        title="Dein erster Commit"
        language="bash"
        filename="Terminal"
        :code="ersterCommit"
      />
    </template>
  </LessonScaffold>
</template>
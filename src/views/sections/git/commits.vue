<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'

const ersterCommit = `git init
# eine Datei anlegen und speichern
git add .
git commit -m "Erste Datei im Projekt"`

const indexHtml = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Mein erstes Git-Projekt</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hallo Git</h1>
    <p>Diese Datei wurde in einem leeren Repository erstellt.</p>
</body>
</html>`

const styleCss = `h1 {
    color: #2f6fdb;
}`
</script>

<template>
  <LessonScaffold
    section-slug="git"
    lesson-slug="commits"
    title="Commits"
    summary="Ein Commit beschreibt einen klaren Zustand mit einer passenden Nachricht – von der leeren Datei bis zur gespeicherten Version."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kannst ein leeres Repository anlegen.</li>
        <li>Du kannst von Hand eine HTML-Datei darin erstellen.</li>
        <li>Du kannst Dateien mit <code>git add</code> und <code>git commit</code> speichern.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Ein <Term term="Commit" def="Ein gespeicherter Zwischenstand deines Projekts mit einer erklärenden Nachricht." /> ist
        ein gespeicherter Zwischenstand deines Projekts. In diesem Kapitel baust du
        ein Projekt von ganz vorne auf: vom leeren Ordner bis zum ersten Commit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="leeres-repository" title="Ein leeres Repository anlegen">
        <p>
          Erstelle einen neuen Ordner für dein Projekt und initialisiere ihn als
          <Term term="Repository" def="Der verwaltete Projektordner, in dem Git deine Versionsgeschichte speichert." />.
          Danach ist dein Projekt bereit, Dateien zu übernehmen.
        </p>
        <CodeExample
          title="Repository starten"
          language="bash"
          filename="Terminal"
          :code="`mkdir mein-projekt\ncd mein-projekt\ngit init`"
        />
      </LessonStep>

      <LessonStep slug="dateien-anlegen" title="Dateien von Hand erstellen">
        <p>
          Ein Projekt besteht aus gewöhnlichen Dateien. Erstelle im Ordner eine
          <code>index.html</code> und eine <code>style.css</code> – genau wie im
          Kapitel <em>CSS mit HTML verknüpfen</em>.
        </p>
        <CodeExample
          title="index.html im leeren Repository"
          language="html"
          filename="index.html"
          :code="indexHtml"
        />
        <CodeExample
          title="style.css dazu"
          language="css"
          filename="style.css"
          :code="styleCss"
        />
        <p>
          Mit <Shortcut label="Speichern" :keys="['mod', 'S']" /> sicherst du jede
          Datei. Git merkt sich zunächst nur, dass neue Dateien vorhanden sind –
          noch sind sie nicht Teil der Versionsgeschichte.
        </p>
      </LessonStep>

      <LessonStep slug="aenderungen-vorbereiten" title="Änderungen vorbereiten">
        <p>
          Mit <code>git status</code> siehst du, welche Dateien neu oder verändert
          sind. Mit <code>git add .</code> nimmst du alle Änderungen in den
          nächsten Commit auf. Kleine, zusammenhängende Änderungen machen die
          Historie leicht lesbar.
        </p>
        <CodeExample
          title="Dateien bereitstellen"
          language="bash"
          filename="Terminal"
          :code="`git status\ngit add .`"
        />
      </LessonStep>

      <LessonStep slug="commit-abschliessen" title="Den Commit abschliessen">
        <p>
          Jetzt wird der Stand mit einer Nachricht gespeichert. Die Nachricht
          sollte erklären, was und warum geändert wurde – nicht wie.
        </p>
        <CodeExample
          title="Einen Commit erstellen"
          language="bash"
          filename="Terminal"
          :code="ersterCommit"
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
        Lege ein neues Repository an, erstelle eine <code>index.html</code> und
        eine <code>style.css</code> von Hand, binde das CSS ein und mache deinen
        ersten Commit mit einer passenden Nachricht.
      </p>
    </template>
  </LessonScaffold>
</template>
<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const htmlMitScript = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Seite</title>
</head>
<body>
    <h1>Meine Seite</h1>
    <p>Dieser Text wird durch JavaScript erweitert.</p>

    <script src="script.js"><\/script>
</body>
</html>`

const scriptJs = `console.log("Hallo von JavaScript");`
</script>

<template>
  <LessonScaffold
    section-slug="javascript"
    lesson-slug="javascript-einbinden"
    title="JavaScript einbinden"
    summary="Lernen Sie, wie Sie eine eigene JavaScript-Datei erstellen und mit einem Script-Tag in Ihrer HTML-Datei einbinden."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie wissen, wofür JavaScript in einer Webseite zuständig ist.</li>
        <li>Sie können eine .js-Datei erstellen.</li>
        <li>Sie können JavaScript mit <code>&lt;script&gt;</code> in HTML einbinden.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Mit
        <Term term="JavaScript" def="Die Programmiersprache, die Webseiten interaktiv macht – sie reagiert auf Klicks, Eingaben und verändert Inhalte." />
        wird Ihre Seite lebendig. Während HTML die Struktur und CSS das Aussehen
        festlegt, kümmert sich JavaScript um das Verhalten. Damit der Browser den
        Code ausführt, müssen Sie ihn in Ihr HTML einbinden.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
      <LessonStep slug="js-datei-erstellen" title="Eine Datei für JavaScript erstellen">
        <p>
          Erstellen Sie im selben Ordner wie Ihre <code>index.html</code> eine
          Datei <code>script.js</code>. Alle drei Dateien liegen nebeneinander in
          Ihrem Projektordner:
        </p>
        <CodeExample
          title="Dateiübersicht im Projekt"
          language="text"
          filename="Ordner"
          :code="`mein-projekt/\n├── index.html\n├── style.css\n└── script.js`"
        />
      </LessonStep>

      <LessonStep slug="script-einfuegen" title="JavaScript vor dem Ende von body einbinden">
        <p>
          In der HTML-Datei binden Sie die JavaScript-Datei mit dem
          <Term term="Script-Tag" def="Ein <script>-Element, das den Browser anweist, JavaScript-Code zu laden und auszuführen." />
          ein. Am Ende von <code>&lt;body&gt;</code> hat der Browser bereits alle
          Inhalte dargestellt, bevor der Code läuft – das vermeidet Probleme.
        </p>
        <CodeExample
          title="HTML-Datei mit JavaScript-Einbindung"
          language="html"
          filename="index.html"
          :code="htmlMitScript"
        />
      </LessonStep>

      <LessonStep slug="erster-js-code" title="Den ersten JavaScript-Code schreiben">
        <p>
          Schreiben Sie in <code>script.js</code> eine kleine Anweisung. Zum
          Ausprobieren eignet sich <code>console.log</code>: Es schreibt eine
          Nachricht in die Entwicklerkonsole des Browsers.
          
        </p>
        <CodeExample
          title="Ihre erste script.js"
          language="javascript"
          filename="script.js"
          :code="scriptJs"
        />
        <p class="lesson-tip">
          Ein Semikolon am Zeilenende ist in JavaScript üblich. Es beendet eine
          Anweisung wie einen Punkt im Satz.
        </p>
        <p>
          Speichern Sie mit <Shortcut label="Speichern" :keys="['mod', 'S']" /> und laden Sie die Seite neu.
          Öffnen Sie dann die Etnwicklerwerkzeuge:
          <Shortcut label="Entwicklerwerkzeuge" :keys="['mod', 'shift', 'I']" />. 
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Webseiten bestehen aus mehreren Dateien in einem Ordner.</li>
        <li>Mit <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code> binden Sie JavaScript ein.</li>
        <li>Das Script gehört ans Ende des <code>&lt;body&gt;</code>, damit das HTML zuerst geladen wird.</li>
      </ul>
    </template>

    <template #exercise>
      <p>
        Legen Sie eine <code>script.js</code> an, binden Sie sie am Ende Ihres
        <code>&lt;body&gt;</code> ein und schreiben Sie eine
        <code>console.log</code>-Meldung mit Ihrem Namen. Öffnen Sie die Konsole
        und prüfen Sie, ob die Meldung erscheint.
      </p>
    </template>
  </LessonScaffold>
</template>
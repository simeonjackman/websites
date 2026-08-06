<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const htmlMitLink = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Seite</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Meine Seite</h1>
    <p>Dieser Text wird durch style.css gestaltet.</p>
</body>
</html>`

const styleCss = `/* style.css – gestaltet die Seite */
h1 {
    color: #2f6fdb;
}

p {
    font-size: 1.1rem;
}`
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="css-verknuepfen"
    title="CSS mit HTML verknüpfen"
    summary="Lerne, wie du eine separate CSS-Datei erstellst und in deiner HTML-Datei einbindest."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du weisst, welche Dateien zu einer Webseite gehören.</li>
        <li>Du kannst eine CSS-Datei erstellen.</li>
        <li>Du kannst CSS mit <code>&lt;link&gt;</code> in HTML einbinden.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Eine Webseite besteht meist aus mehreren Dateien. Damit dein
        <Term term="CSS" def="Die Sprache, die das Aussehen einer Webseite bestimmt – Farben, Abstände, Schrift." /> die
        HTML-Struktur gestalten kann, musst du die CSS-Datei erstellen und in der
        HTML-Datei einbinden. Genau das zeigst du hier Schritt für Schritt.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
      <LessonStep slug="zwei-dateien" title="Datei für CSS (Design) erstellen">
        <p>
          Erstelle im selben Ordner zusätzlich zur <code>index.html</code> eine
          zweite Datei <code>style.css</code>. Sie sind Geschwister – beide liegen
          nebeneinander im Hauptverzeichnis deines Projekts.
        </p>
        <CodeExample
          title="Dateiübersicht im Projekt"
          language="text"
          filename="Ordner"
          :code="`dein-projekt/\n├── index.html\n└── style.css`"
        />
      </LessonStep>

      <LessonStep slug="link-einfuegen" title="CSS im head einbinden">
        <p>
          In die HTML-Datei gehört ein <Term term="Link-Tag" def="Ein <link>-Element, das eine externe Datei in HTML einbindet." />
          im <code>&lt;head&gt;</code>-Bereich. Er verweist auf die CSS-Datei. Ohne
          diese Zeile gibt es keinerlei Gestaltung.
        </p>
        <CodeExample
          title="HTML-Datei mit CSS-Einbindung"
          language="html"
          filename="index.html"
          :code="htmlMitLink"
        />
      </LessonStep>

      <LessonStep slug="css-schreiben" title="CSS-Regeln schreiben">
        <p>
          Jetzt kannst du in <code>style.css</code> Regeln schreiben. Jede Regel
          sagt: «Auf dieses Element wende diese Gestaltung an.»
        </p>
        <CodeExample
          title="Deine erste style.css"
          language="css"
          filename="style.css"
          :code="styleCss"
        />
        <p>
          Nach dem Speichern <Shortcut label="Speichern" :keys="['mod', 'S']" /> lädt der
          Browser die Gestaltung und wendet sie an.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Webseiten bestehen aus mehreren Dateien in einem Ordner.</li>
        <li>Mit <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> bindest du CSS ein.</li>
        <li>Die <code>href</code> muss genau deinem Dateinamen entsprechen.</li>
      </ul>
      <p class="lesson-tip">Stimmt der Dateiname im <code>href</code> nicht, passiert nichts – prüfe die Schreibweise.</p>
    </template>

    <template #exercise>
      <p>
        Verknüpfe deine <code>index.html</code> mit einer eigenen
        <code>style.css</code>. Gib deiner Überschrift eine Farbe und deinen
        Absätzen eine andere Schriftgrösse. Öffne die Seite und prüfe das Ergebnis.
      </p>
    </template>
  </LessonScaffold>
</template>
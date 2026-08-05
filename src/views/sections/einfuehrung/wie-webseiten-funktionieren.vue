<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'

const htmlGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Webseite</title>
</head>
<body>
    <h1>Hallo Welt</h1>
    <p>Dies ist meine erste Webseite.</p>
</body>
</html>`

const deinErstesDokument = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine erste Seite</title>
</head>
<body>
    <h1>Meine Überschrift</h1>
    <p>Erster Absatz.</p>
    <p>Zweiter Absatz.</p>
</body>
</html>`
</script>

<template>
  <LessonScaffold
    section-slug="einfuehrung"
    lesson-slug="wie-webseiten-funktionieren"
    title="Wie Webseiten funktionieren"
    summary="Browser laden Dateien, interpretieren HTML, CSS und JavaScript und stellen daraus eine Webseite dar."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du weisst, was eine URL ist und worauf sie verweist.</li>
        <li>Du kennst die Rollen von HTML, CSS und JavaScript.</li>
        <li>Du kannst beschreiben, was passiert, wenn du eine Adresse eingibst.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Wenn du eine Internetadresse in deinen Browser eingibst, beginnt ein
        mehrstufiger Prozess. Dieses Kapitel erklärt die wichtigsten Schritte –
        vom Klick bis zur fertigen Seite.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="server-fragt-an" title="1. Der Browser fragt einen Server an">
        <p>
          Zunächst fragt der Browser einen Server nach den benötigten Dateien.
          Die Adresse, die du eintippst – die <strong>URL</strong> – verweist auf
          eine bestimmte Ressource im Internet.
        </p>
        <CodeExample
          title="Eine URL im Alltag"
          language="text"
          filename="beispiel.txt"
          :code="`https://www.example.com/startseite.html\n    └── Server    └── Datei auf dem Server`"
        />
      </LessonStep>

      <LessonStep slug="dateien-downloaden" title="2. HTML, CSS und JavaScript werden geladen">
        <p>
          Der Server sendet die benötigten Dateien zurück. Es sind im
          Wesentlichen drei Arten, die zusammen eine Webseite ergeben.
        </p>
        <ul class="lesson-list">
          <li><strong>HTML</strong> beschreibt die Struktur einer Seite.</li>
          <li><strong>CSS</strong> kümmert sich um das Aussehen.</li>
          <li><strong>JavaScript</strong> sorgt für Interaktivität.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="browser-stellt-dar" title="3. Der Browser stellt die Seite dar">
        <p>
          Der Browser kombiniert diese Informationen und stellt daraus die
          fertige Webseite dar – das, was du schliesslich auf dem Bildschirm
          siehst.
        </p>
        <CodeExample
          title="Ein einfaches HTML-Grundgerüst"
          language="html"
          filename="index.html"
          :code="htmlGrundgeruest"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Der Browser liest HTML, CSS und JavaScript.</li>
        <li>Eine URL verweist auf eine Ressource im Internet.</li>
        <li>HTML beschreibt die Struktur einer Webseite.</li>
        <li>CSS gestaltet das Aussehen.</li>
        <li>JavaScript erweitert die Funktionalität.</li>
      </ul>
      <p class="lesson-tip">Jede Webseite beginnt mit einer HTML-Datei.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle eine Webseite mit einer Überschrift und zwei Absätzen. Speichere
        sie als <code>index.html</code> und öffne sie im Browser.
      </p>
      <CodeExample
        title="Dein erstes Dokument"
        language="html"
        filename="index.html"
        :code="deinErstesDokument"
      />
    </template>
  </LessonScaffold>
</template>
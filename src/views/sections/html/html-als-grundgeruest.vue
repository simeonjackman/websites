<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const vollstaendigesGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Projekt</title>
</head>
<body>
    <!-- Hier beginnt der sichtbare Inhalt -->
    <h1>Meine Seite</h1>
    <p>Ich starte gerade mit HTML.</p>
</body>
</html>`

const deinGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Übung</title>
</head>
<body>
    <!-- Inhalt folgt -->
    <h1>Meine Seite</h1>
    <p>Ein erster Absatz.</p>
    <p>Ein zweiter Absatz.</p>
    <p>Ein dritter Absatz.</p>
</body>
</html>`
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="html-als-grundgeruest"
    title="HTML als Grundgerüst"
    summary="HTML strukturiert Inhalte und gibt dem Browser eine klare Bedeutungsebene."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kannst eine neue HTML-Datei anlegen und speichern.</li>
        <li>Du kennst die wichtigsten Grundbausteine.</li>
        <li>Du kannst ein HTML5-Grundgerüst schreiben und im Browser öffnen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        HTML ist die Sprache, die einer Webseite die <strong>Struktur</strong>
        gibt. Mit <Term term="Tags" def="Markierungen in spitzen Klammern, z. B. <h1>, die Inhalten eine Bedeutung geben." /> beschreibt
        es Inhalte wie Überschriften und Absätze – für den Browser, für
        Leserinnen und für Hilfstechnologien.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
      <LessonStep slug="datei-anlegen" title="Eine neue HTML-Datei anlegen">
        <p>
          Öffne deinen Ordner in VS Code und erstelle eine neue Datei
          (<Shortcut label="Neue Datei" :keys="['mod', 'N']" /> ).
          Speichere sie – wichtig ist die Endung:
        </p>
        <CodeExample
          title="Dateiname für deine Webseite"
          language="text"
          filename="Name der Datei"
          :code="`index.html`"
        />
        <p>
          Der Dateiname <code>index.html</code> ist eine Konvention: Browser
          laden <code>index.html</code> automatisch, wenn dieser Ordner aufgerufen
          wird. So weiss jede*r, welche Datei die Startseite ist.
        </p>
      </LessonStep>

      <LessonStep slug="grundgeruest-eingeben" title="Das Grundgerüst eintippen">
        <p>
          Jede HTML-Datei beginnt mit demselben Grundgerüst. Kopiere es in deine
          <code>index.html</code> und speichere mit
          <Shortcut label="Speichern" :keys="['mod', 'S']" />.
        </p>
        <CodeExample
          title="Ein vollständiges HTML5-Grundgerüst"
          language="html"
          filename="index.html"
          :code="vollstaendigesGrundgeruest"
        />
      </LessonStep>

      <LessonStep slug="tags-geben-bedeutung" title="Tags geben Inhalten Bedeutung">
        <p>
          Tags markieren, was ein Inhalt ist. Dadurch weiss der Browser, dass
          eine Zeile eine Überschrift ist und ein anderer Bereich eine Liste.
        </p>
        <ul class="lesson-list">
          <li><code>html</code> umschliesst das ganze Dokument.</li>
          <li><code>head</code> enthält Metadaten zur Seite.</li>
          <li><code>body</code> enthält den sichtbaren Inhalt.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="im-browser-oeffnen" title="Die Seite im Browser öffnen">
        <p>
          Doppelklicke in der Dateiübersicht auf deine <code>index.html</code>
          oder wähle im Kontextmenü <strong>Open with Live Server</strong>. Deine
          Seite erscheint jetzt in Chrome. Ändere den Text und speichere – der
          Browser aktualisiert die Ansicht automatisch.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Erstelle eine Datei und speichere sie als <code>index.html</code>.</li>
        <li>HTML hat ein festes Grundgerüst mit <code>head</code> und <code>body</code>.</li>
        <li>Tags geben den Inhalten ihre Bedeutung.</li>
      </ul>
      <p class="lesson-tip">Gute HTML-Struktur macht spätere Pflege einfacher.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle ein eigenes HTML5-Grundgerüst mit einem Titel, einer Überschrift
        und drei Absätzen. Speichere es als <code>index.html</code> und öffne es
        im Browser.
      </p>
      <CodeExample
        title="Dein Grundgerüst"
        language="html"
        filename="index.html"
        :code="deinGrundgeruest"
      />
    </template>
  </LessonScaffold>
</template>
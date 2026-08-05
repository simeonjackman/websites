<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="einfuehrung"
    lesson-slug="installation"
    title="Installation"
    summary="Für moderne Webseiten werden ein Editor, ein Browser und einige Werkzeuge benötigt."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du hast Node.js installiert.</li>
        <li>Du kennst VS Code als Editor und hast es eingerichtet.</li>
        <li>Du kannst ein Projekt mit Vite starten.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Professionelle Entwicklerinnen und Entwickler verwenden zahlreiche
        Werkzeuge. Für den Anfang genügen jedoch ein Browser, ein Editor und
        Node.js.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="nodejs-installieren" title="1. Node.js installieren">
        <p>
          Node.js ermöglicht die Verwendung moderner Werkzeuge wie Vite.
          Lade die aktuelle LTS-Version von der offiziellen Seite herunter und
          folge dem Installationsassistenten.
        </p>
      </LessonStep>

      <LessonStep slug="editor-einrichten" title="2. VS Code als Editor einrichten">
        <p>
          Ein guter Editor macht den Unterschied. Visual Studio Code ist kostenlos
          und unterstützt HTML, CSS und JavaScript direkt. Zusätzlich sollte
          Git installiert werden, damit Änderungen gespeichert und nachvollzogen
          werden können.
        </p>
      </LessonStep>

      <LessonStep slug="projekt-starten" title="3. Projekt mit Vite erstellen">
        <p>
          Vite ist ein schneller Entwicklungsserver. Im Terminal erzeugst du damit
          in wenigen Sekunden ein neues Projekt:
        </p>
        <CodeExample
          title="Projekt mit Vite erstellen"
          language="bash"
          filename="terminal"
          :code="`npm create vite@latest\ncd mein-projekt\nnpm install\nnpm run dev`"
        />
        <p>
          Mit <code>npm run dev</code> startet ein lokaler Entwicklungsserver.
          Öffne die angezeigte Adresse im Browser – deine Seite läuft jetzt lokal.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Installiere Node.js.</li>
        <li>Verwende VS Code als Editor.</li>
        <li>Nutze npm oder pnpm.</li>
        <li>Arbeite mit einem lokalen Entwicklungsserver.</li>
      </ul>
      <p class="lesson-tip">Eine einfache Entwicklungsumgebung reicht für den Einstieg aus.</p>
    </template>

    <template #exercise>
      <p>
        Installiere Node.js und starte dein erstes Projekt mit Vite. Verändere den
        Text auf der Startseite und prüfe, ob sich deine Änderung im Browser
        aktualisiert.
      </p>
      <CodeExample
        title="Erwartete Ausgabe im Terminal"
        language="bash"
        filename="terminal"
        :code="`  VITE v6.0.0  ready in 320 ms\n\n  ➜  Local:   http://localhost:5173/\n  ➜  Network: use --host to expose`"
      />
    </template>
  </LessonScaffold>
</template>
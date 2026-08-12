<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'
</script>

<template>
  <LessonScaffold
    section-slug="einfuehrung"
    lesson-slug="tipps-fuer-vscode"
    title="Tipps für VS Code"
    summary="Eine gut eingerichtete Entwicklungsumgebung spart Zeit und vermeidet Fehler."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie können in VS Code schnell Dateien finden und wechseln.</li>
        <li>Sie haben die automatische Formatierung aktiviert.</li>
        <li>Sie kennen die wichtigsten Tastenkombinationen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Visual Studio Code gehört zu den beliebtesten
        <Term term="Editoren" def="Programme, in denen Sie Code schreiben und bearbeiten." />.
        Wählen Sie unten Ihr Betriebssystem – die Tastenkombinationen passen sich
        automatisch an: Auf dem Mac erscheint <strong>cmd</strong>, auf Windows
        <strong>ctrl</strong>.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
      <LessonStep slug="suchen-und-springen" title="Suchen und Springen">
        <p>
          Mit einer Tastenkombination öffnen Sie jede Datei im Projekt sofort –
          ohne durch Ordner zu klicken.
        </p>
        <Shortcut label="Datei öffnen" :keys="['mod', 'P']" />
        <Shortcut label="Befehlspalette öffnen" :keys="['mod', 'shift', 'P']" />
        <Shortcut label="Suchen im Projekt" :keys="['mod', 'shift', 'F']" />
      </LessonStep>

      <LessonStep slug="formatierung-aktivieren" title="Automatische Formatierung">
        <p>
          Besonders hilfreich sind automatische Formatierungen. Damit Ihr Code
          beim Speichern sauber ausgerichtet wird, öffnen Sie die Einstellungen
          und aktivieren Sie <strong>Format On Save</strong>.
        </p>
        <Shortcut label="Einstellungen öffnen" :keys="['mod', ',']" />
        <Shortcut label="Dokument manuell formatieren" :keys="['shift', 'alt', 'F']" />
      </LessonStep>

      <LessonStep slug="tastenkombinationen" title="Die wichtigsten Befehle">
        <p>
          Jede Tastenkombination zeigt Ihnen die passenden Tasten für Ihr
          <Term term="Betriebssystem" def="Das Grundprogramm Ihres Computers, z. B. Windows oder macOS." /> –
          mit <strong>cmd</strong> auf dem Mac und <strong>ctrl</strong> auf Windows.
        </p>
        <Shortcut label="Speichern" :keys="['mod', 'S']" />
        <Shortcut label="Rückgängig machen" :keys="['mod', 'Z']" />
        <Shortcut label="Zeile duplizieren" :keys="['shift', 'alt', '↓']" />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Aktivieren Sie die automatische Formatierung.</li>
        <li>Lernen Sie die wichtigsten Tastenkombinationen.</li>
      </ul>
      <p class="lesson-tip">Eine aufgeräumte Entwicklungsumgebung erhöht die Produktivität.</p>
    </template>

  </LessonScaffold>
</template>
<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
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
        <li>Du kannst in VS Code schnell Dateien finden und wechseln.</li>
        <li>Du hast die automatische Formatierung aktiviert.</li>
        <li>Du kennst die wichtigsten Tastenkombinationen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Visual Studio Code gehört zu den beliebtesten Editoren der Welt. Die
        Suchfunktion erleichtert das Finden von Dateien. Mit Erweiterungen lassen
        sich zusätzliche Funktionen integrieren.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="suchen-und-springen" title="1. Suchen und Springen">
        <p>
          Mit <code>cmd + P</code> (Mac) beziehungsweise <code>ctrl + P</code>
          (Windows) kannst du jede Datei im Projekt sofort öffnen – ohne durch
          Ordner zu klicken.
        </p>
        <ul class="lesson-list">
          <li>Die Suchfunktion findet Dateien in Sekunden.</li>
          <li>Arbeite mit mehreren geöffneten Dateien.</li>
          <li>Nutze die integrierte Konsole unter <code>ctrl + ö</code>.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="formatierung-aktivieren" title="2. Automatische Formatierung">
        <p>
          Besonders hilfreich sind automatische Formatierungen. Deaktiviere die
          automatische Speicherung, damit nicht jede Datei sofort verändert wird,
          und aktiviere „Format On Save", um deinen Code beim Speichern sauber zu
          formatieren.
        </p>
        <p>
          In den Einstellungen (<code>cmd + ,</code>) unter <em>Editor › Formatting</em>
          findest du die Option <strong>Format On Save</strong>.
        </p>
      </LessonStep>

      <LessonStep slug="tastenkombinationen" title="3. Die wichtigsten Tastenkombinationen">
        <p>
          Kurzbefehle sparen viel Zeit. Die häufigsten findest du hier – auf dem
          Mac nimmst du <code>cmd</code> statt <code>ctrl</code>.
        </p>
        <CodeExample
          title="Nützliche Tastenkombinationen"
          language="text"
          filename="shortcuts.txt"
          :code="`ctrl + S  → Speichern\nctrl + C  → Kopieren\nctrl + V  → Einfügen\nctrl + F  → Suchen\ncmd  + P  → Datei öffnen\nctrl + Z  → Rückgängig`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Aktiviere die automatische Formatierung.</li>
        <li>Lerne die wichtigsten Tastenkombinationen.</li>
        <li>Nutze die integrierte Konsole.</li>
        <li>Arbeite mit mehreren geöffneten Dateien.</li>
      </ul>
      <p class="lesson-tip">Eine aufgeräumte Entwicklungsumgebung erhöht die Produktivität.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle ein neues Projekt, öffne eine Datei über die Schnellsuche und
        formatiere sie mit <code>shift + alt + F</code>. Prüfe, ob Format On Save
        aktiviert ist.
      </p>
    </template>
  </LessonScaffold>
</template>
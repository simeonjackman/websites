<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import OsBlock from '../../../components/OsBlock.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const gitConfigName = `git config --global user.name "Dein Name"`

const gitConfigEmail = `git config --global user.email "deine@email.ch"`
</script>

<template>
  <LessonScaffold section-slug="git" lesson-slug="installation-git" title="Installation"
    summary="Richten Sie Ihre Entwicklungsumgebung ein, damit Sie eine eigene Webseite bauen können.">
    <template #objectives>
      <ul class="lesson-list">
        <li>Git ist installiert.</li>
        <li>Git ist mit Ihrem Namen und E-Mail eingerichtet.</li>
        <li>Sie können ein Projekt klonen und im Browser anzeigen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        In der Informatik braucht es viele verschiedene Werkzeuge. Diese müssen Sie
        zuerst installieren. Wählen Sie unten Ihr
        <Term term="Betriebssystem" def="Das Grundprogramm Ihres Computers, z. B. Windows oder macOS." />
        (Windows oder Mac) – die Befehle unterscheiden sich je nach System.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
    

      <LessonStep slug="git-installieren" title="Git installieren">
        <p>
          <Term term="Git"
            def="Ein Werkzeug, um Versionen Ihrer Dateien zu speichern und Änderungen nachzuvollziehen." />
          brauchen wir, um Projektvorlagen herunterzuladen und unsere Projekte abzugeben.
        </p>
        <p class="lesson-tip">Tippen Sie Befehle nie selbst ab. Kopieren Sie die Befehle, indem Sie auf den
          kopieren-Knopf
          drücken.</p>
        <OsBlock>
          <template #windows>
            <CodeExample title="Git installieren" language="bash" filename="PowerShell"
              :code="`winget install -e --id Git.Git`" />
          </template>
          <template #mac>
            <CodeExample title="Git installieren" language="bash" filename="Terminal" :code="`brew install git`" />
          </template>
        </OsBlock>
      </LessonStep>

      <LessonStep slug="git-einrichten" title="Git mit Name und E-Mail einrichten">
        <p>
          Bevor Sie Git verwenden, müssen Sie Ihren Benutzernamen und Ihre
          E-Mail-Adresse setzen. So werden Ihre Änderungen eindeutig zugeordnet.
        </p>
        <p class="lesson-tip">Bei diesem Schritt müssen Sie den Befehl anpassen bevor Sie ihn ausführen.
          Setzen Sie in der Vorlage Ihrem Namen und Ihre E-Mailadresse ein.
        </p>
        <CodeExample title="Git Namen konfigurieren" language="bash" filename="Terminal" :code="gitConfigName" />
        <CodeExample title="Git E-Mail konfigurieren" language="bash" filename="Terminal" :code="gitConfigEmail" />
      </LessonStep>

      <LessonStep slug="github-konto" title="Ein GitHub-Konto erstellen">
        <p>
          <Term term="GitHub" def="Eine Plattform im Internet, auf der Sie Git-Projekte speichern und teilen." />
          ist eine Plattform zur Versionsverwaltung. Erstellen Sie dort mit Ihrer
          Schul-E-Mail-Adresse einen Account – das Konto brauchen Sie später, um
          Projekte hoch- und herunterzuladen.
        </p>
        <p>Öffnen Sie <a href="https://github.com" target="_blank" rel="noopener">github.com</a> und klicken Sie auf
          <strong>Sign
            up</strong>.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <p>Ihre Entwicklungsumgebung sollte jetzt diese Werkzeuge enthalten:</p>
      <ul class="lesson-list">
        <li>VS Code (Editor)</li>
        <li>Chrome (Browser)</li>
        <li>Git (Versionskontrolle), eingerichtet mit Name und E-Mail</li>
        <li>Live-Server-Erweiterung in VS Code</li>
        <li>Ein GitHub-Konto</li>
      </ul>
      <p class="lesson-tip">Helfen Sie Ihren Klassenkameradinnen und -kameraden weiter, bis alle fertig installiert
        haben.
      </p>
    </template>

    <template #exercise>
      <p>
        Öffnen Sie VS Code und testen Sie Ihre Installation: Drücken Sie
        <Shortcut label="Befehlspalette öffnen" :keys="['mod', 'shift', 'P']" />
        , tippen Sie <code>Git: Clone</code> und klonen Sie Ihr Projekt. Den Projektlink erhalten Sie von der
        Lehrperson.
        Starten Sie anschliesslich
        mit <code>Live Server</code> einen lokalen Server und öffnen Sie die Seite in
        Chrome.
      </p>
    </template>
  </LessonScaffold>
</template>
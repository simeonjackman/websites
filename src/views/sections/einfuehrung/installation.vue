<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import OsBlock from '../../../components/OsBlock.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const homebrewCmd = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

</script>

<template>
  <LessonScaffold section-slug="einfuehrung" lesson-slug="installation" title="Installation"
    summary="Richten Sie Ihre Entwicklungsumgebung ein, damit Sie eine eigene Webseite bauen können.">
    <template #objectives>
      <ul class="lesson-list">
        <li>Der Editor und Chrome sind installiert.</li>
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
      <LessonStep slug="terminal-oeffnen" title="Ein Terminal öffnen">
        <p>
          Ein
          <Term term="Terminal" def="Ein Fenster, in dem Sie Befehle an Ihren Computer schreiben." />
          ist der Ort, an dem Sie die Installationsbefehle eintippen. Öffnen Sie es je
          nach Betriebssystem so:
        </p>
        <OsBlock>
          <template #windows>
            <p>
              Suchen Sie im Startmenü nach <strong>PowerShell</strong>. Starten Sie es mit
              einem Rechtsklick über <strong>Als Administrator ausführen</strong>,
              damit Installationen erlaubt sind.
            </p>
          </template>
          <template #mac>
            <p>
              Öffnen Sie die Suche <strong>Spotlight</strong> mit
              <Shortcut label="Spotlight öffnen" :keys="['mod', 'Space']" />
              und suchen Sie nach dem Programm <strong>Terminal</strong>. Drücken Sie
              <Shortcut label="Befehl ausführen" :keys="['Enter']" />
              , um es zu öffnen.
            </p>
          </template>
        </OsBlock>
      </LessonStep>

      <LessonStep slug="paketverwaltung" title="Paketverwaltung einrichten">
        <p>
          Ein Paketmanager lädt Programme für Sie herunter und installiert sie.
          Windows nutzt
          <Term term="winget" def="Der Paketmanager von Windows zum Installieren von Programmen." /> und
          Mac nutzt
          <Term term="homebrew" def="Ein Paketmanager für macOS, mit dem Sie Programme per Befehl installieren." />.
        </p>
        <p class="lesson-tip">Tippen Sie Befehle nie selbst ab. Kopieren Sie die Befehle, indem Sie auf den
          kopieren-Knopf
          drücken.</p>
        <OsBlock>
          <template #windows>
            <p>
              Falls winget noch nicht installiert ist, führen Sie im
              Administrator-Terminal diesen Befehl aus:
            </p>
            <CodeExample title="winget installieren" language="bash" filename="PowerShell"
              :code="`Add-AppxPackage -Path 'https://github.com/microsoft/winget-cli/releases/download/v1.8.1911/Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle' -ForceApplicationShutdown`" />
          </template>
          <template #mac>
            <p>Falls Sie Homebrew noch nicht haben, installieren Sie es mit diesem Befehl:</p>
            <CodeExample title="Homebrew installieren" language="bash" filename="Terminal" :code="homebrewCmd" />
          </template>
        </OsBlock>
      </LessonStep>

      <LessonStep slug="vscode-installieren" title="VS Code installieren">
        <p>
          VS Code ist unser
          <Term term="Editor" def="Ein Programm, in dem Sie Code schreiben und bearbeiten." />,
          in dem wir den Code schreiben und bearbeiten.
        </p>
        <p>
          Sie können VS Code entweder mit dem Befehl unten installieren – oder
          direkt von der Webseite herunterladen:
          <a href="https://code.visualstudio.com/download" target="_blank"
            rel="noopener">code.visualstudio.com/download</a>.
          Wählen Sie dort das Installationsprogramm für Ihr Betriebssystem.
        </p>
        <p class="lesson-tip">Tippen Sie Befehle nie selbst ab. Kopieren Sie die Befehle, indem Sie auf den
          kopieren-Knopf
          drücken.</p>
        <OsBlock>
          <template #windows>
            <CodeExample title="VS Code installieren" language="bash" filename="PowerShell"
              :code="`winget install -e --id Microsoft.VisualStudioCode`" />
          </template>
          <template #mac>
            <CodeExample title="VS Code installieren" language="bash" filename="Terminal"
              :code="`brew install --cask visual-studio-code`" />
          </template>
        </OsBlock>
        <p>
          Wenn die Installation erfolgreich war, sollte im VS Code nun unten rechts der Knopf "Go Live" erscheinen.
        </p>
      </LessonStep>

      <LessonStep slug="live-server" title="Die Live-Server-Erweiterung installieren">
        <p class="lesson-tip">Tippen Sie Befehle nie selbst ab. Kopieren Sie die Befehle, indem Sie auf den
          kopieren-Knopf
          drücken.</p>
        <p>
          Moderne Webseiten brauchen einen
          <Term term="Webserver" def="Ein Programm, das Ihre Webseite an den Browser ausliefert." />.
          Dafür installieren wir die Erweiterung <strong>Live Server</strong> in VS Code.
        </p>
        <p>
          Live Server ist eine
          <Term term="Erweiterung" def="Ein Zusatzprogramm, das die Funktionen von VS Code erweitert." />
          von VS Code. Deshalb muss VS Code beim Installieren geöffnet sein: Ohne
          das Programm gibt es keinen Ort, in dem die Erweiterung installiert
          werden kann. Starten Sie VS Code also zuerst.
        </p>
        <p>
          Drücken Sie in VS Code
          <Shortcut label="Befehlspalette öffnen" :keys="['mod', 'shift', 'P']" />
          , tippen Sie <code>ext install</code> und geben Sie diesen Befehl ein:
        </p>
        <CodeExample title="Live Server installieren" language="bash" filename="VS Code"
          :code="`ext install ritwickdey.liveserver`" />
      </LessonStep>

      <LessonStep slug="chrome-installieren" title="Chrome installieren">
        <p>
          Für die Webentwicklung brauchen wir einen
          <Term term="Browser" def="Ein Programm, um Webseiten anzusehen, z. B. Chrome." /> mit
          modernen Werkzeugen. Chrome hat sehr gute
          <Term term="Entwicklertools" def="Werkzeuge im Browser, um Code zu prüfen und Fehler zu finden." />.
          Sie können diesen Schritt überspringen, falls die Chrome bereits installiert haben.
        </p>
        <p class="lesson-tip">Tippen Sie Befehle nie selbst ab. Kopieren Sie die Befehle, indem Sie auf den
          kopieren-Knopf
          drücken.</p>
        <OsBlock>
          <template #windows>
            <CodeExample title="Chrome installieren" language="bash" filename="PowerShell"
              :code="`winget install -e --id Google.Chrome`" />
          </template>
          <template #mac>
            <CodeExample title="Chrome installieren" language="bash" filename="Terminal"
              :code="`brew install --cask google-chrome`" />
          </template>
        </OsBlock>
      </LessonStep>

    </template>

    <template #recap>
      <p>Ihr Computer sollte jetzt diese Werkzeuge enthalten:</p>
      <ul class="lesson-list">
        <li>VS Code (Editor) mit Live Server</li>
        <li>Chrome (Browser)</li>
      </ul>
      <p class="lesson-tip">Helfen Sie Ihren Klassenkameradinnen und -kameraden weiter, bis alle fertig installiert
        haben.
      </p>
    </template>

  </LessonScaffold>
</template>
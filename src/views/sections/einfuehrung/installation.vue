<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import OsBlock from '../../../components/OsBlock.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'

const homebrewCmd = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

const gitConfigName = `git config --global user.name "Dein Name"`

const gitConfigEmail = `git config --global user.email "deine@email.ch"`
</script>

<template>
  <LessonScaffold section-slug="einfuehrung" lesson-slug="installation" title="Installation"
    summary="Richte deine Entwicklungsumgebung ein, damit du eine eigene Webseite bauen kannst.">
    <template #objectives>
      <ul class="lesson-list">
        <li>Du hast einen Editor, einen Browser und Git installiert.</li>
        <li>Du hast Git mit deinem Namen und deiner E-Mail eingerichtet.</li>
        <li>Du kannst ein Projekt klonen und im Browser anzeigen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        In der Informatik braucht es viele verschiedene Werkzeuge. Diese musst du
        zuerst installieren. Wähle unten dein
        <Term term="Betriebssystem" def="Das Grundprogramm deines Computers, z. B. Windows oder macOS." />
        (Windows oder Mac) – die Befehle unterscheiden sich je nach System.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="terminal-oeffnen" title="Ein Terminal öffnen">
        <p>
          Ein
          <Term term="Terminal" def="Ein Fenster, in dem du Befehle an deinen Computer schreibst." />
          ist der Ort, an dem du die Installationsbefehle eintippst. Öffne es je
          nach Betriebssystem so:
        </p>
        <OsBlock>
          <template #windows>
            <p>
              Suche im Startmenü nach <strong>PowerShell</strong>. Starte es mit
              einem Rechtsklick über <strong>Als Administrator ausführen</strong>,
              damit Installationen erlaubt sind.
            </p>
          </template>
          <template #mac>
            <p>
              Öffne die Suche <strong>Spotlight</strong> mit
              <Shortcut label="Spotlight öffnen" :keys="['mod', 'Space']" />
              und suche nach dem Programm <strong>Terminal</strong>. Drücke
              <Shortcut label="Befehl ausführen" :keys="['Enter']" />
              , um es zu öffnen.
            </p>
          </template>
        </OsBlock>
        <p class="lesson-tip">Tippe Befehle nie selbst ab – kopiere sie einfach aus dieser Seite.</p>
      </LessonStep>

      <LessonStep slug="paketverwaltung" title="Paketverwaltung einrichten">
        <p>
          Ein Paketmanager lädt Programme für dich herunter und installiert sie.
          Windows nutzt
          <Term term="winget" def="Der Paketmanager von Windows zum Installieren von Programmen." /> und
          Mac nutzt
          <Term term="homebrew" def="Ein Paketmanager für macOS, mit dem du Programme per Befehl installierst." />.
        </p>
        <OsBlock>
          <template #windows>
            <p>winget ist auf neueren Windows-Versionen bereits enthalten. Prüfe das im Administrator-Terminal:</p>
            <CodeExample title="winget prüfen" language="bash" filename="PowerShell" :code="`winget --version`" />
          </template>
          <template #mac>
            <p>Falls du Homebrew noch nicht hast, installiere es mit diesem Befehl:</p>
            <CodeExample title="Homebrew installieren" language="bash" filename="Terminal" :code="homebrewCmd" />
          </template>
        </OsBlock>
      </LessonStep>

      <LessonStep slug="vscode-installieren" title="VS Code installieren">
        <p>
          VS Code ist unser
          <Term term="Editor" def="Ein Programm, in dem du Code schreibst und bearbeitest." />,
          in dem wir den Code schreiben und bearbeiten.
        </p>
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
      </LessonStep>

      <LessonStep slug="git-installieren" title="Git installieren">
        <p>
          <Term term="Git"
            def="Ein Werkzeug, um Versionen deiner Dateien zu speichern und Änderungen nachzuvollziehen." />
          brauchen wir, um Projektvorlagen herunterzuladen und unsere Projekte abzugeben.
        </p>
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
          Bevor du Git verwendest, musst du deinen Benutzernamen und deine
          E-Mail-Adresse setzen. So werden deine Änderungen eindeutig zugeordnet.
        </p>
        <CodeExample title="Git Namen konfigurieren" language="bash" filename="Terminal" :code="gitConfigName" />
        <CodeExample title="Git E-Mail konfigurieren" language="bash" filename="Terminal" :code="gitConfigEmail" />
      </LessonStep>

      <LessonStep slug="chrome-installieren" title="Chrome installieren">
        <p>
          Für die Webentwicklung brauchen wir einen
          <Term term="Browser" def="Ein Programm, um Webseiten anzusehen, z. B. Chrome." /> mit
          modernen Werkzeugen. Chrome hat sehr gute
          <Term term="Entwicklertools" def="Werkzeuge im Browser, um Code zu prüfen und Fehler zu finden." />.
        </p>
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

      <LessonStep slug="live-server" title="Die Live-Server-Erweiterung installieren">
        <p>
          Moderne Webseiten brauchen einen
          <Term term="Webserver" def="Ein Programm, das deine Webseite an den Browser ausliefert." />.
          Dafür installieren wir die Erweiterung <strong>Live Server</strong> in VS Code.
        </p>
        <p>
          Drücke in VS Code
          <Shortcut label="Befehlspalette öffnen" :keys="['mod', 'shift', 'P']" />
          , tippe <code>ext install</code> und gib diesen Befehl ein:
        </p>
        <CodeExample title="Live Server installieren" language="bash" filename="VS Code"
          :code="`ext install ritwickdey.liveserver`" />
      </LessonStep>

      <LessonStep slug="github-konto" title="Ein GitHub-Konto erstellen">
        <p>
          <Term term="GitHub" def="Eine Plattform im Internet, auf der du Git-Projekte speicherst und teilst." />
          ist eine Plattform zur Versionsverwaltung. Erstelle dort mit deiner
          Schul-E-Mail-Adresse einen Account – das Konto brauchst du später, um
          Projekte hoch- und herunterzuladen.
        </p>
        <p>Öffne <a href="https://github.com" target="_blank" rel="noopener">github.com</a> und klicke auf <strong>Sign
            up</strong>.</p>
      </LessonStep>
    </template>

    <template #recap>
      <p>Deine Entwicklungsumgebung sollte jetzt diese Werkzeuge enthalten:</p>
      <ul class="lesson-list">
        <li>VS Code (Editor)</li>
        <li>Chrome (Browser)</li>
        <li>Git (Versionskontrolle), eingerichtet mit Name und E-Mail</li>
        <li>Live-Server-Erweiterung in VS Code</li>
        <li>Ein GitHub-Konto</li>
      </ul>
      <p class="lesson-tip">Helfe deinen Klassenkameradinnen und -kameraden weiter, wenn alle fertig installiert haben.
      </p>
    </template>

    <template #exercise>
      <p>
        Öffne VS Code und teste deine Installation: Drücke
        <Shortcut label="Befehlspalette öffnen" :keys="['mod', 'shift', 'P']" />
        , tippe <code>Git: Clone</code> und klone dein Projekt. Den Projektlink erhältst du von der Lehrperson.
        Starte anschliessend
        mit <code>Live Server</code> einen lokalen Server und öffne die Seite in
        Chrome.
      </p>
    </template>
  </LessonScaffold>
</template>
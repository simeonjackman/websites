<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const commitNachrichten = `Gut: beschreibt klar, was und warum
Füge Kontaktformular mit Validierung hinzu

Nicht so gut: zu vage
fix
aenderungen
sachen`

const syncBefehl = `# lokale Commits hochladen
git push

# entfernte Änderungen holen und übernehmen
git pull`
</script>

<template>
  <LessonScaffold
    section-slug="git"
    lesson-slug="commits"
    title="Commits erstellen und synchronisieren"
    summary="Lerne, wie du in VS Code einen guten Commit erstellst und deine Änderungen hoch- und herunterlädst."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kannst in VS Code Änderungen vorbereiten.</li>
        <li>Du kannst einen Commit mit einer guten Nachricht erstellen.</li>
        <li>Du kannst deine Commits mit Push und Sync teilen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Ein <Term term="Commit" def="Ein gespeicherter Zwischenstand deines Projekts mit einer erklärenden Nachricht." /> ist
        ein gespeicherter Zwischenstand deines Projekts. In diesem Kapitel lernst
        du, wie du Commits direkt in VS Code erstellst, was eine gute
        Commit-Nachricht ausmacht und wie du deine Arbeit auf GitHub bringst.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
      <LessonStep slug="versionskontrolle-oeffnen" title="Die Versionskontrolle in VS Code öffnen">
        <p>
          In VS Code zeigt dir die
          <Term term="Versionskontrolle" def="Das System, das alle Änderungen an deinen Dateien aufzeichnet, z. B. Git." />
          alle Änderungen deines Projekts auf einen Blick. Öffne sie mit dem
          Quellcode-Symbol links in der Leiste oder mit
          <Shortcut label="Versionskontrolle öffnen" :keys="['mod', 'shift', 'G']" />
          .
        </p>
        <p>
          Im oberen Bereich siehst du alle geänderten Dateien. Das ist dein
          Ausgangspunkt für einen neuen Commit.
        </p>
      </LessonStep>

      <LessonStep slug="aenderungen-vorbereiten" title="Änderungen vorbereiten">
        <p>
          Bevor du committest, wählst du aus, welche Änderungen aufgenommen
          werden. Klicke bei einer Datei auf das <strong>+</strong>-Symbol, um sie
          vorzubereiten. Vorbereitete Dateien landen in der
          <Term term="Bereitstellung (Staging)" def="Der Zwischenschritt, in dem du festlegst, welche Änderungen in den nächsten Commit kommen." />.
        </p>
        <ul class="lesson-list">
          <li>Nimm nur Änderungen auf, die zusammengehören.</li>
          <li>Kleine Commits sind leichter zu lesen und zu überprüfen.</li>
          <li>Ein Commit ist kein Sammelbecken für unklare Zwischenstände.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="guten-commit-erstellen" title="Einen guten Commit erstellen">
        <p>
          Schreibe oben eine Nachricht, die beschreibt, was du gemacht hast – und
          warum. Bestätige den Commit mit
          <Shortcut label="Commit bestätigen" :keys="['mod', 'Enter']" />
          .
        </p>
        <p>
          Eine gute Nachricht ist kurz, klar und sagt nicht nur <em>was</em>,
          sondern auch <em>warum</em> etwas geändert wurde.
        </p>
        <CodeExample
          title="Gute und weniger gute Commit-Nachrichten"
          language="text"
          filename="commit-nachricht"
          :code="commitNachrichten"
        />
        <p class="lesson-tip">Beschreibe Commit-Nachrichten so, dass du sie später noch verstehst.</p>
      </LessonStep>

      <LessonStep slug="pushen-und-synchronisieren" title="Commits pushen und synchronisieren">
        <p>
          Deine Commits liegen zuerst nur auf deinem Computer. Um sie mit deinem
          <Term term="GitHub" def="Eine Plattform im Internet, auf der du Git-Projekte speicherst und teilst." />
          -Repository zu teilen, klickst du auf <strong>Push</strong> bzw.
          <strong>Sync</strong> in der Versionskontrolle.
        </p>
        <ul class="lesson-list">
          <li>
            <Term term="Push" def="Deine lokalen Commits auf eine entfernte Plattform wie GitHub hochladen." />
            lädt deine Commits hoch.
          </li>
          <li>
            <Term term="Sync" def="Lokale und entfernte Änderungen abgleichen – also pushen und pullen in einem Schritt." />
            holt zugleich fremde Änderungen und gleicht alles ab.
          </li>
        </ul>
        <p>
          Falls du lieber im Terminal arbeitest, bewirkt das Folgende dasselbe:
        </p>
        <CodeExample
          title="Pushen und Pull im Terminal"
          language="bash"
          filename="Terminal"
          :code="syncBefehl"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Ein Commit beschreibt einen klaren, nachvollziehbaren Zustand.</li>
        <li>Die Nachricht erklärt, was und warum geändert wurde.</li>
        <li>Mit Push lädst du Commits hoch, mit Sync gleicht du alles ab.</li>
      </ul>
      <p class="lesson-tip">Commite oft und in kleinen Schritten – so bleibt deine Geschichte verständlich.</p>
    </template>

  </LessonScaffold>
</template>
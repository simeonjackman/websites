<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'

const urlBeispiel = `https://www.example.com/startseite.html\n               └── Server    └── Datei auf dem Server`
</script>

<template>
  <LessonScaffold
    section-slug="einfuehrung"
    lesson-slug="wie-webseiten-funktionieren"
    title="Wie Webseiten funktionieren"
    summary="Eine kurze Übersicht darüber, was beim Öffnen einer Webseite passiert und warum das für Sie wichtig ist."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie wissen, warum dieses Projekt für Sie relevant ist.</li>
        <li>Sie kennen die Rollen von HTML, CSS und JavaScript.</li>
        <li>Sie wissen, was beim Öffnen einer Webseite passiert.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Fast alles im Internet basiert auf nur drei Technologien:
        <Term term="HTML" def="Die (Auszeichnungs-)Sprache, die den Inhalt und die Struktur einer Webseite beschreibt." />,
        <Term term="CSS" def="Die Sprache, die das Aussehen einer Webseite bestimmt – Farben, Abstände, Schrift." /> und
        <Term term="JavaScript" def="Eine Programmiersprache, die Webseiten interaktiv macht." />.
        In diesem Projekt lernen Sie, eigene Webseiten damit zu bauen.
      </p>
      <p>
        Beim <Term term="Browser" def="Ein Programm, um Webseiten anzusehen, z. B. Chrome." />,
        in dem Sie diese Seite gerade lesen, laufen im Hintergrund mehrere Schritte ab. Sie zu verstehen
        hilft Ihnen, später zu wissen, <em>warum</em> etwas auf Ihrer eigenen Seite funktioniert oder nicht.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="keine-magie" title="Eine Webseite ist nur eine Datei">
        <p>
          Eine Webseite ist im Kern nur eine <strong>Datei</strong>, die auf einem
          <Term term="Server" def="Ein Computer, der Webseiten speichert und an andere Computer ausliefert." />
          liegt. Ihr Browser lädt diese Datei und zeigt sie an. Mehr ist es zuerst nicht.
        </p>
        <CodeExample title="Was in einer Adresse steckt" language="text" filename="beispiel.txt" :code="urlBeispiel" />
      </LessonStep>

      <LessonStep slug="drei-technologien" title="Drei Bausteine arbeiten zusammen">
        <p>
          Diese Dateien haben je eine eigene Aufgabe. Zusammen ergeben sie eine
          fertige Webseite:
        </p>
        <ul class="lesson-list">
          <li><strong>HTML</strong> legt fest, <em>was</em> auf der Seite steht (Überschrift, Text, Liste).</li>
          <li><strong>CSS</strong> legt fest, <em>wie</em> es aussieht (Farbe, Grösse, Abstände).</li>
          <li><strong>JavaScript</strong> legt fest, <em>was</em> passiert (Klicks, Animationen).</li>
        </ul>
      </LessonStep>

      <LessonStep slug="als-uebersicht" title="Das lernen Sie weiter vorne">
        <p>
          Dieses Kapitel bleibt bewusst eine Übersicht. Das Erstellen und Füllen
          einer eigenen HTML-Datei lernen Sie im Abschnitt
          <strong>HTML</strong>. Gestaltung im Abschnitt <strong>CSS</strong> und
          <strong>JavaScript</strong> für Ihr eigenes Projekt.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Eine Webseite ist eine Datei, die im Browser dargestellt wird.</li>
        <li>HTML beschreibt die Struktur, CSS das Aussehen, JavaScript die Interaktion.</li>
      </ul>
      <p class="lesson-tip">Jede Webseite beginnt mit einer HTML-Datei. Mehr dazu im HTML-Kapitel.</p>
    </template>
  </LessonScaffold>
</template>
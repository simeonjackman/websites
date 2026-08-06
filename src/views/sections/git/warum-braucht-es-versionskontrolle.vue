<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="git"
    lesson-slug="warum-braucht-es-versionskontrolle"
    title="Warum braucht es Versionskontrolle?"
    summary="Git dokumentiert Entwicklungsschritte und erleichtert das Zurückspringen bei Fehlern."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du verstehst den Nutzen von <Term term="Versionskontrolle" def="Das systematische Speichern und Nachvollziehen von Änderungen an deinen Dateien im Laufe der Zeit." />.</li>
        <li>Du kennst die Vorteile des Arbeitens mit <Term term="Git" def="Ein Werkzeug, das den Entwicklungsverlauf deines Projekts aufzeichnet." />.</li>
        <li>Du kannst einfache Begriffe wie <Term term="Commit" def="Ein gespeicherter Zwischenstand deines Projekts mit einer erklärenden Nachricht." /> und Stand einordnen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Code wächst über viele Schritte. Ohne Versionskontrolle wird es schnell
        unübersichtlich: Änderungen gehen verloren, Abläufe sind nicht mehr
        nachvollziehbar. Git löst genau dieses Problem – und schafft dir ein
        Sicherheitsnetz für deine Arbeit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="aenderungen-nachvollziehen" title="Änderungen bleiben nachvollziehbar">
        <p>
          Jede wichtige Änderung wird in Git als Schritt gespeichert. Dadurch
          kannst du jederzeit sehen, was du wann geändert hast.
        </p>
        <ul class="lesson-list">
          <li>Änderungen bleiben nachvollziehbar.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="parallel-arbeiten" title="Mehrere Personen können parallel arbeiten">
        <p>
          Git erlaubt es, dass mehrere Personen am selben Projekt arbeiten,
          ohne dass ihre Änderungen sich gegenseitig überschreiben.
        </p>
        <ul class="lesson-list">
          <li>Mehrere Personen können parallel arbeiten.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="zurueckspringen-bei-fehlern" title="Frühere Stände wiederherstellen">
        <p>
          Falls etwas schiefgeht, kannst du auf einen früheren Stand
          zurückgreifen. Das macht Experimentieren deutlich entspannter.
        </p>
        <ul class="lesson-list">
          <li>Frühere Stände lassen sich vergleichen und wiederherstellen.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Git dokumentiert jeden Entwicklungsschritt.</li>
        <li>Paralleles Arbeiten wird sicher möglich.</li>
        <li>Frihere Stände lassen sich jederzeit wiederherstellen.</li>
      </ul>
      <p class="lesson-tip">Git ist ein Sicherheitsnetz für Code.</p>
    </template>

  </LessonScaffold>
</template>
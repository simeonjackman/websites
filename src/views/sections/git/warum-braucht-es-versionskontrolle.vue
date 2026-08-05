<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
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
        <li>Du verstehst den Nutzen von Versionskontrolle.</li>
        <li>Du kennst die Vorteile des Arbeitens mit Git.</li>
        <li>Du kannst einfache Begriffe wie Commit und Stand einordnen.</li>
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
      <LessonStep slug="aenderungen-nachvollziehen" title="1. Änderungen bleiben nachvollziehbar">
        <p>
          Jede wichtige Änderung wird in Git als Schritt gespeichert. Dadurch
          kannst du jederzeit sehen, was du wann geändert hast.
        </p>
        <ul class="lesson-list">
          <li>Änderungen bleiben nachvollziehbar.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="parallel-arbeiten" title="2. Mehrere Personen können parallel arbeiten">
        <p>
          Git erlaubt es, dass mehrere Personen am selben Projekt arbeiten,
          ohne dass ihre Änderungen sich gegenseitig überschreiben.
        </p>
        <ul class="lesson-list">
          <li>Mehrere Personen können parallel arbeiten.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="zurueckspringen-bei-fehlern" title="3. Frühere Stände wiederherstellen">
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

    <template #exercise>
      <p>
        Überlege dir ein kleines Projekt, bei dem du gerne auf einen früheren
        Stand zurückkönntest. Notiere, welche Schritte du speichern würdest,
        bevor du mit Git arbeitest.
      </p>
    </template>
  </LessonScaffold>
</template>
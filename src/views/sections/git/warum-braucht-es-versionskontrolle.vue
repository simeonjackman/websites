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
        <li>Sie verstehen den Nutzen von <Term term="Versionskontrolle" def="Das systematische Speichern und Nachvollziehen von Änderungen an Ihren Dateien im Laufe der Zeit." />.</li>
        <li>Sie kennen die Vorteile des Arbeitens mit <Term term="Git" def="Ein Werkzeug, das den Entwicklungsverlauf Ihres Projekts aufzeichnet." />.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Code wächst über viele Schritte. Ohne Versionskontrolle wird es schnell
        unübersichtlich: Änderungen gehen verloren, Abläufe sind nicht mehr
        nachvollziehbar. Git löst genau dieses Problem und schafft dir ein
        Sicherheitsnetz für Ihre Arbeit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="aenderungen-nachvollziehen" title="Änderungen bleiben nachvollziehbar">
        <p>
          Jede wichtige Änderung wird in Git als Schritt gespeichert. Dadurch
          können Sie jederzeit sehen, was Sie wann geändert haben.
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
          Falls etwas schiefgeht, können Sie auf einen früheren Stand
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
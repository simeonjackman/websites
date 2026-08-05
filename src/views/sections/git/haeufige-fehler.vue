<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="git"
    lesson-slug="haeufige-fehler"
    title="Häufige Fehler"
    summary="Typische Git-Fehler entstehen durch fehlende Ordnung oder unklare Abläufe."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du erkennst häufige Git-Fehler frühzeitig.</li>
        <li>Du weisst, wie du sie vermeidest.</li>
        <li>Du entwickelst eine ruhige Arbeitsweise mit Git.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Git wirkt auf den ersten Blick kompliziert – die meisten Probleme
        entstehen aber durch fehlende Ordnung oder unklare Abläufe. Dieses
        Kapitel zeigt die typischen Stolpersteine und wie du sie umgehst.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="grosse-commits" title="1. Zu grosse Änderungen in einem Commit">
        <p>
          Wenn ein Commit viele unzusammenhängende Änderungen enthält, ist die
          Historie schwer zu lesen und Fehler sind kaum noch zu finden.
        </p>
        <ul class="lesson-list">
          <li>Zu grosse Änderungen in einem Commit machen die Suche schwer.</li>
        </ul>
        <p>Besser ist es, logisch zusammengehörige Schritte einzeln zu speichern.</p>
      </LessonStep>

      <LessonStep slug="branch-wechsel" title="2. Unbedachte Branch-Wechsel">
        <p>
          Der Wechsel zwischen Branches gehört zu Git. Wer ihn unüberlegt
          ausführt, riskiert, lokale Arbeiten durcheinanderzubringen.
        </p>
        <ul class="lesson-list">
          <li>Unbedachte Branch-Wechsel können lokale Arbeiten durcheinanderbringen.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="vergessene-dateien" title="3. Vergessene Dateien">
        <p>
          Dateien, die nicht mit `git add` bereitgestellt werden, fehlen im
          Commit. Das führt schnell zu inkonsistenten Ständen.
        </p>
        <ul class="lesson-list">
          <li>Vergessene Dateien führen oft zu inkonsistenten Ständen.</li>
        </ul>
        <CodeExample
          title="Vor dem Commit: aktuellen Stand prüfen"
          language="bash"
          filename="Terminal"
          :code="`git status\n# zeigt, welche Dateien bereitgestellt sind`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Halte Commits klein und überschaubar.</li>
        <li>Wechsle Branches nur bewusst.</li>
        <li>Prüfe mit `git status`, ob alle Dateien dabei sind.</li>
      </ul>
      <p class="lesson-tip">Regelmässiges Speichern und Committen reduziert Stress.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle absichtlich einen kleinen, unvollständigen Commit und prüfe mit
        <code>git status</code>, welche Datei fehlt. Bereite sie nach und
        schliesse den Fehler bewusst ab.
      </p>
    </template>
  </LessonScaffold>
</template>
<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
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
      <LessonStep slug="grosse-commits" title="Zu grosse Änderungen in einem Commit">
        <p>
          Wenn ein <Term term="Commit" def="Ein gespeicherter Zwischenstand deines Projekts mit einer erklärenden Nachricht." /> viele unzusammenhängende Änderungen enthält, ist die
          <Term term="Versionsgeschichte" def="Der vollständige Verlauf aller gespeicherten Änderungen und Versionen eines Projekts." /> schwer zu lesen und Fehler sind kaum noch zu finden.
        </p>
        <ul class="lesson-list">
          <li>Zu grosse Änderungen in einem Commit machen die Suche schwer.</li>
        </ul>
        <p>Besser ist es, logisch zusammengehörige Schritte einzeln zu speichern.</p>
      </LessonStep>

      <LessonStep slug="branch-wechsel" title="Unbedachte Branch-Wechsel">
        <p>
          Der Wechsel zwischen <Term term="Branches" def="Abzweigungen vom Hauptprojekt, in denen du eigene Änderungen unabhängig entwickeln kannst." /> gehört zu Git. Wer ihn unüberlegt
          ausführt, riskiert, lokale Arbeiten durcheinanderzubringen.
        </p>
        <ul class="lesson-list">
          <li>Unbedachte Branch-Wechsel können lokale Arbeiten durcheinanderbringen.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="vergessene-dateien" title="Vergessene Dateien">
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

  </LessonScaffold>
</template>
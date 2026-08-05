<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="beispiele"
    lesson-slug="layouts"
    title="Layouts"
    summary="Layouts ordnen Inhalte in Spalten, Reihen und Abständen."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du weisst, wann Grid und wann Flexbox die bessere Wahl ist.</li>
        <li>Du kannst ein einfaches Spaltenraster aufbauen.</li>
        <li>Du gestaltest dein Layout mobilfreundlich.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Ein Layout entscheidet darüber, wie deine Inhalte angeordnet sind und
        wie sie wirken. Mit CSS Grid und Flexbox hast du zwei starke Werkzeuge,
        um Struktur in deine Seite zu bringen.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="grid-mehrdimensionale-strukturen" title="1. Grid für mehrdimensionale Strukturen">
        <p>
          CSS Grid eignet sich, wenn du Zeilen und Spalten gleichzeitig
          kontrollieren möchtest – etwa für ein Kartenraster.
        </p>
        <CodeExample
          title="Ein einfaches Grid"
          language="css"
          filename="style.css"
          :code="`.raster {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n}`"
        />
      </LessonStep>

      <LessonStep slug="flexbox-fuer-eine-richtung" title="2. Flexbox für eine Richtung">
        <p>
          Stellst du nur eine Richtung in den Vordergrund, ist Flexbox oft die
          flexiblere Wahl. Deine Elemente verteilen sich dabei ohne feste
          Spaltenangabe.
        </p>
        <CodeExample
          title="Eine Zeile mit Flexbox"
          language="css"
          filename="style.css"
          :code="`.zeile {\n    display: flex;\n    gap: 1rem;\n    justify-content: space-between;\n}`"
        />
      </LessonStep>

      <LessonStep slug="mobile-first-verschachteln" title="3. Mobile-First und verschachtelte Strukturen">
        <p>
          Beginne mit einer schlanken Grundstruktur und baue sie auf grösseren
          Bildschirmen weiter aus. So bleibt das Layout auch auf dem Handy
          lesbar.
        </p>
        <CodeExample
          title="Verschachteltes Layout"
          language="css"
          filename="style.css"
          :code="`.seite {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n}\n\n@media (min-width: 768px) {\n    .seite {\n        grid-template-columns: 1fr 3fr;\n    }\n}`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Grid eignet sich für mehrdimensionale Strukturen.</li>
        <li>Flexbox ist stark für eine Richtung mit flexiblen Elementen.</li>
        <li>Mobile-First hilft dabei, die Struktur schlank zu halten.</li>
      </ul>
      <p class="lesson-tip">Ein gutes Layout erklärt sich fast von selbst.</p>
    </template>

    <template #exercise>
      <p>
        Baue ein Seitenlayout mit einer Kopfzeile, einem Inhaltsbereich und
        einer Seitenleiste. Starte mit einer Spalte und erweitere es erst für
        grössere Bildschirme.
      </p>
    </template>
  </LessonScaffold>
</template>
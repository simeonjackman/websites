<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="css"
    lesson-slug="css-animationen"
    title="CSS Animationen"
    summary="Animationen können Orientierung geben, wenn sie sparsam eingesetzt werden."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kennst die Grundlagen von <Term term="Übergang" def="Ein Übergang, auch Transition genannt, lässt eine Eigenschaft weich zwischen zwei Zuständen wechseln." /> und <Term term="Keyframe" def="Ein Keyframe gibt den Zustand einer Animation zu einem bestimmten Zeitpunkt vor." />.</li>
        <li>Du kannst eine Transition auf eine Zustandsänderung anwenden.</li>
        <li>Du weisst, wie du Bewegung dezent und sinnvoll einsetzt.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Bewegung lenkt den Blick. Genutzt wird sie dort, wo ein Zustandwechsel
        stattfindet – etwa wenn der Mauszeiger über eine Schaltfläche fährt. Der
        Schlüssel liegt in der Zurückhaltung.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="uebergaenge" title="Sanfte Übergänge mit transition">
        <p>
          Mit <code>transition</code> läuft eine Eigenschaft weich von einem Wert
          zum anderen, statt abrupt zu springen. Kleine, kurze Übergänge wirken
          dabei oft am natürlichsten.
        </p>
        <CodeExample
          title="Ein Übergang beim Hovern"
          language="css"
          filename="styles.css"
          :code="`.button {\n    background: #475569;\n    transition: background 0.2s ease;\n}\n\n.button:hover {\n    background: #2f6fdb;\n}`"
        />
      </LessonStep>

      <LessonStep slug="keyframes" title="Bewegungen mit @keyframes">
        <p>
          Soll etwas von allein laufen oder sich in mehr als zwei Zuständen
          bewegen, beschreibst du mit <code>@keyframes</code> eine Abfolge und
          startest sie mit <code>animation</code>.
        </p>
        <CodeExample
          title="Ein sanftes Einblenden"
          language="css"
          filename="styles.css"
          :code="`@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.hero {\n    animation: fade-in 0.8s ease-out;\n}`"
        />
      </LessonStep>

      <LessonStep slug="sparsam-einsetzen" title="Animation als Akzent einsetzen">
        <p>
          Bewegung sollte eine Funktion haben – Orientierung, Aufmerksamkeit,
          Bestätigung. Wer die ganze Seite animiert, lenkt den Blick von dem ab,
          was zählt: dem Inhalt.
        </p>
        <ul class="lesson-list">
          <li>Kleine Übergänge wirken oft natürlicher als harte Sprünge.</li>
          <li>Bewegung sollte eine Funktion haben, nicht nur Dekoration sein.</li>
          <li>Zu viel <Term term="Animation" def="Eine Animation bewegt ein Element automatisch, etwa durch Einblenden oder Verschieben." /> lenkt vom Inhalt ab.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Kleine Übergänge wirken oft natürlicher als harte Sprünge.</li>
        <li>Bewegung sollte eine Funktion haben, nicht nur Dekoration sein.</li>
        <li>Zu viel Animation lenkt vom Inhalt ab.</li>
      </ul>
      <p class="lesson-tip">Animationen sind besser als Akzent, nicht als Hauptattraktion.</p>
    </template>

    <template #exercise>
      <p>
        Baue eine Schaltfläche, die beim Hovern ihre Farbe wechselt, und füge
        dazu ein Element mit einem dezenten Einblende-Effekt beim Laden der
        Seite hinzu.
      </p>
      <CodeExample
        title="Akzent und Übergang"
        language="css"
        filename="styles.css"
        :code="`.cta {\n    background: #16a34a;\n    transition: transform 0.2s ease;\n}\n\n.cta:hover {\n    transform: translateY(-2px);\n}\n\n@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.cta {\n    animation: fade-in 0.6s ease-out;\n}`"
      />
    </template>
  </LessonScaffold>
</template>
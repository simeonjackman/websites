<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="css"
    lesson-slug="css-als-designsprache"
    title="CSS als Designsprache"
    summary="CSS entscheidet über Farbe, Abstand, Typografie und Layout."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie verstehen, was eine CSS-Regel ausmacht.</li>
        <li>Sie können ein konsistentes Farbsystem mit Variablen aufbauen.</li>
        <li>Sie wissen, warum <Term term="Designsysteme" def="Ein Designsystem ist eine Sammlung einheitlicher Regeln für Farben, Schriften und Abstände." /> einfach bleiben dürfen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        <Term term="CSS" def="CSS (Cascading Style Sheets) steuert Aussehen und Layout von Webseiten, etwa Farbe, Abstand und Schrift." /> ist mehr als das «Verschönern» einer Seite. Es ist die Sprache, mit
        der Sie entscheiden, wie etwas wirkt – welche Farbe, welcher Abstand,
        welcher Rhythmus. Dieses Kapitel legt das Fundament für all das.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="eine-ccs-regel" title="Eine CSS-Regel zerlegen">
        <p>
          Eine CSS-Regel besteht aus einem Selektoren, der bestimmt, <em>wo</em>
          die Regel wirkt, und aus Eigenschaften, die festlegen, <em>was</em>
          passiert.
        </p>
        <CodeExample
          title="Eine einzelne Regel"
          language="css"
          filename="styles.css"
          :code="`/* So sieht eine Grundregel aus */\nh1 {\n    color: #crimson;\n    font-size: 2rem;\n}`"
        />
      </LessonStep>

      <LessonStep slug="farben-zentralisieren" title="Farben zentralisieren mit Variablen">
        <p>
          Statt dieselbe Farbe überall von Hand zu tippen, legen Sie sie einmal
          in einer <Term term="Variable" def="Eine Variable ist ein benannter Wert, den Sie einmal anlegen und an vielen Stellen wiederverwenden." /> ab. So sorgen Sie für ein konsistentes Farbsystem
          und kannst Werte an einer einzigen Stelle ändern.
        </p>
        <CodeExample
          title="Ein kleines Farbsystem"
          language="css"
          filename="styles.css"
          :code="`:root {\n    --color-accent: #2f6fdb;\n    --color-accent-dark: #1f4f9e;\n    --color-muted: #6b7280;\n    --space: 1rem;\n}\n\n.button {\n    background: var(--color-accent);\n    padding: var(--space);\n}`"
        />
      </LessonStep>

      <LessonStep slug="abstand-und-typografie" title="Abstand und Typografie prägen den Eindruck">
        <p>
          Farbe allein macht noch kein gutes Design. Abstände geben den
          Elementen Luft, die Schriftgrösse trägt massgeblich zur Lesbarkeit
          bei. Beide gehören zur Sprache von CSS dazu.
        </p>
        <ul class="lesson-list">
          <li><strong>Abstände</strong> schaffen Ordnung und Hierarchie.</li>
          <li><strong>Typografie</strong> bestimmt, wie angenehm Texte zu lesen sind.</li>
          <li><strong>Layout</strong> setzt die Bausteine zueinander in Beziehung.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Variablen vereinfachen ein konsistentes Farbsystem.</li>
        <li>Abstände und Grösse prägen die Lesbarkeit.</li>
        <li>Ein Designsystem muss nicht kompliziert sein, um gut zu wirken.</li>
      </ul>
      <p class="lesson-tip">Wenige starke Regeln sind oft besser als viele Sonderfälle.</p>
    </template>

    <template #exercise>
      <p>
        Legen Sie in einer <code>styles.css</code> drei Farbvariablen an und verwenden
        Sie sie für eine Box und eine Schaltfläche. Ändern Sie danach nur den
        Variablenwert und beobachten Sie, wie beide Elemente reagieren.
      </p>
      <CodeExample
        title="Farbvariablen anwenden"
        language="css"
        filename="styles.css"
        :code="`:root {\n    --color-accent: #16a34a;\n    --color-bg: #f9fafb;\n    --color-text: #111827;\n}\n\nbody {\n    background: var(--color-bg);\n    color: var(--color-text);\n}\n\n.cta {\n    background: var(--color-accent);\n    color: #ffffff;\n}`"
      />
    </template>
  </LessonScaffold>
</template>
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
        <Term term="CSS" def="CSS (Cascading Style Sheets) steuert Aussehen und Layout von Webseiten, etwa Farbe, Abstand und Schrift." /> dient dem «Verschönern» einer Seite. Es ist die Sprache, mit
        der Sie entscheiden, wie etwas wirkt: welche Farbe, welcher Abstand,
        welche Animationen. Dieses Kapitel legt das Fundament für all das.
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
          title="CSS Einführungsbeispiel"
          language="css"
          filename="styles.css"
          :code="`h1 {\n    color: red;\n    font-size: 2rem;\n}`"
        />
        <p>
          Alle h1-Elemente in Ihrem HTML-Dokument erhalten mit dieser Regel die Eigenschaft, dass der Text (color) rot wird und das die Schriftgrösse 2rem beträgt.
        </p>
        <p class="lesson-tip">In CSS steht rem für "Root em". Es ist eine relative Masseinheit für Schriftgrössen und Abstände. Standardmässig entspricht 1 rem genau 16 Pixeln in den meisten Browsern.</p>
      </LessonStep>

      <LessonStep slug="kommentare-im-css" title="Kommentare im CSS">
        <p>
          Mit einem
          <Term term="Kommentar" def="Ein unsichtbarer Notiztext im Code, der im Browser nicht angezeigt wird." />
          können Sie Erklärungen direkt in Ihre CSS-Datei schreiben. Der Browser
          zeigt sie nicht an – sie helfen Ihnen und anderen, die Regeln zu
          verstehen.
        </p>
        <CodeExample title="Kommentare in CSS" language="css" filename="styles.css" :code="`/* Überschrift gestalten */\nh1 {\n    color: #2f6fdb;\n}\n\n/* Abstände rund um die Karte */\n.card {\n    padding: 1rem;\n}`" />
        <ul class="lesson-list">
          <li>Ein Kommentar in CSS beginnt mit <code>/*</code> und endet mit <code>*/</code>.</li>
          <li>Kommentare erklären, was eine Regel bewirkt oder warum sie da ist.</li>
          <li>Sie können eine einzelne Zeile oder mehrere Zeilen umfassen.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="farben-festlegen" title="Farben festlegen mit Standardnamen und Hex-Codes">
        <p>
          Farben in CSS lassen Sie sich auf zwei Arten angeben: mit einem
          <Term term="Standardfarbe" def="Ein vordefinierter Farbname wie red, blue oder white, den CSS direkt kennt." /> oder als
          <Term term="Hex-Code" def="Eine Farbangabe im Format #RRGGBB, die eine Farbe exakt über Rot-, Grün- und Blauanteile festlegt." />.
        </p>
        <CodeExample title="Standardfarben" language="css" filename="styles.css" :code="`p {\n    color: red;\n}\n\nh1 {\n    color: navy;\n}`" />
        <p>
          Standardfarben wie <code>red</code>, <code>blue</code> oder
          <code>gold</code> sind praktisch und sofort verständlich. Für präzise
          Töne nutzen Sie einen Hex-Code mit einer Raute: Der Wert setzt sich
          zusammen aus Rot, Grün und Blau im Hexadezimalsystem.
        </p>
        <CodeExample title="Hex-Codes für präzise Farben" language="css" filename="styles.css" :code="`.button {\n    background: #ff8c00;\n    color: #ffffff;\n}`" />
        <p>
          Schwebt der Mauszeiger in VS Code über einer Farbangabe, öffnet sich
          ein
          <Term term="Farbwähler" def="Ein kleines Werkzeug in VS Code, mit dem Sie eine Farbe visuell auswählen und anpassen können." />.
          Dort können Sie den Ton bequem auswählen und sehen den Hex-Code sofort.
        </p>
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
        Legen Sie in Ihrer <code>styles.css</code> eine Variable für eine
        Hintergrundfarbe an und setzen Sie sie für die Seite um. Testen Sie
        danach, wie sich die Seite verändert, wenn Sie nur den Variablenwert
        ändern.
      </p>
      <CodeExample
        title="Eine Hintergrundfarbe umsetzen"
        language="css"
        filename="styles.css"
        :code="`:root {\n    --color-bg: #f9fafb;\n}\n\nbody {\n    background: var(--color-bg);\n}`"
      />
    </template>
  </LessonScaffold>
</template>
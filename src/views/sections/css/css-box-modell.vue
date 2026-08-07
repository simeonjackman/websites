<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="css"
    lesson-slug="css-box-modell"
    title="CSS Box Modell"
    summary="Jedes Element ist eine Box, die sich von innen nach aussen aus Inhalt, Padding, Rahmen und Margin zusammensetzt. Das Box-Modell erklärt, wie diese vier Teile zusammen die Grösse eines Elements bestimmen und warum Breite und Höhe erst im Zusammenspiel damit richtig wirken."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie kennen die vier Bestandteile des Box-Modells.</li>
        <li>Sie unterscheiden <Term term="Padding" def="Padding ist der Innenabstand zwischen dem Inhalt und dem Rand eines Elements." /> von <Term term="Margin" def="Margin ist der Aussenabstand, der ein Element von seinen Nachbarn trennt." />.</li>
        <li>Sie wissen, was <code>box-sizing</code> bewirkt.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Jedes Element im Browser ist eine Box. Wie gross sie tatsächlich ist,
        hängt von <Term term="Inhalt" def="Der Inhalt ist das eigentliche Element einer Box, etwa Text oder ein Bild." />, Innenabstand, <Term term="Rahmen" def="Der Rahmen ist die sichtbare Linie am Rand eines Elements, direkt um den Inhalt." /> und Aussenabstand ab – genau das
        beschreibt das <Term term="Box-Modell" def="Das Box-Modell beschreibt, wie jedes Element aus Inhalt, Innenabstand, Rahmen und Aussenabstand besteht." />.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="innen-und-aussen" title="Padding und Margin verstehen">
        <p>
          <code>padding</code> erzeugt Luft <em>innerhalb</em> des Elements,
          die <code>margin</code> trennt Elemente <em>voneinander</em>. Beide
          beeinflussen das Gesamtbild eines Layouts.
        </p>
        <CodeExample
          title="Abstände setzen"
          language="css"
          filename="styles.css"
          :code="`.card {\n    padding: 1.5rem;   /* innen: Luft zum Inhalt */\n    margin: 1rem 0;      /* aussen: Abstand nach oben und unten */\n}`"
        />
      </LessonStep>

      <LessonStep slug="rahmen-gestalten" title="Rahmen und ihre wichtigsten Eigenschaften">
        <p>
          Ein <Term term="Rahmen" def="Der Rahmen ist die sichtbare Linie am Rand eines Elements, direkt um den Inhalt." />
          umschliesst ein Element. In CSS setzt sich ein Rahmen aus drei
          Eigenschaften zusammen:
        </p>
        <ul class="lesson-list">
          <li><code>border-width</code> bestimmt die Dicke des Rahmens.</li>
          <li><code>border-style</code> legt fest, wie er aussieht – zum Beispiel <code>solid</code>, <code>dashed</code> oder <code>dotted</code>.</li>
          <li><code>border-color</code> setzt die Farbe.</li>
        </ul>
        <CodeExample
          title="Ein Rahmen aus drei Teilen"
          language="css"
          filename="styles.css"
          :code="`.card {\n    border-width: 2px;\n    border-style: solid;\n    border-color: #2f6fdb;\n}`"
        />
        <p>
          Weil diese drei Angaben so oft zusammen vorkommen, gibt es eine
          Kurzform. Bei <code>border</code> zählen Sie Dicke, Stil und Farbe in
          einer Zeile auf – die Reihenfolge spielt dabei keine Rolle.
        </p>
        <CodeExample
          title="Die Kurzform border"
          language="css"
          filename="styles.css"
          :code="`.card {\n    border: 2px solid #2f6fdb;\n}`"
        />
        <ul class="lesson-list">
          <li>Mit <code>border-radius</code> runden Sie die Ecken des Rahmens.</li>
          <li>Ohne <code>border-style</code> wird der Rahmen nicht angezeigt – die Stil-Angabe ist Pflicht.</li>
        </ul>
        <CodeExample
          title="Ecken abrunden mit border-radius"
          language="css"
          filename="styles.css"
          :code="`.card {\n    border: 2px solid #2f6fdb;\n    border-radius: 12px;\n}\n\n.button {\n    background: #2f6fdb;\n    border-radius: 999px;\n}`"
        />
      </LessonStep>

      <LessonStep slug="rahmen-und-breite" title="Rahmen und die Gesamtbreite">
        <p>
          Ein <code>border</code> liegt um den Innenabstand herum und vergrössert
          die Box. Ohne Beachtung des Box-Modells werden Sie beim Setzen von Breite
          und Höhe überrascht.
        </p>
        <CodeExample
          title="Rahmen hinzufügen"
          language="css"
          filename="styles.css"
          :code="`.box {\n    width: 200px;\n    padding: 20px;\n    border: 2px solid #cbd5e1;\n}\n\n/* 200 + 40 + 4 = echte Gesamtbreite von 244px */`"
        />
      </LessonStep>

      <LessonStep slug="box-sizing" title="box-sizing vereinfacht das Layout">
        <p>
          Mit <code>box-sizing: border-box</code> zählt die angegebene Breite
          Innenabstand und Rahmen bereits mit. Das erleichtert das Layouten
          ungemein.
        </p>
        <CodeExample
          title="Gleiche Breite trotz Padding"
          language="css"
          filename="styles.css"
          :code="`* {\n    box-sizing: border-box;\n}\n\n.box {\n    width: 200px;\n    padding: 20px;\n    /* bleibt 200px, nicht 244px */\n    border: 2px solid #cbd5e1;\n}`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <p>
        Jedes Element ist eine Box, die sich von innen nach aussen aus
        <Term term="Inhalt" def="Der Inhalt ist das eigentliche Element einer Box, etwa Text oder ein Bild." />,
        <Term term="Padding" def="Padding ist der Innenabstand zwischen dem Inhalt und dem Rand eines Elements." />,
        <Term term="Rahmen" def="Der Rahmen ist die sichtbare Linie am Rand eines Elements, direkt um den Inhalt." />
        und Aussenabstand zusammensetzt. Das
        <Term term="Margin" def="Margin ist der Aussenabstand, der ein Element von seinen Nachbarn trennt." />
        sitzt am äussersten Rand und trennt die Box von den Nachbarn. Ohne das
        Box-Modell ist oft unklar, warum ein Element breiter oder höher wirkt als
        angegeben.
      </p>
      <ul class="lesson-list">
        <li>Padding schafft Luft innerhalb der Box.</li>
        <li>Der Rahmen grenzt die Box sichtbar ab – mit Stil, Farbe und Radius gestaltbar.</li>
        <li>Margin trennt die Box von den Nachbarn.</li>
        <li>Mit <code>box-sizing: border-box</code> bleibt die angegebene Breite, Innenabstand und Rahmen sind dann schon enthalten.</li>
        <li>Breite und Höhe wirken erst im Zusammenspiel mit dem Box-Modell richtig.</li>
      </ul>
    </template>

    <template #exercise>
      <p>
        Erstellen Sie zwei HTML Elemente und geben Sie Ihnen die Klasse <code>class="card"</code>.
        Verwenden Sie dann <code>box-sizing: border-box</code> im CSS und bauen
        Sie sich selbst eine Variante ohne diese Regel, um den Unterschied der
        Gesamtbreite zu sehen.
      </p>
      <p style="margin-bottom: 1rem" class="lesson-tip">Hier sind nur die Änderungen im CSS abgebildet. Es müssen aber auch Änderungen im HTML vorgenommen werden.</p>
      <CodeExample
        title="Zwei Karten"
        language="css"
        filename="styles.css"
        :code="`* {\n    box-sizing: border-box;\n}\n\n.card {\n    width: 240px;\n    padding: 1rem;\n    border: 1px solid #e5e7eb;\n    margin: 0.5rem;\n}`"
      />
    </template>
  </LessonScaffold>
</template>
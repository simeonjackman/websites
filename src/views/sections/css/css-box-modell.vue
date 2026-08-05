<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="css"
    lesson-slug="css-box-modell"
    title="CSS Box Modell"
    summary="Jedes Element besteht aus Inhalt, Innenabstand, Rahmen und Aussenabstand."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kennst die vier Bestandteile des Box-Modells.</li>
        <li>Du unterscheidest padding von margin.</li>
        <li>Du weisst, was <code>box-sizing</code> bewirkt.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Jedes Element im Browser ist eine Box. Wie gross sie tatsächlich ist,
        hängt von Inhalt, Innenabstand, Rahmen und Aussenabstand ab – genau das
        beschreibt das Box-Modell.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="innen-und-aussen" title="1. Padding und Margin verstehen">
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

      <LessonStep slug="rahmen-und-breite" title="2. Rahmen und die Gesamtbreite">
        <p>
          Ein <code>border</code> liegt um den Innenabstand herum und vergrössert
          die Box. Ohne Beachtung des Box-Modells wirst du beim Setzen von Breite
          und Höhe überrascht.
        </p>
        <CodeExample
          title="Rahmen hinzufügen"
          language="css"
          filename="styles.css"
          :code="`.box {\n    width: 200px;\n    padding: 20px;\n    border: 2px solid #cbd5e1;\n}\n\n/* 200 + 40 + 4 = echte Gesamtbreite von 244px */`"
        />
      </LessonStep>

      <LessonStep slug="box-sizing" title="3. box-sizing beruhigt das Layout">
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
      <ul class="lesson-list">
        <li>Padding schafft Luft im Element.</li>
        <li>Margin trennt Elemente voneinander.</li>
        <li>Breite und Höhe wirken erst im Zusammenspiel mit dem Box-Modell richtig.</li>
      </ul>
      <p class="lesson-tip">Das Box-Modell erklärt viele Layout-Effekte auf einen Blick.</p>
    </template>

    <template #exercise>
      <p>
        Erstelle zwei Karten mit <code>box-sizing: border-box</code> und baue dir
        selbst eine Variante ohne diese Regel, um den Unterschied der
        Gesamtbreite zu sehen.
      </p>
      <CodeExample
        title="Zwei Karten"
        language="css"
        filename="styles.css"
        :code="`* {\n    box-sizing: border-box;\n}\n\n.card {\n    width: 240px;\n    padding: 1rem;\n    border: 1px solid #e5e7eb;\n    margin: 0.5rem;\n}`"
      />
    </template>
  </LessonScaffold>
</template>
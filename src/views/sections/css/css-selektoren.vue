<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
</script>

<template>
  <LessonScaffold
    section-slug="css"
    lesson-slug="css-selektoren"
    title="CSS Selektoren"
    summary="Selektoren bestimmen, welche Elemente eine Regel bekommen."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kennst die wichtigsten Selektortypen.</li>
        <li>Du unterscheidest Element-, Klassen- und ID-Selektoren.</li>
        <li>Du kannst Nachfahren- von Kind-Selektoren abgrenzen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Bevor eine Regel Wirkung zeigt, muss CSS wissen, welche Elemente
        gemeint sind. Genau dafür gibt es Selektoren – sie sind das Bindeglied
        zwischen HTML und Gestaltung.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="die-grundtypen" title="1. Element, Klasse und ID">
        <p>
          Der einfachste Selektor zielt direkt auf einen Elementtyp.
          Klassen sprechen einzelne Bausteine an, IDs genau ein Element auf
          der Seite.
        </p>
        <CodeExample
          title="Die drei Grundtypen"
          language="css"
          filename="styles.css"
          :code="`p {\n    color: #333;\n}\n\n.card {\n    padding: 1rem;\n}\n\n#header {\n    margin-bottom: 2rem;\n}`"
        />
      </LessonStep>

      <LessonStep slug="nachfahren-vs-kind" title="2. Nachfahren und direkte Kinder">
        <p>
          Mit zwei Leerzeichen triffst du jeden Nachfahren, egal wie tief er
          verschachtelt ist. Mit <code>></code> wählst du nur direkte Kinder.
          Das erste ist flexibel, das zweite präziser.
        </p>
        <CodeExample
          title="Verschachtelung gezielt ansprechen"
          language="css"
          filename="styles.css"
          :code="`/* jeder Nachfahr, auch tief verschachtelt */\nnav a {\n    text-decoration: none;\n}\n\n/* nur direkte Kinder */\n.menu > li {\n    list-style: none;\n}`"
        />
      </LessonStep>

      <LessonStep slug="einfach-wahl" title="3. Wähle die einfachste Lösung">
        <p>
          Lange Verschachtelungen werden schnell unübersichtlich. Oft genügt
          eine Klasse, die den Zweck klar benennt – das hält Regeln verständlich
          und wartbar.
        </p>
        <ul class="lesson-list">
          <li>Klassen sind meist klarer als tiefe Verschachtelungen.</li>
          <li>Direkte Selektoren halten Regeln übersichtlich.</li>
          <li>Wähle die einfachste Lösung, die den Zweck erfüllt.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Klassen sind meist klarer als tiefe Verschachtelungen.</li>
        <li>Direkte Selektoren halten Regeln übersichtlich.</li>
        <li>Wähle die einfachste Lösung, die den Zweck erfüllt.</li>
      </ul>
      <p class="lesson-tip">Selektoren sollten präzise, aber nicht überladen sein.</p>
    </template>

    <template #exercise>
      <p>
        Schreibe eine kleine <code>styles.css</code>, die eine Überschrift, eine
        Klasse und direkte Kinder einer Liste anspricht. Teste, wie sich die
        Regel ändert, wenn du die Klasse durch einen Elementselektor ersetzt.
      </p>
      <CodeExample
        title="Selektoren üben"
        language="css"
        filename="styles.css"
        :code="`.teaser {\n    font-size: 1.25rem;\n}\n\n.list > li {\n    margin-bottom: 0.5rem;\n}\n\nstrong {\n    color: #2f6fdb;\n}`"
      />
    </template>
  </LessonScaffold>
</template>
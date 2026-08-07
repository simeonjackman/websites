<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
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
        <li>Sie kennen die wichtigsten Selektortypen.</li>
        <li>Sie unterscheiden Element-, Klassen- und ID-Selektoren.</li>
        <li>Sie können Nachfahren- von Kind-Selektoren abgrenzen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Bevor eine <Term term="Regel" def="Eine CSS-Regel legt fest, wie bestimmte Elemente auf einer Webseite gestaltet werden." /> Wirkung zeigt, muss CSS wissen, welche Elemente
          gemeint sind. Genau dafür gibt es <Term term="Selektoren" def="Ein Selektor bestimmt, auf welche Elemente eine CSS-Regel angewendet wird." /> – sie sind das Bindeglied
        zwischen HTML und Gestaltung.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="die-grundtypen" title="Element, Klasse und ID">
        <p>
          Der einfachste Selektor zielt direkt auf einen Elementtyp.
          Klassen sprechen einzelne Bausteine an, IDs genau ein Element auf
          der Seite.
        </p>
        <CodeExample
          title="Element Selektor"
          language="css"
          filename="styles.css"
          :code="`p {\n    color: #333;\n}`"
        />
        <p>
          Wählt in diesem Beispiel alle HTML p-Elemente aus.
        </p>
        <CodeExample
          title="Klassen Selektor"
          language="css"
          filename="styles.css"
          :code="`.card {\n    padding: 1rem;\n}`"
        />
        <p>
          Wählt in diesem Beispiel alle HTML Elemente mit dem Attribut <code>class="card"</code> aus.
        </p>
        <CodeExample
          title="ID Selektor"
          language="css"
          filename="styles.css"
          :code="`#header {\n    margin-bottom: 2rem;\n}`"
        />
        <p>
          Wählt in diesem Beispiel alle HTML Elemente mit dem Attribut <code>id="header"</code> aus.
        </p>
      </LessonStep>

      <LessonStep slug="nachfahren-vs-kind" title="Nachfahren und direkte Kinder">
        <p>
          Mit zwei Leerzeichen treffen Sie jeden Nachfahren, egal wie tief er
          verschachtelt ist. Mit <code>></code> wählen Sie nur direkte <Term term="Kind" def="Ein Kind ist ein Element, das direkt in einem anderen Element liegt, ohne Zwischenelemente." />.
          Das erste ist flexibel, das zweite präziser.
        </p>
        <CodeExample
          title="Verschachtelung gezielt ansprechen"
          language="css"
          filename="styles.css"
          :code="`/* jeder Nachfahr, auch tief verschachtelt */\nnav a {\n    text-decoration: none;\n}\n\n/* nur direkte Kinder */\n.menu > li {\n    list-style: none;\n}`"
        />
      </LessonStep>

      <LessonStep slug="einfach-wahl" title="Wähle die einfachste Lösung">
        <p>
          Lange <Term term="Verschachtelung" def="Verschachtelung bedeutet, dass Elemente ineinander liegen, ähnlich wie ineinander geschachtelte Schachteln." />en werden schnell unübersichtlich. Oft genügt
          eine Klasse, die den Zweck klar benennt – das hält Regeln verständlich
          und wartbar.
        </p>
        <ul class="lesson-list">
          <li>Klassen sind meist klarer als tiefe Verschachtelungen.</li>
          <li>Direkte Selektoren halten Regeln übersichtlich.</li>
          <li>Wählen Sie die einfachste Lösung, die den Zweck erfüllt.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Klassen sind meist klarer als tiefe Verschachtelungen.</li>
        <li>Direkte Selektoren halten Regeln übersichtlich.</li>
        <li>Wählen Sie die einfachste Lösung, die den Zweck erfüllt.</li>
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
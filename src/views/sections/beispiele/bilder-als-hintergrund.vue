<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="beispiele"
    lesson-slug="bilder-als-hintergrund"
    title="Bilder als Hintergrund"
    summary="Hintergrundbilder können Stimmung schaffen, sollten aber den Text nicht stören."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie können ein Bild als Hintergrund setzen.</li>
        <li>Sie halten die Lesbarkeit von Text über dem Bild aufrecht.</li>
        <li>Sie ergänzen fliessende <Term term="Farbverläufe" def="Farbverläufe sind weiche Übergänge zwischen zwei oder mehr Farben." /> als Übergänge.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        <Term term="Hintergrundbilder" def="Hintergrundbilder liegen hinter dem Inhalt eines Elements und füllen den verfügbaren Raum." /> verleihen einer Seite Atmosphäre. Gerade weil sie den
        Inhalt nicht tragen, brauchen Sie ein paar Regeln, damit Ihre Texte gut
        lesbar bleiben.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="hintergrundbild-setzen" title="Ein Hintergrundbild einsetzen">
        <p>
          Mit CSS legen die <code>background</code>-Eigenschaften fest, welches
          Bild, wie es wiederholt und wie es positioniert wird.
        </p>
        <CodeExample
          title="Bild als Hintergrund"
          language="css"
          filename="style.css"
          :code="`.hero {\n    background-image: url('himmel.jpg');\n    background-size: cover;\n    background-position: center;\n    min-height: 300px;\n}`"
        />
      </LessonStep>

      <LessonStep slug="lesbarkeit-sichern" title="Lesbarkeit und Kontrast sichern">
        <p>
          Ein Hintergrund ist nur dann gut, wenn der Text darüber trotzdem
          lesbar bleibt. Eine halbtransparente Fläche hilft, den <Term term="Kontrast" def="Kontrast ist der Unterschied zwischen Vorder- und Hintergrund, der die Lesbarkeit von Text bestimmt." /> zu erhöhen.
        </p>
        <CodeExample
          title="Text auf Hintergrund abheben"
          language="css"
          filename="style.css"
          :code="`.hero__text {\n    background: rgba(0, 0, 0, 0.45);\n    color: #fff;\n    padding: 1rem;\n}`"
        />
      </LessonStep>

      <LessonStep slug="verlauf-fuer-uebergange" title="Farbverläufe für harmonische Übergänge">
        <p>
          Statt eines festen Bildes können Sie mit Farbverläufen weiche
          Übergänge erzeugen – etwa, um einen Hintergrund sanft auslaufen zu
          lassen oder nach unten zu dunkeln.
        </p>
        <CodeExample
          title="Verlauf als Hintergrund"
          language="css"
          filename="style.css"
          :code="`.banner {\n    background: linear-gradient(135deg, #4f8cff, #7a5cff);\n    padding: 2rem;\n}`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Achten Sie auf Lesbarkeit und Kontrast.</li>
        <li>Nutzen Sie Hintergrundbilder sparsam auf wichtigen Inhaltsbereichen.</li>
        <li>Ein Farbverlauf kann Übergänge harmonischer machen.</li>
      </ul>
      <p class="lesson-tip">Der Hintergrund unterstützt den Inhalt, nicht umgekehrt.</p>
    </template>

    <template #exercise>
      <p>
        Wählen Sie ein passendes Bild und setzen Sie es als Hintergrund eines Bereichs.
        Stelle Text darüber sichtbar und ergänze an einer Kante einen
        Farbverlauf als Übergang.
      </p>
    </template>
  </LessonScaffold>
</template>
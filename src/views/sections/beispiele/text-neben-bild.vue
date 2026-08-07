<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'

const karteHtml = `<section class="karte">
    <img class="karte__bild" src="foto.jpg" alt="Beschreibung">
    <div class="karte__text">
        <h2>Eine Überschrift</h2>
        <p>Ein Absatz neben dem Bild.</p>
    </div>
</section>`
</script>

<template>
  <LessonScaffold
    section-slug="beispiele"
    lesson-slug="text-neben-bild"
    title="Text neben Bild"
    summary="Bild und Text lassen sich in einer gemeinsamen Struktur gut kombinieren."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie kombinieren Bild und Text in einem Raster oder mit Flexbox.</li>
        <li>Sie sorgen für eine gute Reihenfolge auf kleinen Bildschirmen.</li>
        <li>Sie gestalten Abstände statt starrer Aufteilungen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Achten Sie auf die <Term term="Reihenfolge" def="Die Reihenfolge bestimmt, in welcher Anordnung Elemente im Layout erscheinen." /> der Elemente und die Abstände. Eine saubere
        Grundstruktur bleibt auf grossen wie kleinen Bildschirmen lesbar.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="html-grundstruktur" title="Die HTML-Grundstruktur">
        <p>
          Bild und Text gehören in einen gemeinsamen <Term term="Container" def="Ein Container ist ein Element, das andere Elemente als Gruppe zusammenfasst und anordnet." />. So können Sie
          ihre Aufteilung in einem einzigen Schritt steuern.
        </p>
        <CodeExample
          title="Zwei Spalten im HTML"
          language="html"
          filename="index.html"
          :code="karteHtml"
        />
      </LessonStep>

      <LessonStep slug="css-zweispaltig" title="Die Aufteilung im CSS">
        <p>
          Im CSS legen Sie fest, wie breit Bild und Text nebeneinander Platz
          haben und welcher Abstand sie trennt.
        </p>
        <CodeExample
          title="Bild und Text nebeneinander"
          language="css"
          filename="style.css"
          :code="`.karte {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1.5rem;\n}\n\n.karte__bild {\n    width: 100%;\n    height: auto;\n}`"
        />
      </LessonStep>

      <LessonStep slug="responsive-umfluss" title="Ordnung auf kleinen Bildschirmen">
        <p>
          Auf schmalen Displays soll das Bild über den Text umfliessen können.
          Ein Media-Query sorgt dafür, dass die Aufteilung bei Bedarf in eine
          <Term term="Spalte" def="Eine Spalte ist ein senkrechter Bereich, der Elemente untereinander anordnet." /> zurückfällt.
        </p>
        <CodeExample
          title="Mobile-First-Aufteilung"
          language="css"
          filename="style.css"
          :code="`@media (max-width: 640px) {\n    .karte {\n        grid-template-columns: 1fr;\n    }\n}`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Raster oder Flexbox helfen bei der Aufteilung.</li>
        <li>Die Reihenfolge sollte auf kleinen Bildschirmen gut umfliessen können.</li>
        <li>Abstände sind wichtiger als eine starre Aufteilung.</li>
      </ul>
      <p class="lesson-tip">Gute Komposition bleibt auch auf mobilen Geräten lesbar.</p>
    </template>

    <template #exercise>
      <p>
        Erstellen Sie eine Karte mit Bild und Text nebeneinander. Testen Sie, wie sie sich
        auf einem Handy verhält, und passen Sie die Abstände so an, dass beide
        Bereiche gut lesbar bleiben.
      </p>
    </template>
  </LessonScaffold>
</template>
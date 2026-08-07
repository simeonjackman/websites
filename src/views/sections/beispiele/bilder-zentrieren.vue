<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="beispiele"
    lesson-slug="bilder-zentrieren"
    title="Bilder zentrieren"
    summary="Bilder lassen sich mit wenigen CSS-Regeln sauber ausrichten."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie können ein Bild mit Auto-Margins zentrieren.</li>
        <li>Sie kennen die Flexbox-Variante für variable Layouts.</li>
        <li>Sie sorgen dafür, dass die Bildgrösse zum Raum passt.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Ein einzelnes Bild horizontal zu zentrieren, wirkt auf den ersten Blick
        einfach – es gibt aber ein paar Feinheiten, die davon abhängen, ob das
        Bild allein steht oder Teil eines grösseren Layouts ist. Dieses Kapitel
        zeigt die wichtigsten Wege.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="blockelement-mit-auto-margins" title="Blockelemente mit Auto-Margins zentrieren">
        <p>
          Bilder sind standardmässig Inline-Elemente. Damit die <Term term="Auto-Margins" def="Auto-Margins sind automatische Aussenabstände, die ein Element horizontal in der Mitte ausrichten." /> greifen können, muss das Bild zuerst zu einem Block-Element werden.
        </p>
        <CodeExample
          title="Bild als Block zentrieren"
          language="css"
          filename="style.css"
          :code="`.bild {\n    display: block;\n    margin: 0 auto;\n}`"
        />
      </LessonStep>

      <LessonStep slug="flexbox-fuer-variable-layouts" title="Flexbox für variable Layouts">
        <p>
          Wenn das Bild in einem Container steht und die Bildgrösse flexibel
          bleiben soll, ist <Term term="Flexbox" def="Flexbox ist eine CSS-Methode, um Elemente in einer Reihe flexibel anzuordnen und auszurichten." /> oft die bequemere Lösung – sie zentriert
          horizontal und vertikal in einem Schritt.
        </p>
        <CodeExample
          title="Zentrieren mit Flexbox"
          language="css"
          filename="style.css"
          :code="`.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 200px;\n}`"
        />
      </LessonStep>

      <LessonStep slug="groesse-anpassen" title="Bildgrösse an den Raum anpassen">
        <p>
          Ein zentriertes Bild ist nur dann schön, wenn es nicht überläuft.
          Mit <code>max-width</code> können Sie verhindern, dass das Bild grösser
          als sein Container wird.
        </p>
        <CodeExample
          title="Responsive Bildgrösse"
          language="css"
          filename="style.css"
          :code="`.bild {\n    display: block;\n    margin: 0 auto;\n    max-width: 100%;\n    height: auto;\n}`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Blockelemente können mit Auto-Margins zentriert werden.</li>
        <li>Flexbox ist hilfreich für variable Layouts.</li>
        <li>Die Grösse des Bildes sollte zum verfügbaren Raum passen.</li>
      </ul>
      <p class="lesson-tip">Zentrierung ist oft einfacher, wenn Sie den umgebenden Container kontrollieren.</p>
    </template>

    <template #exercise>
      <p>
        Erstellen Sie eine Seite mit einem Bild und richten Sie es zuerst mit
        Auto-Margins, dann mit Flexbox aus. Beobachte, wie sich die Ausrichtung
        auf verschiedenen Breiten verhält.
      </p>
    </template>
  </LessonScaffold>
</template>
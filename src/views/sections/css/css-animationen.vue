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
        <li>Sie kennen die Grundlagen von Animationen in CSS.</li>
        <li>Sie können eine Transition auf eine Zustandsänderung anwenden.</li>
        <li>Sie wissen, wie Sie Bewegung dezent und sinnvoll einsetzen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Bewegung lenkt den Blick. Genutzt wird sie dort, wo ein Zustandwechsel
        stattfindet: etwa wenn der Mauszeiger über eine Schaltfläche fährt. Der
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
          :code="`.button {\n    background: #475569;\n    transition: background 1.2s ease;\n}\n\n.button:hover {\n    background: #2f6fdb;\n}`"
        />
        <p>
          So sieht der Übergang in der Praxis aus, fahren Sie mit der Maus über
          das Element:
        </p>
        <div class="demo-knopf">Über mich hovern</div>
        <p>
          Der Zustand, in dem sich ein Element gerade befindet, beschreiben Sie
          mit einer
          <Term term="Pseudoklasse" def="Eine Pseudoklasse wählt ein Element in einem bestimmten Zustand aus, etwa beim Hovern oder Fokussieren." />.
          Sie wird mit einem Doppelpunkt an den Selektor gehängt. Typische
          Beispiele sind <code>:hover</code>, wenn der Mauszeiger darüber liegt,
          und <code>:focus</code>, sobald das Element per Tastatur oder Klick
          aktiv ist.
        </p>
        <CodeExample
          title="Eine gewählte Schaltfläche fokussieren"
          language="css"
          filename="styles.css"
          :code="`.button {\n    transition: box-shadow 0.2s ease;\n}\n\n.button:focus {\n    box-shadow: 0 0 0 3px rgba(47, 111, 219, 0.5);\n}`"
        />
        <CodeExample
          title="Abheben mit :hover und transform"
          language="css"
          filename="styles.css"
          :code="`.card {\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.card:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);\n}`"
        />
      </LessonStep>

      <LessonStep slug="keyframes" title="Bewegungen mit @keyframes">
        <p>
          Soll etwas von allein laufen oder sich in mehr als zwei Zuständen
          bewegen, beschreiben Sie mit <code>@keyframes</code> eine Abfolge und
          starten sie mit <code>animation</code>.
        </p>
        <CodeExample
          title="Ein sanftes Einblenden"
          language="css"
          filename="styles.css"
          :code="`@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.hero {\n    animation: fade-in 1.8s ease-in-out infinite;\n}`"
        />
        <p>
          Dieses Element blendet sich beim Laden der Seite mit genau dieser
          Animation ein:
        </p>
        <div class="demo-einblendung">Ich erscheine sanft</div>
      </LessonStep>

      <LessonStep slug="sparsam-einsetzen" title="Animation als Akzent einsetzen">
        <p>
          Bewegung sollte eine Funktion haben: Orientierung, Aufmerksamkeit,
          Bestätigung. Wer die ganze Seite animiert, lenkt den Blick von dem ab,
          was zählt: dem Inhalt.
        </p>
        <ul class="lesson-list">
          <li>Kleine Übergänge wirken oft natürlicher als harte Sprünge.</li>
          <li>Bewegung sollte eine Funktion haben, nicht nur Dekoration sein.</li>
          <li>Zu viel <Term term="Animation" def="Eine Animation bewegt ein Element automatisch, etwa durch Einblenden oder Verschieben." /> lenkt vom Inhalt ab.</li>
        </ul>
        <p>
          Ein negatives Beispiel ist eine Endlosschleife ohne Ziel: etwa ein
          Element, das sich ohne Unterbrechung dreht. Solche Animationen wirken
          unruhig und lenken vom Inhalt ab.
        </p>
        <CodeExample
          title="Besser vermeiden: endloses Drehen"
          language="css"
          filename="styles.css"
          :code="`@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.badge {\n    animation: spin 1s linear infinite;\n}`"
        />
        <CodeExample
          title="Besser vermeiden: endloses Drehen"
          language="html"
          filename="index.html"
          :code='`<div class="badge">Es dreht sich endlos</div>`'
        />
        <div class="demo-dreh">Es dreht sich endlos</div>
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
        Bauen Sie eine Schaltfläche, die beim Hovern ihre Farbe wechselt, und fügen
        Sie dazu ein Element mit einem dezenten Einblende-Effekt beim Laden der
        Seite hinzu.
      </p>
      <CodeExample
        title="Akzent und Übergang"
        language="css"
        filename="styles.css"
        :code="`.cta {\n    transition: 1.5s ease;\n}\n\n.cta:hover {\n    background: #16a34a;\n}\n\n@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.cta {\n    animation: fade-in 1.0s ease-out;\n}`"
      />
    </template>
  </LessonScaffold>
</template>

<style scoped>
.demo-knopf {
  display: inline-block;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  background: #475569;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: background 1.2s ease;
}

.demo-knopf:hover {
  background: #2f6fdb;
}

.demo-einblendung {
  display: inline-block;
  padding: 0.9rem 1.2rem;
  border: 1px solid rgba(200, 220, 255, 0.25);
  border-radius: 1rem;
  background: rgba(127, 209, 255, 0.12);
  color: var(--text);
  animation: demo-einblendung 1.8s ease-in-out infinite;
}

@keyframes demo-einblendung {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.demo-dreh {
  display: inline-grid;
  place-items: center;
  width: 9rem;
  height: 9rem;
  padding: 0.6rem;
  border: 1px solid rgba(200, 220, 255, 0.25);
  border-radius: 1rem;
  background: rgba(255, 159, 104, 0.12);
  color: var(--text);
  text-align: center;
  animation: demo-spin 1s linear infinite;
}

@keyframes demo-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
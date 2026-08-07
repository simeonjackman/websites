<script setup>
import CodeExample from '../../../components/CodeExample.vue'

const eigenschaften = [
  {
    name: 'color',
    satz: 'Setzt die Textfarbe eines Elements.',
    code: '.text {\n    color: #2f6fdb;\n}',
  },
  {
    name: 'background',
    satz: 'Legt die Hintergrundfarbe oder das Hintergrundbild fest.',
    code: '.karte {\n    background: #f4f6fa;\n}',
  },
  {
    name: 'font-size',
    satz: 'Bestimmt die Grösse der Schrift.',
    code: '.titel {\n    font-size: 2rem;\n}',
  },
  {
    name: 'font-family',
    satz: 'Wählt die Schriftart für den Text aus.',
    code: 'body {\n    font-family: Arial, sans-serif;\n}',
  },
  {
    name: 'font-weight',
    satz: 'Steuert die Strichstärke der Schrift, etwa für fetten Text.',
    code: '.stark {\n    font-weight: 700;\n}',
  },
  {
    name: 'padding',
    satz: 'Schafft Innenabstand zwischen Inhalt und Rand des Elements.',
    code: '.karte {\n    padding: 1.5rem;\n}',
  },
  {
    name: 'margin',
    satz: 'Setzt den Aussenabstand zwischen dem Element und seinen Nachbarn.',
    code: '.karte {\n    margin: 1rem auto;\n}',
  },
  {
    name: 'border',
    satz: 'Zeichnet eine sichtbare Linie rund um das Element.',
    code: '.rahmen {\n    border: 2px solid #cbd5e1;\n}',
  },
  {
    name: 'border-radius',
    satz: 'Rundet die Ecken des Elements ab.',
    code: '.knopf {\n    border-radius: 999px;\n}',
  },
  {
    name: 'width',
    satz: 'Legt die Breite eines Elements fest.',
    code: '.sidebar {\n    width: 240px;\n}',
  },
  {
    name: 'height',
    satz: 'Legt die Höhe eines Elements fest.',
    code: '.banner {\n    height: 300px;\n}',
  },
  {
    name: 'max-width',
    satz: 'Begrenzt die maximale Breite, damit Inhalte nicht überlaufen.',
    code: '.inhalt {\n    max-width: 70ch;\n}',
  },
  {
    name: 'display',
    satz: 'Bestimmt, wie ein Element im Layout angezeigt wird.',
    code: '.flex {\n    display: flex;\n}',
  },
  {
    name: 'flex-direction',
    satz: 'Legt fest, ob Flex-Elemente in einer Reihe oder Spalte liegen.',
    code: '.spalte {\n    display: flex;\n    flex-direction: column;\n}',
  },
  {
    name: 'justify-content',
    satz: 'Verteilt Flex-Elemente entlang der Hauptachse.',
    code: '.zeile {\n    display: flex;\n    justify-content: center;\n}',
  },
  {
    name: 'align-items',
    satz: 'Richtet Flex-Elemente entlang der Querachse aus.',
    code: '.mitte {\n    display: flex;\n    align-items: center;\n}',
  },
  {
    name: 'gap',
    satz: 'Schafft gleichmässigen Abstand zwischen Flex- oder Grid-Elementen.',
    code: '.raster {\n    display: grid;\n    gap: 1rem;\n}',
  },
  {
    name: 'position',
    satz: 'Steuert, wie ein Element im Dokument positioniert wird.',
    code: '.marker {\n    position: absolute;\n    top: 0;\n}',
  },
  {
    name: 'text-align',
    satz: 'Richtet den Text innerhalb eines Elements aus.',
    code: 'h1 {\n    text-align: center;\n}',
  },
  {
    name: 'box-shadow',
    satz: 'Wirft einen Schatten hinter das Element für mehr Tiefe.',
    code: '.karte {\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}',
  },
]
</script>

<template>
  <section class="page stack">
    <header class="hero">
      <p class="kicker">Beispiele</p>
      <h1>CSS Referenz</h1>
      <p class="lead">
        Die wichtigsten CSS-Eigenschaften.
      </p>
    </header>

    <div class="referenz-grid">
      <article v-for="eigenschaft in eigenschaften" :key="eigenschaft.name" class="referenz-karte">
        <h3 class="referenz-karte__titel"><code>{{ eigenschaft.name }}</code></h3>
        <p class="referenz-karte__text">{{ eigenschaft.satz }}</p>
        <CodeExample :title="eigenschaft.name" language="css" :code="eigenschaft.code" />
      </article>
    </div>
  </section>
</template>
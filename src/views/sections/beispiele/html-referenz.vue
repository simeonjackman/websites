<script setup>
import CodeExample from '../../../components/CodeExample.vue'

const elemente = [
  {
    name: 'html',
    satz: 'Das Wurzelelement, das die gesamte Webseite umschliesst.',
    code: '<html lang="de">\n    ...\n</html>',
  },
  {
    name: 'head',
    satz: 'Der Kopf mit unsichtbaren Informationen zur Seite, etwa dem Titel.',
    code: '<head>\n    <title>Meine Seite</title>\n</head>',
  },
  {
    name: 'body',
    satz: 'Der Bereich, in dem der sichtbare Inhalt der Seite steht.',
    code: '<body>\n    <p>Sichtbarer Inhalt</p>\n</body>',
  },
  {
    name: 'h1–h6',
    satz: 'Überschriften in sechs Grössen, die die Hierarchie des Textes bestimmen.',
    code: '<h1>Hauptüberschrift</h1>\n<h2>Unterüberschrift</h2>',
  },
  {
    name: 'p',
    satz: 'Ein Absatz mit Fliesstext.',
    code: '<p>Das ist ein Absatz.</p>',
  },
  {
    name: 'a',
    satz: 'Ein Link, der mit href zu einer anderen Seite oder Stelle führt.',
    code: '<a href="https://example.com">Besuche uns</a>',
  },
  {
    name: 'img',
    satz: 'Ein Bild, das über das src-Attribut geladen und mit alt beschrieben wird.',
    code: '<img src="bild.jpg" alt="Beschreibung des Bildes">',
  },
  {
    name: 'ul',
    satz: 'Eine ungeordnete Liste mit Aufzählungszeichen.',
    code: '<ul>\n    <li>Erster Punkt</li>\n</ul>',
  },
  {
    name: 'ol',
    satz: 'Eine geordnete Liste mit Nummerierung.',
    code: '<ol>\n    <li>Erster Schritt</li>\n    <li>Zweiter Schritt</li>\n</ol>',
  },
  {
    name: 'li',
    satz: 'Der einzelne Eintrag innerhalb einer ungeordneten oder geordneten Liste.',
    code: '<li>Listeneintrag</li>',
  },
  {
    name: 'div',
    satz: 'Ein unspezifischer Container, um zusammengehörige Elemente zu gruppieren.',
    code: '<div>\n    <p>Gruppierter Inhalt</p>\n</div>',
  },
  {
    name: 'span',
    satz: 'Ein unsichtbarer Inline-Container, um Teile eines Texts zu markieren.',
    code: '<p>Ich bin <span class="markierung">hervorgehoben</span>.</p>',
  },
  {
    name: 'strong',
    satz: 'Hebt Text als wichtig hervor und betont ihn inhaltlich.',
    code: '<strong>Wichtiger Hinweis</strong>',
  },
  {
    name: 'em',
    satz: 'Betont Text sprachlich; es drückt eine andere Betonungsart aus als strong.',
    code: '<em>Das ist betont.</em>',
  },
  {
    name: 'header',
    satz: 'Der Kopfbereich einer Seite mit Titel und meist der Navigation.',
    code: '<header>\n    <h1>Meine Seite</h1>\n</header>',
  },
  {
    name: 'nav',
    satz: 'Ein Bereich für die Navigationslinks der Seite.',
    code: '<nav>\n    <a href="#start">Start</a>\n</nav>',
  },
  {
    name: 'main',
    satz: 'Der Hauptbereich der Seite, in dem der eigentliche Inhalt steht.',
    code: '<main>\n    <h2>Inhalt</h2>\n</main>',
  },
  {
    name: 'section',
    satz: 'Ein thematisch zusammengehöriger Abschnitt innerhalb der Seite.',
    code: '<section>\n    <h2>Über uns</h2>\n</section>',
  },
  {
    name: 'article',
    satz: 'Ein in sich abgeschlossener Inhalt, etwa ein Blogbeitrag.',
    code: '<article>\n    <h2>Beitrag</h2>\n    <p>Inhalt</p>\n</article>',
  },
  {
    name: 'footer',
    satz: 'Der Fussbereich mit Angaben wie Kontakt oder Impressum.',
    code: '<footer>\n    <p>Kontakt</p>\n</footer>',
  },
]
</script>

<template>
  <section class="page stack">
    <header class="hero">
      <p class="kicker">Beispiele</p>
      <h1>HTML Referenz</h1>
      <p class="lead">
        Die wichtigsten HTML-Elemente.
      </p>
    </header>

    <div class="referenz-grid">
      <article v-for="element in elemente" :key="element.name" class="referenz-karte">
        <h3 class="referenz-karte__titel"><code>{{ element.name }}</code></h3>
        <p class="referenz-karte__text">{{ element.satz }}</p>
        <CodeExample :title="element.name" language="html" :code="element.code" />
      </article>
    </div>
  </section>
</template>
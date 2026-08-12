<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'

const headerBeispiel = `<header>
    <h1>Meine Seite</h1>
    <nav>
        <a href="#">Start</a>
        <a href="#">Über mich</a>
    </nav>
</header>`

const mainBeispiel = `<main>
    <section>
        <h2>Über mich</h2>
        <p>Ein kurzer Absatz über mich.</p>
    </section>
</main>`

const artikelBeispiel = `<article>
    <h2>Neuester Beitrag</h2>
    <p>Inhalt des Beitrags.</p>
</article>`

const footerBeispiel = `<footer>
    <p>Kontakt und Impressum</p>
</footer>`

const seitenstruktur = `<header>
    <h1>Meine Seite</h1>
    <nav>
        <a href="#">Start</a>
        <a href="#">Über mich</a>
    </nav>
</header>

<main>
    <section>
        <h2>Über mich</h2>
        <p>Ein kurzer Absatz über mich.</p>
    </section>

    <article>
        <h2>Neuester Beitrag</h2>
        <p>Inhalt des Beitrags.</p>
    </article>
</main>

<footer>
    <p>Kontakt und Impressum</p>
</footer>`
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="webseiten-strukturieren"
    title="Webseiten Strukturieren"
    summary="Bereiche wie Header, Main und Footer sorgen für eine klare Seitenlogik."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie kennen die wichtigsten Strukturbereiche einer Seite.</li>
        <li>Sie können Inhalte in <Term term="Semantik" def="Die Bedeutung und der Aufbau von Inhalten, vorgegeben durch passende strukturelle Elemente." />-Blöcke gruppieren.</li>
        <li>Sie verstehen, dass eine gute Struktur spätere Gestaltung mit CSS erleichtert.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Eine Webseite wirkt nur dann klar, wenn ihre <strong>Struktur</strong>
        stimmt. <Term term="Header" def="Der Kopfbereich einer Webseite, der Titel und Navigation enthält." />, <Term term="Main" def="Der Hauptbereich einer Webseite, in dem der eigentliche Inhalt steht." />, <Term term="Footer" def="Der Fussbereich einer Webseite mit Zusatzinfos wie Kontakt und Impressum." /> und weitere Bereiche geben der Seite eine
        Logik, die Besucher und Entwickler gleichermassen schnell verstehen.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="der-header" title="Der Header – der Kopf der Seite">
        <p>
          Der <Term term="Header" def="Der Kopfbereich einer Webseite, der Titel und Navigation enthält." /> steht oben auf der Seite. Er enthält
          meist den Titel Ihrer Seite und die
          <Term term="Navigation" def="Die Menülinks, mit denen Besucher die wichtigsten Bereiche einer Seite erreichen." />. Alles, was überall gleich
          wiederkehrt, gehört in den Header.
        </p>
        <CodeExample
          title="Ein Header mit Titel und Navigation"
          language="html"
          filename="index.html"
          :code="headerBeispiel"
        />
      </LessonStep>

      <LessonStep slug="main-section" title="Main, Section und Article">
        <p>
          Im Bereich <Term term="Main" def="Der Hauptbereich einer Webseite, in dem der eigentliche Inhalt steht." />
          steht der eigentliche Inhalt der Seite. Ihn können Sie in
          <Term term="Sektionen" def="Bereiche, die inhaltlich zusammengehörige Elemente einer Seite zusammenfassen." />
          unterteilen, wenn die Inhalte thematisch zusammengehören.
        </p>
        <CodeExample
          title="Ein Hauptbereich mit einer Sektion"
          language="html"
          filename="index.html"
          :code="mainBeispiel"
        />
        <p>
          Für einen in sich abgeschlossenen Textblock – etwa einen Blogbeitrag –
          eignet sich ein <Term term="Artikel" def="Ein in sich abgeschlossener Inhaltsblock, der auch allein sinnvoll lesbar ist." />:
        </p>
        <CodeExample
          title="Ein Artikel"
          language="html"
          filename="index.html"
          :code="artikelBeispiel"
        />
      </LessonStep>

      <LessonStep slug="der-footer" title="Der Footer: Fuss der Seite">
        <p>
          Der <Term term="Footer" def="Der Fussbereich einer Webseite mit Zusatzinfos wie Kontakt und Impressum." />
          steht am Ende der Seite. Hier finden sich Angaben, die nicht zum
          Hauptinhalt gehören, aber jede Seite braucht – zum Beispiel Kontakt
          oder Impressum.
        </p>
        <CodeExample
          title="Ein Fussbereich"
          language="html"
          filename="index.html"
          :code="footerBeispiel"
        />
      </LessonStep>

      <LessonStep slug="eltern-und-kinder-erkennen" title="Eltern und Kinder im Code erkennen">
        <p>
          Damit Sie sehen, welches Element <strong>welches andere enthält</strong>,
          ordnen Sie Ihren Code mit Einrückungen. Kind-Elemente beginnen weiter
          rechts als ihr Eltern-Element – so liest sich die Struktur auf einen
          Blick.
        </p>
        <p>
          In VS Code bringt <Shortcut label="Dokument formatieren" :keys="['shift', 'alt', 'F']" />
          die Einrückung automatisch in Ordnung. Formatieren Sie nach der Arbeit
          an der Struktur, wird sofort sichtbar, welches Element zu welchem
          Eltern-Element gehört.
        </p>
        <CodeExample
          title="Deutlich eingerückte Seitenstruktur"
          language="html"
          filename="index.html"
          :code="seitenstruktur"
        />
        <ul class="lesson-list">
          <li><code>header</code>, <code>main</code> und <code>footer</code> sind Kind-Elemente von <code>body</code>.</li>
          <li><code>section</code> und <code>article</code> sind Kind-Elemente von <code>main</code>.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="struktur-erleichtert-design" title="Gute Struktur erleichtert spätere Gestaltung">
        <p>
          Sauber strukturierte Webseiten lassen sich später mit
          <Term term="CSS" def="Die Sprache, mit der Sie Farben, Abstände und Layout einer Webseite festlegen." />
          viel einfacher gestalten. Mit CSS sprechen Sie genau die Elemente an,
          die Sie kennen – etwa <code>header</code> oder <code>section</code>.
          Ist die Struktur klar, wissen Sie sofort, wo Sie im CSS ansetzen müssen.
        </p>
        <ul class="lesson-list">
          <li>Eine klare Struktur macht spätere Design-Schritte schneller.</li>
          <li>Ohne gute Struktur wird Gestaltung mit CSS schnell unübersichtlich.</li>
        </ul>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Header, Main und Footer bilden die Grundstruktur einer Seite.</li>
        <li>Section und Article gruppieren den Inhalt.</li>
        <li>Einrückungen zeigen, welches Element welches andere enthält.</li>
        <li>Gute Struktur macht das Gestalten mit CSS später einfacher.</li>
      </ul>
      <p class="lesson-tip">Erst die Struktur, dann das Design.</p>
    </template>

    <template #exercise>
      <p>
        Erweitern Sie Ihr <code>index.html</code>. Gruppieren Sie Ihre bestehenden Inhalte:
      </p>
      <ul class="lesson-list">
        <li>
          Packen Sie Ihre Absätze in ein <code>main</code> mit einer
          <code>section</code>.
        </li>
        <li>
          Ergänzen Sie einen <code>footer</code> mit zum Beispiel „Kontakt“.
        </li>
      </ul>
      <p>
        Formatieren Sie am Ende mit
        <Shortcut label="Dokument formatieren" :keys="['shift', 'alt', 'F']" />
        und prüfen Sie im Browser, ob alles noch richtig angezeigt wird.
      </p>
    </template>
  </LessonScaffold>
</template>
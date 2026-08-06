<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Shortcut from '../../../components/Shortcut.vue'
import Term from '../../../components/Term.vue'
import OsToggle from '../../../components/OsToggle.vue'

const vollstaendigesGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Projekt</title>
</head>
<body>
    <!-- Hier beginnt der sichtbare Inhalt -->
    <h1>Meine Seite</h1>
    <p>Ich starte gerade mit HTML.</p>
</body>
</html>`

const kopfDerSeite = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Projekt</title>
</head>`

const beispielAbsatz = `Ich starte gerade mit HTML.`
const beispielElement = `<p>Ich starte gerade mit HTML.</p>`

const langAttribut = `<html lang="de">`

const deinGrundgeruest = `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Übung</title>
</head>
<body>
    <h1>Meine Seite</h1>
    <p>Ich starte gerade mit HTML.</p>
    <!-- Hier fügst du einen neuen Absatz hinzu -->
</body>
</html>`
</script>

<template>
  <LessonScaffold section-slug="html" lesson-slug="html-als-grundgeruest" title="HTML als Grundgerüst"
    summary="HTML strukturiert Inhalte und gibt dem Browser eine klare Bedeutungsebene.">
    <template #objectives>
      <ul class="lesson-list">
        <li>Du kannst eine neue HTML-Datei anlegen und speichern.</li>
        <li>Du kennst die wichtigsten Grundbausteine.</li>
        <li>Du kannst ein HTML-Grundgerüst schreiben und im Browser öffnen.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        HTML ist die Sprache, die einer Webseite die <strong>Struktur</strong>
        gibt. Mit
        <Term term="Tags"
          def="Markierungen in spitzen Klammern wie <h1> oder <p>, die Inhalten eine Bedeutung geben." /> beschreibt
        es Inhalte wie Überschriften und Absätze – für den Browser, für
        Leserinnen und für Hilfstechnologien.
      </p>
      <OsToggle class="os-toggle--page" />
    </template>

    <template #steps>
      <LessonStep slug="datei-anlegen" title="Eine neue HTML-Datei anlegen">
        <p>
          Öffne deinen Ordner in VS Code und erstelle eine neue Datei
          <Shortcut label="Neue Datei" :keys="['mod', 'N']" />
          Speichere sie. Wichtig ist die Endung .html:
        </p>
        <CodeExample title="Dateiname für deine Webseite" language="text" filename="Name der Datei"
          :code="`index.html`" />
        <p>
          Der Dateiname <code>index.html</code> ist eine Konvention: Browser
          laden <code>index.html</code> automatisch, wenn dieser Ordner aufgerufen
          wird. So weiss jede*r, welche Datei die Startseite ist.
        </p>
      </LessonStep>

      <LessonStep slug="grundgeruest-eingeben" title="Das Grundgerüst eintippen">
        <p>
          Jede HTML-Datei beginnt mit demselben Grundgerüst. Kopiere es in deine
          <code>index.html</code> und speichere mit
          <Shortcut label="Speichern" :keys="['mod', 'S']" />
        </p>
        <CodeExample title="Ein vollständiges HTML-Grundgerüst" language="html" filename="index.html"
          :code="vollstaendigesGrundgeruest" />
        <p>
          Dieser Ausschnitt wird
          in den nächsten Lektionen immer wieder auftauchen.
        </p>
      </LessonStep>

      <LessonStep slug="kopf-der-seite" title="Der Kopf der Seite">
        <p>
          Der <code>head</code> enthält keine sichtbaren Inhalte, sondern
          <Term term="Metadaten" def="Informationen über die Seite selbst, die im Browser nicht sichtbar sind." />,
          die dem Browser mitteilen, wie er die Seite behandeln soll.
        </p>
        <CodeExample title="Der Kopf deines Grundgerüsts" language="html" filename="index.html" :code="kopfDerSeite" />
        <ul class="lesson-list">
          <li>
            <code>meta charset="UTF-8"</code> sorgt dafür, dass Umlaute und
            Sonderzeichen korrekt dargestellt werden.
          </li>
          <li>
            <code>meta name="viewport"</code> hilft, dass die Seite auf dem
            Handy richtig skaliert.
          </li>
          <li>
            <code>title</code> ist der Name der Seite, der im Browser-Tab
            erscheint.
          </li>
        </ul>
      </LessonStep>

      <LessonStep slug="tags-elemente-inhalte" title="Tags, Elemente und Inhalte">
        <p>
          Ein
          <Term term="Tag" def="Eine Markierung in spitzen Klammern wie <p> oder </p>." /> besteht aus dem Namen in
          spitzen Klammern. Die meisten Tags gibt es in zwei Varianten:
        </p>
        <ul class="lesson-list">
          <li>Der öffnende Tag <code>&lt;p&gt;</code> beginnt einen Bereich.</li>
          <li>Der schliessende Tag <code>&lt;/p&gt;</code> beendet ihn – erkennbar am Schrägstrich.</li>
        </ul>
        <p>
          Öffnender Tag, <strong>Inhalt</strong> und schliessender Tag zusammen
          ergeben ein
          <Term term="Element" def="Ein Baustein aus öffnendem Tag, Inhalt und schliessendem Tag." />. Nimm diesen
          Absatz aus deinem
          Grundgerüst:
        </p>
        <CodeExample title="Inhalt eines Elements" language="text" filename="index.html" :code="beispielAbsatz" />
        <p>Er ist der <strong>Inhalt</strong>. Mit Öffnungs- und Schluss-Tag wird daraus das Element:</p>
        <CodeExample title="Ein ganzes Element" language="html" filename="index.html" :code="beispielElement" />
        <ul class="lesson-list">
          <li>Der öffnende Tag <code>&lt;p&gt;</code> steht am Anfang.</li>
          <li>Der Inhalt „Ich starte gerade mit HTML.“ steht dazwischen.</li>
          <li>Der schliessende Tag <code>&lt;/p&gt;</code> steht am Ende.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="attribute" title="Attribute ergänzen Tags">
        <p>
          Einige Tags brauchen Zusatzinformationen. Die stehen als
          <Term term="Attribut" def="Eine Zusatzinformation im öffnenden Tag, geschrieben als name='Wert'." />
          direkt im öffnenden Tag – als <code>name="wert"</code>-Paar.
        </p>
        <CodeExample title="Ein Attribut im öffnenden Tag" language="html" filename="index.html" :code="langAttribut" />
        <ul class="lesson-list">
          <li><code>lang="de"</code> teilt mit, dass die Seite auf Deutsch ist.</li>
          <li>Attribute stehen immer im öffnenden Tag, nie im schliessenden.</li>
          <li>Der Wert steht in Anführungszeichen.</li>
        </ul>
        <p>
          Auch im Kopf hast du schon Attribute gesehen, etwa
          <code>charset="UTF-8"</code> oder <code>content="width=device-width"</code>.
        </p>
      </LessonStep>

      <LessonStep slug="eltern-und-kind-elemente" title="Eltern und Kind–Elemente">
        <p>
          HTML-Elemente dürfen ineinander liegen. Man nennt das äussere Element
          <Term term="Eltern-Element" def="Ein Element, das andere Elemente enthält." /> und die inneren
          Elemente
          <Term term="Kind-Elemente" def="Elemente, die innerhalb eines anderen Elements liegen." />. In deinem
          Grundgerüst ist zum
          Beispiel <code>html</code> das Eltern-Element von <code>head</code> und
          <code>body</code>. Das <code>body</code>-Element wiederum enthält
          <code>h1</code> und <code>p</code>.
        </p>
        <CodeExample title="Eltern und Kinder im Grundgerüst" language="html" filename="index.html"
          :code="vollstaendigesGrundgeruest" />
        <p>
          Die Einrückung macht die Verschachtelung sichtbar: Kind-Elemente
          beginnen weiter rechts als ihr Eltern-Element. Formatierst du den Code
          mit
          <Shortcut label="Dokument formatieren" :keys="['shift', 'alt', 'F']" />, ordnet VS Code die Einrückung
          automatisch und
          die Struktur wird sofort lesbar.
        </p>
      </LessonStep>

      <LessonStep slug="im-browser-oeffnen" title="Die Seite im Browser öffnen">
        <p>
          Wähle im Kontextmenü (unten rechts in VSCode) <strong>Open with Live Server</strong>. Deine
          Seite erscheint jetzt in Chrome. Ändere den Text und speichere, der
          Browser aktualisiert die Ansicht automatisch.
        </p>
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Erstelle eine Datei und speichere sie als <code>index.html</code>.</li>
        <li>HTML hat ein festes Grundgerüst mit <code>head</code> und <code>body</code>.</li>
        <li>Ein Element besteht aus öffnendem Tag, Inhalt und schliessendem Tag.</li>
        <li>Attribute stehen im öffnenden Tag und geben Zusatzinfos.</li>
      </ul>
      <p class="lesson-tip">Gute HTML-Struktur macht spätere Pflege einfacher.</p>
    </template>

    <template #exercise>
      <p>
        Öffne deine <code>index.html</code> – das Gerüst hast du bereits auf
        dieser Seite eingegeben. Ergänze im <code>body</code> noch einen
        weiteren <code>p</code>-Absatz mit etwas über dich, zum Beispiel dein
        Lieblingssport. So sieht dein <code>body</code> danach aus:
      </p>
      <CodeExample title="Dein Grundgerüst mit einem neuen Absatz" language="html" filename="index.html"
        :code="deinGrundgeruest" />
      <p>
        Speichere und prüfe im Browser, ob der neue Absatz erscheint.
      </p>
      <p class="lesson-tip">
        Funktioniert die Änderung? Dann committe und pushe sie – zum Beispiel
        mit der Nachricht „Füge neuen Absatz hinzu“.
      </p>
    </template>
  </LessonScaffold>
</template>
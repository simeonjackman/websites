<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'

const aufbauAttribute = `<!-- Eine Klasse für CSS -->
<div class="karte">Inhalt</div>
<p id="einleitung">Intro</p>`

const linkBeispiel = `<!-- Ein Link, der zu einer anderen Seite führt -->
<a href="https://example.com">Besuche uns</a>`

const bildBeispiel = `<!-- Ein Bild von einer Webadresse einbinden -->
<img src="https://www.gym-muttenz.ch/fileadmin/gymnasiummuttenz/img/logo-gym-muttenz.png" alt="Logo des Gymnasiums Muttenz">`

const beschreibungBeispiel = `<!-- Ein Bild ohne Beschreibung -->
<img src="logo.png">
<!-- Ein Bild mit aussagekräftiger Beschreibung -->
<img src="logo.png" alt="Logo des Gymnasiums Muttenz">`

const deineUebung = `<p class="einfuehrung">
    Kennst du <a href="https://developer.mozilla.org">MDN</a>?
</p>
<img src="logo.png" alt="Logo des Projekts">`
</script>

<template>
  <LessonScaffold
    section-slug="html"
    lesson-slug="html-attribute"
    title="HTML Attribute"
    summary="Attribute ergänzen Tags um zusätzliche Informationen oder Verhalten."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie wissen, wie <Term term="Attribute" def="Zusätzliche Angaben an einem Element, die dieses genauer beschreiben oder steuern." /> aufgebaut sind.</li>
        <li>Sie kennen die wichtigsten Attribute für Links und Bilder.</li>
        <li>Sie können mit <code>class</code> und <code>id</code> arbeiten.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Attribute stehen innerhalb der öffnenden <Term term="Tags" def="Kennzeichnungen wie p oder a, die Anfang und Ende eines Elements im HTML-Code markieren." /> und liefern zusätzliche
        Informationen. Mal verknüpfen sie Inhalte, mal verbinden sie HTML mit
        CSS – und sie verbessern die Zugänglichkeit.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="aufbau-von-attribute" title="Wie Attribute aufgebaut sind">
        <p>
          Ein Attribut besteht aus einem Namen, einem Gleichheitszeichen und
          einem in Anführungszeichen gesetzten Wert.
        </p>
        <CodeExample
          title="Attribute für CSS und Struktur"
          language="html"
          filename="beispiel.html"
          :code="aufbauAttribute"
        />
        <ul class="lesson-list">
          <li><code>class</code> und <code>id</code> verbinden HTML und CSS.</li>
        </ul>
      </LessonStep>

      <LessonStep slug="links" title="Links: das href-Attribut">
        <p>
          Das <code>href</code>-Attribut (hypertext reference) gibt an, wohin
          ein Link führt. Ohne <code>href</code> ist ein Link nur noch ein
          normaler Text.
        </p>
        <CodeExample
          title="Ein Link"
          language="html"
          filename="beispiel.html"
          :code="linkBeispiel"
        />
      </LessonStep>

      <LessonStep slug="bilder" title="Bilder: das src-Attribut">
        <p>
          Das <code>src</code>-Attribut (source) gibt die Adresse eines Bildes
          an. Sie haben zwei Möglichkeiten: Entweder kopieren Sie die Adresse
          eines Bildes aus dem Internet, oder Sie speichern die Bilddatei
          selbst in Ihrem Projektordner und tragen nur den Dateinamen ein.
        </p>
        <p>So sieht das Ergebnis im Browser aus:</p>
        <img
          class="attribute-beispiel-bild"
          src="https://www.gym-muttenz.ch/fileadmin/gymnasiummuttenz/img/logo-gym-muttenz.png"
          alt="Logo des Gymnasiums Muttenz"
        />
        <CodeExample
          title="Ein Bild einbinden"
          language="html"
          filename="beispiel.html"
          :code="bildBeispiel"
        />
      </LessonStep>

      <LessonStep slug="beschreibungen" title="Beschreibungen: das alt-Attribut">
        <p>
          Das <code>alt</code>-Attribut beschreibt ein Bild für alle, die es
          nicht sehen können – etwa wenn das Bild nicht lädt oder wenn es mit
          einem Screenreader vorgelesen wird.
        </p>
        <CodeExample
          title="Mit und ohne Beschreibung"
          language="html"
          filename="beispiel.html"
          :code="beschreibungBeispiel"
        />
        <ul class="lesson-list">
          <li>Der <code>alt</code>-Text beschreibt kurz, was auf dem Bild zu sehen ist.</li>
          <li>Ein leerer <code>alt=""</code> kennzeichnet rein dekorative Bilder.</li>
        </ul>
      </LessonStep>

    </template>

    <template #recap>
      <ul class="lesson-list">
        <li>Attribute ergänzen Tags um Informationen.</li>
        <li><code>href</code>, <code>src</code> und <code>alt</code> verknüpfen und beschreiben Inhalte.</li>
        <li><code>class</code> und <code>id</code> verbinden HTML mit Styling.</li>
      </ul>
      <p class="lesson-tip">Attribute sollten knapp und sinnvoll eingesetzt werden.</p>
    </template>

    <template #exercise>
      <p>
        Erstellen Sie einen Absatz mit einem Link und einem Bild. Fügen Sie dem Bild einen
        aussagekräftigen <code>alt</code>-Text und dem Absatz eine
        <code>class</code> hinzu. Ein Beispiel wäre:
      </p>
      <CodeExample
        title="Ihre Übung"
        language="html"
        filename="uebung.html"
        :code="deineUebung"
      />
    </template>
  </LessonScaffold>
</template>
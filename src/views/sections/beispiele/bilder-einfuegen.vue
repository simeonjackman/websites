<script setup>
import LessonScaffold from '../../../components/LessonScaffold.vue'
import LessonStep from '../../../components/LessonStep.vue'
import CodeExample from '../../../components/CodeExample.vue'
import Term from '../../../components/Term.vue'
</script>

<template>
  <LessonScaffold
    section-slug="beispiele"
    lesson-slug="bilder-einfuegen"
    title="Bilder einfügen"
    summary="Mit dem HTML-Element img fügen Sie Bilder aus dem Internet oder aus Ihrem Projekt ein."
  >
    <template #objectives>
      <ul class="lesson-list">
        <li>Sie können ein Bild mit dem Element <code>img</code> einfügen.</li>
        <li>Sie verstehen die Attribute <code>src</code> und <code>alt</code>.</li>
        <li>Sie können Bilder aus dem Internet und aus einem lokalen <code>img</code>-Ordner verwenden.</li>
      </ul>
    </template>

    <template #intro>
      <p>
        Das <code>img</code>-Element zeigt ein Bild an. Es hat kein schliessendes
        Tag: Die Bildquelle wird über Attribute beschrieben. Das wichtigste
        Attribut ist <code>src</code> (source). Dort steht die Adresse oder der
        Pfad zum Bild. Mit <code>alt</code> geben Sie eine kurze Beschreibung
        für Menschen an, die das Bild nicht sehen können.
      </p>
    </template>

    <template #steps>
      <LessonStep slug="attribute-und-src" title="Attribute und das src-Attribut">
        <p>
          <Term term="Attribute" def="Attribute ergänzen ein HTML-Element um zusätzliche Informationen und werden im öffnenden Tag angegeben." /> stehen
          im öffnenden Tag und bestehen meist aus einem Namen und einem Wert.
          Bei einem Bild zeigt <code>src</code> auf die Bilddatei. Das
          <code>alt</code>-Attribut beschreibt den Bildinhalt und ist wichtig
          für Barrierefreiheit.
        </p>
        <CodeExample
          title="Die wichtigsten Attribute"
          language="html"
          filename="index.html"
          :code="`<img src=&quot;bild.jpg&quot; alt=&quot;Ein Bergsee bei Sonnenuntergang&quot;>`"
        />
      </LessonStep>

      <LessonStep slug="bild-aus-dem-internet" title="Ein Bild aus dem Internet">
        <p>
          Für ein Bild aus dem Internet kommt eine vollständige URL in
          <code>src</code>. Wenn Sie eine Bildadresse verwenden möchten, kopieren
          Sie nicht das Bild selbst, sondern die Bildadresse. Im Browser geht
          das meist über einen Rechtsklick auf das Bild und den Befehl
          „Bildadresse kopieren“.
        </p>
        <img
          class="lesson-image"
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
          alt="Landschaft mit Bergen und See"
        >
        <CodeExample
          title="Bild mit einer Internetadresse"
          language="html"
          filename="index.html"
          :code="`<img\n    src=&quot;https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&amp;fit=crop&amp;w=900&amp;q=80&quot;\n    alt=&quot;Landschaft mit Bergen und See&quot;\n>`"
        />
      </LessonStep>

      <LessonStep slug="lokales-bild" title="Ein lokales Bild aus dem img-Ordner">
        <p>
          Speichern Sie Ihr eigenes Bild im Ordner <code>img</code> Ihres
          Projekts. Liegt die Datei zum Beispiel unter
          <code>public/img/mein-bild.svg</code>, verweist <code>src</code> auf
          <code>/img/mein-bild.svg</code>.
        </p>
        <img class="lesson-image lesson-image--local" src="/img/beispielbild.svg" alt="Abstrakte farbige Landschaft">
        <CodeExample
          title="Lokales Bild verwenden"
          language="html"
          filename="index.html"
          :code="`<img src=&quot;/img/mein-bild.svg&quot; alt=&quot;Meine Bildbeschreibung&quot;>`"
        />
      </LessonStep>
    </template>

    <template #recap>
      <ul class="lesson-list">
        <li><code>src</code> enthält die Bildadresse oder den Pfad zur Bilddatei.</li>
        <li><code>alt</code> beschreibt das Bild und unterstützt die Barrierefreiheit.</li>
        <li>Bei Internetbildern kopieren Sie die Bildadresse, nicht das Bild.</li>
        <li>Lokale Bilder können Sie in einem <code>img</code>-Ordner ablegen.</li>
      </ul>
    </template>

    <template #exercise>
      <p>
        Legen Sie ein eigenes Bild im Ordner <code>img</code> ab und fügen Sie es mit
        <code>src</code> und einer passenden <code>alt</code>-Beschreibung in
        Ihre Seite ein.
      </p>
    </template>
  </LessonScaffold>
</template>

<style scoped>
.lesson-image {
  display: block;
  width: min(100%, 42rem);
  max-height: 22rem;
  margin: 1.25rem 0;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid var(--border);
}

.lesson-image--local {
  object-fit: contain;
  background: rgba(255, 255, 255, 0.04);
}
</style>

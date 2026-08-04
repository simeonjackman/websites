export const sections = [
  {
    slug: "einfuehrung",
    label: "Einführung",
    path: "/einfuehrung",
    summary:
        "Die Grundlagen der Webentwicklung",

    lessons: [
        {
            slug: "wie-webseiten-funktionieren",
            title: "Wie Webseiten funktionieren",

            summary:
                "Browser laden Dateien, interpretieren HTML, CSS und JavaScript und stellen daraus eine Webseite dar.",

            text: `
                Wenn du eine Internetadresse in deinen Browser eingibst, beginnt ein
                mehrstufiger Prozess.

                Zunächst fragt der Browser einen Server nach den benötigten Dateien.
                Anschliessend werden HTML, CSS und JavaScript heruntergeladen.

                HTML beschreibt die Struktur einer Seite. CSS kümmert sich um das
                Aussehen. JavaScript sorgt für Interaktivität.

                Der Browser kombiniert diese Informationen und stellt daraus die
                fertige Webseite dar.
`,

            bullets: [
                "Der Browser liest HTML, CSS und JavaScript.",
                "Eine URL verweist auf eine Ressource im Internet.",
                "HTML beschreibt die Struktur einer Webseite.",
                "CSS gestaltet das Aussehen.",
                "JavaScript erweitert die Funktionalität."
            ],

            hint: "Jede Webseite beginnt mit einer HTML-Datei.",

            codeExample: {
                title: "Ein einfaches HTML-Grundgerüst",
                language: "html",
                code: `<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Webseite</title>
</head>
<body>
    <h1>Hallo Welt</h1>
    <p>Dies ist meine erste Webseite.</p>
</body>
</html>`
            },

            exercise:
                "Erstelle eine Webseite mit einer Überschrift und zwei Absätzen."
        },

        {
            slug: "installation",
            title: "Installation",

            summary:
                "Für moderne Webseiten werden ein Editor, ein Browser und einige Werkzeuge benötigt.",

            text: `
Professionelle Entwicklerinnen und Entwickler verwenden zahlreiche
Werkzeuge, um ihre Arbeit zu vereinfachen.

Für den Anfang genügen jedoch ein Browser, ein Editor und Node.js.
Node.js ermöglicht die Verwendung moderner Werkzeuge wie Vite.

Zusätzlich sollte Git installiert werden, damit Änderungen gespeichert
und nachvollzogen werden können.
`,

            bullets: [
                "Installiere Node.js.",
                "Verwende VS Code als Editor.",
                "Nutze npm oder pnpm.",
                "Arbeite mit einem lokalen Entwicklungsserver."
            ],

            hint:
                "Eine einfache Entwicklungsumgebung reicht für den Einstieg aus.",

            codeExample: {
                title: "Projekt mit Vite erstellen",
                language: "bash",
                code: `npm create vite@latest
cd mein-projekt
npm install
npm run dev`
            },

            exercise:
                "Installiere Node.js und starte dein erstes Projekt."
        },

        {
            slug: "tipps-fuer-vscode",
            title: "Tipps für VS Code",

            summary:
                "Eine gut eingerichtete Entwicklungsumgebung spart Zeit und vermeidet Fehler.",

            text: `
Visual Studio Code gehört zu den beliebtesten Editoren der Welt.

Die Suchfunktion erleichtert das Finden von Dateien. Mit Erweiterungen
lassen sich zusätzliche Funktionen integrieren.

Besonders hilfreich sind automatische Formatierungen und eine
integrierte Git-Unterstützung.
`,

            bullets: [
                "Aktiviere die automatische Formatierung.",
                "Lerne die wichtigsten Tastenkombinationen.",
                "Nutze die integrierte Konsole.",
                "Arbeite mit mehreren geöffneten Dateien."
            ],

            hint:
                "Eine aufgeräumte Entwicklungsumgebung erhöht die Produktivität.",

            codeExample: {
                title: "Nützliche Tastenkombinationen (auf Mac cmd statt ctrl verwenden)",
                language: "text",
                code: `ctrl + S  → Speichern
ctrl + C  → Kopieren
ctrl + V  → Einfügen
ctrl + F  → Suchen`
            }
        }
    ]
},
  {
    slug: 'git',
    label: 'Git',
    path: '/git',
    summary: 'Versionskontrolle hilft dabei, Änderungen nachvollziehbar und sicher zu speichern.',
    lessons: [
      {
        slug: 'warum-braucht-es-versionskontrolle',
        title: 'Warum braucht es Versionskontrolle?',
        summary: 'Git dokumentiert Entwicklungsschritte und erleichtert das Zurückspringen bei Fehlern.',
        bullets: [
          'Änderungen bleiben nachvollziehbar.',
          'Mehrere Personen können parallel arbeiten.',
          'Frühere Stände lassen sich vergleichen und wiederherstellen.',
        ],
        hint: 'Git ist ein Sicherheitsnetz für Code.',
      },
      {
        slug: 'commits',
        title: 'Commits',
        summary: 'Ein Commit beschreibt einen klaren Zustand mit einer passenden Nachricht.',
        bullets: [
          'Kleine Commits sind leichter zu lesen.',
          'Die Nachricht sollte erklären, was und warum geändert wurde.',
          'Ein Commit ist kein Sammelbecken für unklare Zwischenstände.',
        ],
        hint: 'Beschreibe Commit-Nachrichten so, dass du sie später noch verstehst.',
      },
      {
        slug: 'haeufige-fehler',
        title: 'Häufige Fehler',
        summary: 'Typische Git-Fehler entstehen durch fehlende Ordnung oder unklare Abläufe.',
        bullets: [
          'Zu grosse Änderungen in einem Commit machen die Suche schwer.',
          'Unbedachte Branch-Wechsel können lokale Arbeiten durcheinanderbringen.',
          'Vergessene Dateien führen oft zu inkonsistenten Ständen.',
        ],
        hint: 'Regelmässiges Speichern und Committen reduziert Stress.',
      },
    ],
  },
  {
    slug: 'html',
    label: 'HTML',
    path: '/html',
    summary: 'HTML liefert das Grundgerüst einer Seite und beschreibt ihre Bedeutung.',
    lessons: [
      {
        slug: 'html-als-grundgeruest',
        title: 'HTML als Grundgerüst',
        summary: 'HTML strukturiert Inhalte und gibt dem Browser eine klare Bedeutungsebene.',
        bullets: [
          'Überschriften, Absätze und Listen strukturieren Inhalte.',
          'Semantische Tags helfen beim Lesen und bei der Barrierefreiheit.',
          'HTML ist die Basis, auf der CSS und JavaScript aufbauen.',
        ],
        hint: 'Gute HTML-Struktur macht spätere Pflege einfacher.',
      },
      {
        slug: 'webseiten-strukturieren',
        title: 'Webseiten Strukturieren',
        summary: 'Bereiche wie Header, Main und Footer sorgen für eine klare Seitenlogik.',
        bullets: [
          'Jeder Bereich sollte eine Aufgabe haben.',
          'Artikel und Sektionen helfen beim Gruppieren von Inhalten.',
          'Struktur ist wichtiger als visuelle Dekoration.',
        ],
        hint: 'Erst die Struktur, dann das Design.',
      },
      {
        slug: 'html-attribute',
        title: 'HTML Attribute',
        summary: 'Attribute ergänzen Tags um zusätzliche Informationen oder Verhalten.',
        bullets: [
          'Das Attribut `class` verbindet HTML und CSS.',
          'Mit `href`, `src` und `alt` werden Inhalte verknüpft und beschrieben.',
          'Saubere Attribute verbessern Lesbarkeit und Zugänglichkeit.',
        ],
        hint: 'Attribute sollten knapp und sinnvoll eingesetzt werden.',
      },
    ],
  },
  {
    slug: 'css',
    label: 'CSS',
    path: '/css',
    summary: 'CSS formt aus dem HTML eine gestaltete Oberfläche.',
    lessons: [
      {
        slug: 'css-als-designsprache',
        title: 'CSS als Designsprache',
        summary: 'CSS entscheidet über Farbe, Abstand, Typografie und Layout.',
        bullets: [
          'Variablen vereinfachen ein konsistentes Farbsystem.',
          'Abstände und Grösse prägen die Lesbarkeit.',
          'Ein Designsystem muss nicht kompliziert sein, um gut zu wirken.',
        ],
        hint: 'Wenige starke Regeln sind oft besser als viele Sonderfälle.',
      },
      {
        slug: 'css-selektoren',
        title: 'CSS Selektoren',
        summary: 'Selektoren bestimmen, welche Elemente eine Regel bekommen.',
        bullets: [
          'Klassen sind meist klarer als tiefe Verschachtelungen.',
          'Direkte Selektoren halten Regeln übersichtlich.',
          'Wähle die einfachste Lösung, die den Zweck erfüllt.',
        ],
        hint: 'Selektoren sollten präzise, aber nicht überladen sein.',
      },
      {
        slug: 'css-box-modell',
        title: 'CSS Box Modell',
        summary: 'Jedes Element besteht aus Inhalt, Innenabstand, Rahmen und Aussenabstand.',
        bullets: [
          'Padding schafft Luft im Element.',
          'Margin trennt Elemente voneinander.',
          'Breite und Höhe wirken erst im Zusammenspiel mit dem Box-Modell richtig.',
        ],
        hint: 'Das Box-Modell erklärt viele Layout-Effekte auf einen Blick.',
      },
      {
        slug: 'css-animationen',
        title: 'CSS Animationen',
        summary: 'Animationen können Orientierung geben, wenn sie sparsam eingesetzt werden.',
        bullets: [
          'Kleine Übergänge wirken oft natürlicher als harte Sprünge.',
          'Bewegung sollte eine Funktion haben, nicht nur Dekoration sein.',
          'Zu viel Animation lenkt vom Inhalt ab.',
        ],
        hint: 'Animationen sind besser als Akzent, nicht als Hauptattraktion.',
      },
    ],
  },
  {
    slug: 'beispiele',
    label: 'Beispiele',
    path: '/beispiele',
    summary: 'Praktische Muster helfen, wiederkehrende Aufgaben schneller umzusetzen.',
    lessons: [
      {
        slug: 'bilder-zentrieren',
        title: 'Bilder zentrieren',
        summary: 'Bilder lassen sich mit wenigen CSS-Regeln sauber ausrichten.',
        bullets: [
          'Blockelemente können mit Auto-Margins zentriert werden.',
          'Flexbox ist hilfreich für variable Layouts.',
          'Die Grösse des Bildes sollte zum verfügbaren Raum passen.',
        ],
        hint: 'Zentrierung ist oft einfacher, wenn du den umgebenden Container kontrollierst.',
      },
      {
        slug: 'layouts',
        title: 'Layouts',
        summary: 'Layouts ordnen Inhalte in Spalten, Reihen und Abständen.',
        bullets: [
          'Grid eignet sich für mehrdimensionale Strukturen.',
          'Flexbox ist stark für eine Richtung mit flexiblen Elementen.',
          'Mobile-First hilft dabei, die Struktur schlank zu halten.',
        ],
        hint: 'Ein gutes Layout erklärt sich fast von selbst.',
      },
      {
        slug: 'bilder-als-hintergrund',
        title: 'Bilder als Hintergrund',
        summary: 'Hintergrundbilder können Stimmung schaffen, sollten aber den Text nicht stören.',
        bullets: [
          'Achte auf Lesbarkeit und Kontrast.',
          'Nutze Hintergrundbilder sparsam auf wichtigen Inhaltsbereichen.',
          'Ein Farbverlauf kann Übergänge harmonischer machen.',
        ],
        hint: 'Der Hintergrund unterstützt den Inhalt, nicht umgekehrt.',
      },
      {
        slug: 'text-neben-bild',
        title: 'Text neben Bild',
        summary: 'Bild und Text lassen sich in einer gemeinsamen Struktur gut kombinieren.',
        bullets: [
          'Raster oder Flexbox helfen bei der Aufteilung.',
          'Die Reihenfolge sollte auf kleinen Bildschirmen gut umfliessen können.',
          'Abstände sind wichtiger als eine starre Aufteilung.',
        ],
        hint: 'Gute Komposition bleibt auch auf mobilen Geräten lesbar.',
      },
    ],
  },
  {
    slug: 'verwendung-von-ki',
    label: 'Verwendung von KI',
    path: '/verwendung-von-ki',
    summary: 'KI kann beim Schreiben, Strukturieren und Prüfen helfen, ersetzt aber kein Verständnis.',
    lessons: [
      {
        slug: 'grundprinzip',
        title: 'Grundprinzip',
        summary: 'KI ist ein Werkzeug für Vorschläge, Erklärungen und Routineaufgaben.',
        bullets: [
          'Gute Ergebnisse entstehen durch klare Fragen.',
          'Vorschläge müssen geprüft und angepasst werden.',
          'Das Ziel bleibt immer ein verständlicher eigener Code.',
        ],
        hint: 'KI unterstützt, sie übernimmt nicht die Verantwortung.',
      },
      {
        slug: 'deklaration-von-eigenleistung',
        title: 'Deklaration von Eigenleistung',
        summary: 'Es muss nachvollziehbar bleiben, was selbst erarbeitet wurde und was von KI stammt.',
        bullets: [
          'Kennzeichne fremde Hilfe transparent.',
          'Dokumentiere, welche Teile du angepasst hast.',
          'Eigenleistung bedeutet auch, Ergebnisse erklären zu können.',
        ],
        hint: 'Saubere Kennzeichnung schützt vor Missverständnissen.',
      },
      {
        slug: 'umgang-mit-fehlern',
        title: 'Umgang mit Fehlern',
        summary: 'Fehler sind normal und oft der beste Weg, Code wirklich zu verstehen.',
        bullets: [
          'Lies Fehlermeldungen Schritt für Schritt.',
          'Ändere nur eine Sache pro Versuch.',
          'Nutze Tests und Browser-Entwicklertools zum Prüfen.',
        ],
        hint: 'Probleme werden kleiner, wenn du sie systematisch eingrenzt.',
      },
    ],
  },
]

export function findSectionBySlug(slug) {
  return sections.find((section) => section.slug === slug)
}

export function findLessonBySlug(sectionSlug, lessonSlug) {
  const section = findSectionBySlug(sectionSlug)

  if (!section) {
    return null
  }

  const lesson = section.lessons.find((entry) => entry.slug === lessonSlug)

  if (!lesson) {
    return null
  }

  return { section, lesson }
}
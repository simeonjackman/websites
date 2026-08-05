export const sections = [
  {
    slug: 'einfuehrung',
    label: 'Einführung',
    path: '/einfuehrung',
    summary: 'Die Grundlagen der Webentwicklung',
    lessons: [
      { slug: 'wie-webseiten-funktionieren', title: 'Wie Webseiten funktionieren' },
      { slug: 'installation', title: 'Installation' },
      { slug: 'tipps-fuer-vscode', title: 'Tipps für VS Code' },
    ],
  },
  {
    slug: 'git',
    label: 'Git',
    path: '/git',
    summary: 'Versionskontrolle hilft dabei, Änderungen nachvollziehbar und sicher zu speichern.',
    lessons: [
      { slug: 'warum-braucht-es-versionskontrolle', title: 'Warum braucht es Versionskontrolle?' },
      { slug: 'commits', title: 'Commits' },
      { slug: 'haeufige-fehler', title: 'Häufige Fehler' },
    ],
  },
  {
    slug: 'html',
    label: 'HTML',
    path: '/html',
    summary: 'HTML liefert das Grundgerüst einer Seite und beschreibt ihre Bedeutung.',
    lessons: [
      { slug: 'html-als-grundgeruest', title: 'HTML als Grundgerüst' },
      { slug: 'webseiten-strukturieren', title: 'Webseiten Strukturieren' },
      { slug: 'html-attribute', title: 'HTML Attribute' },
    ],
  },
  {
    slug: 'css',
    label: 'CSS',
    path: '/css',
    summary: 'CSS formt aus dem HTML eine gestaltete Oberfläche.',
    lessons: [
      { slug: 'css-als-designsprache', title: 'CSS als Designsprache' },
      { slug: 'css-selektoren', title: 'CSS Selektoren' },
      { slug: 'css-box-modell', title: 'CSS Box Modell' },
      { slug: 'css-animationen', title: 'CSS Animationen' },
    ],
  },
  {
    slug: 'beispiele',
    label: 'Beispiele',
    path: '/beispiele',
    summary: 'Praktische Muster helfen, wiederkehrende Aufgaben schneller umzusetzen.',
    lessons: [
      { slug: 'bilder-zentrieren', title: 'Bilder zentrieren' },
      { slug: 'layouts', title: 'Layouts' },
      { slug: 'bilder-als-hintergrund', title: 'Bilder als Hintergrund' },
      { slug: 'text-neben-bild', title: 'Text neben Bild' },
    ],
  },
  {
    slug: 'verwendung-von-ki',
    label: 'Verwendung von KI',
    path: '/verwendung-von-ki',
    summary: 'KI kann beim Schreiben, Strukturieren und Prüfen helfen, ersetzt aber kein Verständnis.',
    lessons: [
      { slug: 'grundprinzip', title: 'Grundprinzip' },
      { slug: 'deklaration-von-eigenleistung', title: 'Deklaration von Eigenleistung' },
      { slug: 'umgang-mit-fehlern', title: 'Umgang mit Fehlern' },
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

export function getLessonNavigation(sectionSlug, lessonSlug) {
  const section = findSectionBySlug(sectionSlug)

  if (!section) {
    return null
  }

  const index = section.lessons.findIndex((entry) => entry.slug === lessonSlug)

  if (index === -1) {
    return null
  }

  return {
    prev: index > 0 ? section.lessons[index - 1] : null,
    next: index < section.lessons.length - 1 ? section.lessons[index + 1] : null,
  }
}

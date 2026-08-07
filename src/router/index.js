import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EinfuehrungIndex from '../views/sections/einfuehrung/index.vue'
import WieWebseitenFunktionieren from '../views/sections/einfuehrung/wie-webseiten-funktionieren.vue'
import Installation from '../views/sections/einfuehrung/installation.vue'
import TippsFuerVscode from '../views/sections/einfuehrung/tipps-fuer-vscode.vue'

import GitIndex from '../views/sections/git/index.vue'
import WarumBrauchtEsVersionskontrolle from '../views/sections/git/warum-braucht-es-versionskontrolle.vue'
import Commits from '../views/sections/git/commits.vue'
import HaeufigeFehler from '../views/sections/git/haeufige-fehler.vue'

import HtmlIndex from '../views/sections/html/index.vue'
import HtmlAlsGrundgeruest from '../views/sections/html/html-als-grundgeruest.vue'
import WebseitenStrukturieren from '../views/sections/html/webseiten-strukturieren.vue'
import HtmlAttribute from '../views/sections/html/html-attribute.vue'
import CssVerknuepfen from '../views/sections/html/css-verknuepfen.vue'

import CssIndex from '../views/sections/css/index.vue'
import CssAlsDesignsprache from '../views/sections/css/css-als-designsprache.vue'
import CssSelektoren from '../views/sections/css/css-selektoren.vue'
import CssBoxModell from '../views/sections/css/css-box-modell.vue'
import CssAnimationen from '../views/sections/css/css-animationen.vue'

import BeispieleIndex from '../views/sections/beispiele/index.vue'
import BilderZentrieren from '../views/sections/beispiele/bilder-zentrieren.vue'
import Layouts from '../views/sections/beispiele/layouts.vue'
import BilderAlsHintergrund from '../views/sections/beispiele/bilder-als-hintergrund.vue'
import TextNebenBild from '../views/sections/beispiele/text-neben-bild.vue'
import HtmlReferenz from '../views/sections/beispiele/html-referenz.vue'
import CssReferenz from '../views/sections/beispiele/css-referenz.vue'

import VerwendungIndex from '../views/sections/verwendung-von-ki/index.vue'
import Grundprinzip from '../views/sections/verwendung-von-ki/grundprinzip.vue'
import DeklarationVonEigenleistung from '../views/sections/verwendung-von-ki/deklaration-von-eigenleistung.vue'
import UmgangMitFehlern from '../views/sections/verwendung-von-ki/umgang-mit-fehlern.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  { path: '/einfuehrung', name: 'einfuehrung', component: EinfuehrungIndex },
  { path: '/einfuehrung/wie-webseiten-funktionieren', name: 'wie-webseiten-funktionieren', component: WieWebseitenFunktionieren },
  { path: '/einfuehrung/installation', name: 'installation', component: Installation },
  { path: '/einfuehrung/tipps-fuer-vscode', name: 'tipps-fuer-vscode', component: TippsFuerVscode },

  { path: '/git', name: 'git', component: GitIndex },
  { path: '/git/warum-braucht-es-versionskontrolle', name: 'warum-braucht-es-versionskontrolle', component: WarumBrauchtEsVersionskontrolle },
  { path: '/git/commits', name: 'commits', component: Commits },
  { path: '/git/haeufige-fehler', name: 'haeufige-fehler', component: HaeufigeFehler },

  { path: '/html', name: 'html', component: HtmlIndex },
  { path: '/html/html-als-grundgeruest', name: 'html-als-grundgeruest', component: HtmlAlsGrundgeruest },
  { path: '/html/webseiten-strukturieren', name: 'webseiten-strukturieren', component: WebseitenStrukturieren },
  { path: '/html/html-attribute', name: 'html-attribute', component: HtmlAttribute },
  { path: '/html/css-verknuepfen', name: 'css-verknuepfen', component: CssVerknuepfen },

  { path: '/css', name: 'css', component: CssIndex },
  { path: '/css/css-als-designsprache', name: 'css-als-designsprache', component: CssAlsDesignsprache },
  { path: '/css/css-selektoren', name: 'css-selektoren', component: CssSelektoren },
  { path: '/css/css-box-modell', name: 'css-box-modell', component: CssBoxModell },
  { path: '/css/css-animationen', name: 'css-animationen', component: CssAnimationen },

  { path: '/beispiele', name: 'beispiele', component: BeispieleIndex },
  { path: '/beispiele/bilder-zentrieren', name: 'bilder-zentrieren', component: BilderZentrieren },
  { path: '/beispiele/layouts', name: 'layouts', component: Layouts },
  { path: '/beispiele/bilder-als-hintergrund', name: 'bilder-als-hintergrund', component: BilderAlsHintergrund },
  { path: '/beispiele/text-neben-bild', name: 'text-neben-bild', component: TextNebenBild },
  { path: '/beispiele/html-referenz', name: 'html-referenz', component: HtmlReferenz },
  { path: '/beispiele/css-referenz', name: 'css-referenz', component: CssReferenz },

  { path: '/verwendung-von-ki', name: 'verwendung-von-ki', component: VerwendungIndex },
  { path: '/verwendung-von-ki/grundprinzip', name: 'grundprinzip', component: Grundprinzip },
  { path: '/verwendung-von-ki/deklaration-von-eigenleistung', name: 'deklaration-von-eigenleistung', component: DeklarationVonEigenleistung },
  { path: '/verwendung-von-ki/umgang-mit-fehlern', name: 'umgang-mit-fehlern', component: UmgangMitFehlern },

  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 16, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SectionView from '../views/SectionView.vue'
import LessonView from '../views/LessonView.vue'
import { sections } from '../data/siteNavigation'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  ...sections.map((section) => ({
    path: section.path,
    name: section.slug,
    component: SectionView,
    props: () => ({ sectionSlug: section.slug }),
    children: [
      {
        path: ':lessonSlug',
        name: `${section.slug}-lesson`,
        component: LessonView,
        props: (route) => ({
          sectionSlug: section.slug,
          lessonSlug: route.params.lessonSlug,
        }),
      },
    ],
  })),
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AvaliacaoView from '../views/AvaliacaoView.vue'
import RankingView from '../views/RankingView.vue'
import error404View from '@/views/error404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: AvaliacaoView
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView
    },
    {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component:error404View
  }
  ],
})

export default router

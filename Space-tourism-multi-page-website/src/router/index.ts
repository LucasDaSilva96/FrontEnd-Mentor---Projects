import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import Destination from '@/views/Destination.vue'
import Crew from '@/views/Crew.vue'
import Technology from '@/views/Technology.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/crew',
      name: 'crew',
      component: Crew
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecapView from '@/views/RecapView.vue'
import TypingView from '@/views/TypingView.vue'
import Test from '@/views/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/typing',
      name: 'typing',
      component: TypingView
    },
    {
      path: '/recap',
      name: 'recap',
      component: RecapView
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecapView from '@/views/RecapView.vue'
import TypingView from '@/views/TypingView.vue'
import SkillSprint from '@/views/SkillSprint.vue'
import Test from '@/components/test.vue'

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
      path: '/sprint',
      name: 'sprint',
      component: SkillSprint
    },
    
    {
      path: '/recap',
      name: 'recap',
      component: RecapView
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
  ]
})

export default router

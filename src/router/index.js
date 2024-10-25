import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecapView from '@/views/RecapView.vue'
import TypingView from '@/views/TypingView.vue'
import Login from '@/views/Login.vue'
import Sign from '@/views/sign.vue'
import SkillSprint from '@/views/SkillSprint.vue'
import Principale from '@/views/principale.vue'

let isAuthenticated = false; 
const routes = [
  {
    path: '/',
    name: 'login',
    component: Principale
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
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
    path: '/sprint',
    name: 'sprint',
    component: SkillSprint
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/'); // Redirige vers la page de connexion si non authentifié
  } else {
    next(); // Permet l'accès
  }
});

// Expose une méthode pour mettre à jour l'état d'authentification
export function setAuthentication(status) {
  isAuthenticated = status;
}

export default router

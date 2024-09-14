import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Connexion from '../views/Connexion.vue'
import Register from '../views/Register.vue'
import Recites from '../views/Recites.vue'
import { useAuthStore } from '../stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },

    {
      path: '/sign_in',
      name: 'Connexion',
      component: Connexion,
      meta: { requiresAuth: false }
    },

    {
      path: '/login',
      name: 'Register',
      component: Register,
      meta: { requiresAuth: false }
    },

    {
      path: '/recites',
      name: 'Recites',
      component: Recites,
      meta: { requiresAuth: true }
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from '../stores/login'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        requiresAuth: true,
      },
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/photo-details/:id',
      name: 'photo-details',
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import('../components/molecules/PhotoDetails/PhotoDetails.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const loginStore = useLoginStore()
  if (to.meta.requiresAuth && !loginStore.isLoggedIn) {
    loginStore.logout()
    return '/'
  }
})

export default router

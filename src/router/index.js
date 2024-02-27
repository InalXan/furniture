import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/furniture',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/',
      name: 'split',
      component: () => import('../views/SplitView.vue')
    },
    // Admin Panel
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/admin/LoginView.vue')
    },
    {
      path: '/admin/inbox',
      name: 'inbox',
      component: () => import('../views/admin/InboxView.vue')
    }
  ]
})

export default router

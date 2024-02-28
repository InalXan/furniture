import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/furniture/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/furniture',
      name: 'furniture',
      component: HomeView
    },
    {
      path: '/ironwork',
      name: 'ironwork',
      component: () => import('../views/ironwork/HomeView.vue')
    },
        {
      path: '/ironwork/products',
      name: 'ironworkproducts',
      component: () => import('../views/ironwork/IProductView.vue')
    },
    {
      path: '/ironwork/gallery',
      name: 'ironworkgallery',
      component: () => import('../views/ironwork/IGalleryView.vue')
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
      path: '/furniture/products',
      name: 'products',
      component: () => import('../views/furniture/ProductView.vue')
    },
    {
      path: '/furniture/gallery',
      name: 'gallery',
      component: () => import('../views/furniture/GalleryView.vue')
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

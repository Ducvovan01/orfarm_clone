import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: 'notfound',
      component: NotFound      
    }
  ]
})

export default router

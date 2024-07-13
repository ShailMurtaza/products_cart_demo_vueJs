import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import PastOrders from '../views/PastOrders.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Chart from '../components/Chart.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/chart',
    component: Chart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
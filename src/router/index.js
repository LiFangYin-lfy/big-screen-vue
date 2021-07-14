import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: () => import('../views/index.vue')
}, {
  path: '/other',
  name: 'other',
  component: () => import('../views/other.vue')
}]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
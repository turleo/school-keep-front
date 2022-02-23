import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Settings from '../Settings'
import Bells from '../settings/Bells/Bells'
import Subjects from '../settings/Subjects/Subjects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/settings/lessons',
    name: 'Bells',
    component: Bells
  },
  {
    path: '/settings/subjects',
    name: 'Subjects',
    component: Subjects
  }
]

const router = new VueRouter({
  routes
})

export default router

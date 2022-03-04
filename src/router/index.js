import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Settings from '../Settings'
import Bells from '../settings/Bells/Bells'
import Subjects from '../settings/Subjects/Subjects'
import Timetable from '../settings/Timetable/Timetable'
import Countdown from '../views/Countdown'

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
    path: '/countdown',
    name: 'Countdown',
    component: Countdown
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
  },
  {
    path: '/settings/timetable',
    name: 'Timetable',
    component: Timetable
  }
]

const router = new VueRouter({
  routes
})

export default router

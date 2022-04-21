import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Settings from '../Settings'
import Bells from '../settings/Bells/Bells'
import Subjects from '../settings/Subjects/Subjects'
import Timetable from '../settings/Timetable/Timetable'
import Countdown from '../views/Countdown'
import Homework from '../views/Homework'
import AllHomework from '../views/AllHomework'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'drawer.home',
    component: Home
  },
  {
    path: '/about',
    name: 'drawer.about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'drawer.login',
    component: Login
  },
  {
    path: '/register',
    name: 'drawer.register',
    component: Register
  },

  {
    path: '/countdown',
    name: 'drawer.countdown',
    component: Countdown
  },

  {
    path: '/homework/all',
    name: 'drawer.allHomework',
    component: AllHomework
  },
  {
    path: '/homework/:day',
    name: 'drawer.homework',
    component: Homework
  },

  {
    path: '/settings',
    name: 'drawer.settings',
    component: Settings
  },
  {
    path: '/settings/lessons',
    name: 'settings.main.bells',
    component: Bells
  },
  {
    path: '/settings/subjects',
    name: 'settings.main.subjects',
    component: Subjects
  },
  {
    path: '/settings/timetable',
    name: 'settings.main.timetable',
    component: Timetable
  },
  {
    path: '/onboarding',
    name: 'onboarding.title',
    component: () => import('../views/OnBoarding')
  }
]

const router = new VueRouter({
  routes
})

export default router

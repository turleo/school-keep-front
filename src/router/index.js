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
    component: import(Home)
  },
  {
    path: '/login',
    name: 'drawer.login',
    component: Login
  },
  {
    path: '/register',
    name: 'drawer.register',
    component: import(Register)
  },

  {
    path: '/countdown',
    name: 'drawer.countdown',
    component: import(Countdown)
  },

  {
    path: '/homework/all',
    name: 'drawer.allHomework',
    component: import(AllHomework)
  },
  {
    path: '/homework/:day',
    name: 'drawer.homework',
    component: import(Homework)
  },

  {
    path: '/settings',
    name: 'drawer.settings',
    component: import(Settings)
  },
  {
    path: '/settings/lessons',
    name: 'settings.main.bells',
    component: import(Bells)
  },
  {
    path: '/settings/subjects',
    name: 'settings.main.subjects',
    component: import(Subjects)
  },
  {
    path: '/settings/timetable',
    name: 'settings.main.timetable',
    component: import(Timetable)
  }
]

const router = new VueRouter({
  routes
})

export default router

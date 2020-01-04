import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/Home"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"
import Teacher from "../pages/Teacher.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/footer', name: 'footer', component: Footer},
  { path: '/header', name: 'header', component: Header},
  { path: '/teacher', name: 'teacher',component: Teacher}
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

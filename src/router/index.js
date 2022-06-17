import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationForm from "@/components/Authorization-Form";
import AboutPerson from "@/components/About-Person";

const routes = [
  {
    path: '/',
    name: 'login',
    component: AuthorizationForm
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/components/About-Person')
    component: AboutPerson
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

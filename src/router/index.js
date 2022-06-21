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
    component: AboutPerson
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

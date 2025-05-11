import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/team', component: Team },
    { path: '/contact', component: Contact },
    { path: '/blog', component: Blog }
  ]
})

export default router
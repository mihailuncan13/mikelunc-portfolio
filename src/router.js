import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pages/Home.vue'
import Projects from './views/pages/Projects.vue'
import About from './views/pages/About.vue'
import Contact from './views/pages/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }
  ]
})

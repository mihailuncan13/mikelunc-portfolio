import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/pages/Index.vue'
import Projects from './views/pages/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
  ]
})

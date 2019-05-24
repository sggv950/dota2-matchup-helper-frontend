import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Heroes from './views/Heroes.vue'
import Library from './views/Library.vue'
import HeroDetails from './views/HeroDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/',
      name: 'heroes',
      component: Home
    },
    {
      path: '/library',
      name: 'library',
      component: Library
    },
    {
      path: '/library/:heroName',
      name: 'heroDetails',
      component: HeroDetails
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

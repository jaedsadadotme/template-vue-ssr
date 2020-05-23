import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', name: 'Home', component: Home} ,
    ]
  })
}
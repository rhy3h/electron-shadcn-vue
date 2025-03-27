import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

import Home from '@/pages/Home.vue'
import Example from '@/pages/Example.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'example',
          name: 'example',
          component: Example
        }
      ]
    }
  ]
})

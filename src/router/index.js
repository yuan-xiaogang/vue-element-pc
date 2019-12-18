import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      hideInMenu: true
    }
  },
  {
    path: '/test',
    name: 'test',
    component: Home,
    meta: {
      title: '测试'
    },
    children: [
      {
        path: '/index',
        name: 'testIndex',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试首页'
        },
        children: [
          {
            path: '/index3',
            name: 'index3',
            component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试首页3'
        },
        children: [
          {
            path: '/index4',
            name: 'index4',
            component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试首页4'
        },
          }
        ]
          }
        ]
      },
      {
        path: '/index1',
        name: 'testIndex1',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试首页1'
        }
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

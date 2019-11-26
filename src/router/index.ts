import Router from 'vue-router'
import Vue from 'vue'
import layout from '@/components/layout.vue'
// import { Action } from 'vuex-class';
import store from '../store'
Vue.use(Router)
interface routesInterface {
  [index:number]:any;
}
const defaultRoutes:routesInterface = [
  {
    path: '/',
    component: layout
  }
];
const roleRoutes:any = [];
const Routes = new Router({
  routes: [
    // {
    //     path: '/',
    //     component: layout
    // },
    // {
    //   path: '/home',
    //   component: () => require('@/views/home/home.vue')
    // },
    // {
    //   path: '/about',
    //   component: () => require('@/views/about/about.vue')
    // },
    // {
    //   path: '/concat',
    //   component: () => require('@/views/concat/concat.vue')
    // },
  ]
})

store.dispatch('fetchNav').then(res => {
  console.log(store.state.navList, 'fetchNav')
  store.state.navList.forEach((el:any) => {
    console.log(el.name, 'elname')
    if(el.name) {
      roleRoutes.push({
        path: el.link,
        component: import(`@/views/${el.name}`)
      })
    }
  });
  console.log(roleRoutes, 'roleRoutes')
  Routes.addRoutes(roleRoutes)
}).catch(err => {
  console.error(err)
})

export default Routes;
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/home/home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('../views/about/about.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   next();
// })
// export default router


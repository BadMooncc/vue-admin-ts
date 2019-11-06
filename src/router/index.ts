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
  mode: 'history',
  routes: [
    // {
    //     path: '/',
    //     component: layout
    // },
    {
      path: '/home',
      component: () => require('@/views/home/home.vue')
    },
    {
      path: '/about',
      component: () => require('@/views/about/about.vue')
    },
    {
      path: '/concat',
      component: () => require('@/views/concat/concat.vue')
    },
  ]
})

// store.dispatch('fetchNav').then(res => {
//   console.log(store.state.navList, 'fetchNav')
//   store.state.navList.forEach((el:any) => {
//     console.log(el.name)
//     if(el.name) {
//       roleRoutes.push({
//         path: el.link,
//         component: import(`@/views/${el.name}`)
//       })
//     }
//   });
//   console.log(roleRoutes, 'roleRoutes')
//   Routes.addRoutes(roleRoutes)
// }).catch(err => {
//   console.error(err)
// })

export default Routes;


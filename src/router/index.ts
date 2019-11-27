import Router from 'vue-router'
import Vue from 'vue'
import layout from '@/components/layout.vue'
import home from '@/views/home/index.vue'
import about from '@/views/about/index.vue'
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
    {
        path: '/',
        component: layout
    },
    // {
    //   path: '',
    //   component: layout,
    //   // redirect: '/home',
    //   children:[
    //     {
    //       path: '/home',
    //       component: () => import('@/views/home/index.vue'),
    //       name: 'home',
    //       meta: { title: 'home' }
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   component: layout,
    //   children:[
    //     {
    //       path: '/about',
    //       component: () => import('@/views/about/index.vue'),
    //       name: 'about',
    //       meta: { title: 'about1' }
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   component: layout,
    //   children:[
    //     {
    //       path: '/concat',
    //       component: () => import('@/views/concat/index.vue'),
    //       name: 'concat',
    //       meta: { title: 'concat' }
    //     }
    //   ]
    // }
  ]
})

store.dispatch('fetchNav').then(res => {
  console.log(store.state.navList, 'fetchNav')
  store.state.navList.forEach((el:any) => {
    // console.log(el.name, 'elname')
    const config = {
        path: '',
        // meta:el.meta,
        component: layout,
        children:[
          {
            path: el.link,
            name:el.name,
            components:() => import(`@/views/${el.model}/index.vue`),
            meta: { title: 'home' }
          }
        ]
    }
    console.log(config)
    roleRoutes.push(config)
    // console.log(`@/views/${el.model}/index.vue`)
    // if(el.children) {
    //   el.children.forEach((item:any) => {
    //     config.children.push({
    //       path: item.link,
    //       components:() => import(`@/views/${item.model}/${item.name}.vue`),
    //       meta: { title: item.title }
    //     })
    //     // console.log(`@/views/${item.model}/${item.name}.vue`)
    //   })
    // }
  });
  
  console.log(JSON.stringify(roleRoutes), 'roleRoutes')
  Routes.addRoutes(roleRoutes)
  console.log(Routes, 'Routes')
}).catch(err => {
  console.error(err)
})
// Routes.addRoutes(roleRoutes)
export default Routes;
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/home/index.vue'

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
//     component: () => require('../views/about/index.vue')
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


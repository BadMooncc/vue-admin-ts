import Router from 'vue-router'
import Vue from 'vue'
import layout from '@/components/layout.vue'
import home from '@/views/home/index.vue'
import about from '@/views/about/index.vue'
// import { Action } from 'vuex-class';
interface routerConf{
  model: string,
  name: string,
  link: string,
  children: any,
  meta:object
}
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
    }
  ]
})
Routes.beforeEach((to, from, next) => {
  // ...
  document.title = to.meta.title || '未知'
  next()
})
// 动态生成路由
store.dispatch('fetchNav').then((res:object) => {
  store.state.navList.forEach((el:routerConf) => {
    const config:any = {
      path: el.link,
      component: layout,
      children:[
        {
          path: el.link,
          name: el.name,
          meta: el.meta,
          component: () => import(`@/views/${el.name}/index.vue`),
        }
      ]
    }
    if(el.children && el.children.length) {
      el.children.forEach((item:routerConf) => {
        config.children.push({
          path: item.link,
          name: item.name,
          meta: item.meta,
          component: () => import(`@/views/${item.model}/${item.name}.vue`),
        })
      })
    }
    if(el.name) {
      roleRoutes.push(config)
    }
  });
  Routes.addRoutes(roleRoutes)
}).catch(err => {
  console.error(err)
})
// Routes.addRoutes(roleRoutes)
export default Routes;

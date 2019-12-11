import router from './router'
import { getToken } from '@/utils/auth'
router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  // 登陆后不允许访问login页面
  if(hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    }
  } else {
    // 否则
    next()
  }
  
})
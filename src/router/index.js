import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'
Vue.use(Router)


let router=new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },

  ]
})
//添加导航守卫,
router.beforeEach((to,from,next)=>{
  let user=sessionStorage.getItem('user');
  if(to.path=='/login'){
    if(user){
      next({path:'/'})
    }else{
      next();
    }
  }else{
    if(!user){
      next({path:'/login'})
    }else{
      next();
    }
  }
})
export default router;

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'
import Main from '@/views/Sys/Main'
import User from '@/views/Sys/User'
import Menu from '@/views/Sys/Menu'

import store from "../store";
import api   from "../http/api"
import { isURL } from "@/util/validate"

Vue.use(Router)


let router=new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children:[
        //使用动态路由
        // {path:'/sys/main',component:Main,name:'系统介绍'},
        // {path:'/sys/user',component:User,name:'用户管理'},
        // {path:'/sys/menu',component:Menu,name:'菜单管理'}
      ]
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
      getandsetNavMenuTree();
      next();
    }

  }
})

/**
 * 获取动态菜单，并存入store
 */
function getandsetNavMenuTree(){
  //如果菜单和路由已经加载完成就return
  if(store.state.menu.menuRouteLoaded){
    return
  }
  api.menu.getMenu().then((res)=>{
    //这里的type：setNavMenuTree是 mutations的方法
    store.commit('setNavMenuTree',res.data);
    setRoutes(res.data);
    //保存菜单加载状态
    store.commit('setmenuRouteLoaded',true);
  }).catch(function (res){
  })
}
/**
 * 动态设置路由
 */
function setRoutes(MenuTreeData){
    //设置动态路由
    let routes =addDynamicMenuRoutes(MenuTreeData);
    // for(var i = 0;i < routes.length;i++ ){
    //   router.options.routes[0].children.push(routes[i]);
    // }
  router.options.routes[0].children = router.options.routes[0].children.concat(routes);
  router.addRoutes(router.options.routes)
}
/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicMenuRoutes(menuList = [], routes = []){
  var temp = [];
  //循环菜单列表
  for (var i = 0; i < menuList.length; i++) {
    //如果有子菜单
    if (menuList[i].children && menuList[i].children.length >= 1) {
      //就放到temp数组中
      temp = temp.concat(menuList[i].children);
    }
    //如果有路由地址
    else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '');
      // 创建路由配置
      var route = {
        path: menuList[i].url,
        component: null,
        name: menuList[i].name,
        meta: {
          menuId: menuList[i].menuId,
          title: menuList[i].name,
          isDynamic: true,
          isTab: true,
          iframeUrl: ''
        }
      }
      if (isURL(menuList[i].url)) {
        route['path'] = menuList[i].url
        route['name'] = menuList[i].name
        route['meta']['iframeUrl'] = menuList[i].url
      } else {
        try {
          // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
          // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
          let array = menuList[i].url.split('/');
          let url = array[0].substring(0, 1).toUpperCase() + array[0].substring(1) + '/' + array[1].substring(0, 1).toUpperCase() + array[1].substring(1);
          route['component'] = resolve => require([`@/views/${url}`], resolve);
        } catch (e) {
        }
      }
        routes.push(route);

    }
  }
  if (temp.length >= 1) {
    addDynamicMenuRoutes(temp, routes);
  } else {
  }
  return routes;
}



export default router;

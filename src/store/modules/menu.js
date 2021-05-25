export default {
  state: {
    NavMenuTree: [],  // 导航菜单树
    menuRouteLoaded:false //菜单和路由是否加载完成标识
  },
  getters: {

  },
  mutations: {
    setNavMenuTree(state, NavMenuTree){  // 设置导航菜单树
      state.NavMenuTree = NavMenuTree;
    },
    setmenuRouteLoaded(state, menuRouteLoaded){                // 设置导航菜单加载状态
      state.menuRouteLoaded=menuRouteLoaded;
    }
  },
  actions: {

  }
}

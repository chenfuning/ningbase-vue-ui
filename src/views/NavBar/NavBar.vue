<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :class="$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'">
      <img :src="this.logo" /> <div>{{$store.state.app.collapse?'':sysName}}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu default-active="1-1" :class="$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'"  :collapse="$store.state.app.collapse">
<!--      <el-submenu index="1">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">系统管理</span>-->
<!--        </template>-->
<!--        <el-menu-item index="1-1" @click="$router.push('user')">用户管理</el-menu-item>-->
<!--        <el-menu-item index="1-2" @click="$router.push('menu')">菜单管理</el-menu-item>-->

<!--      </el-submenu>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">系统介绍</span>-->
<!--        </template>-->
<!--      </el-submenu>-->
    <NavMenuTree v-for="item in $store.state.menu.NavMenuTree" :key="item.menuId" :menu="item"></NavMenuTree>
    </el-menu>
  </div>
</template>


<script>
import  NavMenuTree from "../../components/NavMenuTree"
export default {
  components: {
    NavMenuTree
  },
  data() {
    return {
      sysName: "NingBase",
      logo: "",
    };
  },
  methods: {
    findNavTree(){

    },

  },
  mounted() {
    this.sysName = "NingBase";
    this.logo = require("@/assets/logo.png");
  }
};
</script>

<style scoped lang="scss">
.menu-bar-container {
  .el-menu {
    position:absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
  .logo {
    position:absolute;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background: #4b5f6e;
    img {
      width: 40px;
      height: 40px;
      border-radius: 0px;
      margin: 10px 10px 10px 10px;
      float: left;
    }
    div {
      font-size: 22px;
      color: white;
      text-align: left;
    }
  }
  .menu-bar-width {
    width: 200px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>

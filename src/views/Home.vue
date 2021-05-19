<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <NavBar></NavBar>
<!--    &lt;!&ndash; 头部区域 &ndash;&gt;-->
    <HeadBar></HeadBar>
<!--    &lt;!&ndash; 主内容区域 &ndash;&gt;-->
<!--    <Main></Main>-->
  </div>
</template>

<script>
  import mock from '@/mock/index.js';
  import HeadBar from "./HeadBar/HeadBar"
  import NavBar from "./NavBar/NavBar"
  // import MainContent from "./MainContent/MainContent"

  export default{
    components:{
      HeadBar,
      NavBar,
      // MainContent
    }
  }
</script>
<style scoped lang="scss">
.container {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #4b5f6e;
}
</style>

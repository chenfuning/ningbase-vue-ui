<template>
  <div class="container">

  </div>

</template>


<script>
export default {
  data() {
    return {
      isCollapse: false,


    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #4b5f6e;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 30px;
      float: right;
      .userinfo-inner {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .logo {
      height: 60px;
      font-size: 22px;
      padding-left: 0px;
      padding-right: 0px;
      border-color: rgba(238, 241, 146, 0.5);
      border-right-width: 1px;
      border-right-style: solid;
      background: #4b5f6e;
      text-align: left;
      img {
        width: 40px;
        height: 40px;
        border-radius: 0px;
        margin: 10px 10px 10px 10px;
        float: left;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 65px;
    }
    .tools {
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      width: 40px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    .hearNavBar {
      background: #4b5f6e;
      padding: 0px 0px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 29px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      .el-menu {
        height: 100%;
        text-align: left;
      }
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      // overflow-y: scroll;
      padding: 0px;
      .breadcrumb-container {
        height: 28px;
        background: #fff;
        border-color: rgba(38, 86, 114, 0.2);
        border-bottom-width: 1px;
        border-bottom-style: solid;
        background: rgba(99, 138, 161, 0.2);
        .breadcrumb-inner {
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 5px;
          text-align: left;
          font-size: 18px;
          width: 100%;
          height: 100%;
          float: left;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>

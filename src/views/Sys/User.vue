<template>
  <div class="" style="width:100%;float: left;left:2%;">
    <!--工具栏-->
    <div class="toolbar" style="float:left; padding:18px;">
<!--      <el-form :inline="true" :model="filters" size="small">-->
      <el-form :inline="true"  size="small">
        <el-form-item>
<!--          <el-input v-model="filters.name" placeholder="用户名"></el-input>-->
          <el-input  placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
<!--          <el-button type="primary" v-on:click="findPage(null)">查询</el-button>-->
          <el-button type="primary" >查询</el-button>
        </el-form-item>
        <el-form-item>
<!--          <kt-button label="新增" perms="sys:user:add" type="primary" @click="handleAdd" />-->
          <el-button type="primary" >新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--表格-->
    <nb-table :data="pageResult" :columns="columns" ></nb-table>
  </div>
</template>

<script>
import nbTable from "../../components/Core/NbTable";
export default {
  name: 'User',
  components:{
    nbTable
  },
  data(){
    return{
      filters: {
        name: ''
      },
      columns: [
        {prop:"userId", label:"ID", minWidth:40, sortable:"false"},
        {prop:"username", label:"用户名", minWidth:120, sortable:"true"},
        {prop:"email", label:"邮箱", minWidth:120, sortable:"true"},
        {prop:"mobile", label:"手机", minWidth:120, sortable:"true"}
      ],
      pageResult: {content:[{
          "userId": 1,
          "username": "admin",
          "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
          "salt": "YzcmCZNvbXocrsz9dm8e",
          "email": "admin@qq.com",
          "mobile": "13612345678",
          "status": 1,
          "deptId": null,
          "deptName": null,
          "createBy": null,
          "createTime": "2018-08-14T03:11:11.000+0000",
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "delFlag": 0
        },
          {
            "userId": 2,
            "username": "Louis",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "louis@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 3,
            "username": "Kobe",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "kobe@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 4,
            "username": "Iverson",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "iverson@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 110,
            "username": "test",
            "password": "123456",
            "salt": "1312321321",
            "email": "test@qq.com",
            "mobile": "test2@qq.com",
            "status": 0,
            "deptId": 110,
            "deptName": null,
            "createBy": 0,
            "createTime": "2018-09-01T05:40:23.000+0000",
            "lastUpdateBy": 0,
            "lastUpdateTime": "2018-09-01T05:40:23.000+0000",
            "delFlag": 0
          }]}//返回结果数据
    }
  }

}
</script>
<style lang="scss">

</style>

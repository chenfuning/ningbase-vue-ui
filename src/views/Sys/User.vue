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
    <nb-table :data="pageResult" :columns="columns"  @findPage="findPage"></nb-table>
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
      pageRequest:{pageNum: 1, pageSize: 8 },
      pageResult: {}//返回结果数据
    }
  },
  methods:{
    // 获取分页数据
    findPage: function (data) {
      //data 是否指定了分页查询的参数
      if(data !== null) {
        this.pageRequest = data.pageRequest
      }
      // this.pageRequest.columnFilters = {name: {name:'name', value:this.filters.name}}
      //分页请求
      this.$api.user.findPage(this.pageRequest).then((res) => {
        this.pageResult = res.data
      })
    }
  }

}
</script>
<style lang="scss">

</style>

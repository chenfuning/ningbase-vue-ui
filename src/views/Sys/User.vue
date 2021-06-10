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
          <el-button type="primary"  @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--表格-->
    <nb-table :data="pageResult" :columns="columns"  @findPage="findPage" @handleEdit="handleEdit"></nb-table>

    <!--新增编辑界面-->
    <el-dialog :title="operation?'新增':'编辑'" width="40%" :visible.sync="editDialogVisible" :close-on-click-modal="false">
      <el-form :model="dataForm" label-width="80px"  ref="dataForm">
        <el-form-item label="ID" prop="id" v-show="false">
          <el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="dataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="dataForm.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="dataForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="dataForm.mobile" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" >提交</el-button>
      </div>
    </el-dialog>
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
        {prop:"id", label:"ID", minWidth:40, sortable:"false"},
        {prop:"name", label:"用户名", minWidth:120, sortable:"true"},
        {prop:"email", label:"邮箱", minWidth:120, sortable:"true"},
        {prop:"mobile", label:"手机", minWidth:120, sortable:"true"}
      ],
      pageRequest:{pageNum: 1, pageSize: 8 },
      pageResult: {},//返回结果数据

      operation: false, // true:新增, false:编辑
      editDialogVisible: false, // 新增编辑界面是否显示
      // 新增编辑界面数据
      dataForm: {
        id: 0,
        name: '',
        password: '123456',
        deptId: 1,
        deptName: '',
        email: 'test@qq.com',
        mobile: '13889700023',
        status: 1
      },
    }
  },
  methods:{
    // 获取分页数据
    findPage: function (data) {
      //data 是否指定了分页查询的参数
      if(data != null) {
        this.pageRequest = data.pageRequest
      }
      // this.pageRequest.columnFilters = {name: {name:'name', value:this.filters.name}}
      //分页请求
      this.$api.user.findPage(JSON.stringify(this.pageRequest)).then((res) => {
          this.pageResult = res
      })
    },
    // 显示新增界面
    handleAdd: function () {
      this.editDialogVisible = true //显示dialog窗口
      this.operation = true         //窗口类型为新增
      this.dataForm =  {
        id: 0,
        name: '',
        password: '',
        deptId: 1,
        deptName: '',
        email: 'test@qq.com',
        mobile: '13889700023',
        status: 1
      }
    },
    // 显示编辑界面
    handleEdit: function (params) {
      this.editDialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
    },
    // 提交表单
    editSubmit: function () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            //对象拷贝
            let params = Object.assign({}, this.dataForm)
            this.$api.user.save(params).then((res) => {
              this.$message({ message: '提交成功', type: 'success' })
              //重置dialog
              this.$refs['dataForm'].resetFields()
              this.editDialogVisible = false
              this.findPage(null)
            })
          })
        }
      })
    },
  }

}
</script>
<style lang="scss">

</style>

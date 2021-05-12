<template>
  <div class="page">
    <h2>Home Page</h2>
    <el-button type="primary" @click="testAxios()">测试axios</el-button>
    <el-button type="primary" @click="testuser()">测试mock user</el-button>
    <el-button type="primary" @click="testmenu()">测试mock menu</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import mock from '@/mock/mock.js';
  export default{
    name:'Home',
    methods:{
      testAxios() {
        axios.get('http://localhost:8080')
          .then(function (res){
            alert(JSON.stringify(res.data));
          }).catch(function (res){
          alert(res.data);
        })
      },
      testuser(){
        axios.get('http://localhost:8080/user')
          .then(function (res){
            alert(JSON.stringify(res.data));
          }).catch(function (res){
          alert(res.data);
        })
      },
      testmenu(){axios.get('http://localhost:8080/menu')
        .then(function (res){
          alert(JSON.stringify(res.data));
        }).catch(function (res){
          alert(res.data);
        })}
    }
  }
</script>

/**
 * 未封装之前的mock
 */
import  Mock from 'mockjs';//ES6 语法引入mock模块
Mock.mock('http://localhost:8080/user',{
  'name':'@name',//随机生成姓名
  'email':'@email',
  'age|1-10':5
});
Mock.mock('http://localhost:8080/menu',{
  'id':'@Increment',
  'name':'menu',
  'order|10-20':12
});
//模拟返回登录
Mock.mock('http://localhost:8080/login',{
    data:{
      'token':'3132312321312'
    }
});


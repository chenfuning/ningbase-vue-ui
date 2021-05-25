// 登录接口
export function login () {
  return {
    // isOpen: false,
    url: 'http://localhost:8080/login',

    type: 'post',
    data: {
      'msg': '登录成功',
      'code': 0,
      'status':200,
      'data': {
        'token': '4344323121398'
        // 其他数据
      }
    }
  }
}

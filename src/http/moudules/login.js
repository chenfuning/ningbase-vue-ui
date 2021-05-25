import axios from '../axiosning'

/*
 * 系统登录模块
 */

// 登录
export const login = data => {
  console.log(login)
  return axios({
    baseURL: 'http://localhost:8080/',
    url: '/login',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    method: 'post',
    data:data,
  })
}


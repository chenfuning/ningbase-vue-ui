import axios from '../axiosning'

/*
 * 系统登录模块
 */

// 登录
export const login = data => {
  return axios({
    baseURL: 'http://localhost:8844/',
    url: '/login',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    method: 'post',
    data:data,
  })
}


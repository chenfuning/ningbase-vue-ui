import axios from './axiosning'

/*
 * 测试接口模块(可删),实际使用api.js
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
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

export const getUser = () => {
  return axios({
    url: '/user',
    method: 'get'
  })
}

export const getMenu = data => {
  return axios({
    url: '/menu',
    method: 'post',
    data
  })
}

// 默认全部导出
export default {
  login,
  getUser,
  getMenu
}

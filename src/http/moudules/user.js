import axios from '../axiosning'

/*
 * 用户管理模块
 */

// 保存
export const save = (params) => {
  return axios({
    url: '/user/save',
    method: 'post',
    data:params
  })
}// 删除
export const del = (params) => {
  return axios({
    url: '/user/delete',
    method: 'post',
    data:params
  })
}
// 分页查询
export const findPage = (pageRequest) => {
  return axios({
    url: '/user/findPage',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    method: 'post',
    data:pageRequest
  })
}

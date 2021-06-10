import axios from "../axiosning";

export const getMenu = () => {
  return axios({
    baseURL: 'http://localhost:8844/',
    url: '/menu/findNavTree',
    method: 'get',
  })
}

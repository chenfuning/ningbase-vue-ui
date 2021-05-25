import axios from "../axiosning";

export const getMenu = () => {
  return axios({
    url: '/menu/findNavTree',
    method: 'get',
  })
}

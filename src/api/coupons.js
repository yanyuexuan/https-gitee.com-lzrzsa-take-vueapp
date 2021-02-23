import axios from "axios";
//查询
export default { 
  get: ({ curPage = 1, eachPage = 10 } = {}) =>
    axios.get('/api/coupons/get_coupons', {
      params: { curPage,eachPage },
    })
    .then(function (response) {
      return response.data
    })
}
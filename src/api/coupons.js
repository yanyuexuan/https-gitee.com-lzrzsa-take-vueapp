import axios from "axios";

export default { 
  //查询
  get: ({ curPage = 1, eachPage = 10 } = {}) =>
    axios.get('/api/coupons/get_coupons', {
      params: { curPage,eachPage },
    })
    .then(function (response) {
      return response.data
    }),
  
  //新增
  add: ({coupon_type,coupon_Name,discount_Amount,status,time_start,time_end}) =>
    axios.post('/api/coupons/add_coupons', {
     coupon_type,coupon_Name,discount_Amount,status,time_start,time_end
    }).then(function (response) {
      return response.data
    }),
  //删除 
  del: ({_id}) =>
    axios.delete('/api/coupons/del_coupons',{ params:{_id }})
    .then(function (response) {
      return response.data
    }),   
}
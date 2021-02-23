import axios from "axios";

export default {
  // 查询订单列表
  get: ({ qurey = {} }) =>
    axios
      .get("/api/orders", {
        params: {
          qurey
        }
      })
      .then(function(response) {
        return response.data;
      }),
  // 修改订单状态
  updateStatus: ({ _id, status }) =>
    axios
      .patch("/api/orders/updateStatus", {
        _id,
        status
      })
      .then(function(response) {
        return response.data;
      }),
  // 通过用户名查询订单
  getUsername: ({ users_num }) =>
    axios
      .get("/api/orders/getUsername", {
        params: {
          users_num 
        }
      })
      .then(function(response) {
        return response.data;
      })
};

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
  updateStatus: ({ _id, status, opinion_type,time=""}) =>
    axios
      .patch("/api/orders/updateStatus", {
        _id,
        status,
        opinion_type,
        time
      })
      .then(function(response) {
        return response.data;
      }),
  // 通过用户名查询订单
  getUsername: ({ adminName }) =>
    axios
      .get("/api/orders/getUsername", {
        params: {
          adminName
        }
      })
      .then(function(response) {
        return response.data;
      })
};

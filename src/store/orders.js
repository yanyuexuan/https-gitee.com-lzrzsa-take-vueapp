import Vue from "vue";
import Vuex from "vuex";
import OrdersApi from "../api/orders";
import _ from "lodash";
var moment = require("moment");

Vue.use(Vuex);

export default {
  // 状态
  namespaced: true,
  state: {
    total: 0,
    rows: []
  },
  // 方法
  mutations: {
    update: (state, payload) => Object.assign(state, payload),
    UpdateStatus: (state, payload) => Object.assign(state, payload),
    updateRows: (state, payload) => (state.rows = payload)
  },
  // 异步请求
  actions: {
    // 查询订单列表
    get: _.debounce(async ({ commit }) => {
      const data = await OrdersApi.get({ qurey: {} });
      data.rows.map(
        item => (
          (item.completed_time = moment(item.completed_time).format(
            " YYYY-MM-DD h:mm:ss"
          )),
          (item.productioned_time = moment(item.productioned_time).format(
            " YYYY-MM-DD h:mm:ss"
          ))
        )
      );
      commit("update", data);
    }, 200),
    // 修改订单状态
    updateStatus: async ({ commit }, { _id, status }) => {
      const data = await OrdersApi.updateStatus({ _id, status });
      commit("UpdateStatus", data);
    },
    // 通过用户名查询订单
    getUsername: async ({ commit }, { users_num }) => {
      const data = await OrdersApi.getUsername({ users_num });
      commit("updateRows", data);
    }
  }
};

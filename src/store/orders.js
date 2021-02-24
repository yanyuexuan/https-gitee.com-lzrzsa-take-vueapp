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
      if (status != "已完成") {
        const data = await OrdersApi.updateStatus({
          _id,
          status,
          opinion_type: "false"
        });
        commit("UpdateStatus", data);
      } else {
        const time = moment().format();
        const data = await OrdersApi.updateStatus({
          _id,
          status,
          opinion_type: "true",
          time
        });
        commit("UpdateStatus", data);
      }
    },
    // 通过用户名查询订单
    getUsername: async ({ commit }, { adminName }) => {
      const data = await OrdersApi.getUsername({ adminName });
      commit("updateRows", data);
    }
  }
};

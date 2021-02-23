import Vue from "vue";
import Vuex from "vuex";
import admin from "./admin.js";
import coupons from "./coupons.js"

Vue.use(Vuex);

export default new Vuex.Store({
  // 全局的状态
  state: {},
  // 全局的方法
  mutations: {},
  actions: {},
  // 分块的引入
  modules: { admin ,coupons}
});

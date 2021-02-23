import shopsApi from "../api/shops";

export default {
  // 命名空间
  namespaced: true,
  // 状态
  state: {
    curPage: 1,
    eachPage: 10,
    maxPage: 0,
    total: 0,
    rows: []
  },
  // 方法
  mutations: {
    getdata: (state, payload) => {
      state.rows = payload;
    }
  },
  // 异步请求
  actions: {
    getShopsList: async ({ commit }) => {
      const rows = await shopsApi.getList();
      commit("getdata", rows);
    }
  }
};

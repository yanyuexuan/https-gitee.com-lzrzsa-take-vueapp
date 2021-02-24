import adminApi from "../api/admin";

export default {
  namespaced: true,

  // 状态
  state: {
    curPage: 1,
    eachPage: 10,
    maxPage: 0,
    total: 0,
    rows: [],
  },
  // 方法
  mutations: {
    update: (state, payload) => Object.assign(state, payload),
  },
  // 异步请求
  actions: {
    // 登录
    logining: async (context, admin) => {
      const { success, token } = await adminApi.login(admin);
      if (success) {
        adminApi.setToken(token);
      }
      return success;
    },
    // 新增
    addAdmin: async (context, admin) => {
      const success = await adminApi.add(admin);
      return success;
    },
    // 查询全部
    get: async ({ state, commit }) => {
      const { curPage, eachPage } = state;
      const data = await adminApi.get({ curPage, eachPage });
      commit("update", data);
    },
    // 查一个
    find: async (context, admin) => {
      const success = await adminApi.find(admin);
      return success;
    },
    // 修改
    updateAdmin: async (context, admin) => {
      const success = await adminApi.update(admin);
      return success;
    },
  },
};

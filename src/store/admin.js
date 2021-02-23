import adminApi from "../api/admin";

export default {
  namespaced: true,

  // 状态
  state: {},
  // 方法
  mutations: {},
  // 异步请求
  actions: {
    logining: async (context, admin) => {
      const { success, token } = await adminApi.login(admin);
      if (success) {
        adminApi.setToken(token);
      }
      return success;
    },
    addAdmin: async (context, admin) => {
      const success = await adminApi.add(admin);
      return success;
    },
  },
};

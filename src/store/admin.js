import adminApi from "../api/admin";

export default {
  // 状态
  state: {},
  // 方法
  mutations: {},
  // 异步请求
  actions: {
    reg: async (context, admin) => {
      const success = await adminApi.reg(admin);
      console.log(success);
    },
  },
};

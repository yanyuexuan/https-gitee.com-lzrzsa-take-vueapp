import usersApi from "../api/users";

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
    // 查询全部
    get: async ({ state, commit }) => {
      const { curPage, eachPage } = state;
      const data = await usersApi.get({ curPage, eachPage });
      commit("update", data);
    },
    // 查一个
    find: async (context, users) => {
      const success = await usersApi.find(users);
      return success;
    },
    // 修改
    updateUsers: async (context, users) => {
      const success = await usersApi.update(users);
      return success;
    },
  },
};

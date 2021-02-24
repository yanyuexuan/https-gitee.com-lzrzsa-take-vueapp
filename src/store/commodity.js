import commodityApi from "@/api/commodity";

export default {
  namespaced: true,
  state: {
    curpage: 1,
    eachpage: 10,
    maxpage: 0,
    total: 0,
    rows: [],
  },

  mutations: {
    update: (state, payload) => {
      Object.assign(state, payload);
    },
    toggle_curpage: (state, payload) => (state.curpage = payload),
    toggle_eachpage: (state, payload) => (state.eachpage = payload),
  },
  actions: {
    get: async ({ state, commit }) => {
      const { curpage, eachpage } = state;
      const data = await commodityApi.get({ curpage, eachpage });
      
      commit("update", data);
    },
    add: async (context, payload) => {
      const data = await commodityApi.addcommodity(payload);

      return data;
    },
    del: async (context, payload) => {
      const data = await commodityApi.delete(payload);

      
      return data;
    },
    delimgs: async (context, payload) => {
      const data = await commodityApi.delimgs(payload);

      return data;
    },
    updatacommodity: async (context, payload) => {
      const data = await commodityApi.updatacommodity(payload);
      console.log(data);
    },
    get_listName: async ({ state,commit }, payload) => {
      const { curpage, eachpage } = state;
      const query = payload;
      const data = await commodityApi.get_listName({
        curpage,
        eachpage,
        query,
      });
      commit("update", data);
      
      return data;
    },
  },

  modules: {},
};

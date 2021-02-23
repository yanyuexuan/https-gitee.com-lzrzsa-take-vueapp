import shopsApi from "../api/shops";

export default {
  // 命名空间
  namespaced: true,
  // 状态
  state: {
    cname: "",
    address: "",
    imgs: [],
    shop_Score: "",
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
    // 商铺列表
    getShopsList: async ({ commit }) => {
      const rows = await shopsApi.getList();
      commit("getdata", rows);
    },
    // 新增商铺
    addShop(state, { cname, address, imgs, shop_Score }) {
      shopsApi.addShop({ cname, address, imgs, shop_Score });
    },
    // 删除商铺
    delShops(state, { _id }) {
      shopsApi.delShop({ _id });
    }
  }
};

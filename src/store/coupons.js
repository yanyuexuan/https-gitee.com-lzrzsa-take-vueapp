import couponsApi from "../api/coupons";
export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 10,
        maxPage: 0,
        total: 0,
        rows:[],
    },
    mutations: {
        updata: (state, payload) => Object.assign(state, payload),
        togglePage: (state, payload) => state.curPage = payload
    },
    actions: {
        get: async ({state,commit}) => {
            const {curPage,eachPage} = state
            const data = await couponsApi.get({curPage,eachPage})
            commit("updata", data)
        }
    },
    modules: {}
};
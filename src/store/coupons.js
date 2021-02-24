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
        //查询列表
        get: async ({state,commit}) => {
            const {curPage,eachPage} = state
            const data = await couponsApi.get({curPage,eachPage})
           
            commit("updata", data)
        },
        //新增
        add:async (state,{coupon_type,coupon_Name,discount_Amount,status,time_start,time_end}) => {
            const data = await couponsApi.add({coupon_type,coupon_Name,discount_Amount,status,time_start,time_end})
            console.log(data);
        },
        //删除
        dels:async (state,{_id}) => {
            couponsApi.del({_id})
        },
        //更新
        upCoupon:async (state,{id,coupon_type,coupon_Name,discount_Amount,status,time_start,time_end}) => {
            const data = await couponsApi.upCoupons({id,coupon_type,coupon_Name,discount_Amount,status,time_start,time_end})
            console.log(data);
        }
    },
    modules: {}
};
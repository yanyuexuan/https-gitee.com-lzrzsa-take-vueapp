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
     get: async ({ state, commit },payload) => {
         console.log(payload);
       const { curpage, eachpage } = state;
       const data = await commodityApi.get({ curpage, eachpage });
       
       commit("update", data);
     }, 
   },

   modules: {},
 };

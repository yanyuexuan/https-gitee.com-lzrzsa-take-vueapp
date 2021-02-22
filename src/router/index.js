import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";
import commodityRouter from "./commodity";
Vue.use(VueRouter);




const routes = [
  {
    path: "/info",
    name: "info",
    component: Info,
    children: [...commodityRouter]
  },
];

const router = new VueRouter({
  routes
});

export default router;

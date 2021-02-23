import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";

import admin from "./admin";
import commodityRouter from "./commodity";
import couponsRouter from "./coupons";
import shopsRouter from "./shops";

Vue.use(VueRouter);

const routes = [
   
  {
    path: "/info",
    name: "info",
    component: Info,

    children: [...commodityRouter, ...couponsRouter, ...shopsRouter,...admin],

    // children: [
    //   {
    //     path: "/orders",
    //     name: "Orders",
    //     component: () => import("../components/orders/orders.vue")
    //   },...commodityRouter,...couponsRouter
    // ]

  }
];

const router = new VueRouter({
  routes,
});

export default router;

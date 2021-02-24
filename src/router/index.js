import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";

import Login from "../views/admin/admin.vue";
import admin from "./admin";
import commodityRouter from "./commodity";
import couponsRouter from "./coupons";
import ordersRouter from "./orders";
import shopsRouter from "./shops";
import users from "./users";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/info",
    name: "info",
    component: Info,
    children: [
      ...commodityRouter,
      ...couponsRouter,
      ...ordersRouter,
      ...admin,
      ...shopsRouter,
      ...users
    ]
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new VueRouter({
  routes
});

export default router;

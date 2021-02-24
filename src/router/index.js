import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";

import Login from "../views/admin/admin.vue";
import admin from "./admin";
import Admin from "../components/admin/adminList.vue";
import AddAdmin from "../components/admin/addAdmin.vue";
import commodityRouter from "./commodity";
import couponsRouter from "./coupons";
import ordersRouter from "./orders";
import shopsRouter from "./shops";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/adminList",
    name: "Admin",
    component: Admin
  },
  {
    path: "/admin/addAdmin",
    name: "AddAdmin",
    component: AddAdmin
  },
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
      ...shopsRouter
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

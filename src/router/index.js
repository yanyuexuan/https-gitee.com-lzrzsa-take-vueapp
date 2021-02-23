import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";
import Admin from "../components/admin/adminList.vue"
import AddAdmin from "../components/admin/addAdmin.vue"
import commodityRouter from "./commodity";
import couponsRouter from "./coupons";
Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/adminList",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/addAdmin",
    name: "AddAdmin",
    component: AddAdmin,
  },
  {
    path: "/info",
    name: "info",
    component: Info,
    children: [
      {
        path: "/orders",
        name: "Orders",
        component: () => import("../components/orders/orders.vue")
      },...commodityRouter,...couponsRouter
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;

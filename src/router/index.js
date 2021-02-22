import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/info",
    name: "info",
    component: Info,
    children: [
      {
        path: "/orders",
        name: "Orders",
        component: () => import("../components/orders/orders.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;

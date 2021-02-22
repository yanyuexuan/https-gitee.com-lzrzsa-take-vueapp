import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/info.vue";
import Admin from "../components/admin/adminList.vue"
import AddAdmin from "../components/admin/addAdmin.vue"
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
    children: []
  },
];

const router = new VueRouter({
  routes
});

export default router;

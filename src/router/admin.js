import Admin from "../components/admin/adminList.vue";
import AddAdmin from "../components/admin/addAdmin.vue";

const routes = [
  {
    path: "adminList",
    name: "adminList",
    component: Admin,
  },
  {
    path: "addAdmin",
    name: "addAdmin",
    component: AddAdmin,
  },
];

export default routes;

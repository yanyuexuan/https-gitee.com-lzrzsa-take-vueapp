import Admin from "../components/admin/adminList.vue";
import AddAdmin from "../components/admin/addAdmin.vue";
import UpdateAdmin from "../components/admin/updateAdmin.vue";

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
  {
    path: "updateAdmin/:_id",
    name: "updateAdmin",
    component: UpdateAdmin,
  },
];

export default routes;

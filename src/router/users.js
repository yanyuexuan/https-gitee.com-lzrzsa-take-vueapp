import UsersList from "../components/users/usersList.vue";
import UpdateUsers from "../components/users/updateUsers.vue";

const routes = [
  {
    path: "usersList",
    name: "usersList",
    component: UsersList,
  },
  {
    path: "updateUsers/:_id",
    name: "updateUsers",
    component: UpdateUsers,
  },
];

export default routes;

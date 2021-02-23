import addShops from "../components/shops/addshop.vue";
import shopsList from "../components/shops/shopsList.vue";
const routes = [
  {
    path: "shopslist",
    name: "shopslist",
    component: shopsList
  },
  {
    path: "addshops",
    name: "addshops",
    component: addShops
  }
];
export default routes;

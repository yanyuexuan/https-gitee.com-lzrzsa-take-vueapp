import addShops from "../components/shops/addshop.vue";
import shopList from "../components/shops/shopsList.vue"
const routes = [
  {
    path: "addshops",
    name: "addshops",
    component: addShops
  },
  {
    path: "shoplist",
    name: "shoplist",
    component: shopList
  }
];
export default routes;

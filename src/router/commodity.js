import CommodityList from "../components/commodity/commoditylist.vue";
import AddCommodity from "../components/commodity/addcommodity.vue";

const routes = [
  {
    path: "commoditylist",
    name: "commoditylist",
    component: CommodityList,
  },
  {
    path: "addcommodity",
    name: "addcommodity",
    component: AddCommodity,
  },
];

export default routes;
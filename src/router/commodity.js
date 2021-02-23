import CommodityList from "../components/commodity/commoditylist.vue";
import AddCommodity from "../components/commodity/addcommodity.vue";
import Upload from "../components/commodity/upload.vue";

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
  {
    path: "upload/:_id",
    name: "upload",
    component: Upload,
  },
];

export default routes;
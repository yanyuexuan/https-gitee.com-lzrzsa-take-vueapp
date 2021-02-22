import CouponsList from "../components/coupons/couponslist.vue";
import AddCoupons from "../components/coupons/addcoupons.vue";

const routes = [
  {
    path: "couponslist",
    name: "couponslist",
    component: CouponsList,
  },
  {
    path: "addcoupons",
    name: "addcoupons",
    component: AddCoupons,
  },
];
export default routes;
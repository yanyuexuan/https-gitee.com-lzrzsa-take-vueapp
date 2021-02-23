<template>
<div>
    <div>sdfg</div>
  <a-table :columns="columns" :data-source="rows" :scroll="{ x: 1500, y: 300 }">
    <a slot="action">删除</a>
  </a-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions,mapState,mapMutations } = createNamespacedHelpers(
  "coupons"
);
const columns = [
  { title: "id", width: 260,dataIndex: "_id",key: "id",fixed: "left",},
  { title: "类型", dataIndex: "coupon_type", key: "coupon_type",width: 100},
  { title: "名称", dataIndex: "coupon_Name", key: "coupon_Name",width: 100},
  { title: "优惠券金额", dataIndex: "discount_Amount", key: "discount_Amount", width: 100 },
  { title: "开始时间", dataIndex: "time_start", key: "time_start", width: 100 },
  { title: "结束时间", dataIndex: "time_end", key: "time_end", width: 100 },
  { title: "状态", dataIndex: "status", key: "status", width: 100 },
  {
    title: "操作",key: "operation",fixed: "right",width: 100,scopedSlots: { customRender: "action" },},
];

// const data = [];
// function ergodic(rows) {
//    rows.map((item, index) => {
//       console.log(item,'lkdls');
//     data.push({
//       key: index,
//       _id: `${item._id}`,
//     //   coupon_Name:`${coupon_Name}`,

//     });
//   });
// }
export default {
  data() {
    return {
      columns,
    };
  },
   // 数据
  computed: {
    ...mapState(["eachPage", "maxPage",'rows',]),
    curPage: {
      get() {
        return this.$store.state.coupons.curPage;
      },
      set(newVal) {
        this.$store.state.coupons.curPage = newVal;
        this.get();
      },
    },
  },
   methods: {
    ...mapActions(["get"]),
    ...mapMutations(["togglePage"]),
  },
 watch: {
    curPage() {
      this.get();
    },
  },
  mounted() {
    this.get();
    // ergodic(this.rows);
  },
};
</script>

<style lang="scss" scoped></style>

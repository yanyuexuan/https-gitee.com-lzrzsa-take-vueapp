<template>
  <a-table :columns="columns" :data-source="rows" :scroll="{ x: 1500, y: 300 }">
    <a slot="action" slot-scope=""> <button>删除</button></a>
    <a slot="action" slot-scope="" id="a"> <button>修改</button></a>
  </a-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");
const columns = [
  {
    title: "商铺ID",
    width: 220,
    dataIndex: "_id",
    key: "_id",
    fixed: "left"
  },
  {
    title: "商铺名称",
    width: 100,
    dataIndex: "cname",
    key: "cname",
    fixed: "left"
  },
  { title: "商铺地址", dataIndex: "address", key: "address", width: 150 },
  { title: "商铺图片", dataIndex: "imgs", key: "imgs", width: 150 },
  { title: "商铺评分", dataIndex: "shop_Score", key: "shop_Score", width: 150 },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 150,
    scopedSlots: { customRender: "action" }
  }
];
export default {
  data() {
    return {
      columns
    };
  },
  computed: { ...mapState(["rows"]) },
  methods: {
    ...mapActions(["getShopsList"])
  },
  mounted() {
    this.getShopsList();
    // console.log(this.rows,1234);
  }
};
</script>

<style scoped>
#a {
  margin-left: 20px;
}
</style>

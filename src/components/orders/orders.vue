<template>
  <div>
    <a-input-search
      placeholder="用户名搜索"
      style="width: 200px;margin-bottom:30px"
      @search="onSearch"
    />
    <a-table
      :columns="columns"
      :data-source="rows"
      rowKey="_id"
      :scroll="{ x: 1500, y: 600 }"
    >
      <a-dropdown :trigger="['click']" slot="action" slot-scope="text">
        <a class="ant-dropdown-link"> 更改订单状态<a-icon type="down" /> </a>
        <a-menu slot="overlay" @click="update(text)">
          <a-menu-item @click="update1" key="未支付">未支付</a-menu-item>
          <a-menu-item @click="update1" key="已支付">已支付</a-menu-item>
          <a-menu-item @click="update1" key="已完成">已完成</a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-table>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("orders");
const columns = [
  {
    title: "订单编号",
    width: 150,
    dataIndex: "_id",
    fixed: "left"
  },
  {
    title: "商家id",
    width: 150,
    dataIndex: "users_num"
  },
  {
    title: "用户id",
    width: 150,
    dataIndex: "shops_num"
  },
  {
    title: "购买商品",
    customRender(rows) {
      return rows.goods.map(item => item.name + "*" + item.number);
    },
    width: 150
  },
  {
    title: "总金额",
    dataIndex: "total_amount",
    width: 100
  },
  {
    title: "订单初始时间",
    dataIndex: "completed_time",
    width: 150
  },
  { title: "订单状态", dataIndex: "status", width: 150 },
  {
    title: "是否打包",
    dataIndex: "send_status",
    width: 100
  },
  { title: "是否使用优惠券", dataIndex: "coupons", width: 150 },
  { title: "备注", dataIndex: "remark", width: 150 },
  {
    title: "用户评论",
    customRender(rows) {
      return rows.opinion.comments;
    },
    width: 150
  },
  {
    title: "订单结束时间",
    dataIndex: "productioned_time",
    width: 150
  },
  {
    title: "操作",
    fixed: "right",
    width: 150,
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      columns,
      status: ""
    };
  },
  computed: {
    ...mapState(["maxPage", "total", "rows"])
  },
  mounted() {
    this.get();
  },
  methods: {
    ...mapActions(["get", "updateStatus", "getUsername"]),
    async update({ _id }) {
      this.updateStatus({ _id, status: this.status });
      this.get();
    },
    update1({ key }) {
      this.status = key;
    },
    onSearch(value) {
      this.getUsername({ users_num: value });
    }
  }
};
</script>

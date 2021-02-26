<template>
  <a-table rowKey="_id" :columns="columns" :data-source="rows">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="pic" slot-scope="text, record">
      <img style="width:50px;heigth:50px" :src="record.avatar" />
    </span>
    <template slot="operation" slot-scope="text, record">
      <a @click="change(record)" href="javascript:;">修改</a>
    </template>
  </a-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("admin");
const columns = [
  {
    title: "id",
    dataIndex: "_id",
    key: "_id",
    width: 250
  },
  {
    title: "账户",
    dataIndex: "adminName",
    key: "adminName",
    width: 200
  },
  {
    title: "密码",
    dataIndex: "adminPassword",
    key: "adminPassword",
    width: 200,
    ellipsis: true
  },
  {
    title: "操作",
    dataIndex: "change",
    key: "change",
    scopedSlots: { customRender: "operation" }
  }
];

export default {
  data() {
    return {
      columns
    };
  },

  computed: {
    ...mapState(["curPage", "eachPage", "maxPage", "total", "rows"])
  },
  // 调用请求
  mounted() {
    this.get();
  },

  methods: {
    ...mapActions(["get", "find"]),

    change: async function({_id}) {
      const data = await this.find({ _id });
      if (data) {
        this.$router.history.push(`/info/updateAdmin/${_id}`);
      }
    }
  }
};
</script>

<style scoped></style>

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
const { mapState, mapActions } = createNamespacedHelpers("users");
const columns = [
  {
    title: "id",
    dataIndex: "_id",
    key: "_id",
    width: 250
  },
  {
    title: "账户",
    dataIndex: "userName",
    key: "userName",
    width: 150
  },
  {
    title: "密码",
    dataIndex: "userPassword",
    key: "userPassword",
    width: 150,
    ellipsis: true
  },
  {
    title: "头像",
    dataIndex: "avatar",
    key: "avatar",
    scopedSlots: { customRender: "pic" },
    width: 150
  },
  {
    title: "联系电话",
    dataIndex: "phone",
    key: "phone",
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

  mounted() {
    this.get();
  },

  methods: {
    ...mapActions(["get", "find"]),

    change: async function(datas) {
      const data = await this.find({ _id: datas._id });
      if (data) {
        this.$router.history.push(`/info/updateUsers/${datas._id}`);
      }
    }
  }
};
</script>

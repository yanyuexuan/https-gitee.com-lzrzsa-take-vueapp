<template>
  <table border="1" style="width:500px;text-align:center">
    <thead>
      <tr>
        <th style="width:50px">id</th>
        <th style="width:50px">姓名</th>
        <th style="width:50px">密码</th>
        <th style="width:50px">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rows" :key="item._id">
        <td>{{ item._id }}</td>
        <td>{{ item.adminName }}</td>
        <td>{{ item.adminPassword }}</td>
        <td>
          <button @click="change" :id="item._id">修改</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("admin");

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["curPage", "eachPage", "maxPage", "total", "rows"]),
  },
  // 调用请求
  mounted() {
    this.get();
  },

  methods: {
    ...mapActions(["get", "find"]),

    change: async function(e) {
      const _id = e.target.id;
      const data = await this.find({ _id });
      if (data) {
        this.$router.history.push(`/info/updateAdmin/${_id}`);
      }
    },
  },
};
</script>

<style scoped></style>

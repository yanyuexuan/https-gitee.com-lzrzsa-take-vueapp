<template>
  <table border="1" style="width:700px;text-align:center">
    <thead>
      <tr>
        <th style="width:50px">id</th>
        <th style="width:50px">账号</th>
        <th style="width:50px">密码</th>
        <th style="width:50px">状态</th>
        <th style="width:50px">头像</th>
        <th style="width:50px">电话</th>
        <th style="width:50px">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rows" :key="item._id">
        <td>{{ item._id }}</td>
        <td>{{ item.userName }}</td>
        <td>{{ item.userPassword }}</td>
        <td>{{ item.state }}</td>
        <td>{{ item.avatar }}</td>
        <td>{{ item.phone }}</td>
        <td>
          <button @click="change" :id="item._id">修改</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["curPage", "eachPage", "maxPage", "total", "rows"]),
  },

  mounted() {
    this.get();
  },

  methods: {
    ...mapActions(["get", "find"]),

    change: async function(e) {
      const _id = e.target.id;
      const data = await this.find({ _id });
      if(data){
          this.$router.history.push(`/info/updateUsers/${_id}`);
      }
    },
  },
};
</script>

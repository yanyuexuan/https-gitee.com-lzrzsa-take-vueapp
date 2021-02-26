<template>
  <a-card hoverable style="width: 400px; height: 300px; margin:auto;">
    <h3>修改信息</h3>
    <div>账号 <input v-model="data.adminName" type="text" /></div>
    <div style="margin:20px 0">
      密码 <input v-model="data.adminPassword" type="text" />
    </div>
    <div style="margin-left:30px">
      <button @click="update">修改</button>
      <button @click="back" style="margin-left:30px">返回</button>
    </div>
  </a-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin");

export default {
  data() {
    return {
      data: {},
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },

  //   created() {
  //     console.log(this.$route.params._id);
  //   },

  async mounted() {
    const data = await this.find(this.$route.params);
    this.data = data;
  },

  methods: {
    ...mapActions(["find", "updateAdmin"]),

    // 修改
    update: async function() {
      const { _id, adminName, adminPassword } = this.data;
      const data = await this.updateAdmin({ _id, adminName, adminPassword });
      if (data) {
        alert("修改成功");
        this.$router.history.push("/info/adminList");
      }
    },

    // 返回
    back: function() {
      this.$router.history.push("/info/adminList");
    },
  },
};
</script>

<style>
h3 {
  text-align: center;
}
</style>

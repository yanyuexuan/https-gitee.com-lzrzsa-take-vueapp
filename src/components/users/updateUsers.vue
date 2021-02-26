<template>
  <a-card hoverable style="width: 400px; height: 400px; margin:auto;">
    <h3>修改信息</h3>
    <div>账号: <input v-model="data.userName" type="text" /></div>
    <div style="margin:20px 0">密码: <input v-model="data.userPassword" type="text" /></div>
    <div>电话: <input v-model="data.phone" type="text" /></div>
    <div style="margin:20px 0">
      状态:
      <input type="radio" id="one" :value="true" v-model="data.state" />
      <label for="one" style="margin-right:20px">true</label>
      <input type="radio" id="two" :value="false" v-model="data.state" />
      <label for="two">false</label>
    </div>
    <div>
      头像:
      <div>
        <img :src="data.avatar" alt="" />
      </div>
    </div>

    <div style="margin:20px 0">
      <button @click="update" >修改</button>
      <button @click="back" style="margin-left:20px">返回</button>
    </div>
  </a-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("users");

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
    ...mapActions(["find", "updateUsers"]),

    // 修改
    update: async function() {
      const { _id, userName, userPassword, state, avatar, phone } = this.data;
      const data = await this.updateUsers({
        _id,
        userName,
        userPassword,
        state,
        avatar,
        phone,
      });
      if (data) {
        alert("修改成功");
        this.$router.history.push("/info/usersList");
      }
    },

    // 返回
    back: function() {
      this.$router.history.push("/info/usersList");
    },
  },
};
</script>

<style>
h3 {
  text-align: center;
}
</style>

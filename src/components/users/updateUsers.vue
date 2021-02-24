<template>
  <a-card hoverable style="width: 400px; height: 300px; margin:auto;">
    <h3>修改信息</h3>
    <div>账号 <input v-model="data.userName" type="text" /></div>
    <div>密码 <input v-model="data.userPassword" type="text" /></div>
    <div>电话 <input v-model="data.phone" type="text" /></div>
    <div>
      状态
      <input type="radio" id="one" :value="true" v-model="data.state" />
      <label for="one">true</label>
      <input type="radio" id="two" :value="false" v-model="data.state" />
      <label for="two">false</label>
    </div>
    <div>
      头像
      <div>
        <img :src="data.avatar" alt="" />
      </div>
    </div>

    <button @click="update">修改</button>
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

    handleSubmit(e) {
      e.preventDefault();
      //   this.form.validateFields(async (err, values) => {
      //     const { adminName, adminPassword } = values;
      //     const data = await this.addAdmin({ adminName, adminPassword });
      //     if (data) {
      //       alert("注册成功");
      //       this.$router.history.push("/info");
      //     } else {
      //       alert("注册失败");
      //       this.$router.history.push("/info/addAdmin");
      //     }
      //   });
    },
  },
};
</script>

<style>
h3 {
  text-align: center;
}
</style>

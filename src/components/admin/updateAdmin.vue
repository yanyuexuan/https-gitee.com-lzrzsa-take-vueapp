<template>
  <a-card hoverable style="width: 400px; height: 300px; margin:auto;">
    <h3>修改信息</h3>
    <div>账号 <input v-model="data.adminName" type="text" /></div>
    <div>密码 <input v-model="data.adminPassword" type="text" /></div>
    <button @click="update">修改</button>
    <!-- <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'adminName',
            {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            },
          ]"
          placeholder="账号"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'adminPassword',
            {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          修改
        </a-button>
      </a-form-item>
    </a-form> -->
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
      const {_id, adminName, adminPassword } = this.data;
      const data = await this.updateAdmin({_id, adminName, adminPassword });
      if (data) {
        alert("修改成功");
        this.$router.history.push("/info/adminList");
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
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

h3 {
  text-align: center;
}
</style>

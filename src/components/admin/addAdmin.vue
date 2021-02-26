<template>
  <a-card hoverable style="width: 400px; height: 300px; margin:auto;">
    <h3>新增管理员</h3>
    <a-form
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
                { required: true, message: 'Please input your username!' }
              ]
            }
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
                { required: true, message: 'Please input your Password!' }
              ]
            }
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-div-item>选择权限：</a-div-item>
        <a-Switch
          checkedChildren="超管"
          unCheckedChildren="店家"
          v-decorator="[
            'root',
            {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          新增
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin");

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    ...mapActions(["addAdmin"]),

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        const { adminName, adminPassword, root } = values;
        console.log(adminName, adminPassword, root);
        const data = await this.addAdmin({ adminName, adminPassword, root });
        if (data) {
          alert("注册成功");
          this.$router.history.push("/info/adminList");
        } else {
          alert("注册失败");
          this.$router.history.push("/info/addAdmin");
        }
      });
    }
  }
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

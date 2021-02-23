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
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="">
          Forgot password
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          新增
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    ...mapActions(["reg"]),

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        console.log(values);
        const { adminName, adminPassword } = values;
        const data = await this.reg({ adminName, adminPassword });
        console.log(data);
      });
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

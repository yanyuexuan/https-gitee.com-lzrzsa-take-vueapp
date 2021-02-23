import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//引入全局状态
import store from "./store";
import "./untils/components.untils";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

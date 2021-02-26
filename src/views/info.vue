<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed"  collapsible>
      <div class="logo"/>
      <a-menu
        theme="dark"
        :default-selected-keys="['1']"
        mode="inline"
        @click="handleClick"
      >
        <template v-for="item in data">
          <a-sub-menu :key="item.url">
            <span slot="title"
              ><a-icon :type="item.type" /><span>{{ item.title }}</span></span
            >
            <a-menu-item :key="item.urlA"> {{ item.titleA }} </a-menu-item>
            <template :v-if="item.titleB">
              <a-menu-item :key="item.urlB">{{ item.titleB }} </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;padding-left:20px;font-weight:bold">
        奈雪の茶后台管理系统
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0"> </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    this.data = JSON.parse(localStorage.index_data);
    return {
      collapsed: false
    };
  },
  methods: {
    handleClick({ key }) {
      this.$router.push({ path: `${key}` });
    }
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

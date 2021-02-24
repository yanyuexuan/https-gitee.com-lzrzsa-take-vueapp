<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        :default-selected-keys="['1']"
        mode="inline"
        @click="handleClick"
      >
        <a-sub-menu key="sub0">
          <span slot="title"><a-icon type="team" /><span>管理员</span></span>
          <a-menu-item key="/info/adminList">
            管理员列表
          </a-menu-item>
          <a-menu-item key="/info/addAdmin">
            新增管理员
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="team" /><span>用户</span></span>
          <a-menu-item key="/info/usersList">
            用户列表
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>店铺</span></span>
          <a-menu-item key="/info/addshops">
            新增店铺
          </a-menu-item>
          <a-menu-item key="/info/shopslist">
            所有店铺
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="shopping" /><span>商品</span></span>
          <a-menu-item key="/info/commoditylist">
            商品信息
          </a-menu-item>
          <a-menu-item key="/info/addcommodity">
            新增商品
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title"><a-icon type="team" /><span>订单</span></span>
          <a-menu-item key="/info/ordersList">
            订单列表
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
          <span slot="title"><a-icon type="team" /><span>优惠劵</span></span>
          <a-menu-item key="/info/couponslist">
            优惠券信息
          </a-menu-item>
          <a-menu-item key="/info/addcoupons">
            新增优惠券
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        1234
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleClick({ key }) {
      this.$router.push({ path: `${key}` });
    },
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

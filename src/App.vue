<template>
 <a-ConfigProvider :locale="locale"> 
  <div id="app">
    <router-view/>
  </div>
  </a-ConfigProvider>
  
</template>

<script>
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
  export default {
    data() {
      return {
        locale: zhCN,
      };
    },
  };
</script>
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001", // target host 主机地址
        changeOrigin: true, // needed for virtual hosted sites 需要虚拟主机站点
        pathRewrite: {
          // 重写路径
          "^/api": "/" // rewrite path
        },
        "/foo": {
          target: "<other_url>"
        }
      }
    }
  }
};

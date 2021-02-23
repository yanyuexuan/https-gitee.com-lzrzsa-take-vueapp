import axios from "axios";

export default {
  reg: ({ adminName, adminPassword } = {}) =>
    axios
      .post("/api/reg", {
        adminName,
        adminPassword
      })
      .then((response) => response.data)
      .catch(console.log),

  //保存数据
  // setToken: (token) => (localStorage[".t"] = token),
  //获取数据
  // getToken: () => localStorage[".t"],
};

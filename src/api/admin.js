import axios from "axios";

export default {
  login: ({ adminName, adminPassword } = {}) =>
    axios
      .post("/api/admin/login", {
        adminName,
        adminPassword,
      })
      .then((response) => response.data)
      .catch(console.log),

  add: ({ adminName, adminPassword } = {}) =>
    axios
      .post("/api/admin/add", {
        adminName,
        adminPassword,
      })
      .then((response) => response.data)
      .catch(console.log),

  //保存数据
  setToken: (token) => (localStorage[".t"] = token),
  //获取数据
  getToken: () => localStorage[".t"],
};

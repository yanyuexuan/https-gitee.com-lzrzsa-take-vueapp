import axios from "axios";

export default {
  login: ({ userName, passWord } = {}) =>
    axios
      .post("/api/users/login", {
        userName,
        passWord,
      })
      .then((response) => response.data)
      .catch(console.log),

  reg: ({ userName, passWord } = {}) =>
    axios
      .post("/api/admin/addAdmin", {
        userName,
        passWord,
      })
      .then((response) => response.data)
      .catch(console.log),

  //保存数据
  setToken: (token) => (localStorage[".t"] = token),
  //获取数据
  getToken: () => localStorage[".t"],
};

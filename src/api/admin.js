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
  // 查询全部
  get: ({ curPage = 1, eachPage = 10 } = {}) =>
    axios
      .get("api/admin/get", {
        params: {
          curPage,
          eachPage,
        },
      })
      .then(function(response) {
        return response.data;
      }),
  // 查一个
  find: async ({ _id } = {}) => {
    const { data } = await axios.get("/api/admin/find", {
      params: {
        _id,
      },
    });
    return data;
  },
  // 修改
  update:({_id, adminName, adminPassword } = {}) =>
  axios
    .put("/api/admin/update", {
      _id,
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

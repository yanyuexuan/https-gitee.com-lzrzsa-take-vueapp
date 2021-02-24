import axios from "axios";

export default {
  // 查询全部
  get: ({ curPage = 1, eachPage = 10 } = {}) =>
    axios
      .get("api/users/get", {
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
    const { data } = await axios.get("/api/users/find", {
      params: {
        _id,
      },
    });
    return data;
  },
  // 修改
  update: ({ _id, userName, userPassword, state, avatar, phone } = {}) =>
    axios
      .put("/api/users/update", {
        _id,
        userName,
        userPassword,
        state,
        avatar,
        phone,
      })
      .then((response) => response.data)
      .catch(console.log),
};

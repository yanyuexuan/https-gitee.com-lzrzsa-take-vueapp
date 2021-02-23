import axios from "axios";

export default {
  get: async ({ curpage = 1, eachpage = 10 } = {}) => {
    const { data } = await axios.get("api/commodity", {
      params: {
        curpage,
        eachpage,
      },
    });
    return data;
  },
  delete: async (_id) => {
    const { data } = await axios.delete("api/commodity/del", {
      data: {
        _id,
      },
    });
    return data;
  },
  addcommodity: async (commodity) => {
    const { data } = await axios({
      method: "post",
      url: "/api/commodity/add",
      data: commodity,
    });

    return data;
  },
  updatacommodity: async (student) => {
    const { data } = await axios({
      method: "put",
      url: "/api/commodity/set",
      data: student,
    });

    return data;
  },
  //删除上传图片
  delimgs: async (img) => {
    const { data } = await axios.delete("img/commodity/", {
      data: img
    });
    return data;
  },
};

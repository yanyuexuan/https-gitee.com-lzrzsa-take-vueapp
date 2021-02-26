import axios from "axios";
export default {
  getList: async () => {
    const { data } = await axios.get("api/shops");
    return data;
  },
  addShop: ({ cname, address, imgs, shop_Score }) => {
    axios
      .post("api/shops/add_shops", { cname, address, imgs, shop_Score })
      .then(response => response.data);
  },
  delShop: ({ _id }) => {
    axios
      .delete("api/shops/del_shops", { params: { _id } })
      .then(response => response.data);
  },
  changShop: ({ _id, cname, address, imgs = [], shop_Score }) => {
    axios
      .post("api/shops/chang_shops", { _id, cname, address, imgs, shop_Score })
      .then(response => response.data);
  },
  getShopText: async ({ _id }) => {
    const { data } = await axios.get("api/shops/get_shops", {
      params: { _id }
    });
    return data;
  },
  //删除上传图片
  delimgs: async img => {
    const { data } = await axios.delete("img/shops/", {
      data: img
    });
    return data;
  }
  // getShopText: ({ _id }) => {
  //   axios
  //     .get("api/shops/get_shops", { params: { _id } })
  //     .then(response =>  response.data);
  // }
};

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
  }
};

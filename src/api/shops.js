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
  changShop: ({
    _id,
    cname,
    address,
    imgs = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=724619198,3564774034&fm=26&gp=0.jpg",
    shop_Score
  }) => {
    axios
      .post("api/shops/chang_shops", { _id, cname, address, imgs, shop_Score })
      .then(response => response.data);
  },
  getShopText: async ({ _id }) => {
    const { data } = await axios.get("api/shops/get_shops", {
      params: { _id }
    });
    return data;
  }
  // getShopText: ({ _id }) => {
  //   axios
  //     .get("api/shops/get_shops", { params: { _id } })
  //     .then(response =>  response.data);
  // }
};

import axios from "axios";
export default {
  getList: async() => {
    const { data } = await axios.get("api/shops");
    return data;
   
  },
  
};

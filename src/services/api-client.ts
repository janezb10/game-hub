import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7aa07d08fab34000897462710f53440c",
  },
});

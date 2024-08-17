import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5527b94bc8f641bb8a6292b2efa52896",
  },
});

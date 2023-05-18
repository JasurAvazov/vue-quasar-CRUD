import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "http://94.158.54.194:9092" });

export default boot(({ app, store }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;
});

export { api };

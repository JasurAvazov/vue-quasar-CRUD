import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "http://94.158.54.194:9092" });

export default boot(({ app, store }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;

  const url = "/api/product";

  api
    .get(url)
    .then((response) => {
      console.log(response.data);
      store.commit("updateArr", response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  // const createData = {
  //   product_type_id: 5,
  //   name_uz: "anadsnas",
  //   cost: 400030,
  //   address: "Qoraqalpog'istdson Respublikasi",
  //   created_date: 1684405308000,
  // };

  // api
  //   .post(url, createData)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
});

export { api };

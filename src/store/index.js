import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function () {
  const Store = createStore({
    modules: {},
    state: {
      arr: 0,
    },
    mutations: {
      updateArr(state, payload) {
        state.arr = payload;
      },
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});

import * as components from "./components";

const winVue = {
  install(app) {
    for (let cmp in components) {
      app.use(cmp);
    }
  },
};

export default winVue;

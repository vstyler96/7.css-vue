import * as components from "./base/index.js";

const winVue = {
  install(app) {
    Object.values(components).forEach(cmp => {
      app.component(cmp.name, cmp);
    });
  },
};

export default winVue;

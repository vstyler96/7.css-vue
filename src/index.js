import components from "./components/index.js";

const winVue = {
  install(app) {
    Object.entries(components).forEach(([name, cmp]) => app.component(name, cmp));
  },
};

export default winVue;

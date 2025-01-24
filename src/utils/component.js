export function Plugin(name, component) {
  return {
    install(app) {
      app.component(name, component);
    },
  };
}

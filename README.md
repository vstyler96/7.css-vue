# 7.css-vue

[![npm](https://img.shields.io/npm/v/7.css-vue)](http://npm.im/7.css-vue)
[![npm](https://img.shields.io/npm/dt/7.css-vue)](http://npm.im/7.css-vue)

Vue 3 component library for recreating Windows 7 UI.

## 🚀 Quick start

```sh
npm i 7.css-vue 7.css
# or
yarn add 7.css-vue 7.css
# or
pnpm add 7.css-vue 7.css
# or
bun add 7.css-vue 7.css
```


```js
// main.js or index.js
import { createApp } from "vue";
import Win from "7.css-vue";

// Import the additiona CSS fixes + new component style bundle
import '7.css-vue/css';

const app = createApp(...);

app.use(Win);

app.mount('#app');
```

## 🚚 Roadmap
1. [ ] Add RouterLink support
2. [ ] Add custom Icons (WIP...),
3. [ ] Improve Typescript implementation
4. [ ] Clean-up code
5. [ ] Migrate component styles to Tailwind, and package the final code. 

## 📚 Documentation

_Refer to the [official site](https://win7.kingbeencent.dev/)_ (Coming soon)

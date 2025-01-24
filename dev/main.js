import { createApp } from 'vue';
import Win from '../src/index';
import App from './App.vue';
import "7.css";

const app = createApp(App);

app.use(Win);

app.mount('#app');

import { createApp } from 'vue';
import Win from '../src/index';
import App from './App.vue';

const app = createApp(App);

app.use(Win);

app.mount('#app');

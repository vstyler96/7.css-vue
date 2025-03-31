import { createApp } from 'vue';
import Win7 from '../src/index';
import App from './App.vue';

const app = createApp(App);

app.use(Win7);

app.mount('#app');

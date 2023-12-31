import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import ElementPlus from "element-plus";

import "~/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

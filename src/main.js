import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const requireComponent = require.context("./components/", true, /\.(js|vue)$/i);
const app = createApp(App);
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
    app.component(componentName, componentConfig.default || componentConfig);
});

app.use(router).mount("#app");

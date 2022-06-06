import { createApp } from "vue";
import App from "./App.vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context("./components/", true, /\.(js|vue)$/i);
const app = createApp(App);
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
    );
    app.component(componentName, componentConfig.default || componentConfig);
});

app.mount("#app");

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css"


import "bootstrap"
// Create your Vue 3 app
const app = createApp(App)

// Choice #1: register all components. Impacts global bundle size
app.use(ElementPlus, {
    // options

})

app.use(router);
app.mount('#app')
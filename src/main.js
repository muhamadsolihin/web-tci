import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import AOS from 'aos'
import 'aos/dist/aos.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/scss/style.scss'


import "bootstrap"
// Create your Vue 3 app
const app = createApp(App)

// Choice #1: register all components. Impacts global bundle size
app.use(ElementPlus, {
    // options

})

app.use(router);
app.mount('#app')



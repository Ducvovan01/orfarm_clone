import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from "axios";
import store from './stores/auth.js';
import VueSweetalert2 from "vue-sweetalert2";
import 'font-awesome/scss/font-awesome.scss'
import 'swiper/css';
import App from './App.vue'
import router from './router'




const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(store)
app.use(VueSweetalert2);

app.mount('#app')

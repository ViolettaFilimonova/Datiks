import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuex from 'vuex'
// import axios from "axios";
//import axiosVue from 'vue-axios'
createApp(App).use(store).use(router).mount('#app')

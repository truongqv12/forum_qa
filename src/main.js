import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

import User from './Helpers/User'
window.User = User;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

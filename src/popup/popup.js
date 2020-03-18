//Frameworks
import Vue from 'vue'
import Vuetify from "vuetify";
import VueRouter from 'vue-router';

//App
import App from './app/App.vue'

//pages
import Home from './app/pages/home/home.vue'
import SecondPage from './app/pages/secondPage/SecondPage.vue'

//Uses
Vue.use(Vuetify);
Vue.use(VueRouter);

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

const routes = [
  { path: '/home', component: Home },
  { path: '/secondPage', component: SecondPage },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  created() {
    this.$router.push('home');
  },
  render: h => h(App)
})

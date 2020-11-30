import Vue from 'vue';
import App from './App.vue';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import LiquorTree from 'liquor-tree';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false;
// Vue.config.silent = true;

Vue.use(LiquorTree);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App)
}).$mount('#app');

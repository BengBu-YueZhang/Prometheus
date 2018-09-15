import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.less';
import './assets/common.less';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

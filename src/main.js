// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
// 引入全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import UrlApi from './api/UrlApi'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.use(MintUI);

Vue.config.productionTip = false
Vue.prototype.$urlApi = UrlApi;
Vue.prototype.getViewportSize = function(){
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

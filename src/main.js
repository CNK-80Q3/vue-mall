import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import toast from "./components/common/toast";

Vue.config.productionTip = false;

// 给Vue原型添加时间总线 $bus
Vue.prototype.$bus = new Vue();
// 使用toast插件
Vue.use(toast);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

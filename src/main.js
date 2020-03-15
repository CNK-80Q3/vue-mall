import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";
import toast from "./components/common/toast";

Vue.config.productionTip = false;

// 给Vue原型添加时间总线 $bus
Vue.prototype.$bus = new Vue();
// 使用toast插件
Vue.use(toast);

// 移动端需要判断双击所以有300毫秒点击延时，这个插件可以解决延时
FastClick.attach(document.body);

//  图片懒加载插件，在图片绑定地址的地方把属性 :src 改为 v-lazy
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
  // 还有很多其他的配置。。。
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

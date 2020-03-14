import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null
    };
  },
  mounted() {
    // 使用防抖函数返回一个新的函数，然后使用事件总线执行这个函数
    this.newRefresh = debounce(this.$refs.scroll.loadRefresh, 100);

    // 将监听事件保存至itemImageListener
    this.itemImageListener = () => {
      this.newRefresh();
    };
    // 事件总线监听图片加载
    this.$bus.$on("itemImageLoad", this.itemImageListener);
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollGoto(0, 0, 300);
    }
  }
};

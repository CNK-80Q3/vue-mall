<template>
  <div id="detail">
    <DetailNavBar
      class="detail-nav"
      @DetailNavSwitch="DetailNavSwitch"
      ref="navbar"
    />
    <Scroll
      class="scroll-content"
      ref="scroll"
      :probe="3"
      @contentScroll="contentScroll"
    >
      <DetailSwiper :top-images="topImages" />
      <DetailBaseInfo :goods-base-info="goodsBaseInfo" />
      <DetailShopInfo :shop-info="shopInfo" />
      <DetailGoodsInfo
        :detail-info="detailInfo"
        @DetailImageLoad="DetailImageLoad"
      />
      <DetailParamInfo ref="param" :param-info="paramInfo" />
      <DetailCommentInfo ref="comment" :comment-info="commentInfo" />
      <GoodsList :goods="recommendInfo" ref="recommend" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop" />
    <DetailBottomBar @addToCart="addToCart" />
    <!-- <Toast :message="successAddMessage" :show="isShowToast" /> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
// import Toast from "components/common/toast/Toast";
import GoodsList from "components/content/goods/GoodsList";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import {
  getDetail,
  getRecommend,
  Goods,
  GoodsParam,
  Shop
} from "network/detail";

import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,
    DetailBottomBar
    // Toast
  },
  data() {
    return {
      id: null,
      topImages: [],
      goodsBaseInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTopYs: [],
      getThemeTopY: null,
      areaIndex: 0
      // successAddMessage: "",
      // isShowToast: false
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    // 保存传入的id
    this.id = this.$route.params.id;

    // 根据id请求详情数据
    getDetail(this.id).then(res => {
      const data = res.result;
      // 获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 获取商品数据
      this.goodsBaseInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺数据
      this.shopInfo = new Shop(data.shopInfo);
      //获取商品详细信息
      this.detailInfo = data.detailInfo;
      //获取商品参数数据
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 获取推荐信息
    getRecommend().then(res => {
      this.recommendInfo = res.data.list;
    });

    // 获取模块定位，并进行防抖包装
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.$refs.param.$el.offsetTop &&
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.$refs.comment.$el.offsetTop &&
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.$refs.recommend.$el.offsetTop &&
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    }, 100);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImageListener);
  },
  methods: {
    ...mapActions(["addCart"]),
    DetailImageLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },
    DetailNavSwitch(index) {
      this.$refs.scroll.scrollGoto(0, -this.themeTopYs[index], 0);
    },
    // DetailNavSwitch(item) {
    //   let positionY = 0
    //   switch (item) {
    //     case '商品':
    //       this.$refs.scroll.scrollGoto(0, positionY, 100)
    //       break
    //     case '参数':
    //       positionY = -(this.$refs.param.$el.offsetTop)
    //       console.log(positionY)
    //       this.$refs.scroll.scrollGoto(0, positionY, 100)
    //       break
    //     case '评论':
    //       positionY = -(this.$refs.comment.$el.offsetTop)
    //       this.$refs.scroll.scrollGoto(0, positionY, 100)
    //       break
    //     case '推荐':
    //       positionY = -(this.$refs.recommend.$el.offsetTop)
    //       this.$refs.scroll.scrollGoto(0, positionY, 100)
    //       break
    //   }
    // }
    contentScroll(position) {
      let positionY = -position.y;
      let themeTopYs = this.themeTopYs;
      // 奇技淫巧，给数组追加一个最大值，省得分两种情况
      // 虽然MAX_VALUE占内存，但是判断更简单了，用空间换时间
      themeTopYs.push(Number.MAX_VALUE);
      let len = themeTopYs.length;

      for (let i = 0; i < len - 1; i++) {
        if (
          this.areaIndex !== i &&
          i < len - 1 &&
          positionY >= themeTopYs[i] &&
          positionY < themeTopYs[i + 1]
        ) {
          this.areaIndex = i;
          this.$refs.navbar.currentIndex = this.areaIndex;
        }
        // 普通做法
        // if (this.areaIndex !== i && ((i < len - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === len - 1 && positionY >= this.themeTopYs[i]))) {
        //   this.areaIndex = i
        //   console.log(this.areaIndex)
        //   this.$refs.navbar.currentIndex = this.areaIndex
        // }
      }
      this.isShowBackTop = -position.y > 1000;
    },
    addToCart() {
      const product = {};
      product.id = this.id;
      product.image = this.topImages[0];
      product.title = this.goodsBaseInfo.title;
      product.desc = this.goodsBaseInfo.desc;
      product.price = this.goodsBaseInfo.lowNowPrice;
      // 将actions中的方法映射到methods中可以直接调用，而不通过this.$store
      this.addCart(product).then(resolve => {
        // 由于Toast是很多地方都要使用的组件，而普通方式封装的插件使用起来太麻烦，所以用插件的方式封装，复用的时候一行代码就搞定了。
        // this.successAddMessage = resolve
        // this.isShowToast = true
        // setTimeout(() => {
        //   this.isShowToast = false
        //   this.successAddMessage = ""
        // }, 1500)
        this.$toast.showMessage(resolve, 1500);
      });
      // this.$store.dispatch("addToCart", product).then(res => console.log(res), rej => console.log(rej));
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 10000;
  background: #fff;
}

.detail-nav {
  position: relative;
  z-index: 10;
  background: #fff;
}

.scroll-content {
  height: calc(100% - 93px);
}
</style>

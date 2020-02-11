<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Scroll class="content" ref="scroll" @ctrlShow="ctrlShow" :probe="3" @pullingUp="pullingUp">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <HomeRecommendView :recommends="recommends" />
      <HomeFeatureView />
      <TabControl :tabs="['流行', '新款', '精选']" @tabSwitch="tabSwitch" ref="tabControl2" />
      <GoodsList :goods="showGoods" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from 'views/home/childComps/HomeSwiper'
import HomeRecommendView from 'views/home/childComps/HomeRecommendView'
import HomeFeatureView from 'views/home/childComps/HomeFeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home'

import { debounce } from 'common/utils'

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      currentType: 'pop',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      isShowBackTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    // 使用防抖函数
    const refresh = debounce(this.$refs.scroll.loadRefresh, 50)

    // 时间总线监听图片加载
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  methods: {
    /* *
    事件监听相关
    * */
    tabSwitch(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      // this.$refs.tabControl1.currentIndex = index
      // this.$refs.tabControl2.currentIndex = index
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    ctrlShow(position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    pullingUp() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },

    /* *
    网络请求相关
    * */
    // 获取多个数据
    swiperImageLoad() {
      //2. 获取tabControl的offsetTop
      // 所有的组件都有$el 属性，用于获取组件中的元素
      // this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      console.log(this.tabOffsetTop)
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.result = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // res -> pop 的第一页数据
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.type = res
        this.goods[type].page + 1
      })
    }
  }
}
</script>

<style  scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  height: 44px;
}

.content {
  width: 100%;
  top: 44px;
  bottom: 49px;
  /* height: calc(100vh - 93px); */
  position: absolute;
}
</style> 
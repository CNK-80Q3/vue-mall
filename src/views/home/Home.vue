<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
    <HomeRecommendView :recommends="recommends"/>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import HomeSwiper from 'views/home/childComps/HomeSwiper'
import HomeRecommendView from 'views/home/childComps/HomeRecommendView'
import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    TabControl,
    HomeRecommendView
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: []
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultidata();
  },
  methods: {
    tabClick(index){
      switch(index){
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      
    },
    // 获取多个数据
    swiperImageLoad() {
      //2. 获取tabControl的offsetTop
      // 所有的组件都有$el 属性，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      console.log(this.tabOffsetTop)
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.result = res;
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
}
</script>

<style  scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;

  z-index: 9;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style> 
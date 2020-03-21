<template>
  <div class="category-content">
    <NavBar class="category-nav">
      <div slot="center">商品分类</div>
    </NavBar>
    <Sidebar
      class="sidebar-content"
      :category-list="categoryList"
      @selectCategory="selectCategory"
    />
    <main>
      <TabControl :tabs="tabs" @tabSwitch="tabSwitch" ref="tabControl1" v-show="isTabFixed" />
      <Scroll class="scroll-wrapper" ref="scroll" @contentScroll="contentScroll" :probe="3">
        <SubCategory :subCategoryList="subCategoryList" />
        <TabControl :tabs="tabs" @tabSwitch="tabSwitch" ref="tabControl2" />
        <CategoryDetail :categoryDetail="showCategoryDetail" />
      </Scroll>
    </main>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import Sidebar from './childComps/Sidebar'
import SubCategory from './childComps/SubCategory'
import CategoryDetail from './childComps/CategoryDetail'

import { getCategory, getSubCategory, getCategoryDetail } from 'network/category'
import { POP, SELL, NEW } from "common/const"

export default {
  name: 'Category',
  components: {
    Scroll,
    NavBar,
    TabControl,
    Sidebar,
    SubCategory,
    CategoryDetail
  },
  data() {
    return {
      categoryList: [],
      subCategoryList: [],
      currentIndex: -1,
      tabs: ["流行", "新款", "销量"],
      categoryData: {},
      currentType: POP,
      isTabFixed: false,
      tabOffsetTop: 0
    }
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      // console.log(this.currentType)
      // console.log(this.categoryData[this.currentIndex].categoryDetail[this.currentType])
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        this.categoryList = res.data.category.list
        for (let i = 0; i < this.categoryList.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              "pop": [],
              "new": [],
              "sell": []
            }
          }
        }
        this._getSubCategory(0)
      })
    },
    _getSubCategory(index) {
      this.currentIndex = index
      const maitKey = this.categoryList[index].maitKey
      getSubCategory(maitKey).then(res => {
        this.subCategoryList = res.data.list;
        this.categoryData[index].subcategories = res.data
        this.categoryData = { ...this.categoryData }
        this._getCategoryDetail(POP)
        this._getCategoryDetail(NEW)
        this._getCategoryDetail(SELL)
      })

    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categoryList[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = { ...this.categoryData }
      })
    },
    selectCategory(index) {
      this._getSubCategory(index)
      this.isTabFixed && (this.isTabFixed = false)
    },
    tabSwitch(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      this.$refs.scroll.scrollGoto(0, -this.tabOffsetTop, 0)
    },
    contentScroll(position) {
      this.isTabFixed = -position.y > this.tabOffsetTop
    }
  },

  created() {
    this._getCategory()
  },
  updated() {
    this.$refs.scroll.loadRefresh()
    this.$nextTick(() => {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    })
  },
  activated() {
    this.$refs.scroll.loadRefresh()
  }
}
</script>

<style>
.category-content {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.category-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 44px;
}

.sidebar-content {
  width: 25%;
  background-color: #f5f5f5;
  position: relative;
  top: 44px;
  height: calc(100vh - 93px);
}

main {
  width: 75%;
  position: relative;
  top: 44px;
  flex: 1;
  justify-content: center;
}

.scroll-wrapper {
  width: 100%;
  bottom: 49px;
  height: calc(100vh - 93px);
}
</style>
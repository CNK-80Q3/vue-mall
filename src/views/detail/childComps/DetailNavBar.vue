<template>
  <div>
    <NavBar>
      <div slot="left" class="back-icon" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="nav">
        <div
          v-for="(item, index) in titles"
          class="nav-item"
          :key="item.id"
          :class="{active:currentIndex==index}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // setTimeout(() => {
      //   this.currentIndex = index
      // }, 200)
      this.$emit('DetailNavSwitch', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
}

.nav-item {
  flex: 1;
  font-size: 15px;
}

.active {
  color: var(--color-tint);
}

.back-icon {
  display: flex;
  height: 44px;
  padding: 10px;
}

.back-icon img {
  flex: 1;
}
</style>
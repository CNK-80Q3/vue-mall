<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 0,
      pullUpLoad: true,
      click: true
    })
    this.scroll.on('scroll', (position) => {
      console.log(position)
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉刷新')
      setTimeout(() => {
        console.log('数据加载完毕')
        this.scroll.finishPullUp()
      }, 2000)
    })
  }
}
</script>

<style>
</style>
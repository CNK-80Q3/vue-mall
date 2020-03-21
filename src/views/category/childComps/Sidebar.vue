<template>
  <div>
    <Scroll class="scroll-wrapper" ref="scroll">
      <div
        :class="{active: index === currentKey}"
        v-for="(item, index) in categoryList"
        :key="index"
        class="list-item"
        @click="itemClick(index)"
      >{{item.title}}</div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"

export default {
  name: "SideBar",
  components: {
    Scroll
  },
  data() {
    return {
      currentKey: 0
    }
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentKey = index
      this.$emit("selectCategory", index)
    }
  },
  updated() {
    this.$refs.scroll.loadRefresh();
  },
  activated() {
    this.$refs.scroll.loadRefresh();
  }
}
</script>

<style scoped>
.list-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 10px;
  box-sizing: content-box;
  border-left: 5px solid #f5f5f5;
  border-right: 5px solid #f5f5f5;
  font-size: 14px;
}

.active {
  border-left: 5px solid var(--color-high-text);
  border-right: 5px solid #fff;
  background-color: #fff;
  color: var(--color-high-text);
}

.scroll-wrapper {
  bottom: 49px;
  height: calc(100vh - 93px);
}
</style>
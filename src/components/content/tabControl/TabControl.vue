<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in tabs"
      :key="item"
      class="tab-control-item"
      :class="{active: index == currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabSwitch', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  width: 100vw;
  height: 40px;
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  position: sticky;
  top: 44px;
  z-index: 8;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  padding: 5px;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-tint);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
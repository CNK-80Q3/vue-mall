<template>
  <div id="tab-bar" class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabItem from './TabItem'
export default {
  name: 'TabBar',
  components: {
    TabItem
  }
}
</script>

<style>
.tab-bar {
  bottom: 0;
  background: #f6f6f6;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  box-shadow: 0 -3px 3px rgba(125, 125, 125, 0.2);
  z-index: 1000;
}

.tab-bar > div {
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>
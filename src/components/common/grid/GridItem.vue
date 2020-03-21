<template>
  <div class="grid-item">
    <a :href="item.link">
      <img :src="item.image" alt />
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.grid-item {
  width: 33.3%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.grid-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-item img {
  width: 65px;
  height: 65px;
}

.grid-item div {
  font-size: 12px;
  line-height: 2em;
  flex-basis: 0;
}
</style>
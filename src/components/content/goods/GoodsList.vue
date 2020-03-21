<template>
  <div class="goods-list">
    <GoodsListItem v-for="(item, index) in goods" :key="item.id" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods-list {
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* 这里不能设置 position: absolute; 属性，会使TabControl的 position: sticky; 失效 */
  /* position: absolute; */
}

.goods-list-item {
  width: 50%;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
}
</style>

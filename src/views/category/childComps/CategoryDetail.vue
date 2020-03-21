<template>
  <div class="category-detail-content">
    <GoodsList v-if="categoryDetail" :goods="categoryDetail" />
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList"
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  name: "CategoryDetail",
  components: {
    GoodsList,
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.category-detail-content {
  margin-top: 40px;
  display: flex;
}
</style>
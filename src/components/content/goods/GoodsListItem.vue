<template>
  <div class="goods-list-item">
    <a :href="goodsItem.clientUrl">
      <img :src="goodsItem.show.img" alt />
    </a>
    <a :href="goodsItem.clientUrl">
      <p>{{goodsItem.title}}</p>
    </a>
    <div class="goods-info">
      <span class="price">价格：{{goodsItem.price}}</span>
      <span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item a img {
  position: relative;
  width: 100%;
  border-radius: 5px;
}

.goods-list-item a p {
  width: 100%;
  height: 6%;
  padding: 0 5px;
  line-height: 100%;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-info {
  font-size: 12px;
  bottom: 5px;
  left: 0;
  right: 0;
  padding: 0 5px;
}

.price {
  color: var(--color-high-text);
  margin-right: 20px;
  float: left;
}

.collection {
  position: relative;
  float: right;
}

.collection::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -2px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
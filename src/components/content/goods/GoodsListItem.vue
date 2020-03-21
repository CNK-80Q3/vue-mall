<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="image" :alt="goodsItem.title" @load="imageLoad" />
    <div class="goods-title">
      <p>{{ goodsItem.title }}</p>
    </div>
    <div class="goods-info">
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collection">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    image() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    // 使用事件总线管理事件，事件总线与vuex类似，只不过事件总线管理事件，vuex管理状态
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-list-item img {
  position: relative;
  width: 100%;
  height: 250px;
  background-clip: border-box;
  border-radius: 5px;
  object-fit: cover;
}

.goods-list-item p {
  width: 100%;
  margin: 6px 0;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

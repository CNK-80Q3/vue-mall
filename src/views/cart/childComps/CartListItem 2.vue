<template>
  <div class="cart-list-item" :goods-item="goodsItem">
    <CheckButton :is-checked="goodsItem.checked" @click.native="checkClick" />
    <img class="goods-picture" :src="goodsItem.image" alt="" />
    <div class="goods-info">
      <div class="goods-title">{{ goodsItem.title }}</div>
      <div class="goods-desc">{{ goodsItem.desc }}</div>
      <div class="goods-info-bottom">
        <span class="price">￥{{ goodsItem.price }}</span>
        <span class="count">x{{ goodsItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  computed: {
    isChecked() {
      return this.goodsItem.checked;
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default: {}
    }
  },
  methods: {
    checkClick() {
      this.goodsItem.checked = !this.goodsItem.checked;
      // 在点击的时候判断是否全选状态，比较复杂，需要在不同组件中判断。所以废弃！！！
      // if (this.$store.state.allSelected === true) {
      //   this.$store.state.cartList.find(item => item.checked === false) &&
      //     (this.$store.state.allSelected = false);
      // } else {
      //   this.$store.state.cartList.every(item => item.checked === true) &&
      //     (this.$store.state.allSelected = true);
      // }
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.cart-list-item:not(:last-of-type) {
  border-bottom: 1px solid #c4c4c4;
}

.goods-checkbox {
  background: #ff55ff;
}

.goods-picture {
  margin-left: 0.5rem;
  width: 90px;
  height: 120px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
}

.goods-info {
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.goods-title {
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
}

.goods-desc {
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.goods-info-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.price {
  color: var(--color-tint);
}
</style>

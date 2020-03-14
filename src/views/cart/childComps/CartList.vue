<template>
  <div class="cart-list">
    <Scroll class="scroll-content" ref="scroll">
      <CartListItem
        v-for="(item, index) in cartList"
        :key="index"
        :goods-item="item"
      ></CartListItem>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.loadRefresh();
  }
};
</script>

<style scoped>
.cart-list {
  width: 100%;
  top: 44px;
  position: relative;
  background: #fff;
  height: calc(100% - 133px);
}

.scroll-content {
  height: 100%;
}
</style>

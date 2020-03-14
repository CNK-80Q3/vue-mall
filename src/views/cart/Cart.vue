<template>
  <div class="cart">
    <NavBar class="cart-nav">
      <div slot="center">购物车({{ length }})</div>
    </NavBar>
    <CartList></CartList>
    <CartBottomBar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // 把store中的getters的内容直接转成计算属性
    // ...mapGetters(["cartLength", "cartList"])
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  }
};
</script>

<style scoped>
.cart {
  width: 100vw;
  height: 100vh;
}

.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 44px;
}
</style>

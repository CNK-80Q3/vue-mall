<template>
  <div class="cart-bottom-bar">
    <div class="bar-left">
      <CheckButton :is-checked="allSelected" @click.native="checkClick"></CheckButton>
      <span>全选</span>
      <span>合计:{{ totalPrice }}</span>
    </div>
    <div class="bar-right" @click="calcClick">去结算({{ totalGoods }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  data() {
    return {
      isChecked: true
    };
  },
  computed: {
    //把getters中的属性直接转为计算属性
    ...mapGetters(["cartList"]),
    totalGoods() {
      return this.cartList.reduce(
        (total, cur) => (total += cur.checked === true ? 1 : 0),
        0
      );
    },
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .reduce(
            (total, item) =>
              (item.checked ? item.price * item.count : 0) + total,
            0
          )
          .toFixed(2)
      );
    },
    allSelected() {
      // return this.cartList.length
      //   ? !this.cartList.filter(item => !item.checked).length
      //   : false;
      //filter会完全遍历数组而find只找到一个就返回所以性能更高
      return this.cartList.length
        ? !this.cartList.find(item => !item.checked)
        : false;
      // 普通遍历实现
      // for (let item of this.$store.state.cartList) {
      //   if (!item.checked) {
      //     return false;
      //   }
      // }
      // return true;
    }
  },
  methods: {
    checkClick() {
      if (this.allSelected === false) {
        this.cartList.map(item => {
          item.checked = true;
        });
      } else {
        this.cartList.map(item => {
          item.checked = false;
        });
      }
    },
    calcClick() {
      if (!this.cartList.length || !this.totalGoods) {
        this.$toast.showMessage("您还没有选择物品", 1000);
      }
    }
  }
};
</script>

<style scoped>
.cart-bottom-bar {
  position: fixed;
  bottom: 49px;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -1px 3px 1px rgba(235, 235, 235, 0.5);
}

.bar-left {
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 10px;
}

.bar-left span {
  line-height: 40px;
  margin-left: 10px;
  font-size: 15px;
}
.bar-right {
  width: 30%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background-color: var(--color-tint);
}
</style>

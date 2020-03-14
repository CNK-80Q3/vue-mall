import { ADD_COUNTER, ADD_TO_CART } from "./mutations-types";

export default {
  // mutations唯一目的就是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  // 复杂的逻辑和异步操作都放入actions
  addCart(context, payload) {
    // let oldProduct = null;
    // for (let item of context.state.cartList) {
    //   if (payload.id === item.id) {
    //     oldProduct = item;
    //   }
    // }
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        item => item.id === payload.id
      );

      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("当前商品数量+1");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("新种类商品添加进购物车");
      }
    });
  }
};

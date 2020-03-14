<template>
  <div id="shop-info">
    <div class="shop-top">
      <img :src="showImage" alt />
      <div class="shop-name">{{ shopInfo.name }}</div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="sales-volume">
          <div class="sales-count">{{ shopInfo.sells | sellCountFilter }}</div>
          <div class="sales-text">总销量</div>
        </div>
        <div class="total-goods">
          <div class="goods-count">{{ shopInfo.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <th>{{ item.name }}</th>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ isBetter(item.isBetter) }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-entry">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    isBetter(isBetter) {
      return isBetter ? "高" : "低";
    }
  },
  computed: {
    showImage() {
      return "http:" + this.shopInfo.logo;
    }
  },
  filters: {
    sellCountFilter: function(count) {
      return count < 10000 ? count : (count / 10000).toFixed(2) + "万";
    }
  }
};
</script>

<style scoped>
#shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.shop-name {
  margin-left: 10px;
  vertical-align: center;
}

.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.shop-middle-item {
  flex: 1;
}

.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.sales-count,
.goods-count {
  font-size: 18px;
}

.sales-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.shop-entry {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>

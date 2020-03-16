<template>
  <div class="account-data">
    <div class="account-item">
      <div class="number">
        <span class="balance">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>分
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountData"
}
</script>

<style scoped>
.account-data {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 5px 1px #e6e6e6c8;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}
</style>
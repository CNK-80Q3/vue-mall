<template>
  <div class="user-info">
    <img src="~assets/img/profile/avatar.svg" alt />
    <a href>
      <div class="login-status">
        <div class="login">登录/注册</div>

        <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt class="phone-icon" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </a>

    <img src="~assets/img/profile/arrow-right.svg" alt id="arrow-right-icon" />
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
}
</script>

<style scoped>
.user-info {
  padding: 20px;
  display: flex;
  background: var(--color-tint);
  height: 120px;
  align-items: center;
  align-content: space-between;
}

.user-info > img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.login-status {
  margin-left: 20px;
}

.login {
  font-size: 20px;
  color: #f5f5f5;
}

.phone {
  height: 15px;
  font-size: 15px;
  color: #f5f5f5;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.phone-icon {
  width: 17px;
  height: 17px;
}

#arrow-right-icon {
  position: relative;
  left: 80px;
  width: 40px;
  height: 40px;
}
</style>
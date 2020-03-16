<template>
  <div class="profile-content">
    <NavBar class="profile-nav">
      <div slot="center">我的</div>
    </NavBar>
    <Scroll class="content" ref="scroll">
      <UserInfo></UserInfo>
      <AccountData></AccountData>
      <ListView v-for="list in profileLists" :list="list">
        <ListItem slot="list-item" v-for="item in list" :list-item="item"></ListItem>
      </ListView>
    </Scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import UserInfo from "./childComps/UserInfo"
import ListView from "./childComps/ListView"
import ListItem from "./childComps/ListItem"
import AccountData from "./childComps/AccountData"

import shoppingIcon from "assets/img/profile/shopping.svg"
import cartIcon from "assets/img/profile/cart.svg"
import downloadIcon from "assets/img/profile/download.svg"
import messageIcon from "assets/img/profile/message.svg"
import pointerIcon from "assets/img/profile/pointer.svg"
import vipIcon from "assets/img/profile/vip.svg"
import settingIcon from "assets/img/profile/setting.svg"
import moreIcon from "assets/img/profile/more.svg"

export default {
  name: "Profile",
  components: {
    NavBar,
    Scroll,
    UserInfo,
    AccountData,
    ListView,
    ListItem
  },
  data() {
    return {
      profileLists: {
        orderList: [
          { icon: messageIcon, iconColor: '#ff8198', info: '我的消息' },
          { icon: pointerIcon, iconColor: '#fc7b53', info: '积分商城' },
          { icon: vipIcon, iconColor: '#ffc636', info: '会员卡' },
        ],
        serviceList: [
          { icon: cartIcon, iconColor: '#ff8198', info: '我的购物车' },
          { icon: downloadIcon, iconColor: '#ff8198', info: '下载购物APP' },
        ],
        moreList: [
          { icon: settingIcon, iconColor: '#ff8198', info: '设置' },
          { icon: moreIcon, iconColor: '#ff8198', info: '更多' },
        ]
      }
    }
  },
};
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 44px;
}

.content {
  width: 100%;
  top: 44px;
  bottom: 49px;
  height: calc(100vh - 93px);
  position: absolute;
  background-color: #f5f5f5;
}
</style>

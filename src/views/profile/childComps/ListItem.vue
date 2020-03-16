<template>
  <div class="list-item-content">
    <img :src="listItem.icon" alt />
    <span class="text">{{listItem.info}}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.list-item-content {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  top: 10px;
}

.list-item-content > img {
  width: 25px;
  height: 25px;
}

.list-item-content > span {
  margin-left: 15px;
  font-size: 15px;
  height: 45px;
  padding: 15px 0px;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
}

.list-item-content:last-of-type .text {
  border-bottom: none;
}
</style>
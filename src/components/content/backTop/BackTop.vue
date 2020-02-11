<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
  }
}
</script>

<style>
  .back-top {
    position: fixed;
    bottom: 60px;
    right: 20px;
    border-radius: 50%;
    z-index: 9;
  }

  .back-top img {
    width: 50px;
    height: 50px;
    vertical-align: middle;

  }
</style>
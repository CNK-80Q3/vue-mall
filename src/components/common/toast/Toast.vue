<template>
  <div class="toast-container" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    showMessage(message = "", duration = 2000) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style>
.toast-container {
  position: fixed;
  padding: 10px 10px;
  background-color: #000000;
  font: 1rem bold;
  color: #f5f5f5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  text-overflow: ellipsis;
}
</style>

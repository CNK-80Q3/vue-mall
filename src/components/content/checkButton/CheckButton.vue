<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
  box-shadow: 0px 0px 2px 2px rgb(235, 235, 235);
}

.check-button img {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.check {
  background-color: var(--color-tint);
  border: none;
  border: 2px solid var(--color-tint);
}
</style>

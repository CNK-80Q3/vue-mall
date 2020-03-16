<template>
  <div class="list-view-content">
    <slot name="list-item"></slot>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.list-view-content {
  margin-top: 10px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 5px 1px #e6e6e6c8;
}
</style>
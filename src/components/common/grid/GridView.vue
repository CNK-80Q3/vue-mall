<template>
  <div class="grid-content">
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: "GridView"
}
</script>

<style scoped>
.grid-content {
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding-top: 0.5em;
  margin: auto;
}
</style>
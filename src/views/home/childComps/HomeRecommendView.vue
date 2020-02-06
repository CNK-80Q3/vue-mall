<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="item.id" class="recommend-item">
      <a href="item.link">
        <img :src="item.image" :alt="item.title"/>
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 20px 0;
  border-bottom: 8px solid #eee
}

.recommend-item {
  flex: 1
}

a img {
  width: 70px;
  margin-bottom: 10px;
}

p {
  font-size: 12px;
  text-align: center;
}



</style>
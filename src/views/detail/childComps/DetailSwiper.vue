<template>
    <Swiper v-if="topImages.length" class="detail-swiper">
      <SwiperItem v-for="(item, index) in topImages" >
        <img :src="item" alt />
      </SwiperItem>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 350px;
}
</style>
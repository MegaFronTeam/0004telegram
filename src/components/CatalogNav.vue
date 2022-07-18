<template>
  <div class="sCatalog-nav" >
    <div class="container">
      <swiper
        :slides-per-view="0">
        <swiper-slide  v-for="cat in info" :key="cat.guid">
          <a class="sCatalog-nav__link" :href="'#' + cat.guid">{{cat.name}}</a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  name: 'CatalogNav',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

</style>

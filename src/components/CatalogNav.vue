<template>
  <div class="sCatalog-nav" >
    <swiper
      :slides-per-view="0">
      <swiper-slide  v-for="cat in info" :key="cat.guid">
        <a class="sCatalog-nav__link" :href="'#' + cat.guid">{{cat.name}}</a>
      </swiper-slide>
    </swiper>
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

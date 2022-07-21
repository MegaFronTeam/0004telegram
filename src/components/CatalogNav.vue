<template>
  <div class="sCatalog-nav" >
    <div class="container">
      <swiper
        :watch-overflow="1"
        :slides-per-view="0">
        <swiper-slide  v-for="cat in info" :key="cat.guid">
          <a class="sCatalog-nav__link" @click="scrollTo" :href="'#cat-' + cat.guid">{{cat.name}}</a>
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
  },
  methods: {
    scrollTo (event) {
      event.preventDefault()
      const id = event.path[0].hash
      console.log(id)
      window.scrollTo({
        top: document.querySelector(id).offsetTop - 50,
        behavior: 'smooth'
      })
    }
  },
  watch: {
    $route (to, from) {
      console.log(window.location.href)
      console.log(this.$route.path)
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>

</style>

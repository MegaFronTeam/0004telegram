<template>
  <div class="sCatalog-nav" >
    <div class="container">
      <Flicking :options="options">
        <a v-for="cat in info" :key="cat.guid" class="sCatalog-nav__link" :href="'#cat-' + cat.guid">
          {{cat.name}}
        </a>
      </Flicking>
    </div>
  </div>
</template>

<script>

import Flicking from '@egjs/vue3-flicking'

export default {
  name: 'CatalogNav',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: {
    Flicking
  },
  data () {
    return {
      options: {
        camera: '0%',
        panel: '0%',
        align: 'prev',
        circular: false,
        // moveType: 'snap',
        bound: true,
        // nested: false,
        // deceleration: 0.0005,
        duration: 1000,
        renderOnlyVisible: true
      }
    }
  },
  methods: {
    scrollTo (event) {
      // event.preventDefault()
      const id = event.path[0].hash
      document.querySelector('html').scrollTo({
        // top: top ++,
        top: document.querySelector(id).offsetTop - 50,
        behavior: 'smooth'
      })
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">
.sCatalog-nav{
  //margin-bottom: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1200;
  background-color: var(--bs-body-bg);
  padding-top: 5px;
  padding-bottom: 5px;
  &__nav-wrap{
    overflow-x: auto;
    display: flex;
  }
  .container{
    margin-bottom: 0;
  }
  .swiper{
    overflow: visible;
  }
  .swiper-slide{
    width: auto;
  }
  &__link {
    white-space: nowrap;
    background: var(--bg);
    color: var(--color, var(--bs-body-color)) !important;
    border-radius: 60px;
    padding: 10px 20px;
    display: block;
    &.active,
    &.active{
      //background-color: $primary;
      --bg: var(--tg-theme-button-color);
      --color: var(--tg-theme-button-text-color);
    }
  }
}

</style>

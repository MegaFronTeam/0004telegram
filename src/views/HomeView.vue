<template>
  <catalog-nav :info="info"/>
  <div class="container"  v-for="cat in info" :key="cat.guid" :id="'cat-'+cat.guid"  v-intersection >
    <div class="prod-row row mb-4 g-4">
      <div class="col-12 row__title strong" v-html="cat.name"></div>
      <div class="col-6" v-for="item in cat.products" :key="item">
        <prod-item :item="item"></prod-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import CatalogNav from '@/components/CatalogNav'
import ProdItem from '@/components/ProdItem'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    ProdItem,
    CatalogNav
    // SCatalog
    // HelloWorld
  },
  data () {
    return {
      info: []
    }
  },
  methods: {
    fetchUsers: async function () {
      try {
        const responce = await axios.post('https://dev.chatfood.ru/api/get-products')
        // console.log(responce);
        // console.log(responce.data.result)
        this.info = responce.data.result
      } catch (e) {
        alert('Ошибка ')
      }
    },
    activeNav () {
      console.log(1)
    }
  },
  mounted () {
    this.fetchUsers()
  }
}
</script>

<style lang="scss">
  #app{
    padding-top: 2rem;
    padding-bottom: 50px;
  }
  .header{
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    &__title{
      font-weight: bold;
    }
    &__text{
      opacity: 0.5;
    }
  }
</style>

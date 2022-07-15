<template>
  <div class="main-wrapper">
    <div class="header">
      <div class="header__title">Прага | Доставка ❤️</div>
      <div class="header__text">бот</div>
    </div>
    <div class="sCatalog">
      <div class="container">
        <catalog-nav :info="info"/>
        <div class="row mb-4 g-4"  v-for="cat in info" :key="cat.guid" :id="cat.guid">
          <div class="col-12 row__title strong" v-html="cat.name"></div>
          <div class="col-6" v-for="item in cat.products" :key="item">
            <prod-item :item="item"></prod-item>
          </div>
        </div>
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
        console.log(responce.data.result)
        this.info = responce.data.result
      } catch (e) {
        alert('Ошибка ')
      }
    }
  },
  mounted () {
    this.fetchUsers()
  }
}
</script>

<style lang="scss">
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

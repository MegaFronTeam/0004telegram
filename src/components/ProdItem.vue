<template>
    <div class="prod-item" :class="{'bounce-enter-active': !show}">
      <div class="prod-item__img-wrap">
        <img :src="item.image" alt="">
        <div class="prod-item__rating" v-if="item.rating>0">{{item.rating}}</div>

        <div class="prod-item__counter"  :class="[quantity > 0 ? 'active' :  '']">{{quantity}}</div>
      </div>
      <div class="prod-item__title"  v-html="item.name"></div>
      <div class="prod-item__caption"   v-html="description"></div>
      <div class="prod-item__caption"   >{{description}}</div>
      <div class="prod-item__footer">
        <button class="prod-item__btn prod-item__btn--minus btn " @click="removeProd"></button>
        <button class="prod-item__btn prod-item__btn--plus btn " :class="[quantity > 0 ? '' :  'w-100']" @click="addProd">
          <span>{{item.price}} ₽</span>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProdItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      quantity: this.item.quantity,
      description: this.item.description.replace(/<\/?[a-zA-Z]+>/gi, ''),
      show: true
    }
  },
  methods: {
    addAnimate () {
      this.show = !this.show
      setTimeout(() => {
        this.show = !this.show
      }, 500)
    },
    addProd () {
      this.addAnimate()
      this.quantity++
    },
    removeProd () {
      this.addAnimate()
      this.quantity = (this.quantity - 1) || 0
    }

  }
}
</script>

<style scoped lang="scss">

</style>

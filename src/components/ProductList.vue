<template>
  <div>
    <ion-row>
      <ion-col size="12">
        <ion-searchbar :value="search" placeholder="O que você procura?" @ionInput="search = $event.target.value" @ionClear="search = ''" />
      </ion-col>
      <ion-col v-for="product in products.list" :key="product.id" size="12" size-md="4">
        <ProductCard @click.native="openModal(product)" :product="product" />
      </ion-col>
    </ion-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Modal from './Modal.vue'

export default {
  name: "ProductList",
  created() {
    this.fetchProducts()
  },
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['fetchProducts']),
    openModal(product) {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {
              product,
            },
            propsData: {
              title: 'Detalhes do produto',
            },
          },
        })
        .then(m => m.present())
    },
  },
}
</script>

<style>
</style>

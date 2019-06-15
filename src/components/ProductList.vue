<template>
  <div>
    <ion-row>
      <ion-col v-for="product in products.list" :key="product.id" size="12" size-md="4">
        <div @click="openModal(product)">
          <ProductCard :product="product" />
        </div>
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

<template>
  <div>
    <ion-card>
      <img :src="product.image" :alt="product.name" />
      <ion-card-header>
        <ion-card-subtitle>{{product.name}}</ion-card-subtitle>
        <ion-card-title>{{product.price | currency}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      name: String,
      description: String,
      image: String,
      active: Boolean,
      price: Number
    }
  }
}
</script>

<style>
</style>

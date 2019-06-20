<template>
  <div>
    <ion-card>
      <img :src="product.image" :alt="product.name" />
      <ion-card-header>
        <ion-card-subtitle>{{product.name}}</ion-card-subtitle>
        <ion-card-title>{{product.price | currency}}</ion-card-title>
      </ion-card-header>
      <ion-item>
        <ion-labe class="ligth">
          Disponível
        </ion-labe>
        <ion-button fill="outline" color="dark" slot="end">
          <ion-icon name="heart" color="danger" />
        </ion-button>
      </ion-item>
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

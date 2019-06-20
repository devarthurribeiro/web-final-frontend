<template>
  <div class="product-details">
    <img :src="product.image" :alt="product.name">
    <h4>{{product.name}} - {{product.price | currency}}</h4>
    <p>{{product.description}}</p>
    <h5>Sobre o vendedor</h5>
    <ion-list>
      <ion-item>
        <ion-icon slot="start" name="contact"></ion-icon>
        <ion-label>Arthur Ribeiro</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="logo-whatsapp"></ion-icon>
        <ion-label>(84) 99123-0249</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="school"></ion-icon>
        <ion-label>Tads</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="list"></ion-icon>
        <a href="#">Ver mais produtos</a>
      </ion-item>
    </ion-list>
    <ion-button expand="block" color="primary">
      Comprar
    </ion-button>
  </div>
</template>

<script>
export default {
  name: 'Product',
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
.product-details img {
  border-radius: 8px;
}
</style>
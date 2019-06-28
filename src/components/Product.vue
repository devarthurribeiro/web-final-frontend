<template>
  <div class="product-details">
    <img :src="product.image" :alt="product.name">
    <h4>{{product.name}} - {{product.price | currency}}</h4>
    <p>{{product.description}}</p>
    <h5>Sobre o vendedor</h5>
    <ion-list>
      <ion-item>
        <ion-icon slot="start" name="contact"></ion-icon>
        <ion-label>{{product.user.name}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="logo-whatsapp"></ion-icon>
        <ion-label>
          <a :href="'https://wa.me/'+product.user.phone">{{product.user.phone}}</a>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="school"></ion-icon>
        <ion-label>{{product.user.course}}</ion-label>
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
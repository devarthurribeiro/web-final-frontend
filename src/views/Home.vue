<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Feirinha EAJ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Produtos</h1>
      <ProductList/>
    </ion-content>
  </div>
</template>

<script>
import ProductList from '../components/ProductList'

export default {
  name: "home",
  components: {
    ProductList
  }
};
</script>
<template>
  <ion-content class="ion-padding">
    <h1>Anúncios</h1>
    <ion-list>
      <ion-item v-for="product in productsUser">
        <ion-avatar slot="start">
          <img :src="product.image">
        </ion-avatar>
        <ion-label>
          {{product.name}}
        </ion-label>
        <ion-button @click="$router.push('/product-add/'+ product.id)" slot="end">Editar</ion-button>
        <ion-button @click="removeProduct(product)" slot="end" color="danger" fill="outline">Remover</ion-button>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async created() {
    if (!this.$store.state.auth.isAuthenticated) {
      this.$router.push("/")
    }
  },
  computed: {
    ...mapState(['products', 'auth']),
    productsUser() {
      return this.products.list.filter(p => p.user.id = this.auth.user.id);
    }
  },
  name: 'ProductsList',
  methods: {
    ...mapActions(['remove']),
    async removeProduct(product) {
      if (confirm("Apagar?")) {
        this.remove(product.id)
      }
    }
  }
}
</script>

<style></style>
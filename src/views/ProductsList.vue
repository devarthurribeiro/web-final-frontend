<template>
  <ion-content class="ion-padding">
    <h1>Anúncios</h1>
    <ion-list>
      <ion-item v-for="product in products.list">
        <ion-label>
          {{product.name}}
        </ion-label>
        <ion-button @click="$router.push('/product-add/'+ product.id)" slot="end">Editar</ion-button>
        <ion-button @click="remove" slot="end" color="danger">Remover</ion-button>
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
    ...mapState(['products'])
  },
  name: 'ProductsList',
  methods: {
    async remove() {

    }
  }
}
</script>

<style></style>
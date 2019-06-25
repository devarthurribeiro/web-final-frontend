<template>
  <div>
    <form @submit.prevent="submit">
      <ion-list>
        <ion-list-header>
          <ion-label>Cadastro de Produto</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-input :value="product.name" @ionInput="product.name = $event.target.value" placeholder="Nome" />
        </ion-item>
        <ion-item>
          <ion-input :value="product.image" @ionInput="product.image = $event.target.value" placeholder="Imagem" />
        </ion-item>
        <ion-item>
          <ion-input :value="product.price" @ionInput="product.price = $event.target.value" type="number" placeholder="Preço" />
        </ion-item>
        <ion-item>
          <ion-input placeholder="Categoria" />
        </ion-item>
        <ion-item>
          <ion-label :value="product.description" @ionInput="product.description = $event.target.value" position="floating">Descrição</ion-label>
          <ion-textarea></ion-textarea>
        </ion-item>
      </ion-list>
      <ion-button type="submit" expand="block" color="success">
        Salvar
      </ion-button>
      <ion-button @click="product = {}" expand="block" color="danger">
        Cancelar
      </ion-button>
    </form>
  </div>
</template>

<script>
import { ProductsService } from '@/services/api.service'

export default {
  name: 'ProductAdd',
  data: () => ({
    product: {}
  }),
  methods: {
    async submit() {
      try {
        await ProductsService.create(this.product)
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style></style>
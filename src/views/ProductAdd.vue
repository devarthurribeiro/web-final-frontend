<template>
  <div>
    <form @submit.prevent="submit">
      <ion-list>
        <ion-list-header>
          <ion-label>Cadastro de Produto</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-input :value="product.name" @ionInput="product.name = $event.target.value" placeholder="Nome" required />
        </ion-item>
        <ion-item>
          <ion-input :value="product.image" @ionInput="product.image = $event.target.value" placeholder="Imagem" required />
        </ion-item>
        <ion-item>
          <ion-input :value="product.price" @ionInput="product.price = $event.target.value" type="number" placeholder="Preço" required />
        </ion-item>
        <ion-item>
          <ion-label>Categoria</ion-label>
          <ion-select @ionInput="product.category = $event.target.value" okText="Selecionar" cancelText="Cancelar">
            <ion-select-option v-for="cate in products.categories" :key="id" :value="cate">
              {{cate.name}}
            </ion-select-option>
          </ion-select>
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
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import { ProductsService } from '@/services/api.service'

export default {
  name: 'ProductAdd',
  async created() {
    if (!this.$store.state.auth.isAuthenticated) {
      this.$router.push("/")
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created() {
    if (this.$route.params.id) {
      this.product = this.products.list.find(p => p.id == this.$route.params.id)
    }
  },
  data: () => ({
    product: {}
  }),
  methods: {
    async submit() {
      try {
        await ProductsService.create(this.product)
        Swal.fire('Sucesso!', 'Produto adicionado!', 'success')

      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style></style>
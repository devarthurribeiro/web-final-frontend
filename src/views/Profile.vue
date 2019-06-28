<template>
  <ion-content class="ion-padding">
    <div class="ion-text-center profile-img">
      <img src="https://avatars2.githubusercontent.com/u/12974798?s=460&v=4" alt="profile">
    </div>
    <form @submit.prevent="submit">
      <ion-item>
        <ion-input :value="profile.name" @ionInput="profile.name = $event.target.value" placeholder="Nome" required />
      </ion-item>
      <ion-item>
        <ion-input :value="profile.phone" @ionInput="profile.phone = $event.target.value" placeholder="Telefone" required/>
      </ion-item>
      <ion-item>
        <ion-input :value="profile.course" @ionInput="profile.course = $event.target.value" placeholder="Curso" required/>
      </ion-item>
      <ion-item>
        <ion-input :value="profile.email" @ionInput="profile.email = $event.target.value" placeholder="Email" type="email" required />
      </ion-item>
      <br>
      <ion-button type="submit" color="primary" expand="block">Salvar</ion-button>
    </form>
  </ion-content>
</template>

<script>
import { mapState } from 'vuex';
import Swal from 'sweetalert2'

import {
  UserService
} from '@/services/api.service'

export default {
  name: 'Profile',
  async created() {
    if (!this.$store.state.auth.isAuthenticated) {
      this.$router.push("/")
    }
    const { data } = await UserService.get(this.auth.user.id);
    console.log(data)
    this.profile = data;
  },
  computed: {
    ...mapState(['auth'])
  },
  data: () => ({
    profile: {}
  }),
  methods: {
    async submit() {
      try {
        UserService.update(this.auth.user.id, this.profile);
        Swal.fire('Sucesso!', 'Perfil atualizado!', 'success')
      } catch (error) {
        Swal.fire('Oops...', 'Erro ao atulizar perfil!', 'error')
      }
    }
  }
}
</script>

<style>
.profile-img img {
  width: 120px;
  border-radius: 50%;
}
</style>
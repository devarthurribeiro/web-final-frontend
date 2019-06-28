<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-button @click="openMenu">
            <ion-icon slot="icon-only" name="menu"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Feirinha EAJ</ion-title>
        <ion-buttons slot="end">
          <ion-button v-if="!isAuthenticated" @click="openLoginModal" fill="outline">
            Login
          </ion-button>
          <div v-else>
            <ion-button @click="logout" fill="outline">
              Sair
            </ion-button>
          </div>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-menu side="start" menuId="first" ref="menu">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item @click="goTo('/')">Inicio</ion-item>
          <ion-item @click="goTo('/product-add')">Vender</ion-item>
          <ion-item @click="goTo('/product-list')">Meus anúncios</ion-item>
          <ion-item @click="goTo('/profile')">Conta</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-content class="ion-padding">
      <ion-vue-router />
    </ion-content>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import LoginModal from '../components/LoginModal.vue'

export default {
  name: "home",
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState(['auth'])
  },
  methods: {
    ...mapActions(['logout']),
    goTo(path) {
      this.$router.push(path)
      this.$refs.menu.close()
    },
    openMenu() {
      this.$refs.menu.open()
    },
    openLoginModal(product) {
      return this.$ionic.modalController
        .create({
          component: LoginModal,
          cssClass: "login-modal",
          componentProps: {
            data: {
              product,
            },
            propsData: {
              title: 'Login',
            },
          },
        })
        .then(m => m.present())
    },
  },
};
</script>
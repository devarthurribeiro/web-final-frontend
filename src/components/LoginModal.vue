<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="close">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <LoginForm @onSubmit="onLogin" />
    </ion-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
  name: 'Modal',
  props: {
    title: { type: String, default: 'Login Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  methods: {
    ...mapActions(['login']),
    async onLogin(credential) {
      store.dispatch('login', credential)
      this.close()
    },
    close() {
      this.$ionic.modalController.dismiss()
    }
  }
}
</script>

<style>
.login-modal {
  --max-width: 300px;
  --max-height: 500px;
}
</style>
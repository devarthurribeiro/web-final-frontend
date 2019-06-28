<template>
  <div id="app">
    <ion-app>
      <ion-vue-router />
    </ion-app>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "App",
  created() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions(['fetchCategories'])
  }
}
</script>

<style>
</style>

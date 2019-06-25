<template>
  <ion-content class="ion-padding">
    <div class="ion-text-center profile-img">
      <img src="https://avatars2.githubusercontent.com/u/12974798?s=460&v=4" alt="profile">
    </div>
    <form action="">
      <ion-item>
        <ion-input :value="profile.name" @ionInput="profile.name = $event.target.value" placeholder="Nome" />
      </ion-item>
      <ion-item>
        <ion-input :value="profile.phone" @ionInput="profile.phone = $event.target.value" placeholder="Telefone" />
      </ion-item>
      <ion-item>
        <ion-input :value="profile.name" @ionInput="profile.name = $event.target.value" placeholder="Curso" />
      </ion-item>
      <br>
      <ion-button color="primary" expand="block">Salvar</ion-button>
    </form>
  </ion-content>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    profile: {}
  })
}
</script>

<style>
.profile-img img {
  width: 120px;
  border-radius: 50%;
}
</style>
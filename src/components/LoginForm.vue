<template>
  <div>
    <form @submit.prevent="$emit('onSubmit', user)">
      <div class="ion-text-center">
        <img width="120" src="https://image.flaticon.com/icons/svg/1849/1849225.svg" alt="">
        <h4>Bem vindo!</h4>
      </div>
      <ion-list>
        <ion-item>
          <ion-label>Usuário</ion-label>
          <ion-input :value="user.username" @ionInput="user.username = $event.target.value" placeholder="example@email.com" required />
        </ion-item>
        <ion-item>
          <ion-label>Senha</ion-label>
          <ion-input :value="user.password" @ionInput="user.password = $event.target.value" type="password" placeholder="********" required />
        </ion-item>
        <ion-item v-if="!isLogin">
          <ion-label>Confirmar</ion-label>
          <ion-input type="password" placeholder="********" />
        </ion-item>
      </ion-list>
      <ion-button type="submit" expand="block">{{ isLogin ? "Entrar" : "Criar conta" }}</ion-button>
    </form>
    <br>
    <div class="ion-text-center">
      <a href="#" @click.prevent="isLogin = !isLogin" class="center">
        {{ isLogin ? "Cadastrar-se" : "Fazer login" }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    isLogin: true,
    user: {}
  })
}
</script>

<style></style>
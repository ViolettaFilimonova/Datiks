<template>
  <div class="wrapper">
    <div class="auth">
      <a href="https://datiks.ru"><img class="auth__logo" :src="image" alt="Datiks"></a>
      <form @submit.prevent class="auth__form">
        <input v-model="person.login" class="auth__form_input" type="text" placeholder="Логин">
        <input v-model="person.pass" class="auth__form_input" type="password"  placeholder="Пароль">
        <div class="auth__btn">
          <button @click="authUser" class="auth__btn_login">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import image from '@/assets/datics.jpg'
export default {
  name:'Authorization-Form',
  // props:{
  //   users:{
  //     type: Object,
  //     require: true
  //   }
  //},
  data(){
    return{
      image: image,
      person:{
        login: '',
        pass: '',
      }
    }
  },
  methods:{
    authUser(){
      this.$emit('authPerson', this.person)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: center;
}
.auth{
  font-family: "TT Norms", sans-serif;
  &__logo{
     margin-top: 120px;
     width: 300px;
   }
  &__form{
    margin-top: 40px;
    &_input{
      width: 250px;
      padding: 12px 15px;
      border-radius: 25px;
      border: 2px solid rgb(27, 201, 181);
      margin-top: 20px;
      margin-left: 10px;
      line-height: 20px;
      display: block;
    }
  }
  &__btn{
    display: flex;
    justify-content: center;
    &_login{
      font-size: 16px;
      font-family: TT Norms, sans-serif;
      color: rgb(0, 0, 0);
      border: none;
      background-color: rgb(27, 201, 181);
      padding: 10px 20px;
      border-radius: 25px;
      margin-top: 20px;
    }
  }
}
</style>
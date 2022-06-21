<template>
  <div id="app">
<!--    <authorization-form @authPerson="authUser" />-->
    <router-view/>
  </div>
</template>
<script>
//import axios from 'axios'
//import AuthorizationForm from "@/components/Authorization-Form";
export default {
//  components: {AuthorizationForm},
  data(){
    return{
      dataBase: 'https://raw.githubusercontent.com/ViolettaFilimonova/data-json-wds/main/data.json',
      users: [],
    }
  },
  methods:{
    // async fetchData(){
    //   try {
    //     const response = await axios.get(this.dataBase)
    //     this.users = response.data;
    //   }catch (e){
    //     alert('Error')
    //   }
    // },
    // authUser(person){
    //   console.log(person)
    //   console.log(this.users)
    // }
  },
  created() {
    // this.fetchData()
  }
}
</script>
<style lang="scss">

</style>

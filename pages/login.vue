<template>
  <v-container>
    <h1>Login</h1>

    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>

<script>
  import UserAuthForm from '@/components/UserAuthForm'
  
  export default {
    components: {
      UserAuthForm
    },
    methods: {
      loginUser(loginInfo){

        this.$axios.post('/auth', {
          email: loginInfo.email,
          password: loginInfo.password
        }).then( res => {
          // console.log(res.data.access_token)
          this.$auth.setUserToken(res.data.access_token)
          this.$auth.setRefreshToken('local',res.data.refresh_token)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
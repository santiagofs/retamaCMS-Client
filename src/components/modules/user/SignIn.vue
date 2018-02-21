<template>
  <div id="signin-wrapper">
    <div id="signin-form">
      <h1>Sign In</h1>
      <fieldset>
        <input type="text"  v-model="username" />
        <input type="password" v-model="password" />
        <button class="btn btn-primary" @click="doSignIn()">Sign In</button>
      </fieldset>
    </div>
  </div>

</template>

<script>
// import { mapActions } from 'vuex'
import { store } from '@/store'

export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doSignIn: function () {
      store.dispatch('user/doSignIn', {
        username: this.username,
        password: this.password,
        router: this.$router
      })
    }
  }
}
</script>

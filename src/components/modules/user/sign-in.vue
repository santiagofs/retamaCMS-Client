<template>
  <div id="signin-wrapper" class="box">
    <div id="signin-form">
      <h1 class="title">Sign In</h1>
      <div class="form">

        <div class="field">
          <label class="label">Username/email</label>
          <div class="control">
            <input type="text" class="input" placeholder="username/email"  v-model="username" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input type="password" class="input" placeholder="password"  v-model="password" />
          </div>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="sign-in is-link button" @click="doSignIn()">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import { mapActions } from 'vuex'
// import { store } from '@/store'

export default {
  name: 'SignIn',
  data () {
    return {
      username: 'santiagofs@gmail.com',
      password: 'a'
    }
  },
  methods: {
    doSignIn: function () {
      this.$store.dispatch('user/doSignIn', {
        username: this.username,
        password: this.password,
        router: this.$router
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/_settings";

#signin-wrapper {
  width: 400px;
  padding: $gap;
  margin: 50px auto;
  background: $turquoise;
  color: #FFF;
}

#signin-form {
  .label, .title {
    color: white;
  }
}
</style>

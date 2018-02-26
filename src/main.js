// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'

Vue.config.productionTip = false

require('./assets/scss/main.scss')


console.log(process.env.API_URL)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  beforeCreate () {
    console.log('beforeCreatecreated')
  }
})

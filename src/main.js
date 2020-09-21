// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* eslint-disable */

Vue.config.productionTip = false

// Vue.prototype.$appName = 'ordenathor'

// Vue.mixin({
//   data: function() {
//     return {
//       globalVar:'global'
//     }
//   }
// })

// eslint-disable-next-line
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

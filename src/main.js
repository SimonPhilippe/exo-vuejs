import Vue from 'vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(require('./App.vue').default)
}).$mount('#app')

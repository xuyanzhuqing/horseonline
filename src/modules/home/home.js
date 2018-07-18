import Vue from 'vue'


import App from './home.vue'



const app1 = new Vue({
  render: h => h(App)
}).$mount('#homeBox')


import Vue from 'vue'


import App from './template.vue'



const app1 = new Vue({
  render: h => h(App)
}).$mount('#templateBox')


import Vue from 'vue'
// import Mint from 'mint-ui';
// Vue.use(Mint);
//引入mint-ui
import { Button, Cell } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)


import App from './madHorse.vue'
import router from '../../route/routesMD.js'

// const router = new VueRouter({
//   routesPhone
// })


const app1 = new Vue({
  router,
  render: h => h(App)
}).$mount('#madHorse')


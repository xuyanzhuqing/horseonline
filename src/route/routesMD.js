
//引入模板
import Home from '../modules/madHorse/views/home.vue'


import Vue from 'vue'
import VueRoter from 'vue-router'

Vue.use(VueRoter)





const router = new VueRoter({
    //mode : 'history'
    routes:[
        {
            path:'/',
            redirect: '/home'
        },
        {
            path:'/home',
            component:Home,
            name:'Home'
        }
    ]
})



export default router;
import {  Vue } from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import VueRouter from 'vue-route'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
import './mock/index.js'

Vue.use(VueRouter)
Vue.config.productonTip = false
Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App)
}).mount('#app')

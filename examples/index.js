import Vue from 'vue'
import App from './App.vue'
import '../lib/scss/index.scss'
import MyUI from '../lib/index.js'
Vue.use(MyUI)
new Vue({
    render: h => h(App)
}).$mount('#app')
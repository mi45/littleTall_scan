import Vue from 'vue'
import App from './App'
import pageHead from './pages/index/page-head.vue'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('page-head', pageHead)

const app = new Vue({
    ...App
})
app.$mount()

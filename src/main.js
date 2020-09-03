import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import VueScreenSize from 'vue-screen-size'
import SlideUpDown from 'vue-slide-up-down'
Vue.use(VueScreenSize)
Vue.component("slide-up-down", SlideUpDown)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

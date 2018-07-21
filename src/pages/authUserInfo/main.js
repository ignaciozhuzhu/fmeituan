import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config:{
        disableScroll:true,
        navigationBarTitleText:'微信授权'
    }
}
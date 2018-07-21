import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
     pages: ['pages/logs/main', '^pages/index/main'],
    //pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '挑食街自助点餐',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: "#6f7378",
      selectedColor: "#FFDF00",
      backgroundColor: "#E4E6E5",
      borderStyle: "E4E6E5",
      position: "bottom",
      list: [{
        pagePath: "pages/index/main",
        text: "首页",
        iconPath: "static/images/sy-6.png",
        selectedIconPath: "static/images/sy-6.png"
      }, {
        pagePath: "pages/order/main",
        text: "订单",
        iconPath: "static/images/sy-5.png",
        selectedIconPath: "static/images/sy-5.png"
      }, {
        pagePath: "pages/userCenter/main",
        text: "个人中心",
        iconPath: "static/images/sy-4.png",
        selectedIconPath: "static/images/sy-4.png"
      }]
    }
  }
}
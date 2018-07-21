<script>
import wxp from 'minapp-api-promise'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  },
  async onLaunch(){
    let loginInfo = await wxp.login()
    console.log('login',loginInfo)
    try{
      let res = await wxp.getUserInfo()
      console.log('获取个人信息成功')
    }catch(err){
      wx.showModal({
        title:"提示",
        content:'尚未授权个人信息',
        confirmText:"去授权",
        success:(res)=>{
          if(res.confirm){
            wx.navigateTo({url:'/pages/authUserInfo/main'})
          }
        }
      })
    }
  }
}
</script>

<style lang='scss'>
@import './assets/css/common.scss';
page{
  height: 100%;
}
.container {
  height: 100%;
  width:100%;
  flex-direction: column;
  box-sizing: border-box;
  white-space: nowrap;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}


</style>

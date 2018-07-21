import wxp from 'minapp-api-promise'
import Fly from "flyio/dist/npm/wx";
// import wx from 'wx'
const fly = new Fly;

async function login() {
    console.log(wx.getStorageSync('session'))
    let code;
    try {
        let res = await wxp.login()
        code = res.code;
    } catch (err) {
        console.log('login fail')
    }
    console.log(code)
    try {
        let res = await fly.get('https://api.weixin.qq.com/sns/jscode2session', {
            appid: 'wx7661413c3aa7265b',
            secret: '68a22f08af113e8c204cefe32e0827f9',
            grant_type: 'authorization_code',
            js_code: code
        })
        console.log(res)
        wx.setStorageSync('session',res.data.session_key);
        wx.setStorageSync('createTime',new Date())
        console.log(wx.getStorageSync('session'))
    } catch (err) {
        console.log('get OpenId fail')
    }
}

async function checkLogin(){
    console.log('checkLogin')
    let time = new Date();
    let createTime = wx.getStorageSync('createTime');
    let session = wx.getStorageSync('session');
    console.log(time,createTime,session,time-createTime)
    if(!session){
        console.log('no session')
        await login()
    }else if(time-createTime >6*24*3600*1000){
        console.log('session expired')
        await login()
    }
}

export default {
    login,
    checkLogin
}
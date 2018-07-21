<template>
    <div class="login-container">
        <div class="login">
            <div class="app-info">
                <img class="app-logo" src="http://tsj.half-candy.com/images/sy-19.png" mode='widthFix'/>
                <text class="app-name">挑食街自助点餐</text>
            </div>
            <div class="alert">
                <div class="alert-title">网页由该小程序开发，请确认授权以下信息</div>
                <div class="alert-desc">
                    <div class="alert-text">获得你的公开信息（昵称、头像等）</div>
                </div>
            </div>
            <button class="weui-btn" type='primary' @getuserinfo="login" open-type='getUserInfo'>确认授权</button>
        </div>
    </div>
</template>

<script>
import wxp from 'minapp-api-promise'
import util from '../../utils/index.js'
export default {
    methods:{
        async login(){
            try{
				let userinfo = await wxp.getUserInfo();
                let pages = getCurrentPages();
                if(pages.length<=1){
                    
                }else{ 
                    let lastPage = pages[pages.length-2];
                    wxp.navigateBack()
                }
            }catch(err){
                wx.showModal({
					title:"提示",
					content:'未授权您的信息权限，将导致无法正常使用挑食街自助点餐',
					showCancel:false,
				})
			}
        }
    }
}
</script>

<style lang="scss" scoped>
page{
	background: #fff;
}

.login-container {
	height: 100%;
	padding: 10px 30px;
	background: #fff;
}

.app-info {
	position: relative;
	padding: 20px;
	text-align: center;
}

.app-info:after {
	content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}

.app-info .app-logo {
	display: block;
	width: 100px;
	height: 64px;
	margin: 10px auto;
}

.app-info .app-name {
	font-weight: bold;
	font-size: 18px;
	color: #000;
}

.alert {
	margin: 20px 0 30px;
}

.alert .alert-title {
	font-weight: 400;
	font-size: 16px;
	color: #000;
	margin-bottom: 10px;
}

.alert-desc {
	display: block;
    list-style: disc inside none;
}

.alert .alert-text {
	display: list-item;
    text-align: -webkit-match-parent;
	font-size: 14px;
	color: #999;
}

.logged {
	margin-top: 100px;
}

.logged .logged-icon {
	display: block;
	width: 64px;
	height: 64px;
	margin: 20px auto;
}

.logged .logged-text {
	font-size: 14px;
	color: #000;
	text-align: center;
	margin: 10px 0;
}
</style>

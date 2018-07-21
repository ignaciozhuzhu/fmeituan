<template>
    <div class="container flex a-center flex-col">
        <div class="address" @tap='modalShow = true'>
        {{address}}
        </div>
        <div class="order">
            <div class="title all-center">下单成功，您的取餐号为<text>{{order.number}}</text></div>
            <div class="order-list">
                <div v-for='(item,index) in order.list' :key="index" class="order-item">
                    
                    <div class="all-center">
                        <div class="order-name fg dotdot">{{item.name}}</div>
                        <div class="grey-text s-txt">取餐号:</div>
                    </div>
                    <div class="all-center">
                        <div class="order-time dotdot fg grey-text">{{item.time}}</div>
                        <div class="order-code">{{item.code}}</div>
                    </div>
                </div>
            </div>
        </div>
        <image src='http://tsj.half-candy.com/images/sy-11.png' mode='widthFix' style='width:100%;margin-top:60rpx;'/>
        <div class="shop-list">
            <div class="shop-item all-center" v-for="(item,index) in shops" :key="index" @tap='goRouter(item.name)'>
                <image :src='item.pic' mode='widthFix'/>
                <div class="fg">
                    <div class="shop-name">{{item.name}}</div>
                    <div class="all-center">
                        <div class="cu">促</div>
                        <div class="shop-sale fg">{{item.sale}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            address:'蚂蚁金服店',
            order:{
                number:'010',
                list:[{
                    name:'古早永乐村',
                    time:'2019-09-09 13:43:33',
                    code:'010-A'
                },{
                    name:'其小将',
                    time:'2019-09-09 13:43:33',
                    code:'010-B'
                }]
            },
            shops:[{
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                name:'其小将',
                sale:'XXXXXXXXXXXXXXXX'
            },{
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                name:'其小将',
                sale:'XXXXXXXXXXXXXXXX'
            },{
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                name:'其小将',
                sale:'XXXXXXXXXXXXXXXX'
            },{
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                name:'其小将',
                sale:'XXXXXXXXXXXXXXXX'
            }]
        }  
    },
    methods:{
        goRouter(a){
            wx.navigateTo({
                url:`/pages/shop/main?name=${a}`
            })
        }
    }
}
</script>

<style lang= "scss" scoped>
@import '../../assets/css/color.scss';
.address {
  width: 257rpx;
  height: 63rpx;
  background-image: url("http://tsj.half-candy.com/images/sy-12.png");
  text-align: center;
  background-size: cover;
  color:#fff;
  font-size: 24rpx;
  line-height: 43rpx;
  margin-bottom: -10rpx;
}

.order{
    width:90%;
    border-radius: 10rpx;
    border:1px solid $grey-line;
    box-shadow: 6px 6px 5px $grey-line;
    .title{
        width: 100%;
        height: 100rpx;
        background: $main;
        font-size: 36rpx;
        font-weight: bold;
        text{
            margin:0 15rpx;
            font-size:56rpx;
        }
    }
    .order-list{
        padding:0 30rpx;
        .order-item{
            border-bottom: 1px solid $grey-line;
            padding:20rpx 0;
            .order-name{
                font-weight: bold;
                font-size: 30rpx;
                padding:10rpx 0;
            }
            .order-time{
                font-size: 26rpx;
            }
            .order-code{
                font-weight: bold;
                font-size: 30rpx;
            }
            .s-txt{
                font-size: 26rpx;
            }
        }
        & .order-item:last-child{
            border:none;
        }
    }
}

.shop-list{
    width: 100%;
    .shop-item{
        padding:20rpx;
        border-bottom: 1px solid $grey-line;
        image{
            width: 100rpx;
            margin: 0 20rpx;
        }
        .shop-name{
            font-size: 32rpx;
            font-weight: bold;
            padding:15rpx 0;
        }
        .cu{
            font-size: 22rpx;
            background: $main;
            padding:3rpx;
            font-weight: bold;
            margin-right: 10rpx;
        }
        .shop-sale{
            color:$grey-text;
            font-size: 28rpx;
        }
    }
}
</style>



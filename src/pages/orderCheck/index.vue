<template>
    <div class="container">
        <div class="main">
            <div v-for="(item,index) in orderInfo.list" 
            :key="index"
            class="item">
                <div class="shop all-center">
                    <image :src='item.img' mode='widthFix'/>
                    <div class="fg">{{item.shop}}</div>
                </div>
                <div class="goods">
                    <div v-for="(goodItem,goodIdx) in item.items" 
                    :key="goodIdx"
                    class="good-item all-center">
                        <div class="good-name">{{goodItem.name}}</div>
                        <div class="fg good-number">X{{goodItem.number}}</div>
                        <div class="good-price">￥{{goodItem.price}}</div>
                    </div>
                </div>
                <div class="sale">
                    <div v-for="(saleItem,saleIdx) in item.sale"
                    :key="saleIdx"
                    class="sale-item all-center">
                        <div class="cu">减</div>
                        <div class="fg cu-text">{{saleItem.content}}</div>
                        <div class="cu-price">-￥{{saleItem.price}}</div>
                    </div>
                </div>
                <div class="remark all-center">
                    <div>订单备注</div>
                    <div class="fg remark-info dotdot">{{item.remark}}</div>
                </div>
            </div>

        </div>
        <image src='http://tsj.half-candy.com/images/sy-11.png' mode='widthFix' style='width:100%;margin-top:40rpx;'/>
        <div class="main">
            <div class="red all-center">
                <div class="fg">红包</div>
                <div class="avai">2个可用</div>
            </div>
            <div class="red all-center" style="border:none">
                <div class="fg">合计</div>
                <div>￥{{orderInfo.totalPrice}}</div>
            </div>
        </div>
        <div class="blank"></div>
        <div class="bottom all-center">
            <div class="fg cart all-center">
                <image src='http://tsj.half-candy.com/images/sy-13.png' mode='widthFix' />
                <div class="number">{{orderInfo.number}}</div>
                <div class="price">￥<text>{{orderInfo.totalPrice}}</text></div>
                <div class="cut fg" v-if="orderInfo.totalCut>0">已优惠￥{{orderInfo.totalCut}}</div>
            </div>
            <div class="pay">结算</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            orderInfo:{
                totalPrice:40,
                number:1,
                totalCut:8,
                list:[{
                    shop:'其小将',
                    img:'http://tsj.half-candy.com/images/sy-2.png',
                    remark:'不要辣xxxxxxxxxxxx',
                    sale:[{
                        type:0,
                        content:'满39减10',
                        price:5
                    }],
                    items:[{
                        name:'海鲜',
                        number:1,
                        price:20
                    },{
                        name:'海鲜',
                        number:1,
                        price:20
                    },{
                        name:'海鲜',
                        number:1,
                        price:20
                    }]
                },{
                    shop:'其小将',
                    img:'http://tsj.half-candy.com/images/sy-2.png',
                    remark:'不要辣xxxxxxxxxxxx',
                    sale:[{
                        type:0,
                        content:'满39减10',
                        price:5
                    }],
                    items:[{
                        name:'海鲜',
                        number:1,
                        price:20
                    },{
                        name:'海鲜',
                        number:1,
                        price:20
                    },{
                        name:'海鲜',
                        number:1,
                        price:20
                    }]
                }]
            }
        }
    }
}
</script>

<style lang= "scss" scoped>
@import '../../assets/css/color.scss';

.main{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.item{
    width:80%;
    background:#fff;
    border:1px solid $grey-line;
    border-radius: 20rpx;
    box-shadow: 5rpx 5rpx 5rpx $grey-line;
    margin: 15rpx 0;
    font-size: 30rpx;
    .shop{
       padding:15rpx 30rpx;
       background: $main;
       border-bottom: 1px solid $grey-line;
       border-radius: 20rpx 20rpx 0 0;
       image{
           width:100rpx;
       }
       div{
           text-align: right;
           font-size: 34rpx;
           font-weight: bold;
           
       }

    }
    .goods{
        padding:0 30rpx;
        display: flex;
        flex-direction: column;
        border-bottom: 8rpx solid $grey-line;
        .good-item{
            padding:15rpx 0;
            border-bottom: 1px solid $grey-line;
            // .good-name{
                // font-size: 28rpx;
            // }
            .good-number{
                color:$grey-text;
                font-size: 28rpx;
                text-align: center;
            }
            // .good-price{
            //     font-size: 28rpx;
            // }
        }
        &>.good-item:last-child{
            border:none;
        }
    }
    .sale{
        padding:0 30rpx;
        display: flex;
        flex-direction: column;
        .sale-item{
            padding:20rpx 0;
            border-bottom: 1px solid $grey-line;
            .cu{
                width: 30rpx;
                height: 30rpx;
                background: $main;
                text-align: center;
                line-height: 30rpx;
                margin-right: 20rpx;
                font-size: 22rpx;
            }
            .cu-text{
                font-size: 26rpx;
                color:$grey-text;
            }
        }
    }
    .remark{
        padding:20rpx 30rpx;
        .remark-info{
            font-size: 26rpx;
            color:$grey-text;
            margin-left: 30rpx;
        }
    }
}
.red{
    width: 80%;
    font-size: 28rpx;
    border-bottom: 1px solid $grey-line;
    padding:20rpx 0;
    .avai{
        background: $red-text;
        padding:5rpx 20rpx;
        border-radius: 15rpx;
        color:#fff;
    }
}
.bottom{
    width:100%;
    height: 130rpx;
    background: #E4E6E5;
    position:fixed;
    bottom:0;
    left:0;
    .cart{
        position: relative;
        image{
            width:80rpx;
            margin:0 30rpx;
        }
        .number{
            width:30rpx;
            height: 30rpx;
            border-radius: 30rpx;
            background: $main;
            line-height: 30rpx;
            text-align: center;
            position: absolute;
            top:10rpx;
            left:90rpx;
            font-size: 26rpx;
            
        }
        .cut{
            font-size: 26rpx;
            border-left: 1px solid $grey-line;
            padding-left: 20rpx;
            margin-right: 20rpx;
            color: $grey-text;
            text-align: left;
        }
        .price{
            font-size: 40rpx;
            font-weight: bold;
            color:$red-text;
        }
    }
    .pay{
        width:200rpx;
        height: 130rpx;
        background: $main;
        font-size: 40rpx;
        font-weight: bold;
        text-align: center;
        line-height: 130rpx;
    }
}
</style>



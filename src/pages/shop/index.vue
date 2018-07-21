<template>
    <div class="container">
        <div class="top all-center">
            <div class="shop all-center">
                <image :src='shop.img' mode='widthFix'/>
                <div class="fg flex-col detail a-center">
                    <div v-for="(item,index) in shop.sale" :key="index" class="all-center sale-item">
                        <div class="sale" v-if='item.type === 0'>新</div>
                        <div class="sale" v-if='item.type === 1'>减</div>
                        <div class="sale" v-if='item.type === 2'>促</div>
                        <div class="fg content dotdot">{{item.content}}</div>
                    </div>
                </div>
            </div>
            <image src='http://tsj.half-candy.com/images/sy-11.png' mode='widthFix' class="bar" style='width:100%;margin-top:20rpx;'/>
        </div>
        
        <div class="main all-center">
            <div class="left">
                <scroll-view scroll-y style='height:100%'>
                    <div v-for='(item,index) in types' :key="index" class="type-item" :class="{'active-type':activeTypeIdx === index}" @tap='changeType(index)'>
                        {{item.name}}
                    </div>
                </scroll-view>
            </div>
            <div class="right fg">
                <scroll-view scroll-y style='height:100%'>
                    <div v-for='(item,index) in goods' :key="index" class="good-item all-center" >
                        <image :src='item.pic' mode='widthFix' class="good-pic" @tap.stop='infoModalShow = true'/>
                        <div class="good-info fg">
                            <div class="all-center info-item">
                                <div v-if='item.oldPrice' class="cu">促</div>
                                <div class="fg good-name">{{item.name}}</div>
                            </div>
                            <div class="all-center info-item">
                                <div class="good-price">￥{{item.price}}</div>
                                <div v-if="item.oldPrice" class="good-olp">￥{{item.oldPrice}}</div>
                                <div class="fg ope-info">
                                    <image src='http://tsj.half-candy.com/images/sy-15.png' class="ope" v-if="item.number>0"/>
                                    <div v-if="item.number>0">{{item.number}}</div>
                                    <image src='http://tsj.half-candy.com/images/sy-16.png' class="ope" @tap.stop='addModalShow = true'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </scroll-view>
            </div>
        </div>
        <div class="bottom all-center">
            <div class="fg cart all-center" @tap='choosedModalShow = !choosedModalShow'>
                <image src='http://tsj.half-candy.com/images/sy-13.png' mode='widthFix' />
                <div class="number">{{number}}</div>
                <div class="price fg">￥<text>{{price}}</text></div>
            </div>
            <div class="pay" @tap='goOrderCheck'>结算</div>
        </div>
        <div class="modal all-center" v-if="addModalShow">
            <div class="modal-in">
                <div class="in-top all-center">
                    <image :src='addInfo.img' mode='widthFix' style="width:100rpx;"/>
                    <div class="fg">
                        <div class="good-name">{{addInfo.name}}</div>
                        <div class="good-choose">已选:{{choosedTxt}}</div>
                    </div>
                </div>
                <div class="in-mid">
                    <div>
                        <div style="font-size:28rpx">规格</div>
                        <div class="pick">
                            <div v-for="(item,index) in addInfo.brand" 
                            :key="index" 
                            class="pick-item" 
                            :class='{chooseOption:brandChoosed === index}'
                            @tap='chooseBrand(item,index)'>
                                {{item.text}}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="font-size:28rpx">口味</div>
                        <div class="pick">
                            <div v-for="(item,index) in addInfo.taste" 
                            :key="index" 
                            class="pick-item"
                            :class='{chooseOption:tasteChoosed === index}'
                            @tap='chooseTaste(item,index)'>
                                {{item.text}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="in-bottom">选好了</div>
                <image src='http://tsj.half-candy.com/images/sy-14.png' class="cancel" mode='widthFix' @tap='addModalShow = false'/>
            </div>
        </div>
        <div class="modal all-center" v-if="infoModalShow">
            <div class="modal-in">
                <image :src='addInfo.img' mode='widthFix' style="width:100%;margin-bottom:20rpx;" />
                <div class="all-center good-det">
                    <div class="fg">
                        <div class="good-name">{{addInfo.name}}</div>
                        <div class="good-text">月销{{addInfo.sale}}  好评率{{addInfo.rate}}</div>
                        <div class="all-center">
                            <div class="good-price" style="font-size:30rpx;padding:0">￥{{addInfo.price}}</div>
                            <div class="fg good-olp" style="font-size:26rpx">￥{{addInfo.oldPrice}}</div>
                        </div>
                    </div>
                    <image src='http://tsj.half-candy.com/images/sy-16.png' style="width:40rpx;height:40rpx;" @tap='showAdd'/>
                </div>
                <image src='http://tsj.half-candy.com/images/sy-14.png' class="cancel" mode='widthFix' @tap='infoModalShow = false'/>
            </div>
        </div>
        <div class="modal-1" v-if="choosedModalShow">
            <div class="choosed-in">
                <div class="choosed-in-top all-center">
                    <div class="fg">已选商品</div>
                    <div>清空</div>
                </div>
                <div class="choosed-list">
                    <div v-for='(item,index) in choosedList'
                    :key="index"
                    class="all-center choosed-item">
                        <div class="fg">{{item.name}}</div>
                        <div class="choosed-price">X{{item.price}}</div>
                        <image src='http://tsj.half-candy.com/images/sy-15.png' class="ope"/>
                        <div>{{item.number}}</div>
                        <image src='http://tsj.half-candy.com/images/sy-16.png' class="ope"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            addModalShow:false,
            infoModalShow:false,
            choosedModalShow:false,
            brandText:'',
            tasteText:'',
            brandChoosed:null,
            tasteChoosed:null,
            addInfo:{
                img:'http://tsj.half-candy.com/images/sy-2.png',
                name:'xxx油条',
                sale:100,
                rate:'98%',
                price:5,
                oldPrice:8,
                taste:[{
                    text:'原味'
                },{
                    text:'原味1'
                },{
                    text:'原味2'
                },{
                    text:'原味3'
                },{
                    text:'原味4'
                },{
                    text:'原味5'
                },{
                    text:'原味6'
                }],
                brand:[{
                    text:'整根'
                },{
                    text:'半根'
                }]
            },
            shop:{
                img:'http://tsj.half-candy.com/images/sy-2.png',
                name:'古早永乐村',
                sale:[{
                    type:0,
                    content:'新用户下单立减5元（不与其他活动同享）'
                },{
                    type:1,
                    content:'新用户下单立减5元（不与其他活动同享）'
                }]

            },
            price:0,
            number:0,
            types:[{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            },{
                name:'热销'
            }],
            activeTypeIdx:0,
            goods:[{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:1
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            },{
                name:'xxx油条',
                price:5,
                oldPrice:8,
                pic:'http://tsj.half-candy.com/images/sy-2.png',
                number:0
            }],
            choosedList:[{
                name:'xxxxx',
                price:5,
                number:1
            }]
        }
    },
    computed:{
        choosedTxt(){
            if(this.brandText!=''&this.tasteText!=''){
                return `${this.brandText}/${this.tasteText}`
            }else{
                return `${this.brandText}${this.tasteText}`
            }
            
        }

    },
    methods:{
        changeType(idx){
            this.activeTypeIdx = idx;
        },
        showAdd(){
            this.addModalShow = true;
            this.infoModalShow = false;
        },
        chooseBrand(item,idx){
            this.brandChoosed = idx;
            this.brandText = item.text;
        },
        chooseTaste(item,idx){
            this.tasteChoosed = idx;
            this.tasteText = item.text;
        },
        goOrderCheck(){
            wx.navigateTo({
                url:'/pages/orderCheck/main'
            })
        }
    }
}
</script>

<style lang= "scss">
@import '../../assets/css/color.scss';
.modal-1{
    position:absolute;
    top:0;
    left:0;
    bottom:130rpx;
    right:0;
    background: rgba(0,0,0,0.5);
    z-index: 15;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .choosed-in{
        border-radius: 20rpx 20rpx 0 0 ;
        background: #fff;
        width: 80%;
        .choosed-in-top{
            width: 100%;
            height: 80rpx;
            background: $main;
            line-height: 80rpx;
            font-weight: bold;
            border-radius: 20rpx 20rpx 0 0 ;
            div{
                margin: 0 30rpx;
            }
        }
        .choosed-list{
            .choosed-item{
                padding:20rpx;
                border-bottom: 1px solid $grey-line;
                .choosed-price{
                    font-size: 28rpx;
                    color:$grey-text;
                    margin-right: 40rpx;
                }
            }
        }
    }
}
.modal{
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    z-index: 15;
    .modal-in{
        width:80%;
        background: #fff;
        border-radius: 20rpx;
        position: relative;
    }
}
.in-top{
    padding:040rpx;
    .good-choose{
        color:$grey-text;
        font-size: 26rpx;
    }
    image{
        margin-right:20rpx;
    }
}
.in-mid{
    padding:0 40rpx;
    .pick{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .pick-item{
            padding:10rpx 30rpx;
            background:$grey-line;
            font-size: 28rpx;
            margin:15rpx 15rpx 15rpx 0;;
            border-radius: 20rpx;
        }
        .chooseOption{
            background: $main;
        }
    }
}
.in-bottom{
    background: $main;
    width: 100%;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    font-size: 32rpx;
    border-radius: 0 0 20rpx 20rpx;
    margin-top: 20rpx;
}
.cancel{
    width: 40rpx;
    position: absolute;
    top:30rpx;
    right:30rpx;
}

.good-det{
    padding:40rpx;
}
.good-text{
    font-size: 28rpx;
    color: $grey-text;
    padding:10rpx 0;
}
.top{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 230rpx;
    z-index: 11;
    background: #fff;
    .bar{
        position: absolute;
        bottom:0;
        left:0;
    }
}
.shop{
    padding:20rpx;
    width:100%;
    image{
        width:120rpx;
        margin: 0 20rpx;
    }
    .detail{
        border-left: 1px solid $grey-line;
        justify-content: space-around;
        padding-left: 20rpx;
        .sale-item{
            margin:10rpx 0;
        }
        .sale{
            font-size: 24rpx;
            font-weight: bold;
            background: $main;
            margin:0 10rpx;
        }
        .content{
            font-size: 28rpx;
            color:$grey-text;
            margin-right: 20rpx;
        }
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

.main{
    width:100%;
    position:absolute;
    top:230rpx;
    bottom:130rpx;
    left:0;
    right:0;
    .left{
        width:250rpx;
        height:100%;
        .type-item{
            width:100%;
            height:100rpx;
            text-align: center;
            line-height: 100rpx;
            background: #F1F1F1;
            border-bottom: 1px solid $grey-line;
        }
        .active-type{
            background: $main;
            font-weight: bold;
        }
    }
    .right{
        height: 100%;
        .good-item{
            padding:20rpx;
            border-bottom: 1px solid $grey-line;
            .good-pic{
                width: 100rpx;
                margin:0 10rpx;
            }
            .good-info{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                .info-item{
                    width:100%;
                }
            }
            .ope-info{
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            .cu{
                font-size: 24rpx;
                font-weight: bold;
                background: $main;
                margin:0 10rpx;
            }
            .good-name{
                font-size: 32rpx;
                font-weight: bold;
            }
            

        }
    }
}

.good-price{
    color:$red-text;
    font-size: 28rpx;
    font-weight: bold;
    padding: 0 10rpx;
}
.good-olp{
    color:$grey-text;
    font-size: 24rpx;
    text-decoration:line-through;
}
.ope{
    width:40rpx;
    height: 40rpx;
    margin:0 10rpx;
}
</style>


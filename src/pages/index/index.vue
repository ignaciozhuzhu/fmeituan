<template>
  <div class="container around-space">
    <div class="address" @tap='modalShow = true'>
      {{address}}
    </div>
    <div class="wrapper">
      <swiper :indicator-dots="indicatorDots"
        :autoplay="autoplay" :interval="interval" :duration="duration" class="swiper"
        indicator-color='#FFDF00' indicator-active-color='green'>
        <block v-for="(item,index) in imgUrls" :key='index'>
          <swiper-item class="item">
            <image :src="item" class="slide-image"/>
            
          </swiper-item>
        </block>
        
      </swiper>
      <image src='http://tsj.half-candy.com/images/sy-1.png' class="indicator" />
    </div>
    <div class="circle-menu all-center">
      <div class="fg all-center flex-col tab">
        <image src='http://tsj.half-candy.com/images/sy-2.png' mode='widthFix' class="circle-tab"/>
        <div class="txt">扫码购</div>
      </div>
      <div class="fg all-center flex-col tab">
        <image src='http://tsj.half-candy.com/images/sy-3.png' mode='widthFix' class="circle-tab"/>
        <div class="txt">充值有礼</div>
      </div>
    </div>
    <image src='http://tsj.half-candy.com/images/sy-11.png' mode='widthFix' style='width:100%;margin-top:60rpx;'/>
    <div class="menu all-center">
      <div class="fg flex-col all-center" v-for='(item,index) in menus' :key='index' @tap='goRouter(item.pathUrl)'>
        <image :src='item.icon'/>
        <div class="status" :class="{'active':item.status === 1}"></div>
        <div>{{item.text}}</div>
      </div>
    </div>
    <div class="modal all-center" v-show='modalShow'>
      <div class="choose-address">
        <div class="choose-tab all-center">
          <div class="fg" :class="{'active-tab':activeTab === 0}" style="border-radius:10rpx 0 0 0;">附近的餐厅</div>
          <div class="fg" :class="{'active-tab':activeTab === 1}" style="border-radius:0 10rpx 0 0 0;">收藏的餐厅</div>
        </div>
        <div class="shop-list">
          <div v-for='(item,index) in shops' :key='index' class="all-center shop-item">
            <image src='http://tsj.half-candy.com/images/checked.png' v-if='checkedIdx === index' class="check"/>
            <image src='http://tsj.half-candy.com/images/unchecked.png' v-if='checkedIdx !== index' class="check" @tap ='changeChecked' :data-idx = 'index'/>
            <div class="fg">
              <div class="all-center d">
                <div class="fg shop-name">{{item.name}}</div>
                <div class="shop-distance">{{item.distance}}</div>
              </div>
              <div class="all-center d">
                <div class="fg shop-address dotdot">{{item.address}}</div>
                <image src='http://tsj.half-candy.com/images/liked.png' style="width:40rpx ;height:40rpx" v-if="item.liked" @tap='item.liked = false'/>
                <image src='http://tsj.half-candy.com/images/unliked.png' style="width:40rpx ;height:40rpx" v-if="!item.liked" @tap='item.liked = true'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      modalShow:false,
      address: "蚂蚁金服店",
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 1000,
      duration: 100,
      menus:[{
        icon:'http://tsj.half-candy.com/images/sy-10.png',
        status:1,
        text:'堂食',
        pathUrl:'/pages/eatNow/main'
      },{
        icon:'http://tsj.half-candy.com/images/sy-9.png',
        status:0,
        text:'外卖',
        pathUrl:'/pages/eatNow/main'
      },{
        icon:'http://tsj.half-candy.com/images/sy-8.png',
        status:0,
        text:'团餐',
        pathUrl:'/pages/eatNow/main'
      },{
        icon:'http://tsj.half-candy.com/images/sy-7.png',
        status:0,
        text:'打包',
        pathUrl:'/pages/eatNow/main'
      }],
      shops:[{
        name:'蚂蚁金服店',
        address:'杭州市西湖区xx街道xx号xx',
        liked:true,
        checked:true,
        distance:'1.3公里'
      },{
        name:'蚂蚁金服店1',
        address:'杭州市西湖区xx街道xx号xx',
        liked:true,
        checked:true,
        distance:'1.3公里'
      },{
        name:'蚂蚁金服店2',
        address:'杭州市西湖区xx街道xx号xx',
        liked:false,
        checked:true,
        distance:'1.3公里'
      },{
        name:'蚂蚁金服店3',
        address:'杭州市西湖区xx街道xx号xxxxxxxxxxxxxx',
        liked:false,
        checked:true,
        distance:'1.3公里'
      }],
      activeTab:0,
      checkedIdx:0
    };
  },
  computed: {
    ...mapGetters(["a"])
  },

  methods: {
    changeChecked(e){
      console.log(e.mp)
      this.checkedIdx = e.mp.currentTarget.dataset.idx;
      this.address = this.shops[this.checkedIdx].name;
      this.modalShow = false;
    },
    goRouter(url){
      wx.navigateTo({
        url
      })
    }
  },

  created() {}
};
</script>

<style  lang= 'scss' scoped>
@import "../../assets/css/color.scss";
@media screen and (max-width: 350px){
  .wrapper .indicator{
      width: 150rpx;
      height: 51rpx;
      position: absolute;
      bottom:12rpx !important;
      left:50%;
      margin-left: -75rpx;
      z-index: -1;
  }
}
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
.wrapper{
  width:100%;
  height:500rpx;
  position: relative;
  .indicator{
      width: 150rpx;
      height: 51rpx;
      position: absolute;
      bottom:8rpx;
      left:50%;
      margin-left: -75rpx;
      z-index: -1;
    }
}
.swiper{
  width:100%;
  height:100%;
  position: relative;
  .item{
    width:100%;
    height: 450rpx;
    flex-direction: column;
    .slide-image{
      width: 100%;
      height:445rpx;
    }
    
  }
}

.circle-menu{
  width:80%;
  margin-top: 20rpx;
  .circle-tab{
    width:140rpx;
  }
  .txt{
    white-space:nowrap;
  }
}

.menu{
  width:100%;
  margin:50rpx 0;
  image{
    width:70rpx;
    height: 60rpx;
  }
  .status{
    width:60rpx;
    height: 10rpx;
    background: $grey-text;
    margin:10rpx 0;
  }
  .active{
      background: $main !important;
  }
}

.modal{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:absolute;
  z-index: 1111;
  .choose-address{
    white-space: nowrap;
    width:80%;
    height: 60%;
    background: #fff;
    border-radius: 10rpx;
    .choose-tab{
      border-radius: 10rpx 10rpx 0 0 ;
      height: 100rpx;
      text-align: center;
      font-weight: bold;
      line-height: 100rpx;
      background: #DDDDDD;
      .active-tab{
        background: $main;
      }
    }
    .shop-list{
      padding:0 20rpx;
      .shop-item{
        border-bottom: 1px solid $grey-line;
        padding:15rpx;
        .d{
          padding:5rpx 0;
        }
        .shop-name{
          font-weight: bold;
          font-size: 28rpx;
        }
        .shop-distance{
          color:$grey-text;
          font-size: 24rpx;
        }
        .shop-address{
          font-size: 26rpx;
          color:$grey-text;
        }
      }
      .check{
        width:40rpx;
        height: 40rpx;
        margin:0 15rpx;
      }
    }
  }
}
</style>

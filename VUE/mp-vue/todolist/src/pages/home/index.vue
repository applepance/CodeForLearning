<template>
  <div class="home">
    <seach></seach>
    <recommand></recommand>
    <scroll-view>
      <div class="restaurantsList">
        <div
          class="restaurants-list"
          v-for="(item,index) in restaurant"
          :key="index"
          @click="toIndex"
        >
          <div class="restaurants-info-image">
            <image :src="item.src" class="restaurants-image" />
          </div>
          <div class="restaurants-info">
            <div class="restaurants-info-name">{{item.name}}</div>
            <div class="restaurants-info-rating">
              <!-- <star :size="24" :score="item.score"></star> -->
              <div class="restaurants-info-rating-sales">月售 {{item.sales}}</div>
            </div>
            <div
              class="restaurants-info-price"
            >起送 {{item.initial_price}}￥ | 配送 {{item.distribution_price}}</div>
          </div>
          <div class="restaurants-distribution">
            <span class="restaurants-distribution-time">{{item.time}} 分钟</span>
            <span class="restaurants-distribution-distance">{{item.distance}}</span>
          </div>
        </div>
      </div>
    </scroll-view>

  </div>
</template>

<script>
import seach from '@/components/search/search'
import recommand from '@/components/recommand/recommand'
import fly from '@/utils/fly'
export default {
  data() {
    return {
      restaurant: [],
      isLoading: false
    }
  },
  // onReachBottom
  onLoad () {
    wx.showLoading({
      title: '加载中'
    })
    this.$http
      .get("sell#!method=get")
      .then(res => {
        this.restaurant = [...this.restaurant, ...res.data.data.restaurant];
        wx.hideLoading();
      })
  },
  components: {
    seach,
    recommand
  }
}
</script>

<style lang="stylus" scoped>
.home
    width 100%
    height 100%
    .mask
        overflow hidden
        position fixed
        z-index 999
        width 100%
        height 100%
        background-color rgba(15, 15, 26, 0.7)
        .overall-sort-list,.filterList,.filterList-footer
            background: white
        .overall-sort-list
            flex-direction column
            border-top 1px solid rgba(0,0,0,0)
            display flex
            .overall-sort
                font-size 25rpx
                height 70rpx
                line-height 70rpx
                margin-left 30rpx
                
    .title
        display flex
        align-items center
        width 50%
        margin 20rpx auto 30rpx auto
        .line
            flex 1
            top -12rpx
            border-bottom 1rpx solid #404040
        .text
            padding 24rpx
            font-weight 500
            font-size 35rpx
            color #333
    .select
        margin-bottom 30rpx
        .sort-list
            justify-content space-around
            display flex
            background white
            width 100%
            height 80rpx
            font-size 27rpx
            color #6A6A6A
            align-content center
            border 1rpx solid #ECECEC
            .sort
                text-align center
                margin auto 0
                height 30rpx
                line-height 30rpx
                border-right 1rpx solid #ECECEC;
                flex 1
                .overall-sort
                    font-size 25rpx
                    height 70rpx
                    line-height 70rpx
                    margin-left 30rpx
                    
                .sort-active
                    color black
                    font-weight: 800
        
    .restaurants-list
        font-size 25rpx
        display flex
        width 100%
        padding 10rpx 0   
        border-bottom 1rpx solid #ECECEC
        color: #6D6D6D
        justify-content space-between
        .restaurants-info-image
            margin 20rpx
            image
                width 200rpx
                height 125rpx
        .restaurants-info
            margin: 15rpx;
            flex: 1;
        .restaurants-info-name
            color #333
            font-size 36rpx
            font-weight 700
            margin-bottom 10rpx
        .restaurants-info-rating
            display flex
            width 300rpx
            height 50rpx
            line-height 50rpx
            .restaurants-info-rating-stars
                color #FFD161
                width 130rpx
                height 50rpx
            .restaurants-info-rating-sales
                width 150rpx
                height 50rpx
                padding-left 20rpx
    .restaurants-distribution
        width 180rpx
        margin-right 20rpx 
        margin-top 72rpx
        height 27rpx
        line-height 27rpx
        .restaurants-distribution-time
            padding-right 5rpx
            border-right 1px solid #e4e4e4
</style>

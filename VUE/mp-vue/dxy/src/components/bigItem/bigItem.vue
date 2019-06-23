<template>
  <div class="bigItem">
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="fen" v-if="index > 0">
      </div>
      <div class="bigIcon" :style="'background-color:'+ item.bgc +';'">
        <img :src="item.img" mode="aspectFit">
      </div>
      <div class="footer">
        <p class="title">{{item.title}}</p>
        <p class="des">{{item.des}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigItems: {
      type: Array,
      default: [
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          des: '按科室找医生',
          bgc: '#28b7a3'
        },
        {
          img: '../../static/tabs/1.png',
          title: '名医义诊',
          des: '新人1元起',
          bgc: '#ea9518'
        },
        {
          img: '../../static/tabs/yao.png',
          title: '在线购药',
          des: '限时包邮',
          bgc: '#1296db'
        }
      ]
    }
  },
  data() {
    return {
      items: this.bigItems
    };
  }
};
</script>

<style scoped>
.bigItem {
  width: 100%;
  position: relative;
  display: flex;
  height: 2.5rem;
}
.item {
  flex: 1;
  position: relative;
}
.item .fen {
  position: absolute;
  left: 0;
  top: 25%;
  height: 50%;
  width: 1px;
  box-sizing: border-box;
  border: 1px solid #eee;
}
.item .bigIcon {
  box-sizing: border-box;
  margin-top: 12%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  width: 0.8rem;
  height: 0.8rem;
  padding-top: 0.15rem;
  padding-left: 0.15rem;
  border-radius: 15px;
}
.item .bigIcon img {
  height: 0.5rem;
  width: 0.5rem;
}
.footer .title {
  margin-top: 7%;
  text-align: center;
}
.footer .des {
  margin-top: 4%;
  font-size: 20rpx;
  text-align: center;
}
</style>


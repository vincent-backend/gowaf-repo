
<script lang="ts" setup>
defineProps<{
  drmCustomer: {
    title: string;
    contentPre: string;
    contentImg: string;
    contentMid: string;
    contentP: string;
    contentLink: string;
    contentLast: string;
    isShowSubTitle: boolean
    faceImg: {
      img: string;
      top: string;
      right: string;
      width: string,
      height: string,
    }[];
    list: {
      title: string;
      subTitle: string;
      content: string;
    }[];
    items: Array<{
      num: Number;
      icon: string;
    }>;
  }[];
}>();

</script>
<template>
  <div class="drm-customer-container">
    <div class="drm-customer-content-container">
      <h3>{{ drmCustomer.title }}</h3>
      <p v-if="!drmCustomer.isHiddenSubTitle">
        {{ drmCustomer.contentPre }}
        <img :src="drmCustomer.contentImg" :alt="drmCustomer.contentImg" />
        <span class="clolorFA9B3B">{{ drmCustomer.contentMid }}</span>
        {{ drmCustomer.contentP }}
        <a href="#">{{ drmCustomer.contentLink }}</a>
         {{ drmCustomer.contentLast }}
      </p>
      <div class="list">
        <div>
          <h4><span></span>{{ drmCustomer.list.title }}</h4>
          <span>{{ drmCustomer.list.subTitle }}</span>
        </div>
        <p>
          {{ drmCustomer.list.content }}
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in drmCustomer.items" :key="index">
          <span>{{ item.num }}</span>
          <img :src="item.icon" :alt="item.num">
        </li>
      </ul>
      <div class="face-img" 
          :style="'background-image:url('+drmCustomer.faceImg.img + '); width:' + 
          drmCustomer.faceImg.width + ';height:' + 
          drmCustomer.faceImg.height + ';top:' + 
          drmCustomer.faceImg.top + ';right:' + 
          drmCustomer.faceImg.right
      "></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.drm-customer-container {
  margin: 0 auto;
  padding: 80px 0;
  width: 100%;
  background: #fff;
  .drm-customer-content-container{
    width: 1380px;
    margin: 0 auto;
    position: relative;
    .face-img{
      position: absolute;
      width: 438px;
      height: 300px;
      background-position: right 0;
      background-repeat: no-repeat;
      background-size: cover !important;
      right:135px;
      top:-3px;
    }
    &::before{
        content: "";
        position: absolute;
        top: 150px;
        left:0;
        width: 148px;
        height: 70px;
        background: url(/public/images/products/stream/multi-drm/Network_Overview_evaluate_bg_point_1@2x.png) no-repeat 0 0;
        background-size: 148px 70px;
    }
    &::after{
        content: "";
        position: absolute;
        bottom: 253px;
        right:1px;
        width: 148px;
        height: 70px;
        background: url(/public/images/products/stream/multi-drm/Network_Overview_evaluate_bg_point_2@2x.png) no-repeat 0 0;
        background-size: 148px 70px;
    }    
    >h3{
      padding-left: 90px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding-bottom: 20px;
    }
    >p{
      padding-left: 90px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: table-cell;
      .clolorFA9B3B{
        color: #FA9B3B;
      }
      a{
        color: #0CBF6A;
        text-decoration: underline;
      }
      img{
        width: 20px;
        height: 20px;
        vertical-align: top;
      }
    }
    >.list{
      margin: 100px auto 58px auto;
      position: relative;
      box-sizing: border-box;
      padding: 30px;
      width: 1200px;
      height: 240px;
      background: linear-gradient( 312deg, #E9F8FC 0%, #FFFBF0 100%);
      border-radius: 24px;
      p{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4E4E4E;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-right: 80px;
      }
      >div{
        width: 1140px;
        margin: 0px auto 30px auto;
        border-bottom: 1px solid #E6E6E6;
        position: relative;
        padding-bottom: 22px;
        h4{
          position: relative;
          font-family: PingFang-SC, PingFang-SC;
          font-weight: bold;
          font-size: 24px;
          color: #000000;
          line-height: 34px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-left: 20px;
          >span{
            position: absolute;
            top: 7px;
            left:0;
            width: 6px;
            height: 22px;
            background: linear-gradient( 180deg, #46CF3A 0%, #36CFBC 100%);

          }
        }
        >span{
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #4E4E4E;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
    >ul{
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 50px auto 0px auto;
      li{
        width: 282px;
        height: 230px;
        box-sizing: border-box;
        background: #FFFFFF url(/public/images/products/stream/multi-drm/Network_Overview_ic_star@2x.png) no-repeat center 45px;
        background-size: 36px 33px !important;
        border-radius: 24px;
        border: 1px solid #E6E6E6;
        padding-top: 90px;
        text-align: center;
        span{
          display: block;
          text-align: center;
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 30px;
          color: #F9A337;
          line-height: 40px;
          font-style: normal;
          text-transform: none;
          padding-bottom: 22px;
        }
        img{
          width: 180px;
          height: 50px;
        }
      }
    }
  }
}
</style>
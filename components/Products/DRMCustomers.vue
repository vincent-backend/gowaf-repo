<script lang="ts" setup>
defineProps<{
  drmCustomer: {
    title?: string;
    contentPre?: string;
    contentImg?: string;
    contentMid?: string;
    contentP?: string;
    contentLink?: string;
    contentLast?: string;
    isShowSubTitle?: boolean;
    isHiddenSubTitle?: boolean;
    faceImg: {
      img: string;
      top: string;
      right: string;
      width: string;
      height: string;
      mtop: string;
      mright: string;
      mwidth: string;
      mheight: string;
    };
    list: {
      title?: string;
      subTitle?: string;
      content?: string;
    };
    items?: Array<{
      num?: Number;
      icon?: string;
    }>;
  };
}>();
</script>
<template>
  <div class="drm-customer-container">
    <div class="drm-customer-content-container">
      <h3>{{ drmCustomer.title }}</h3>
      <p :class="{ isHiddenSubTitle: drmCustomer.isHiddenSubTitle }">
        {{ drmCustomer.contentPre }}
        <img :src="drmCustomer.contentImg" :alt="drmCustomer.contentImg" />
        <span class="clolorFA9B3B">{{ drmCustomer.contentMid }}</span>
        {{ drmCustomer.contentP }}
        <NuxtLinkLocale href="#">{{ drmCustomer.contentLink }}</NuxtLinkLocale>
        {{ drmCustomer.contentLast }}
      </p>
      <div class="list">
        <div class="header-list">
          <h4><span></span>{{ drmCustomer.list.title }}</h4>
          <span>{{ drmCustomer.list.subTitle }}</span>
          <div>
            <img class="face-img" v-if="isMobile()" :src="drmCustomer.faceImg.img" :width="drmCustomer.faceImg.mwidth"  :height="drmCustomer.faceImg.mheight"/>
            <img class="face-img" v-if="!isMobile()" :src="drmCustomer.faceImg.img" :width="drmCustomer.faceImg.width"  :height="drmCustomer.faceImg.height"/>
          </div>
        </div>
        <p>
          {{ drmCustomer.list.content }}
        </p>
      </div>
      <ul v-if="drmCustomer.items">
        <li v-for="(item, index) in drmCustomer.items" :key="index">
          <div class="star"></div>
          <span>{{ item.num }}</span>
          <img :src="item.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.drm-customer-container {
  margin: 0 auto;
  padding: 80px 0 30px 0;
  width: 100%;
  background: #fff;
  .drm-customer-content-container {
    width: 1380px;
    margin: 0 auto;
    position: relative;
    .isHiddenSubTitle {
      display: none;
      visibility: hidden;
      padding-bottom: 144px;
    }
    .header-list {
      .face-img {
        position: absolute;
        width: 438px;
        height: 300px;
        background-position: right 0;
        background-repeat: no-repeat;
        background-size: cover !important;
        right: 0;
        bottom: 0;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 150px;
      left: 0;
      width: 148px;
      height: 70px;
      background: url(/images/products/stream/multi-drm/Network_Overview_evaluate_bg_point_1@2x.png)
        no-repeat 0 0;
      background-size: 148px 70px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 253px;
      right: 1px;
      width: 148px;
      height: 70px;
      background: url(/images/products/stream/multi-drm/Network_Overview_evaluate_bg_point_1@2x.png)
        no-repeat 0 0;
      background-size: 148px 70px;
      z-index: 0;
    }
    > h3 {
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
    > p {
      padding-left: 90px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: table-cell;
      .clolorFA9B3B {
        color: #fa9b3b;
      }
      a {
        color: #0cbf6a;
        text-decoration: underline;
      }
      img {
        width: 20px;
        height: 20px;
        vertical-align: top;
      }
    }
    > .list {
      margin: 100px auto 18px auto;
      position: relative;
      box-sizing: border-box;
      padding: 30px;
      width: 1200px;
      min-height: 190px;
      background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
      border-radius: 24px;
      z-index: 1;
      p {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-right: 80px;
      }
      > div {
        width: 1140px;
        margin: 0px auto 30px auto;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        padding-bottom: 22px;
        h4 {
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
          > span {
            position: absolute;
            top: 7px;
            left: 0;
            width: 6px;
            height: 22px;
            background: linear-gradient(180deg, #46cf3a 0%, #36cfbc 100%);
          }
        }
        > span {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
    > ul {
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 50px auto 0px auto;
      li {
        width: 282px;
        height: 230px;
        box-sizing: border-box;
        border-radius: 24px;
        border: 1px solid #e6e6e6;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .star {
          width: 36px;
          height: 36px;
          background: url(/images/network/Network_Overview_ic_star.png);
        }
        span {
          display: block;
          text-align: center;
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 30px;
          color: #f9a337;
          line-height: 40px;
          font-style: normal;
          text-transform: none;
          padding-bottom: 0;
        }
        img {
          width: 180px;
          height: 50px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .drm-customer-container {
    margin: 0 auto;
    padding: 4rem 1.88rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 43rem;
    background: #fff;
    .drm-customer-content-container {
      width: 100%;
      margin: 0 auto;
      position: static;
      .isHiddenSubTitle {
        display: block;
        padding-bottom: 5rem;
      }
      &::before {
        display: none;
        content: '';
        position: absolute;
        top: 15.94rem;
        left: 0;
        width: 9.25rem;
        height: 4.38rem;
        background: url(/images/products/stream/multi-drm/Network_Overview_evaluate_bg_point_1@2x.png)
          no-repeat 0 0;
        background-size: 9.25rem 4.38rem;
        z-index: 10;
      }
      &::after {
        display: none;
      }
      > h3 {
        padding-left: 0;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-bottom: 1rem;
      }
      > p {
        padding-left: 0;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        display: table-cell;
        padding-bottom: 1rem;
        .clolorFA9B3B {
          color: #fa9b3b;
        }
        a {
          color: #0cbf6a;
          text-decoration: underline;
        }
        img {
          width: 1.88rem;
          height: 1.88rem;
          vertical-align: top;
        }
      }
      > .list {
        margin: 0 auto 2.94rem auto;
        position: relative;
        box-sizing: border-box;
        padding: 1.88rem;
        width: 100%;
        min-height: 24.81rem;
        background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
        border-radius: 0.88rem;
        p {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.63rem;
          color: #4e4e4e;
          line-height: 2.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-right: 0;
        }
        > div {
          width: 100%;
          margin: 0px auto 1.88rem auto;
          border-bottom: 1px solid #e6e6e6;
          position: relative;
          padding-bottom: 1.88rem;
          h4 {
            position: relative;
            font-family: PingFang-SC, PingFang-SC;
            font-weight: bold;
            font-size: 2.25rem;
            color: #000000;
            line-height: 3.13rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding-left: 1rem;
            > span {
              position: absolute;
              top: 0.7rem;
              left: 0;
              width: 0.25rem;
              height: 1.75rem;
              background: linear-gradient(180deg, #46cf3a 0%, #36cfbc 100%);
            }
          }
          > span {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.38rem;
            color: #4e4e4e;
            line-height: 1.88rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        .header-list {
          position: static;
          padding-bottom: 0;

          > div {
            display: flex;
            .face-img {
              position: static;
              width: 100%;
              height: auto;
              background-position: right 0;
              background-repeat: no-repeat;
              background-size: cover !important;
            }
          }
        }
      }
      > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        margin: 2.9rem auto 0px auto;
        gap: 1rem;
        li {
          width: calc(50% - 1rem);
          height: 15.19rem;
          box-sizing: border-box;
          border-radius: 1.5rem;
          border: 1px solid #e6e6e6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .star {
            width: 2.5rem;
            height: 2.5rem;
            background: url(/images/network/Network_Overview_ic_star.png);
          }
          span {
            display: block;
            text-align: center;
            font-family: Mont, Mont;
            font-weight: 600;
            font-size: 2.5rem;
            line-height: 3.31rem;
            color: #f9a337;
            padding: 0;
            font-style: normal;
            text-transform: none;
            margin: 0.38rem 0 0 0;
          }
          img {
            width: 11.25rem;
            height: 3.13rem;
          }
        }
      }
    }
  }

  .BouuyDNS-ProductsDRMCustomers.drm-customer-container .drm-customer-content-container p.isHiddenSubTitle {
    padding-bottom: 0;
  }
  .hidden-subtitle.drm-customer-container .drm-customer-content-container p.isHiddenSubTitle {
    padding-bottom: 0;
  }
}
</style>
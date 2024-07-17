<template>
  <div class="DNScomparisonList">
    <div class="page-container content-container">
      <div class="comparison-list">
        <div class="name-clll">
          <div class="item" v-for="name in comparisonName">
            <template v-if="typeof name == 'string'">
              {{ name }}
            </template>
            <template v-else>
              <div class="main">{{ name[0] }}</div>
              <div class="sub-text">{{ name[1] }}</div>
            </template>
          </div>
        </div>
        <div class="row" v-for="li in ptlist">
          <div class="item">
            <img class="Icon" :src="li.comparisonIcon" alt="" srcset="" />
          </div>
          <div class="item" v-for="item in li.items">
            <template v-if="typeof item == 'string'">
              {{ item }}
            </template>
            <template v-else>
              <div :class="item[0] === true ? 'hook' : 'fork'"></div>
              <div class="text">{{ item[1] }}</div>
            </template>
          </div>
        </div>
        <div class="oneself">
          <div class="item">
            <img class="Icon" :src="selflist.comparisonIcon" alt="" srcset="" />
          </div>
          <div v-for="sitem in selflist.items" class="item">
            <template v-if="typeof sitem == 'string'">
              {{ sitem }}
            </template>
            <template v-else>
              <div :class="sitem[0] === true ? 'hook' : 'fork'"></div>
              <div class="text">{{ sitem[1] }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ptlist: Array<{
    comparisonIcon: string;
    items: any[];
  }>;
}>();
const comparisonName = [
  'CDN Edge PoPs',
  'Average Global Latency',
  ['Traffic Pricing', '5 TB-Europe / North America'],
  'Uptime SLA',
  '24/7 Support',
  'DDoS Protection',
  'Instant Cache Purge',
  'Image Optimization',
  'Storage',
  'WAF',
  'Origin Shield',
  'Free One-Click SSL',
  'Edge Rules',
  'Wildcard SSL Support',
  'Raw Access Logs',
  'Realtime Statistics',
  'Realtime Traffic Map',
  'API',
  'Scriptable DNS',
  'Private CDN',
  'Security Settings'
];
const selflist = {
  comparisonIcon: '/images/home/polyfill_logo@2x.png',
  items: [
    '123',
    '24ms',
    '$50',
    '99.99%',
    [true, 'Emall,Tickets.Slack,Chat'],
    [true],
    [true, 'Zone,URL.Wildcard,Tag'],
    [true],
    [true, 'Globally Replicated'],
    [true, 'Coming Soon'],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    'Token Authentication,Geo/IP Blocking & Hotlink protection'
  ]
};
</script>

<style lang="less" scoped>
.DNScomparisonList {
  margin: 120px 0;
  .comparison-list {
    width: 100%;
    display: flex;
    // height: 1856px;
    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 24px;
    border: 1px solid #e6e6e6;
    padding-top: 10px;
    gap: 43px;
    .item {
      width: 292px;
      height: 78px;
      box-sizing: border-box;
      padding: 23px 0;
      border-bottom: 1px solid;
      border-image: linear-gradient(
          90deg,
          rgba(70, 207, 58, 1),
          rgba(54, 207, 188, 1)
        )
        1 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      line-height: 33px;
      font-weight: 500;
      text-align: center;
      &:last-child {
        height: auto;
        min-height: 78px;
        border: none;
      }
      .main {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 24px;
        color: #000000;
        line-height: 33px;
        text-align: left;
      }
      .sub-text {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        line-height: 20px;
        text-align: left;
      }
      .text {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        line-height: 20px;
      }
      .hook {
        width: 24px;
        height: 24px;
        background: url(/images/products/DNS/home_Text_list_ic_tick@3x.png);
        background-size: 100% 100% !important;
        flex-shrink: 0;
        margin-bottom: 9px;
      }
      .fork {
        width: 24px;
        height: 24px;
        background: url(/images/products/DNS/home_Text_list_ic_fork@2x.png);
        background-size: 100% 100% !important;
        flex-shrink: 0;
        margin-bottom: 9px;
      }
    }
    .Icon {
      flex-shrink: 0;
      height: 32px;
    }
    .name-clll {
      padding: 0 40px;
      width: 292px;
      display: flex;
      flex-direction: column;
      .item {
        align-items: flex-start;
      }
    }
    .row {
      margin-top: -78px;
      background: #ffffff;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;
      padding: 0 40px;
      border: 1px solid #e6e6e6;
      .item {
        &:first-child {
          border: none;
        }
      }
    }
    .oneself {
      margin-top: -78px;
      background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%),
        linear-gradient(180deg, #e6edfc 0%, #f6f8fa 42%, #fafafa 100%), #ffffff;
      box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
      border-radius: 24px;
      padding: 0 40px;
      border: 1px solid #e6e6e6;
      .item {
        &:first-child {
          border: none;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .content-container {
    margin: 0;
    width: 100%;
  }
  .DNScomparisonList {
    position: relative;
    z-index: 11;
    margin: 0;
    .comparison-list {
      width: 100%;
      display: flex;
      // height: 1856px;
      background: #ffffff;
      box-shadow: 0rem 0rem 1.88rem 0rem rgba(173, 173, 173, 0.14);
      border-radius: 1.5rem;
      border: 1px solid #e6e6e6;
      padding-top: 1rem;
      gap: 1rem;
      .item {
        width: 11.25rem;
        height: fit-content;
        box-sizing: border-box;
        padding: 1.25rem 0;
        border-bottom: 1px solid;
        border-image: linear-gradient(
            90deg,
            rgba(70, 207, 58, 1),
            rgba(54, 207, 188, 1)
          )
          1 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 1.75rem;
        color: #000000;
        line-height: 2.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        font-weight: 500;
        &:last-child {
          height: auto;
          min-height: 7rem;
          border: none;
          word-break: break-all;
          text-align: center;
        }
        .main {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 1.75rem;
          color: #000000;
          line-height: 2.5rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .sub-text {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 1.5rem;
          color: #000000;
          line-height: 2.06rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .text {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 1rem;
          color: #000000;
          line-height: 1.38rem;
          text-align: center;
          width: 100%;
          word-wrap: break-word;
          font-style: normal;
          text-transform: none;
        }
        .hook {
          width: 2.5rem;
          height: 2.5rem;
          background: url(/images/products/DNS/home_Text_list_ic_tick@3x.png);
          background-size: 100% 100% !important;
          flex-shrink: 0;
          margin-bottom: 0.38rem;
        }
        .fork {
          width: 2.5rem;
          height: 2.5rem;
          background: url(/images/products/DNS/home_Text_list_ic_fork@2x.png);
          background-size: 100% 100% !important;
          flex-shrink: 0;
          margin-bottom: 0.38rem;
        }
      }
      .Icon {
        flex-shrink: 0;
        height: 4.38rem;
      }
      .name-clll {
        padding: 0 1.25rem;
        width: 11.25rem;
        display: flex;
        flex-direction: column;
        .item {
          align-items: flex-start;
        }
      }
      .row {
        margin-top: -6.93rem;
        background: #ffffff;
        box-shadow: 0rem 0rem 1.88rem 0rem rgba(173, 173, 173, 0.14);
        border-radius: 1.5rem;
        border: 0.06rem solid #e6e6e6;
        padding: 0 1.25rem;
        .item {
          &:first-child {
            border: none;
          }
        }
      }
      .oneself {
        margin-top: -6.93rem;
        background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%),
          linear-gradient(180deg, #e6edfc 0%, #f6f8fa 42%, #fafafa 100%),
          #ffffff;
        box-shadow: 0rem 0.63rem 1.88rem 0rem rgba(166, 183, 183, 0.1);
        border-radius: 1.5rem;
        border: 0.06rem solid #e6e6e6;
        padding: 0 3.06rem;
        .item {
          &:first-child {
            border: none;
          }
        }
      }

      .name-clll {
        .item {
          &:nth-child(1),
          &:nth-child(5),
          &:nth-child(6),
          &:nth-child(8),
          &:nth-child(12),
          &:nth-child(14),
          &:nth-child(15),
          &:nth-child(17),
          &:nth-child(19),
          &:nth-child(16) {
            box-sizing: content-box;
            height: 5rem !important;
          }
          &:nth-child(2) {
            box-sizing: content-box;
            height: 7.5rem !important;
          }
          &:nth-child(3) {
            height: 11.5rem !important;
            box-sizing: content-box;
          }
          &:nth-child(4),&:nth-child(13),&:nth-child(18) {
            height: 2.5rem !important;
            box-sizing: content-box;
          }
          &:nth-child(7) {
            box-sizing: content-box;
            height: 7.5rem !important;
          }
          &:nth-child(9) {
            box-sizing: content-box;
            height: 4.25rem !important;
          }
          &:nth-child(10) {
            box-sizing: content-box;
            height: 5.06rem !important;
          }
        }
      }
      .oneself,
      .row {
        .item {
          &:nth-child(2),
          &:nth-child(6),
          &:nth-child(7),
          &:nth-child(9),
          &:nth-child(13),
          &:nth-child(15),
          &:nth-child(16),
          &:nth-child(18),
          &:nth-child(20),
          &:nth-child(17) {
            box-sizing: content-box;
            height: 5rem !important;
          }
          &:nth-child(3) {
            height: 7.5rem !important;
            box-sizing: content-box;
          }
          &:nth-child(4) {
            box-sizing: content-box;
            height: 11.5rem !important;
          }
          &:nth-child(5),&:nth-child(14),&:nth-child(19) {
            height: 2.5rem !important;
            box-sizing: content-box;
          }
          &:nth-child(8) {
            box-sizing: content-box;
            height: 7.5rem !important;
          }
          &:nth-child(10) {
            box-sizing: content-box;
            height: 4.25rem !important;
          }
          &:nth-child(11) {
            height: 5.06rem !important;
            box-sizing: content-box;
          }
        }
      }
    }
  }
}
</style>

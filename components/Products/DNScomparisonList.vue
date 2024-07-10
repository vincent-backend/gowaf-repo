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
  comparisonIcon: '/images/home/logo2.png',
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
  .DNScomparisonList {
    margin: 6.25rem 0;
    .content-container {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

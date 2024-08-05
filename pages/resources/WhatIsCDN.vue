<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.Academy')"
    :items="[
      {
        label: $t('resources.breadCrumbs.CDN'),
        href: '/resources/WhatIsCDN',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.DNS'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Networking'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Security'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.HTTP'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Streaming'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Computing'),
        href: '',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :title="$t('resources.WhatIsCDN.header.title')"
    :content="$t('resources.WhatIsCDN.header.content')"
    href="#"
    hint=""
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/resources/WhatIsCDN/cdn_overview_banner_graph@2x.png',
      w: '381px',
      h: '371px',

      msrc: '/images/resources/WhatIsCDN/cdn_overview_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />
  <div class="bottom-header">
    <div class="page-container">
      <div
        class="option"
        :class="{
          bold: index == 0
        }"
        v-for="(item, index) in i18ntext.option"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
  <div class="textContent">
    <div class="page-container">
      <div class="left">
        <div
          class="articleBlock"
          v-for="(item, index) in i18ntext.articleList"
          :key="index"
        >
          <div class="title">
            {{ item.title }}
          </div>
          <div class="content" v-html="item.content"></div>
        </div>
        <div class="helpful">
          <div class="putQuestionsTo">{{ $t('resources.helpful.title') }}</div>
          <div class="vs-icon">
            <div class="yes"></div>
            <div class="no"></div>
          </div>
          <div class="tips">
            <span class="bold">40</span> out of <span class="bold">47</span
            >{{ $t('resources.helpful.helpful') }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-title">
          {{ $t('resources.WhatIsCDN.rightTitle') }}
        </div>
        <div
          class="advertisement"
          v-for="(item, index) in i18ntext.advertisement"
          :key="index"
        >
          <div class="ad-title">
            {{ item.title }}
          </div>
          <div class="ad-content">{{ item.content }}</div>
        </div>
        <div class="advertisement-bot">
          <div class="bot-t">
            {{ $t('resources.WhatIsCDN.bot.title') }}
          </div>
          <div class="bot-img"></div>
          <div class="bot-btn">
            {{ $t('resources.WhatIsCDN.bot.btntxt') }}
            <img
              class="img"
              src="/images/resources/WhatIsCDN/common_price_right_wihte_ic@2x.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :isShowBanner="false" />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Academy'
});
const i18ntext = computed(() => {
  return {
    option: ['What is CDN?', 'Content Acceleration', 'Reliability', 'Servers'],
    articleList: [
      {
        title: 'About ParrotSec',
        content:
          '<p>A <b>Content Delivery Network (CDN)</b>, as the name implies, is a network of servers for the purpose of delivering website content. Although web servers are primarily responsible for serving a website’s content on the World Wide Web, a CDN can improve user experience by decreasing the distance between a user and the content (resulting in lower latency and improved throughput).</p><br/><p>CDNs are now very popular and used by websites with massive traffic such as Facebook and Amazon to provide a fast experience no matter the user’s geographical location.</p>'
      },
      {
        title: 'Website experience without a CDN',
        content:
          '<p>Before CDNs became popular, content on the World Wide Web was mostly served from the same physical web server which a website was hosted on. This server is also called the origin server, because all the content of a website originates from this server. Without a CDN, all the content of a website will be served out of the origin server regardless of whether the request comes from a web browser in China, Italy, or Brazil.</p><br/><p>The website experience of different end users differs depending on their location. For example, if the origin server of a website is located in Rome, Italian web users will experience decreased latency and faster web page loading times. Users in China and Brazil will experience high latency and slower web page loading because data has to be transmitted over a much longer distance.</p>'
      },
      {
        title: 'Website experience without a CDN',
        content:
          '<p>Before CDNs became popular, content on the World Wide Web was mostly served from the same physical web server which a website was hosted on. This server is also called the origin server, because all the content of a website originates from this server. Without a CDN, all the content of a website will be served out of the origin server regardless of whether the request comes from a web browser in China, Italy, or Brazil.</p><br/><p>The website experience of different end users differs depending on their location. For example, if the origin server of a website is located in Rome, Italian web users will experience decreased latency and faster web page loading times. Users in China and Brazil will experience high latency and slower web page loading because data has to be transmitted over a much longer distance.</p><br/><p><img src=\'/images/resources/WhatIsCDN/help_with@2x.png\' /></p><br/><p>This is roughly how CDNs work -- data is physically closer to end-users, much like a warehouse of products. This results in faster delivery times - or in the case of CDNs, faster page load times. There is a caveat: most CDNs do not have a "facility" - or edge server - in the same city as every user. So, users will have usually have to contend with data within a close proximity, but the general experience for users should still be improved.</p>'
      },
      {
        title: 'Reducing bandwidth cost using a CDN',
        content:
          '<p>So far, the benefits of a CDN that have been discussed are from the users’ end. From the perspective of a website owner, other than providing a much better experience for the end user, a CDN also helps to reduce the overall cost of delivering content.</p><br/><p>For very popular websites, bandwidth on the origin server is a major expense. The origin server does not consume as much bandwidth since most of the content served to its end users uses the bandwidth of the edge servers. This reduces the cost of bandwidth on the origin server, which uses a much smaller amount of bandwidth to serve content to the edge servers (usually a single time). Therefore, by using a CDN, a popular website can serve the same number of users at a lower cost.</p>'
      },
      {
        title: 'Security improvements using a Content Delivery Network',
        content:
          '<p>So far, the benefits of a CDN that have been discussed are from the users’ end. From the perspective of a website owner, other than providing a much better experience for the end user, a CDN also helps to reduce the overall cost of delivering content.</p><br/><p>For very popular websites, bandwidth on the origin server is a major expense. The origin server does not consume as much bandwidth since most of the content served to its end users uses the bandwidth of the edge servers. This reduces the cost of bandwidth on the origin server, which uses a much smaller amount of bandwidth to serve content to the edge servers (usually a single time). Therefore, by using a CDN, a popular website can serve the same number of users at a lower cost.</p>'
      }
    ],
    advertisement: [
      {
        title: 'Edge Server',
        content:
          'An Edge Server is a server used as part of a global CDN or edge network. Usually an Edge Server is just one of hundreds of servers located around the world located in a close proximity to the end user.'
      },
      {
        title: 'PoP',
        content:
          'PoP stands for Point of Presence and is usually referred to as a region where a company or service operates from.'
      },
      {
        title: 'CDN',
        content:
          'A CDN, or "Content Delivery Network," is a network of servers (typically placed around the world) used to deliver content (such as videos, photos, and CSS).'
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.bottom-header {
  width: 100%;
  height: 80px;
  background: #e6edfc;
  .page-container {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 32px;
    .option {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 20px;
      color: #000000;
      text-align: left;
      font-style: normal;
      text-transform: none;
      &.bold {
        font-weight: 600;
      }
    }
  }
}
.textContent {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  background: #fafafa;
  .page-container {
    display: flex;
    gap: 80px;
    .left {
      width: 700px;
      display: flex;
      flex-direction: column;
      gap: 100px;
      .articleBlock {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .title {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 50px;
          color: #000000;
          line-height: 70px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .content {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          :deep(img) {
            width: 100%;
          }
          :deep(b) {
            font-weight: 700;
          }
        }
      }
      .helpful {
        width: 700px;
        height: 196px;
        background: #e6edfc;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .putQuestionsTo {
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .vs-icon {
          display: flex;
          gap: 85px;
          .yes,
          .no {
            width: 100px;
            height: 100px;
            background: url('/images//resources/WhatIsCDN/Thumbs_up@2x.png');
            background-size: 100% 100%;
          }
          .no {
            background: url('/images//resources/WhatIsCDN/Thumbs_down@2x.png');
          }
        }
        .tips {
          display: flex;
          gap: 3px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 16px;
          color: #000000;
          line-height: 24px;
          text-align: center;
          font-style: normal;
          text-transform: none;
          .bold {
            font-weight: 700;
          }
        }
      }
    }
    .right {
      width: 420px;
      flex-direction: column;
      display: flex;
      gap: 20px;
      .right-title {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 36px;
        color: #000000;
        line-height: 70px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .advertisement {
        display: flex;
        flex-direction: column;
        background: #e6edfc;
        border-radius: 20px;
        padding: 30px 20px;
        .ad-title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .ad-content {
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
      .advertisement-bot {
        margin-top: 40px;
        width: 420px;
        height: 432px;
        background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
        box-shadow: 0px 0px 12px 0px rgba(126, 135, 154, 0.25);
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .bot-t {
          width: 220px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .bot-img {
          width: 220px;
          height: 266px;
          background: url('/images//resources/WhatIsCDN/service_women_img@2x.png');
          background-size: 100% 100%;
        }
        .bot-btn {
          width: 372px;
          height: 50px;
          background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 20px;
          color: #ffffff;
          .img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .bottom-header {
    width: 100%;
    height: 7.5rem;
    background: #e6edfc;
    .page-container {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 2.5rem;
      overflow-y: hidden;
      overflow-x: auto;
      .option {
        white-space: nowrap;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        font-size: 2rem;
        color: #000000;
        line-height: 2.81rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        &.bold {
          font-weight: 600;
        }
      }
    }
  }
  .textContent {
    margin-top: 6.25rem;
    margin-bottom: 6.25rem;
    width: 100%;
    background: #fafafa;
    .page-container {
      display: flex;
      flex-direction: column;
      gap: 6.25rem;
      .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6.25rem;
        .articleBlock {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          .title {
            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 3.13rem;
            color: #000000;
            line-height: 4.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.63rem;
            color: #4e4e4e;
            line-height: 2.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            :deep(img) {
              width: 100%;
            }
            :deep(b) {
              font-weight: 700;
            }
          }
        }
        .helpful {
          width: 43.75rem;
          height: 16.69rem;
          background: #e6edfc;
          border-radius: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .putQuestionsTo {
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 2rem;
            color: #000000;
            line-height: 2.81rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .vs-icon {
            display: flex;
            margin: 1.25rem 0;
            gap: 5.3rem;
            .yes,
            .no {
              width: 6.25rem;
              height: 6.25rem;
              background: url('/images//resources/WhatIsCDN/Thumbs_up@2x.png');
              background-size: 100% 100%;
            }
            .no {
              background: url('/images//resources/WhatIsCDN/Thumbs_down@2x.png');
            }
          }
          .tips {
            display: flex;
            gap: 0.88rem;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 1.63rem;
            color: #000000;
            line-height: 2.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            .bold {
              font-weight: 700;
            }
          }
        }
      }
      .right {
        width: 100%;
        flex-direction: column;
        display: flex;
        gap: 1.25rem;
        .right-title {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 3.13rem;
          color: #000000;
          line-height: 4.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .advertisement {
          display: flex;
          flex-direction: column;
          background: #e6edfc;
          border-radius: 1.25rem;
          padding: 1.5rem 1.25rem;
          .ad-title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 1.63rem;
            color: #000000;
            line-height: 2.31rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .ad-content {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.63rem;
            color: #4e4e4e;
            line-height: 2.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        .advertisement-bot {
          margin: 0 auto;
          margin-top: 6.25rem;
          width: 26.25rem;
          height: 27rem;
          background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
          box-shadow: 0rem 0rem 0.75rem 0rem rgba(126, 135, 154, 0.25);
          border-radius: 0.88rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .bot-t {
            width: 17.88rem;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 1.63rem;
            color: #000000;
            line-height: 2.31rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .bot-img {
            width: 13.75rem;
            height: 16.63rem;
          }
          .bot-btn {
            width: 23.25rem;
            height: 3.13rem;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 1.63rem;
            color: #ffffff;
            .img {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
    }
  }
}
</style>

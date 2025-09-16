<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.blog')"
    :items="[
      {
        label: $t('resources.breadCrumbs.allPosts'),
        href: '',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.News'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Performance'),
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
        label: $t('resources.breadCrumbs.Tips'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Privacy'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Al'),
        href: '',
        current: false
      }
    ]"
  />
  <div class="page-container header">
    <div class="content-container">
      <div class="pre-title">
        {{ $t('resources.blog.header.preTitle') }}
      </div>
      <div class="title">{{ $t('resources.blog.header.title') }}</div>
      <div class="content">
        {{ $t('resources.blog.header.content') }}
      </div>
    </div>
    <div 
    >
    <img class="header-img" :src="`/images/resources/blog/top_pic.png`" />
  </div>
  </div>
  <div class="page-container AllPosts">
    <CommonTabs :tabs="i18ntext.CommonTabs" v-model:cur-tab="curTab" />
    <div class="Post-list">
      <div class="Post-item" v-for="item in i18ntext.Post">
        <div class="d-flex">
          <img class="img-box" :src="item.img" />
        </div>
        <div class="title-list">
          <div class="title">{{ item.title }}</div>
          <div class="Post-content clamp-2">
            {{ item.content }}
          </div>
          <div class="authorIntroduction">
            <div class="d-flex">
              <img class="headPortrait" :src="item.img" />
            </div>
            <div class="author">{{ item.author }}</div>
            <div class="author-time">
              {{ item.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paging">
      <div class="paging-text">
        {{ $t('resources.blog.paging1') }}
        <span class="bold">12</span>
        {{ $t('resources.blog.paging2') }}
        <span class="bold">98</span>
        {{ $t('resources.blog.paging3') }}
      </div>
      <div class="pageNumber">
        <div class="activation"></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="LoadMore">{{ $t('uNB_zIiRW-rdUvudDpXbl') }}</div>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
const curTab = ref(0);
definePageMeta({
  title: 'Resources'
});

const i18ntext = computed(() => {
  return {
    CommonTabs: [
      {
        tab: t('resources.breadCrumbs.allPosts')
      },
      {
        tab: 'AI'
      },
      {
        tab: t('resources.breadCrumbs.Networking')
      },
      {
        tab: t('resources.breadCrumbs.News')
      },
      {
        tab: t('resources.breadCrumbs.Performance')
      },
      {
        tab: t('resources.breadCrumbs.Privacy')
      },
      {
        tab: t('BgxlODCsRpQ25O_NgcKQQ')
      },
      {
        tab: t('3dVjohKiaID5Dt69TN1mi')
      }
    ],
    Post: [
      {
        img: '/images/resources/blog/pic_1.png',
        title: t('resources.breadCrumbs.News'),
        content: t('2RI94fhrzv2xLqF6TuNAe'),
        author: t('rdkUAYjyLcEIGNuM4YEEC'),
        headPortrait: '',
        time: t('shg7Xvb7BRiPQqt6_N51J')
      },
      {
        img: '/images/resources/blog/pic_2.png',
        title: t('resources.breadCrumbs.News'),
        content: t('Iuqe0KgecPlnVxVAHoP_l'),
        author: t('5FykVWsVTdx6DZdZqqeey'),
        headPortrait: '',
        time: t('ExIzjrVACNkkiphKH-Dt7')
      },
      {
        img: '/images/resources/blog/pic_3.png',
        title: t('resources.breadCrumbs.News'),
        content: t('KJYNNOm9KiW7EiCKx3_Sp'),
        author: t('OSPXAfY6FR8_yhm0E7QqN'),
        headPortrait: '',
        time: t('WpTDNzbASQwn09-EV9wpR')
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.d-flex {
  display: flex;
}
.clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.header {
  position: relative;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
  background: #fafafa;
  padding: 60px 0;
  align-items: center;
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .pre-title {
      font-family: Mont, Mont;
      font-weight: bold;
      font-size: 30px;
      color: #000000;
      line-height: 40px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
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
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .header-img {
    width: 522px;
    height: 294px;
    flex-shrink: 0;
  }
}
.AllPosts {
  margin-bottom: 100px;
  background: #fafafa;
}
.Post-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  .Post-item {
    width: 384px;
    height: 513px;
    display: flex;
    flex-direction: column;
    .img-box {
      width: 100%;
      height: 288px;
      background-size: cover;
    }
    .title-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 384px;
      height: 225px;
      background: #ffffff;
      border-radius: 0px 0px 12px 12px;
      padding: 20px;
      box-sizing: border-box;
      gap: 11px;
      .title {
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 32px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .Post-content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .authorIntroduction {
        display: flex;
        align-items: center;
        .headPortrait {
          width: 32px;
          height: 32px;
          background-size: cover;
          margin-right: 12px;
        }
        .author {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .author-time {
          margin-left: auto;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4e4e4e;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
.paging {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  .paging-text {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    display: flex;
    align-items: center;
    gap: 2px;
    .bold {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 20px;
      color: #000000;
      line-height: 28px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .pageNumber {
    display: flex;
    gap: 8px;
    div {
      width: 50px;
      height: 8px;
      background: #ebebeb;
      border-radius: 4px;
    }
    .activation {
      background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
      border-radius: 4px;
    }
  }
  .LoadMore {
    width: 139px;
    height: 50px;
    background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
    border-radius: 25px;
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 767px) {
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
    box-sizing: border-box;
    background: #fafafa;
    padding: 2.5rem 0;
    align-items: center;
    .content-container {
      display: flex;
      flex-direction: column;
      gap: 0.63rem;
      .pre-title {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.31rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .title {
        width: 100%;
        font-weight: bold;
        font-size: 3.5rem;
        color: #000000;
        line-height: 5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        word-wrap: break-word;
        font-family: Mont, Mont;
      }
      .content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.81rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .header-img {
      width: 43.13rem;
      height: 24.31rem;
      flex-shrink: 0;
    }
  }
  .AllPosts {
    margin-bottom: 2.5rem;
    background: #fafafa;
  }
  .Post-list {
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    .Post-item {
      width: 100%;
      height: 49.19rem;
      display: flex;
      flex-direction: column;
      .img-box {
        width: 100%;
        height: 32.38rem;
        background-size: cover;
      }
      .title-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 16.81rem;
        background: #ffffff;
        border-radius: 0rem 0rem 0.75rem 0.75rem;
        padding: 1.25rem;
        box-sizing: border-box;
        gap: 0.5rem;
        .title {
          width: 100%;
          word-wrap: break-word;
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 2.5rem;
          color: #000000;
          line-height: 3.31rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .Post-content {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 2.13rem;
          color: #000000;
          line-height: 3rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .authorIntroduction {
          display: flex;
          align-items: center;
          .headPortrait {
            width: 3rem;
            height: 3rem;
            background-size: cover;
            margin-right: 0.63rem;
          }
          .author {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.5rem;
            color: #4e4e4e;
            line-height: 1.5rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .author-time {
            margin-left: auto;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.5rem;
            color: #4e4e4e;
            line-height: 2.06rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
  .paging {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    .paging-text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.25rem;
      color: #4e4e4e;
      line-height: 1.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: flex;
      align-items: center;
      gap: 0.81rem;
      .bold {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2rem;
        color: #000000;
        line-height: 2.81rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .pageNumber {
      display: flex;
      gap: 0.5rem;
      div {
        width: 3.13rem;
        height: 0.5rem;
        background: #ebebeb;
        border-radius: 0.25rem;
      }
      .activation {
        background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
        border-radius: 0.25rem;
      }
    }
    .LoadMore {
      width: 12.13rem;
      height: 4.63rem;
      background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
      border-radius: 2.31rem;
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 1.63rem;
      color: #ffffff;
      line-height: 2.13rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

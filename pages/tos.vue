<template>
  <Header />
  <CommonHeader2
    :title="$t('guXMwembC8fcebTH6d2Eg')"
    :sub-title="$t('bDz0lCZydb57RNCM89MyP')"
    :content="$t('Hpw5uun-gh0lKZMXo2UYU')"
    href="#"
  />
  <SolutionsAd2
    class="tops-ad2-container"
    :title="i18ntext.item.title"
    :content="i18ntext.item?.content"
    :content2="i18ntext.item?.content2"
    :content3="i18ntext.item?.content3"
    :content4="i18ntext.item?.content4"
    :pic="i18ntext.item.pic"
    :m-pic="i18ntext.item.pic"
    :pic-width="i18ntext.item.width"
    :pic-height="i18ntext.item.height"
    m-pic-width="22.63rem"
    m-pic-height="19.88rem"
    :reverse="true"
  />
  <div class="page-container content-container">
    <div class="block" v-for="(item, index) in i18ntext.blockText" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
  <div class="page-container blockli-container">
    <div class="blockli" v-for="(item, index) in i18ntext.blockli" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
      <div class="subtitle">{{ item.subtitle }}</div>
      <div class="blockul">
        <div class="li-text" v-for="(li, index) in item.list" :key="index">
          <NuxtImg src="/images/home/Resources_about_node@2x.png" alt="" />
          <div>{{ li }}</div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();

const i18ntext = computed<any>(() => {
  return {
    item: {
      pic: '/images/home/TermsOfService_graph@2x.png',
      title: t('ohNQlDnre9CFXuef_R5vb'),
      content:
        t('OItBg89nm6ldinVgKGK-S'),
      content2:
        t('pRbh3-UtY1I88sGE19Gl_'),
      width: '362px',
      height: '318px'
    },
    blockText: [
      {
        title: t('-acsM5DRwC1wi7mvWm-pG'),
        content:
          t('fSKM8d1pwDKYj6-qy_D18')
      },
      {
        title: t('pricing.breadCrumbs.parent'),
        content:
          t('tNP6sUYK5CW0uEqeeKW1Z')
      },
      {
        title: t('ptBZPLE7J9OK91KzJR3dB'),
        content:
          t('EfKrYfMiGa1Ule1YDlWdL')
      },
      {
        title: t('M4DCVb63Au6gcRG_dvxAm'),
        content:
          t('rmsHHZqx9CXkctDkAWprJ')
      },
      {
        title: t('home.SLA.preTitle'),
        content:
          t('obztK2ViPLygZRizN4Qe7')
      }
    ],
    blockli: [
      {
        title: t('eIRF1uvSrRGIEZvFvzcI6'),
        subtitle:
          t('eBo7rNaWpwFrlgHY9g5-r'),
        content:
          t('UQe_-CU_laf77nQk8xJJ9'),
        list: [
          t('YOCdEWkYV7_7x43gW9sfv'),
          t('GG6DxurgA3OnXhTPOwnlV'),
          t('uO-mWe0nkGCKVvFEDjK8C'),
          t('yec6bD-ZhcZB9doriMycY')
        ]
      },
      {
        title: 'DMCA',
        subtitle:
          t('MSx9R1nspShLxcgxnjySx'),
        content:
          t('6HoGheBnfrwzLUrmaB3Fw'),
        list: [
          t('P00FB90YVU1Lc2XAv0K_I'),
          t('wCAoPZW5d6aktlYS5Cu5y'),
          t('clqDKiDjKZM9SsIxJOETc'),
          t('zjto6y_9ThX8WflB5f0UM'),
          t('CMG4v2noZbevDW1z4c7W8')
        ]
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.tops-ad2-container {
  :deep(.ad2) {
    width: 1200px;
  }
}
.content-container {
  display: flex;
  flex-direction: column;
  gap: 85px;
  margin-top: 80px;
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-bottom: 20px;
  }
  .content {
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
.blockli-container {
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
  .blockli {
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 20px;
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 14px;
    }
    .subtitle {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 16px;
      color: #000000;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      margin-bottom: 14px;
      text-transform: none;
    }
    .blockul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .li-text {
        display: flex;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        img {
          width: 10px;
          height: 10px;
          margin-right: 7px;
          margin-top: 7px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .tops-ad2-container {
    :deep(.ad2) {
      width: 100%;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 3.13rem;
    margin-top: 6.25rem;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 1rem;
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .blockli-container {
    margin: 3.13rem auto;
    display: flex;
    flex-direction: column;
    gap: 3.13rem;
    .blockli {
      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-bottom: 1rem;
      }
      .content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-bottom: 1rem;
      }
      .subtitle {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 1.75rem;
        color: #000000;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        margin-bottom: 1rem;
        text-transform: none;
      }
      .blockul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .li-text {
          display: flex;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.75rem;
          color: #4e4e4e;
          line-height: 2.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          img {
            width: 1rem;
            height: 1rem;
            margin-right: 0.87rem;
            margin-top: 0.87rem;
          }
        }
      }
    }
  }
}
</style>

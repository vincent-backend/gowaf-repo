<template>
  <Header />
  <CommonHeader2
    :title="$t('ZjFP_WFHzl7qIqOd5k0L7')"
    :sub-title="$t('5TS2ubBi4W9Oui2wUSqaT')"
    :content="$t('c9_1jaWAFvwZGfP-1ttt5')"
    href="#"
  />
  <div class="page-container content-container">
    <div class="block" v-for="(item, index) in i18ntext.blockText" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="content" v-html="item.content"></div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();

const i18ntext = computed<any>(() => {
  return {
    blockText: [
      {
        title: t('9SNWu_MrjuAmuJ8-9FCiN'),
        content: t('wzYrM6p0NjvDXzfzzY5gG')
      },
      {
        title: t('hKKtidHY_AZexY_cj79kB'),
        content: t('ZfPRM31cTlSgrU_09SIYD')
      },
      {
        title: t('VfKruvAUzL_YGS0J5hEtm'),
        content: t('oDQhuZwE7v-dzMaRp0r0X')
      },
      {
        title: t('YxF2A-zkVW7uQH6lwmq4f'),
        content: t('VHbqpqxdDjhzrXScerqUA')
      },
      {
        title: t('dhoCkzNjZ_QZ5qmnIiNY-'),
        content: t('qaYV-lAovivkvUCPkslhJ')
      },
      {
        title: t('ZT81I0zn-ZmjQnkhFlba7'),
        content: t('BKV1GBoiao1Qglry8zs_k')
      },
      {
        title: t('oEG5he8RYAVJUnKWx13Tx'),
        content: t('TWS3aDdwVvObjYWAZRkj3')
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
  gap: 85px;
  margin: 80px auto;
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
@media (max-width: 767px) {
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

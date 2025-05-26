<template>
  <Header />
  <CommonHeader2
    :title="$t('1odgklmiVXVJuTnfe-F3R')"
    :sub-title="$t('Z6StJCEytrddWIjXU3rnT')"
    :content="$t('hSsxdIzS57bDBSGxqszNQ')"
    href="#"
  />
  <div class="page-container content-container">
    <div class="title">{{ $t('51yoJohWUWY7G8xMyvcgu') }}</div>
    <div class="content">
      {{ $t('6VLU4wAcBGdvmNAOknxT2') }}
    </div>
    <div class="content">
      {{ $t('va6znUKoXSg9TEbkgD4SU') }}
    </div>
  </div>
  <div class="page-container report">
    <div class="left">
      <div class="title">{{ $t('KxgWslHfY39pIT_rI28Nd') }}</div>
      <div class="list">
        <div class="item" v-for="(item, index) in i18ntext.list" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="title">{{ $t('RqPH7IyHzV_oOb3dGqXo1') }}</div>
      <div class="content">
      </div>
      <div class="content">
        {{ $t('iSHwEi74jZaSfuLmd2TWi') }}
      </div>
    </div>
    <div class="right">
      <img src="/images/home/Report Abuse_graph@2x.png" alt="" srcset="" />
    </div>
  </div>
  <VSpace h="80px"></VSpace>
  <ResourcesContactForm :isShowList="false" />
  <VSpace h="120px"></VSpace>
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();

const i18ntext = computed<any>(() => {
  return {
    list: [
      t('a8BdQyRjY2--lUrbcR-uP'),
      t('GstQQaEuoruxcKdQdPhgq'),
      t('HPRzf2qTMdRyUiCJAwySN'),
      t('XizJ_7rq1qKDYUa-sj_ar'),
      t('zBWmlhM45oPCN-ZIOVGZS')
    ]
  };
});
</script>
<style lang="scss" scoped>
.content-container {
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
.report {
  display: flex;
  margin: 80px auto;
  gap: 193px;
  .left {
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 30px;
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
      margin: 10px 0;
    }
    .list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
      .item {
        width: 50%;
        display: flex;
        align-items: center;
        &::before {
          content: '';
          display: block;
          background: url('/images/home/home_Text_list_ic_tick@2x.png')
            no-repeat;
          background-size: 100% 100%;
          width: 18px;
          height: 18px;
          margin-right: 4px;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    img {
      width: 412px;
    }
  }
}
@media (max-width: 767px) {
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
  .report {
    display: flex;
    flex-direction: column;
    margin: 3.13rem auto;
    gap: 0em;
    .left {
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
        margin: 1rem 0;
      }
      .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-bottom: 3.13rem;
        .item {
          width: 100%;
          display: flex;
          align-items: center;
          &::before {
            content: '';
            display: block;
            background: url('/images/home/home_Text_list_ic_tick@2x.png')
              no-repeat;
            background-size: 100% 100%;
            width: 1.75rem;
            height: 1.75rem;
            margin-right: 1rem;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 25.75rem;
      }
    }
  }
}
</style>

<template>
  <Header />
  <CommonHeader2
    title="Terms of Service"
    sub-title="Thank you for using Gowaf"
    content="You agree that our continued provision of services to you, and your continued use of them, represent your agreement to be bound by the ToS."
    href="#"
  />
  <div class="page-container content-container">
    <div class="title">Abuse Policy</div>
    <div class="content">
      Gowaf offers content delivery solutions to our users that includes
      hosting and delivery of users' files. We do not actively monitor content
      delivered by our users.
    </div>
    <div class="content">
      If you are a copyright holder or would like to report illegal or
      inappropriate content found to be delivered by Gowaf, you can send us
      an abuse report with the form on this page.
    </div>
  </div>
  <div class="page-container report">
    <div class="left">
      <div class="title">What can you report?</div>
      <div class="list">
        <div class="item" v-for="(item, index) in i18ntext.list" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="title">What can we do?</div>
      <div class="content">
        After validating a report, we will forward substantially complete abuse
        messages to the responsible users. If no action is taken or if we
        identify repeated offenders, under appropriate circumstances, Gowaf
        will disable access to the content.
      </div>
      <div class="content">
        Please include as much information as possible when submitting a report,
        or your request might be rejected.
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
const { t: $t } = useI18n();

const i18ntext = computed<any>(() => {
  return {
    list: [
      'Illegal content',
      'Child pornography',
      'Phishing & malware',
      'Violent threats and harassment',
      'Violent threats and harassment'
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

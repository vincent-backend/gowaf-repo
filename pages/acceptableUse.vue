<template>
  <Header />
  <CommonHeader2
    title="How to use Gowaf?"
    sub-title="Acceptable Use Policy"
    content="By using our service you agree to comply with our policies defined below."
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
        title: 'Gowaf Guidelines',
        content:
          'Gowaf feels obligated to provide a high-quality service to all our clients. To ensure this, we have defined a set of guidelines to ensure an optimal operation of our service for everyone. our service, you agree that you have read and accepted the terms outlined in the policy.'
      },
      {
        title: 'General Agreement',
        content:
          'Gowaf CDN and all other services may be used only for lawful purposes. Transmission, distribution, or storage of any material in violation of any applicable law or regulation is prohibited. This includes, without limitation, any material protected by copyright, trademark, trade secret, or other intellectual property right used without proper authorization, and material that is obscene, defamatory, constitutes an illegal threat or violates export control laws.'
      },
      {
        title: 'Abuse of Our Service',
        content:
          'Any actions intended to abuse or harm our service or lower the quality of service in any way will result in an immediate termination of your account without a refund. Complaints regarding suspected Illegal Use or System or Network Security issues should be sent to support@Gowaf. <br/> Gowaf provides a file optimization service called Gowaf Optimizer that helps reduce bandwidth usage. Any automated and excessive use of this service in a way of only using it for file optimization is not allowed as it is harming the service for other users.'
      },
      {
        title: 'Copyright Infringement & Illegal Content',
        content:
          'Gowaf does not actively monitor files stored on our network and servers and all content distributed by your account is the sole responsibility of you, the client. Under no circumstances will Gowaf be responsible for the behaviour of our clients or their users when found to be distributing protected or illegal content. If contacted by an authority in the event of an illegal situation regarding any of the above, we will fully cooperate with any investigations they decide to make against clients found to be breaking the law.'
      },
      {
        title: 'Live Streaming',
        content:
          'Using Gowaf for any kind of live video streaming of short events is not allowed without prior written consent. We reserve the right to terminate accounts with live streaming videos that were not approved by Gowaf.'
      },
      {
        title: 'Adult Content',
        content:
          'Gowaf accepts our service to be used for providers of "adult content", as long as the content is legal under the laws of Slovenia, each of the 50 States of the Union providers, and abides by all other Terms of Service at all times.'
      },
      {
        title: 'Illegal Use',
        content:
          'Some examples of illegal use as described above include sites distributing spyware, adware, spam, scams, illegal, racist, child pornography, or any other un-sociable material. We take any violations of our acceptable use policy very seriously and in case we discover any inappropriate material we reserve the right to immediately disable your account without a refund, depending on the severity of the issue.'
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

<template>
  <Header />
  <CommonHeader2
    title="General Data Protection Regulation "
    sub-title="GDPR"
    content="Polyfill is fully committed to complying and helping you comply with the GDPR."
    href="#"
  />
  <div class="page-container whiteBoard">
    <div class="left">
      <div class="title">What is GDPR?</div>
      <div class="content">
        <span class="grend">General Data Protection Regulation (GDPR)</span> is
        a new EU regulation designed to harmonize data privacy laws across
        Europe and enforce significantly stricter privacy regulations. It was
        designed to protect user privacy better and reshape how organizations
        handle personal data.
      </div>
      <div class="title">Does it apply to me?</div>
      <div class="content">
        Due to the global nature of Polyfill, GDPR will likely affect you in
        some way, so we advise all of our users to thoroughly study new GDPR
        regulations. Polyfill is fully committed to helping you with compliance,
        so we are rolling out anonymity features before May 25th, 2018, ensuring
        no user-identifiable data is collected or processed whenever possible.
      </div>
    </div>
    <div class="right">
      <img src="/images/home/GDPR_graph_1@2x.png" />
    </div>
  </div>
  <div class="page-container content-container">
    <div class="block" v-for="(item, index) in i18ntext.blockText" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
      <SolutionsAd2
        v-for="(ad2, index) in item.ad2"
        :key="index"
        class="tops-ad2-container"
        :title="ad2.title"
        :content="ad2?.content"
        :content2="ad2?.content2"
        :content3="ad2?.content3"
        :content4="ad2?.content4"
        :pic="ad2.pic"
        :m-pic="ad2.pic"
        :pic-width="ad2.width"
        :pic-height="ad2.height"
        :m-pic-width="ad2.mw"
        :m-pic-height="ad2.mh"
        :reverse="$device.isMobile ? true : index % 2 === 0"
      />
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
        title: 'Data Processor (Polyfill)',
        content:
          'Polyfill CDN and all other services may be used only for lawful purposes. Transmission, distribution, or storage of any material in violation of any applicable law or regulation is prohibited. This includes, without limitation, any material protected by copyright, trademark, trade secret, or other intellectual property right used without proper authorization, and material that is obscene, defamatory, constitutes an illegal threat or violates export control laws.',
        ad2: [
          {
            title: 'Abuse of Our Service',
            content:
              'Polyfill typically acts as a data processor, meaning we process data on your behalf. Polyfill allows you to gather and temporarily store visitor log information such as anonymized IP, web address, country code, and user agent for the purpose of analyzing, processing, testing, and security. Additionally, our system stores either temporarily or permanently file obtained from your website by our system manually uploaded by you.',
            content2:
              'In most cases, the data held and collected by Polyfill does not contain any user-identifiable data. However, in some cases, depending on how you use Polyfill and how your website is structured, personal data may be collected from your users. Such information includes hosting user-uploaded content and personal data that might be transmitted in the URL, User-Agent, or Referer headers of the HTTP protocol.',
            pic: '/images/home/GDPR_graph_2@2x.png',
            width: '452px',
            height: '344px',
            mw: '',
            mh: ''
          },
          {
            title: 'Data Controller (You)',
            content:
              'As a customer of Polyfill, you typically act as a data controller. This means you determine if, why, and for how long data will be stored on our system. Our system provides ways to process, store and aggregate the stored information. If you are storing personal data on Polyfill, it is your duty as a controller to demonstrate the same level of GDPR compliance.',
            content2:
              'While uncommon, bunny.net also provides a way to block users from the EU from accessing your content altogether by using our traffic manager tools if you do not wish to serve users from the European Union.',
            pic: '/images/home/GDPR_graph_3@2x.png',
            width: '374px',
            height: '282px',
            mw: '',
            mh: ''
          }
        ]
      },
      {
        title: 'Data Processing Agreement (DPA)',
        content:
          'Typically, Polyfill does not collect, store or distribute information that could be used in any way to identify a user or contain their personal information. If you believe that you process personal data on the Polyfill platform, this qualifies you as a data processor, and you will be required by law to complete a Data Processing Agreement (DPA). You can easily locate the DPA within your Polyfill panel.',
        ad2: [
          {
            title: 'How does Polyfill comply with GDPR?',
            content:
              'Polyfill is fully committed to complying with the GDPR. We have overhauled our user Privacy & Data policy and taken steps to ensure no personally identifiable data is stored from your users that access your services through Polyfill by anonymizing any data that could be used to directly or indirectly identify a user. We are also signing the Data Processing Agreements with our partners and carefully overviewing that they take the required privacy measures over the data shared or stored on their platforms.',
            pic: '/images/home/GDPR_graph_4@2x.png',
            width: '472px',
            height: '310px',
            mw: '',
            mh: ''
          },
          {
            title: 'Polyfill Stream',
            content:
              'Polyfill Stream does not process or store permanently identifiable information. However, it can send back information about the stream quality, errors, buffering metrics, etc., to ensure good performance. Additionally, the iframe might ping various Polyfill CDN servers globally anonymously to collect performance statistics which are used to automatically adjust routing logic and optimize performance.',
            pic: '/images/home/GDPR_graph_5@2x.png',
            width: '384px',
            height: '308px',
            mw: '',
            mh: ''
          }
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

.whiteBoard {
  width: 1200px;
  margin-top: -60px;
  z-index: 9;
  position: relative;
  height: 490px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px #f1f1f1;
  border-radius: 14px;
  border: 1px solid #e6e6e6;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  gap: 74px;
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .content {
      .grend {
        color: #0ebf6a;
      }
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      color: rgba(78, 78, 78, 1);
      font-style: normal;
      text-transform: none;
    }
  }
  .right {
    flex-shrink: 0;
    width: fit-content;
    img {
      width: 368px;
      height: 298px;
    }
  }
}
</style>

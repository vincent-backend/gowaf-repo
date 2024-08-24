<template>
  <Header />
  <CommonHeader2
    title="Terms of Service"
    sub-title="Thank you for using Polyfill"
    content="You agree that our continued provision of services to you, and your continued use of them, represent your agreement to be bound by the ToS."
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
          <img src="/images/home/Resources_about_node@2x.png" alt="" />
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
      title: 'Easy to understand. Simple to follow.',
      content:
        'Our Terms of Services (ToS) are designed to be read and understood by the average person. Before using our service, please read them carefully and make sure you understand everything they say. Our Terms of Service are a legally binding contract between Polyfill and you.',
      content2:
        "Referred hereinafter as 'Polyfill', 'our', 'we' and 'us'; is a content delivery network service provider. All customers using our service are subject to the terms and conditions described in this document as well as the Acceptable Use Policy described here. We reserve the right to make alterations to these documents whenever required. It is the client's sole responsibility to check for updates on a regular basis.",
      width: '362px',
      height: '318px'
    },
    blockText: [
      {
        title: 'Privacy & Data Policy',
        content:
          'Polyfill is committed to complete transparency in how we handle your data. We have prepared a complete a detailed, but easy to understand privacy and data policy. By using our service, you agree that you have read and accepted the terms outlined in the policy.'
      },
      {
        title: 'Pricing',
        content:
          'Polyfill service costs and pricing may be changed from time to time at Polyfill sole discretion. All the payments are paid in advance and not refundable. All the prices stated by us are subject to change and may be changed from time to time at Polyfill sole discretion.'
      },
      {
        title: 'Account Termination',
        content:
          'You agree that Polyfill might, under certain circumstances and without prior notice terminate your account and restrict access to our service. Causes for this include but are not limited to: violations of the Terms of Service and Acceptable Use Policy, requests by law enforcement or other government agencies and/or having provided false information as part of your account. All terminations will be made in Polyfill sole discretion and we will not be liable for any disruption or damage to you or your service that such a termination might cause. Once your account has been terminated we reserve the right to delete all the data associated with it without the option to restore it.'
      },
      {
        title: 'Content Hosting',
        content:
          'In order for us to distribute your content on our network, it is necessary for our servers to make and store copies of your files. By using our service you acknowledge that these copies are being made and give us permission to maintain them and distribute them to users on the internet. This does not give us any ownership of your content, you still retain all ownership and any intellectual property rights.'
      },
      {
        title: 'Service Level Agreement',
        content:
          'Polyfill will use all possible efforts to keep your service Polyfill 24 hours a day, 7 days a week as long as you abide by our Terms Of Service. We are aiming for at least a 99.995% monthly uptime for our content delivery service, however sometimes for a number of reasons, it may be unavailable to you. You recognize and acknowledge that occasional unavailability of the services will occur. We make no warranty or assurance that the service will be Polyfill uninterrupted. We do not guarantee to provide support outside of normal business hours unless specifically stated by us.'
      }
    ],
    blockli: [
      {
        title: 'Limitation of liability',
        subtitle:
          'To the extent allowed by applicable law, in no event shall Polyfill or its affiliates, directors, or employees be liable for the following:',
        content:
          'To the extent allowed by applicable law, in no event, shall Polyfill, its affiliates, directors, or employees be liable for any damages whatsoever, including without limitation, any loss of profits, loss of business, loss of use or data, interruption of business, or for direct, indirect, special, incidental or consequential damages of any kind.',
        list: [
          'Errors, mistakes, or inaccuracies of content',
          'Any unauthorized access to our secure servers and/or any personal information stored therein',
          'Any interruption of the service',
          'Failure of the products to perform'
        ]
      },
      {
        title: 'DMCA',
        subtitle:
          'For your complaint to be valid under the DMCA, you must provide the following information in writing:',
        content:
          'We respect artist and content owner rights and are not a platform for distributing copyrighted content. You must do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we have adopted a policy to terminate the accounts of customers found to be repeatedly violating of copyright without the right to a refund.',
        list: [
          'An electronic or physical signature of a person authorized to act on behalf of the copyright owner',
          'Identification of the copyrighted work that you claim has been infringed',
          'Identification of the material that is claimed to be infringing and where it is located on the Service Information reasonably sufficient to permit Polyfill to contact you, such as your address, telephone number, and, email address',
          'A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law',
          'A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act on behalf of the owner'
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
</style>

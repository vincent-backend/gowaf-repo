<template>
  <Header />
  <CommonHeader2
    title="Terms of Service"
    sub-title="Thank you for using Polyfill"
    content="You agree that our continued provision of services to you, and your continued use of them, represent your agreement to be bound by the ToS."
    href="#"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :content4="item?.content4"
        :pic="item.pic"
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        m-pic-width="24.75rem"
        m-pic-height="20.25rem"
        :reverse="$device.isMobile ? true : index % 2 === 0"
      />
    </template>
  </div>
  <div class="page-container">
    <div class="content-container">
      <div class="title"></div>
      <div class="content"></div>
    </div>
  </div>
  <div class="page-container">
    <div class=""></div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'SLA'
});

const i18ntext = computed<any>(() => {
  return {
    items: [
      {
        pic: '/images/home/Uptime_Guaran_img@2x.png',
        title: t('home.guarantee'),
        content: t('home.SLAcontent1'),
        width: '362px',
        height: '318px'
      }
    ],
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
          'Failure of the products to perform',
        ]
      }
    ]
  };
});
</script>
<style lang="scss" scoped></style>

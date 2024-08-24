<template>
  <Header />
  <CommonHeader2
    title="How we're protecting your data"
    sub-title="Privacy & Data Policy"
    content="At Polyfill, we take data privacy very seriously. We want to be completely transparent about the information that we store, 
how we use it and how we keep it secure."
    href="#"
  />
  <div class="ad2-container" style="margin-bottom: 80px">
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
        pic: '/images/home/Privacy_graph_1@2x.png',
        title: 'How long we retain your data',
        content: 'The personal data shall be removed after the contract/deregistration of the user`s account expires. Should there be any outstanding liabilities, Polyfill shall keep necessary personal data to exercise our legal rights until the payment of outstanding amounts. The personal data listed in tax and accounting documents shall be kept for the period under the tax and accounting regulation.',
        width: '376px',
        height: '324px'
      },
      {
        pic: '/images/home/Privacy_graph_2@2x.png',
        title: 'How we protect your data',
        content: 'We make a great effort to ensure the security of your data using the latest encryption methods and never storing information such as your passwords in plain text. We also use encrypted traffic and communication in all critical parts of our system to ensure the safety of your data. Your credit card details are never stored on our servers for security reasons. Instead, we use one of the most secure payment providers, BrainTree, to process and store your billing information safely.',
        width: '336px',
        height: '316px'
      },
      {
        pic: '/images/home/Privacy_graph_3@2x.png',
        title: 'Withdrawal of consent',
        content: 'The data subject has a reserved right to withdraw consent at any time regarding data processing without affecting the lawfulness of processing based on consent before its withdrawal. The effectiveness of such a withdrawal shall extend only to the data where the processing is based on the consent of the data subject, but not on the data where processing is necessary for the performance of a contract to which the data subject is a party, or the data that is necessary for compliance with a legal obligation to which the Polyfill is subject.',
        width: '376px',
        height: '296px'
      },
      {
        pic: '/images/home/Privacy_graph_4@2x.png',
        title: 'The right to lodge a complaint',
        content: 'Every data subject has the right to lodge a complaint with a supervisory authority, in particular in the Member State of his or her habitual residence, place of work or place of the alleged infringement if the data subject considers that the processing of personal data relating to him or her infringes GDPR.',
        width: '366px',
        height: '318px'
      },
      {
        pic: '/images/home/Privacy_graph_5@2x.png',
        title: 'Other Rights',
        content: 'The data subject has a reserved right to request from Polyfill access to and rectify or personal erasure data or restrict processing concerning the data subject. For exercising such rights, refer to support@Polyfill.',
        width: '396px',
        height: '294px'
      },
      {
        pic: '/images/home/Privacy_graph_6@2x.png',
        title: 'OpenAI',
        content: 'When utilizing the Fluffee chat, our system leverages the OpenAI ChatGPT API to provide you with responses. Please note that this process entails the utilization of your data in order to assist you in resolving your queries.  ',
        width: '334px',
        height: '300px'
      },
    ]
  };
});
</script>
<style lang="scss" scoped></style>

<template>
  <Header />
  <CommonHeader2
    title="How we're protecting your data"
    sub-title="Privacy & Data Policy"
    content="At Gowaf, we take data privacy very seriously. We want to be completely transparent about the information that we store, 
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
  <CommonList1 v-bind="i18ntext.list1" />
  <ProductsSupportPlan
    class="privacy_Plan"
    title="Web browser cookie policy"
    itemsContent="Our website might use cookies in order to operate normally, allowing you to log into the dashboard and provide us with anonymous statistics about your visit to help us enhance the user experience of our website."
    itemsContent1="We have carefully designed and overviewed our cookie usage in order to make sure we never store any kind of personal information or information that would allow anyone to identify you."
    icon="/images/home/Privacy_graph_7@2x.png"
    isHidenList
  />
  <div class="brand">
    <div class="page-container">
      <div class="persona">Sharing your personal data</div>
      <div class="personalist">
        <div
          class="item"
          v-for="(item, index) in i18ntext.personaList"
          :key="index"
        >
          <img class="icon" :src="item.icon" alt="" srcset="" />
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
      <div class="bottom">
        This privacy policy is subject to change without prior notice. It was
        last updated on 10/08/2023.<br />
        If you require more information or have any questions, feel free to
        contact us at: support@Gowaf<br />
        Address: Gowaf d.o.o., Dunajska cesta 165, 1000 Ljubljana, Slovenia
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();

const i18ntext = computed<any>(() => {
  return {
    items: [
      {
        pic: '/images/home/Privacy_graph_1@2x.png',
        title: 'How long we retain your data',
        content:
          'The personal data shall be removed after the contract/deregistration of the user`s account expires. Should there be any outstanding liabilities, Gowaf shall keep necessary personal data to exercise our legal rights until the payment of outstanding amounts. The personal data listed in tax and accounting documents shall be kept for the period under the tax and accounting regulation.',
        width: '376px',
        height: '324px'
      },
      {
        pic: '/images/home/Privacy_graph_2@2x.png',
        title: 'How we protect your data',
        content:
          'We make a great effort to ensure the security of your data using the latest encryption methods and never storing information such as your passwords in plain text. We also use encrypted traffic and communication in all critical parts of our system to ensure the safety of your data. Your credit card details are never stored on our servers for security reasons. Instead, we use one of the most secure payment providers, BrainTree, to process and store your billing information safely.',
        width: '336px',
        height: '316px'
      },
      {
        pic: '/images/home/Privacy_graph_3@2x.png',
        title: 'Withdrawal of consent',
        content:
          'The data subject has a reserved right to withdraw consent at any time regarding data processing without affecting the lawfulness of processing based on consent before its withdrawal. The effectiveness of such a withdrawal shall extend only to the data where the processing is based on the consent of the data subject, but not on the data where processing is necessary for the performance of a contract to which the data subject is a party, or the data that is necessary for compliance with a legal obligation to which the Gowaf is subject.',
        width: '376px',
        height: '296px'
      },
      {
        pic: '/images/home/Privacy_graph_4@2x.png',
        title: 'The right to lodge a complaint',
        content:
          'Every data subject has the right to lodge a complaint with a supervisory authority, in particular in the Member State of his or her habitual residence, place of work or place of the alleged infringement if the data subject considers that the processing of personal data relating to him or her infringes GDPR.',
        width: '366px',
        height: '318px'
      },
      {
        pic: '/images/home/Privacy_graph_5@2x.png',
        title: 'Other Rights',
        content:
          'The data subject has a reserved right to request from Gowaf access to and rectify or personal erasure data or restrict processing concerning the data subject. For exercising such rights, refer to support@Gowaf.',
        width: '396px',
        height: '294px'
      },
      {
        pic: '/images/home/Privacy_graph_6@2x.png',
        title: 'OpenAI',
        content:
          'When utilizing the Fluffee chat, our system leverages the OpenAI ChatGPT API to provide you with responses. Please note that this process entails the utilization of your data in order to assist you in resolving your queries.  ',
        width: '334px',
        height: '300px'
      }
    ],
    list1: {
      title1: 'Anonymous non-personal data policy',
      title2: `In order to improve users with the best website experience, we may collect some anonymous information about users visiting and 
interacting with our website such as the name of their browser, pages visited, and points of interest on the website based on mouse 
heatmap technology as outlined below using a completely anonymous service called Matomo.`,
      items: [
        {
          icon: '/images/home/Privacy_card_ic_1@2x.png',
          title: 'Non-Personal Data Only',
          content: `We use a service called Matomo that strictly only tracks non-personal data that does not include any user identifiable information.`
        },
        {
          icon: '/images/home/Privacy_card_ic_2@2x.png',
          title: '100% Anonymous',
          content: `The data collected is not tied to any account or user and is 100% anonymous and used strictly for statistical reasons and to improve user experience.`
        },
        {
          icon: '/images/home/Privacy_card_ic_3@2x.png',
          title: 'Not Shared',
          content:
            'All anonymous data is kept by us, so there are no chances of a third party tying your unique ID and behavior to any personal profile.'
        }
      ]
    },
    personaList: [
      {
        icon: '/images/home/BrainTree-logo@2x.png',
        content:
          'During a payment process, we might pass your billing information such as credit card details, IP, and email to a service called BrainTree that will then use this for secure payment processing on our behalf.'
      },
      {
        icon: '/images/home/savio-logo@2x.png',
        content:
          'Savio will receive your account information (such as Email, Name, and Company Name) this will only be shared when you submit a feature request, ensuring a more tailored and efficient service.'
      },
      {
        icon: '/images/home/Coinify-logo@2x.png',
        content:
          'During a payment process, we might pass your billing information such as IP and email address to a service called Coinify that will then use this for secure payment processing on our behalf.'
      },
      {
        icon: '/images/home/dsiqus-logo-v2@2x.png',
        content:
          'When posting a comment on our blog or knowledge base, your provided information is shared with a service called Disqus that we use to provide users the ability to leave comments under our articles.'
      },
      {
        icon: '/images/home/MaxMind-logo@2x.png',
        content:
          'During signup, we mightDuring signup, we might share your current IP, browser user agent, browser language, and email address provided during signup to a third party service MaxMind that we use to detect and prevent credit card fraud.'
      },
      {
        icon: '/images/home/Salesforce-logo@2x.png',
        content:
          'Salesforce will receive billing, consumption, and service usage details. No zone configuration or end customer data will be shared, but communications with Gowaf may be processed by Salesforce.'
      },
      {
        icon: '/images/home/SendGrid-logo@2x.png',
        content:
          'After signing up for an account, we might share your name and email address with a service called SendGrid that we use to process and send email notifications related to your Gowaf account.'
      },
      {
        icon: '/images/home/Tableau-logo@2x.png',
        content:
          'Tableau will receive your personal, billing and account consumption details such as zone count, usage, or other metrics to help us improve the service, but no zone configuration or end customer data will be shared.'
      },
      {
        icon: '/images/home/ZenDesk-logo@2x.png',
        content:
          'When interacting with our support team or using the website support widget, information such as your email address and name might be passed to a service called ZenDesk that we use for managing our support.'
      },
      {
        icon: '/images/home/mixpanel-logo@2x.png',
        content:
          'MixPanel will receive your personal account details as well as information on how you use our services within the dashboard to help us improve the service, but no zone configuration or end customer data will be shared.'
      },
      {
        icon: '/images/home/active-campaign-logo@2x.png',
        content:
          'When you register an account with us, Active Campaign will receive your personal, billing, and account consumption information, including details like the number of zones and usage, and other relevant metrics. However, we will not share any information regarding zone configurations or data related to your end customers.'
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.privacy_Plan {
  margin-bottom: 80px;
  margin-top: 0;
  :deep(.support-plan > .content > .main > .right) {
    .pic {
      width: 430px;
      height: 292px;
      background-size: 430px 292px !important;
    }
  }
  :deep(.left) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.brand {
  background: #fff;
  .persona {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    padding: 50px 0 60px;
  }
  .personalist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px 80px;
    .item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .icon {
        height: 48px;
        width: fit-content;
        flex-shrink: 0;
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
  }
  .bottom {
    margin: 60px 0 0;
    padding-bottom: 60px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}
@media (max-width: 767px) {
  .privacy_Plan {
    margin-bottom: 80px;
    margin-top: 0;
    :deep(.support-plan > .content > .main > .right) {
      .pic {
        width: 26.88rem;
        height: 18.25rem;
        background-size: 26.88rem 18.25rem !important;
      }
    }
    :deep(.left) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .brand {
    background: #fff;
    .persona {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .personalist {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3.13rem;
      .item {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .icon {
          height: 3.88rem;
          width: fit-content;
          flex-shrink: 0;
        }
        .content {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.63rem;
          color: #4e4e4e;
          line-height: 2.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
    .bottom {
      margin: 3.75rem 0 0;
      padding-bottom: 6.25rem;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.63rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>

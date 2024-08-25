<template>
  <Header />
  <CommonHeader2
    :title="$t('9gI4CTS5QaTkx8VNstIqW')"
    :sub-title="
      $t('resources.breadCrumbs.Privacy') + $t('v7KnbaXqTZ6QNGQ731UCy')
    "
    :content="$t('13THZsm4_FXqwP1-DYJOi')"
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
    :title="$t('ldpyZuMS0M6IfwYYVaE5F')"
    :itemsContent="$t('werCGCDfDY0z2teU0UiyH')"
    :itemsContent1="$t('juQourb-hxAyBJk9lu2-8')"
    icon="/images/home/Privacy_graph_7@2x.png"
    isHidenList
  />
  <div class="brand">
    <div class="page-container">
      <div class="persona">{{ $t('_ep2pP8yKXfgLuKz3mbDl') }}</div>
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
        {{ $t('0lxiKybNRCrm3z9CzWtdT') }}<br />
        {{ $t('vNLhCwTo3nX0EA-GQJMyq') }}<br />
        {{ $t('MhSI7iWjafmlQ-IBy4mF-') }}
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
        title: t('9Kx0QnrZCsBUBzy363SW9'),
        content: t('ejuXgZq1XJZiJRV32Ahcb'),
        width: '376px',
        height: '324px'
      },
      {
        pic: '/images/home/Privacy_graph_2@2x.png',
        title: t('5YhJG7HlguaymUy636A2h'),
        content: t('UubsfLDbRcy68_jqVCqEL'),
        width: '336px',
        height: '316px'
      },
      {
        pic: '/images/home/Privacy_graph_3@2x.png',
        title: t('lB2hqCdwCi0a5NTQFh53y'),
        content: t('o5-uSJULdOmNzDcrb0Htv'),
        width: '376px',
        height: '296px'
      },
      {
        pic: '/images/home/Privacy_graph_4@2x.png',
        title: t('XWHCGdZVHoPHZ3iLl84Cc'),
        content: t('IkAwnVMSOQSc7IZPaQhHE'),
        width: '366px',
        height: '318px'
      },
      {
        pic: '/images/home/Privacy_graph_5@2x.png',
        title: t('qDWq8GlanRMECgJCujwXg'),
        content: t('H6MTo4TP2QYmEpqQXGukK'),
        width: '396px',
        height: '294px'
      },
      {
        pic: '/images/home/Privacy_graph_6@2x.png',
        title: 'OpenAI',
        content: t('1h4MQaGNKG29SL5ILDHq-'),
        width: '334px',
        height: '300px'
      }
    ],
    list1: {
      title1: t('AiDFcDvPqw9P56FVcWoS3'),
      title2: t('buu0DgKhqf8f_wOGBmPAf'),
      items: [
        {
          icon: '/images/home/Privacy_card_ic_1@2x.png',
          title: t('bUhWr4kQWp_Era3w1PF6-'),
          content: t('QkFELhFe-buR-xlKZTfkd')
        },
        {
          icon: '/images/home/Privacy_card_ic_2@2x.png',
          title: t('51JRnWNWpMXLWUl7_o8FZ'),
          content: t('nC0h9ke6e-OKneQrj7ajX')
        },
        {
          icon: '/images/home/Privacy_card_ic_3@2x.png',
          title: t('PetJOfg49TjDmU2nKpkrP'),
          content: t('vqvX3w7BzjggYGB34Ip_b')
        }
      ]
    },
    personaList: [
      {
        icon: '/images/home/BrainTree-logo@2x.png',
        content: t('5PN6xUPj3nVUn9hsQlSyy')
      },
      {
        icon: '/images/home/savio-logo@2x.png',
        content: t('FAixbwxO-0nFRqx0YtJSk')
      },
      {
        icon: '/images/home/Coinify-logo@2x.png',
        content: t('c2BqMEJUpkuHlKlpoaIET')
      },
      {
        icon: '/images/home/dsiqus-logo-v2@2x.png',
        content: t('jaQYvxAjbxa4w1WMTm0Zl')
      },
      {
        icon: '/images/home/MaxMind-logo@2x.png',
        content: t('Nicj0VIn8Whtk7Q65wNtq')
      },
      {
        icon: '/images/home/Salesforce-logo@2x.png',
        content: t('VAcwwrLRkFtqPZ8DVIwJS')
      },
      {
        icon: '/images/home/SendGrid-logo@2x.png',
        content: t('I4ZKzKJjFnNYaNd6C14yz')
      },
      {
        icon: '/images/home/Tableau-logo@2x.png',
        content: t('v5rpPYGT2-ZVddRk-cj5h')
      },
      {
        icon: '/images/home/ZenDesk-logo@2x.png',
        content: t('Kv5BwxXC7YyCjaPbgz0OW')
      },
      {
        icon: '/images/home/mixpanel-logo@2x.png',
        content: t('DOAek6hzYOFH9e5TNuwKi')
      },
      {
        icon: '/images/home/active-campaign-logo@2x.png',
        content: t('9GteHxS8KFpJM4e0xrGA7')
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

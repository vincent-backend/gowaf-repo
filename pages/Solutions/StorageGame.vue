<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.storageGame.header.preTitle')"
    :title="$t('solutions.storageGame.header.title')"
    :content="$t('solutions.storageGame.header.content')"
    :btn="$t('solutions.storageGame.header.btn')"
    href="#"
    :hint="$t('solutions.storageGame.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/solutions/storage-game/Solutions_Storage_game_banner_graph_1@2x.png',
      w: '442px',
      h: '348px',

      msrc: '/images/solutions/storage-game/Solutions_Storage_game_banner_graph_1@2x.png',
      mw: '27.63rem',
      mh: '21.75rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    class="SecurityCdn-CommonNumbers"
    :items="i18ntext.numbers"
  />

  <SolutionsAccelerate
    :title="$t('solutions.storageGame.accelerate.title')"
    :content="$t('solutions.storageGame.accelerate.content')"
    :list1="i18ntext.list1"
    :list2="i18ntext.list2"
  />

  <CommonSuperCharge
    class="SecurityCdn-SuperCharge"
    v-bind="i18ntext.goFaster"
  />

  <SolutionsAd1
    :title="$t('solutions.storageGame.ad1.title')"
    :sub-title="$t('solutions.storageGame.ad1.subTitle')"
    :btn="$t('solutions.storageGame.ad1.btn')"
    href="#"
    pic="/images/solutions/storage-game/Solutions_Storage_game_Media_banner_graph_2@2x.png"
    pic-width="450px"
    pic-height="330px"
    mPic="/mobile-images/solutions/storage-game/Solutions_Video_Media_banner_graph_2@2x.png"
    mPicWidth="19.38rem"
    mPicHeight="16.13rem"
  />

  <CommonList1 v-bind="i18ntext.list1" />

  <NetworkJoin1
    class="SecurityCdn-NetworkJoin1"
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: '80%',
        content: 'Lower Costs'
      },
      {
        label: '24 ms',
        content: 'Avg. Global Latency'
      },
      {
        label: 'Up to 5x',
        content: 'Faster Download Times'
      },
      {
        label: '150 Tbps+',
        content: 'Network Backbone'
      }
    ],
    list1: [
      'Better Download Speeds',
      'Lower Costs',
      '24/7 Customer Support',
      'DDoS Protection',
      'Real-Time Monitoring',
      'Customized Pricing'
    ],
    list2: [
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_1_sel@2x.png',
        title: 'Unlimited Scalability',
        content:
          'Turn your game into a global success. Reach your players worldwide with 123 global PoPs.'
      },
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_2_sel@2x.png',
        title: 'Faster Downloads',
        content:
          'Level up your download speeds, up to 5x without any strain on your network!'
      },
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_3_sel@2x.png',
        title: 'DDoS Protection',
        content:
          'Stay protected from DDoS Attacks at all times. Run your game uninterrupted 24/7!'
      },
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_4_sel@2x.png',
        title: 'Reduce Costs',
        content:
          'Eliminate enormous costs for high volume downloads with flexible pay-as-you-go pricing.'
      }
    ],
    goFaster: {
      title: 'Best gaming experience. Every time.',
      subTitle:
        'Take advantage of the next-generation content delivery network for all of your gaming needs.',
      tabs: [
        {
          tab: 'Mobile Games',
          title: 'Join the new era of mobile gaming',
          content:
            'Deliver in-game content and updates smoothly to your global audience. Take advantage of our 123 global PoPs and maximize download speeds anywhere in the world up to 5x times.\nStand out from the competition with the fastest delivery of patches as well as pre and post-game updates!',
          icon: '/images/solutions/storage-game/Solutions_Storage_game_Media_graph_Mobile@2x.png',
          iconWidth: '330px',
          iconHeight: '280px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_Media_graph_Mobile@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        },
        {
          tab: 'VR Gaming',
          title: 'Make your Virtual Reality experience flawless',
          content:
            'Keep your players engaged with seamless VR sessions. Deliver content faster - don’t disappoint with slow loading and unnecessary lag. Take advantage of a next-gen CDN system designed to keep gamers gaming.\nWith a sub 24 ms global latency, your virtual world will load faster than the real one.',
          icon: '/images/solutions/storage-game/Solutions_Storage_game_graph_VR@2x.png',
          iconWidth: '338px',
          iconHeight: '314px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_graph_VR@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        },
        {
          tab: 'Browser-Based Games',
          title: 'Faster load times for a better gaming experience',
          content:
            'Keep players coming back. Accelerate your gaming assets and eliminate unnecessary loading times. Prevent DDoS attacks, stop bots and make sure your games stay online at all times.\nLower costs with a high volume tier and deliver dynamic ads without compromising the gaming experience.',
          icon: '/images/solutions/storage-game/Solutions_Storage_game_graph_Browser@2x.png',
          iconWidth: '324px',
          iconHeight: '246px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_graph_Browser@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        },
        {
          tab: 'Download Delivery',
          title: 'Help gamers hop into your game faster',
          content:
            'Keep scalability issues in the past, traffic spikes in check, and never leave anything to chance again. Deliver downloads and updates faster than your competition while keeping your costs at bay. \nTake advantage of Pay As You Go pricing & a global 150 Tbps+ network to ensure gamers keep coming back.',
          icon: '/images/solutions/storage-game/Solutions_Storage_game_graph_Download@2x.png',
          iconWidth: '288px',
          iconHeight: '282px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_graph_Download@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        }
      ]
    },
    slist1: {
      title1: 'Hop ahead of the technology curve',
      title2: 'Leverage powerful features. At no additional cost.',
      items: [
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_1@3x.png',
          title: 'Powerful Security',
          content:
            'Stay protected from any and all attacks with state-of-the-art DDoS mitigation security.'
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_2@3x.png',
          title: 'Faster Downloads',
          content:
            'Say goodbye to slowdowns with a network designed for maximum throughput.'
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_3@3x.png',
          title: 'SSL/TLS Encryption',
          content:
            'Take advantage of a free SSL certificate with a single click of a button.'
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_4@3x.png',
          title: 'Minimize Latency',
          content:
            'Keep your global latency at bay and deliver your content to everyone within sub 24 ms.'
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_5@3x.png',
          title: 'Origin Protection',
          content:
            'Leverage a multi-layer caching system, and don’t let traffic spikes affect your infrastructure.'
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_6@3x.png',
          title: 'Real-Time Statistics',
          content:
            'Get complete insight into your games with real-time traffic statistics and logging.'
        }
      ]
    },
    join1: {
      title: '40.000+ customers already trust us',
      person: {
        name: 'Tom Mason',
        title: 'Nexus Mods',
        content:
          '“Working with Gowaf has been a breath of fresh air. Their team has been helpful, responsive, and knowledgeable. The service exceeded our expectations every step of the way.”'
      }
    }
  };
});
</script>
<style lang="less" scoped>
.SecurityCdn-SuperCharge,
.SecurityCdn-NetworkJoin1 {
  margin-bottom: 6.25rem;
}
.SecurityCdn-CommonNumbers {
  margin-top: 80px;
}
@media screen and (max-width: 768px) {
  .SecurityCdn-CommonNumbers {
    margin-top: 6.25rem;
  }
}
</style>

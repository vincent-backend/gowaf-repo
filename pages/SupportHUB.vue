<template>
  <Header />
  <NetworkToolsBenner
    :title="$t('home.SupportHUB.title')"
    :sub-width="'auto'"
    :sub-title="$t('home.SupportHUB.subtitle')"
  >
    <div class="inputBox">
      <el-input
        v-model="input"
        :placeholder="$t('AkilyeERXgKcftbm1H0mM')"
        :prefix-icon="Search"
        class="input-with-select"
      >
      </el-input>
    </div>
  </NetworkToolsBenner>
  <div class="page-container fold">
    <div class="row" v-for="(item, index) in i18ntext" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="subtitle">{{ item.subtitle }}</div>
      <div class="box">
        <div class="box-item" v-for="(d, i) in item.items" :key="i">
          <HomeCollapse :list="[d]"></HomeCollapse>
        </div>
      </div>
    </div>
  </div>
  <Footer :is-show-banner="true" />
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
const { t } = useI18n();
const input = ref('');
definePageMeta({
  title: 'SupportHUB'
});

const i18ntext = computed<any>(() => {
  return [
    {
      title: 'CDN',
      subtitle: t('NQw188jc5OwsTTFvpG-XN'),
      items: [
        {
          title: t('8NFvXvx2lnt5P2_gYS9Bf'),
          subtitle: [
            t('OA6zCLNlA-_UZM90JVC4q'),
            t('x0e7AV9RsMOJlGemIVwTr'),
            t('g3KTGWIpCkiBg8j6kfjCS'),
            t('5BIoDxOdodK-zEx3o921v'),
            t('7JkS4CX8jiiB6MkQaYlBY')
          ]
        },
        {
          title: t('7VRwuAX2M14yywvS21CWU'),
          subtitle: [
            t('vXw1hR2a9-Ffxi8QK3VV0'),
            t('8I8ecw1STdv6Oosx6Sj-M'),
            t('5ydDPlcYd9-w9N4pvL1HX'),
            t('VyJg-p56OLii0yWmWO843'),
            t('Vf4J9e4exH9zotGXEXtoj')
          ]
        },
        {
          title: t('jx6tFd_tV5nF-VP0gfHQg'),
          subtitle: [
            t('BcAuP-FaBLZ277WLvSTLB'),
            t('M8_WzIH_cDx1IWRUJ46wb'),
            t('KZAxQ48tVoyj5IQu7rXI5'),
            t('cbHVRo3yt5KBxta4s1NE9'),
            t('XhA5VAK94yqzW07ENHI5A')
          ]
        },
        {
          title: t('YFDEIQBwZf3OmEUwOpWkY'),
          subtitle: [
            t('VL5HyKzaBevi8GnrdMRxH'),
            t('fkzR4SRMrVWeHbTtHrbxf'),
            t('Yp4I8TYtv74ZgZJteid5a'),
            t('2K4CSmipoO2s5l3Q1P5uK'),
            t('ULLnxUBIrlhkWIFN2UJQ0')
          ]
        },
        {
          title: t('wFj6oc9_RShNwzUGVbhGR'),
          subtitle: [
            t('t6BCphTt4ny0at5Em9Wkp'),
            t('vLxUNQJmxv10rE4n0gRan'),
            t('xZ7S2CfZOgOJbvmtyU1O1'),
            t('5RYrYLhq4KCO9xpfopAM8'),
            t('v5xd8sz7gg9qxrvMjEbRG')
          ]
        },
        {
          title: t('IYJQsg9Hd3Q4FKJACLC5Z'),
          subtitle: [
            t('lHTcAZ9EI0arXqM5tjLj5'),
            t('WOOQH76cFZahgTFwXJ1R7'),
            t('tsgTxfzo6NoFH0wT9rAEm'),
            t('HU5fcA85ASKprmAwKFMAD'),
            t('8WNyT49m_GsoWkCoKtbsw')
          ]
        }
      ]
    },
    {
      title: 'DNS',
      subtitle: t('KPxgrA7C1vxgTC_oCQFMP'),
      items: [
        {
          title: t('HuBsF5QP585VVXuzmb3Ts'),
          subtitle: [
            t('BPdvMGdAu7O2-g70qST2r'),
            t('bjyzlL1gMGIeBX1O3-2_w'),
            t('pxwyLpzmCondoGotSLxnA'),
            t('oAVeJUoozm27Mqfjuc9fN'),
            t('aqEbmlQFRS029gnpr6hgJ')
          ]
        },
        {
          title: t('xcJ-KHHtn5_JhiXHBMWpN'),
          subtitle: [
            t('QS-74lqqOA1COdQjEbDTj'),
            t('w2fiKGHRh7aMk7FdQ3nyE'),
            t('-LDjzm5vFJs0dd-rQiiZm'),
            t('i7uk3yBKo_5enPLWmc90Q'),
            t('AzWHbOl1ejuGpEpDr5ahZ')
          ]
        }
      ]
    },
    {
      title: t('products.storage.breadCrumbs.parent'),
      subtitle: t('eg6WqB1il3FiyqvR4Ha-9'),
      items: [
        {
          title: t('bSdXu0UA_UU7q6eJpoXKt'),
          subtitle: [
            t('wBcabXJsct5yZsZUA4LUf'),
            t('kQd1as9FW2A_dIkoxTXvl'),
            t('dABFAmVxXCVeQ1gF35CmS'),
            t('mUksG99JlGB8nhl1z4PB9'),
            t('pzK-Z1MeyzMYYO9EdZ9qP')
          ]
        },
        {
          title: t('bVCfTZFzr1g3Sin5g_8ys'),
          subtitle: [
            t('xZhREUvnh171RgIci0-tC'),
            t('KULZvO8G9Uc925bAxmT7_'),
            t('aI1wUPzAwMcCByZhUFa7a'),
            t('KJZtJNAs4obZKKAWYBDWu'),
            t('WZnkChC3ZKHWH-yz7DJGa')
          ]
        }
      ]
    },
    {
      title: t('products.stream.breadCrumbs.parent'),
      subtitle: t('QL423LI7ggKomsM5NLlvS'),
      items: [
        {
          title: t('iUSK4ulKoV3_MuqG86T81'),
          subtitle: [
            t('TE73bQXoYczUFFCpXt0MC'),
            t('zPf6ilJws_g2-wlwuSVzU'),
            t('0ok_mHNBp7r_EoR9_b-Dn'),
            t('hZp5HvQYV-Fx5qU32tSN1'),
            t('WXMesPzBGQNI1gpcpIK9E')
          ]
        },
        {
          title: t('R5J3K1Htrsa5KiOUNqHQf'),
          subtitle: [
            t('MX_1kF_9DIPdAT6MDMTEO'),
            t('evMkvKr2bJapk17eEn-kI'),
            t('jMfQx3y3LOBEFHPXQRI4m'),
            t('HH9k9o_jNdC0i9mbxnpDJ'),
            t('xKybwIsPvHU5KmorUWbDb')
          ]
        }
      ]
    },
    {
      title: t('products.optimizer.breadCrumbs.parent'),
      subtitle: t('5r1xq4u6wxhRr7Y4JSdiV'),
      items: [
        {
          title: t('aKd6fPOGJdiLq-c0yL7gu'),
          subtitle: [
            t('Uf8TI5DjAqM33HS19AFXU'),
            t('Fcm2Tjq29IWOs-vK_8LVE'),
            t('yTSslnCaMEHQdLLBSInKL'),
            t('2RRbwoKJL59sQmOew_8JW'),
            t('attyFpYS8XTqJ9t5KWIoQ')
          ]
        },
        {
          title: t('eBLy1K1_asDNo9-iiHBKq'),
          subtitle: [
            t('LA62XpfD2_VmDe9a2zhlh'),
            t('0C8zeUq-nNLteg6k6rtV4'),
            t('C6WGYWUMDjqPGqzqcYGTG'),
            t('7UqHlSkOKXcDJx7qVcRl6'),
            t('-x8g72ZKxyrTj999z9cqd')
          ]
        }
      ]
    },
    {
      title: t('tWiR7bQVRfTSkXKha2urS'),
      subtitle: t('j4OnIsGBjni-Zj1b8rug5'),
      items: [
        {
          title: t('zOMCr63VkDfyxYgbgeyOS'),
          subtitle: [
            t('MkX9tR5LW_vkl7wYjDHAF'),
            t('VjRtLMbAxvSyBWyhNlaNp'),
            t('kmPbeiV65cWBGJfnUzfYc'),
            t('3j1hn_wlc0hPH8iE37it5'),
            t('QcMi-mC_xckOT4HJwqm7-')
          ]
        },
        {
          title: t('W9MWK9isF7qTW3GH3mGY_'),
          subtitle: [
            t('7TGr4aBfx9FC4YgQSojkj'),
            t('wc0rf2h4N6mczxEbMQRbP'),
            t('erW0t3H02SBTURpbilkJk'),
            t('qA_ZTkERfTfG0zwWqyPJs'),
            t('rf-60oXV_6Hz6h0HwPbv2')
          ]
        },
        {
          title: t('clYAYTqj82UHJoHFnPqKx'),
          subtitle: [
            t('IWr7JpAYS6ZkhaseqXEKO'),
            t('JuufR85QsyhTnx_os_ybk'),
            t('9uTDXgFKKA4K6RLw5BkpY'),
            t('3MTQDXHSzq7oEzvIw0Bd1'),
            t('f_R3P9HNP5ltE8ETwL4Ej')
          ]
        },
        {
          title: t('0ryDdqe4DnqoyXYJsFeDp'),
          subtitle: [
            t('3u63CaC-f-5ilpvVOm_ig'),
            t('wBH5KWfLNOTRuu4QNxg-m'),
            t('piQNR4pMIFzNe5HPsSMJW'),
            t('RHsdoURJ-Mzc2_2mxIVyP'),
            t('uGN_4GtwUaP8tTlrGEtrk')
          ]
        }
      ]
    }
  ];
});
</script>
<style lang="scss" scoped>
.input-with-select {
  height: 66px;
  :deep(.el-input__inner) {
    height: 66px;
    width: 690px;
  }
  :deep(.el-input__wrapper) {
    box-sizing: border-box;
    border-radius: 12px;
  }
}
.fold {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  .row {
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
    .subtitle {
      margin: 16px 0 32px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px 32px;
      .box-item {
        /* flex: 1; */
        :deep(.el-collapse-item__header) {
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>

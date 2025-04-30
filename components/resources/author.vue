<template>
  <div class="author-container">
    <div class="author page-container">
      <div class="title">
        {{ localizedDefaults.title }}
      </div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <div class="content">
        <div v-for="item in localizedDefaults.list" class="author-item">
          <div class="bg">
            <img :src="item.img" alt="" />
          </div>
          <div class="title-box">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n();
const props = withDefaults(
  defineProps<{
    title: string;
    subTitle: string;
    list: Array<{
      img: string;
      title: string;
      subtitle: string;
    }>;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('resources.SuperGowaf.author.title'),
    subTitle: $t('resources.SuperGowaf.author.subTitle'),
    list: [
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('R4lUfB4acIvhP8mOTf4CY'),
        subtitle: $t('rCVlYn_DGw9h8ASaGKvTb')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('fXXI14XoIiBvkI7CcAnK_'),
        subtitle: $t('ye3rjqdGDsvXvlKn0fMEh')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('I8jH_G_YgI4vWM7fzEf34'),
        subtitle: $t('ZUtSMMfhXJBKtLHl-5yGx')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('pEuywjZWHT-XzK7eHCKE3'),
        subtitle: $t('m9YUmb15Sk1YKvKhphtXm')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('1-Hg2H7zOz3h8Z195pbbC'),
        subtitle: $t('DatncyiDVR-hTrqFFKx4v')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('f0frDwUjeERXV8AmIQgpI'),
        subtitle: $t('hoDAtVVKhoKiddVIv643A')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('3roXpgualj-ytQ6YijT0P'),
        subtitle: $t('Ja9WCSQMZHUawKskCQ7xs')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('pnqmsWFq8GQ2yYJJIGpPF'),
        subtitle: $t('QqoodMEwPpua8T2NYqMZJ')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('RTP73PAf4kSPy9KiZFb2g'),
        subtitle: $t('EPV_qTUungoR76LMDbiQV')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('L-oyMRl0rMAN1jWFwhSEb'),
        subtitle: $t('YgQbeeMFSUDU-S0Xkit6n')
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: $t('3Fj00E6dtPp9sglLcUdGb'),
        subtitle: $t('fKO6FLOlVr7-hYsbUMaYL')
      }
    ]
  };
  return mergeWithDefaults(obj, props);
});
</script>
<style lang="scss" scoped>
.author-container {
  margin-top: 120px;
  margin-bottom: 100px;

  .author {
    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      margin-top: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      box-sizing: border-box;
      .author-item {
        width: 280px;
        height: 380px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        .bg {
          width: 100%;
          height: 240px;
          background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 12px 12px 0px 0px;
          box-sizing: border-box;
          display: flex;
          align-items: flex-end;
        }
        .title-box {
          box-sizing: border-box;
          width: 100%;
          height: 140px;
          background: #ffffff;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0px 0px 12px 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 8px;
          .title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 42px;
            text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
          .sub-title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .author-container {
    margin-top: 6.25rem;

    .author {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .content {
        margin-top: 3.75rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 3.75rem;
        box-sizing: border-box;
        .author-item {
          width: 17.63rem;
          height: 23.75rem;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          .bg {
            width: 100%;
            height: 15rem;
            background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 12px 12px 0px 0px;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
          }
          .title-box {
            box-sizing: border-box;
            width: 100%;
            height: 8.75rem;
            background: #ffffff;
            box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.2);
            border-radius: 0rem 0rem 0.75rem 0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 0;
            .title {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 2.5rem;
              color: #000000;
              line-height: 3.5rem;
              text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
              text-align: center;
              font-style: normal;
              text-transform: none;
            }
            .sub-title {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 1.5rem;
              color: #000000;
              line-height: 2.06rem;
              text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
              text-align: center;
              font-style: normal;
              text-transform: none;
            }
          }
        }
      }
    }
  }
}
</style>

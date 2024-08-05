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
    title: $t('resources.SuperPolyfill.author.title'),
    subTitle: $t('resources.SuperPolyfill.author.subTitle'),
    list: [
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Max',
        subtitle: 'Head of Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Benjamin',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Renz',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Tomas',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Sunil',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Jack',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Bruno',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Tilen',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Jesus',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Raul',
        subtitle: 'Support'
      },
      {
        img: '/images/resources/SuperPolyfill/Network_Overview_evaluate_character@2x.png',
        title: 'Joseph',
        subtitle: 'Support'
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

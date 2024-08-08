<template>
  <div class="ready-to-hop-container">
    <div class="ready-to-hop page-container">
      <div class="title">
        {{ $t('products.cdn.overview.readyToHop.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.cdn.overview.readyToHop.subTitle') }}
      </div>
      <div class="step-container">
        <div class="step-item" v-for="item in i18ntext">
          <div class="step">{{ item.step }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      step: '01',
      title: t('home.forgot.loginbtn'),
      content: t('ltBFaLQ9W_6xKI2YKG0jq')
    },
    {
      step: '02',
      title: t('QmJRnMg5KJqJ99kNvYvhI'),
      content: t('a9MikvGlls2ayw3Gsjf6R')
    },
    {
      step: '03',
      title: 'Supercharge!',
      content: t('To6RhdJp4RuOw5hfiiO0S')
    }
  ];
});
</script>

<style lang="less" scoped>
.ready-to-hop-container {
  margin-top: 120px;

  .ready-to-hop {
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

    > .step-container {
      margin: 80px auto 0;
      width: 1000px;
      display: flex;
      justify-content: space-between;

      > .step-item {
        width: 260px;

        > .step {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 50px;

          line-height: 64px;

          background: linear-gradient(
            41.5494227786465deg,
            #46cf3a 0%,
            #36cfbc 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        > .title {
          font-weight: 500;
          font-size: 16px;

          line-height: 22px;
        }

        > .content {
          margin-top: 14px;

          color: #4e4e4e;
          line-height: 20px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .ready-to-hop-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.63rem;
    margin-top: 20rem;

    .ready-to-hop {
      > .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      > .sub-title {
        margin-top: 1rem;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      > .step-container {
        margin: 2.5rem auto 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        justify-content: space-between;

        > .step-item {
          width: 100%;

          > .step {
            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 6.25rem;
            color: #000000;
            line-height: 7rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            background: linear-gradient(
              41.5494227786465deg,
              #46cf3a 0%,
              #36cfbc 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          > .title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 2.13rem;
            color: #000000;
            line-height: 3rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 1.5rem;
          }

          > .content {
            margin-top: 1rem;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.75rem;
            color: #4e4e4e;
            line-height: 2.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
</style>

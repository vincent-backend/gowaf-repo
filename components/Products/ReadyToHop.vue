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
        <div
          class="step-item"
          v-for="item in i18ntext"
        >
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
      title: 'Create an Account',
      content:
        'Integrate the CDN into your web applicationand eniov a boost of speed. Need helo? Reachout to our Super Bunnies.'
    },
    {
      step: '02',
      title: 'Configure CDN Resources',
      content: 'Connect a Pull Zone or upload our files directly to bunny.net. '
    },
    {
      step: '03',
      title: 'Supercharge!',
      content:
        'Integrate the CDN into your web application and eniov a boost of speed. Need helo? Reach out to our Super Bunnies.'
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
</style>

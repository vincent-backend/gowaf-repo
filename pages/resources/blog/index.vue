<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.blog')"
    :items="[
      {
        label: $t('resources.breadCrumbs.allPosts'),
        href: '',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.News'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Performance'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Networking'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Security'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Tips'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Privacy'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Al'),
        href: '',
        current: false
      }
    ]"
  />
  <div class="page-container header">
    <div class="content-container">
      <div class="pre-title">
        {{ $t('resources.blog.header.preTitle') }}
      </div>
      <div class="title">{{ $t('resources.blog.header.title') }}</div>
      <div class="content">
        {{ $t('resources.blog.header.content') }}
      </div>
    </div>
    <div class="header-img"></div>
  </div>
  <div class="page-container AllPosts">
    <CommonTabs :tabs="$tm('resources.blog.CommonTabs')" v-model:cur-tab="curTab" />
    <div class=""></div>
  </div>
</template>

<script setup lang="ts">
const curTab = ref(0);
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
  background: #fafafa;
  padding: 60px 0;
  align-items: center;
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .pre-title {
      font-family: Mont, Mont;
      font-weight: bold;
      font-size: 30px;
      color: #000000;
      line-height: 40px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .title {
      font-family: Mont, Mont;
      font-weight: bold;
      font-size: 50px;
      color: #000000;
      line-height: 70px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .header-img {
    width: 522px;
    height: 294px;
    flex-shrink: 0;
  }
}
</style>

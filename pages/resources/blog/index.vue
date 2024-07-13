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
    <CommonTabs
      :tabs="$tm('resources.blog.CommonTabs')"
      v-model:cur-tab="curTab"
    />
    <div class="Post-list">
      <div class="Post-item" v-for="item in $tm('resources.blog.Post') as any">
        <div
          class="img-box"
          :style="{
            backgroundImage: `url(${item.img});`
          }"
        ></div>
        <div class="title-list">
          <div class="title">{{ item.title }}</div>
          <div class="Post-content">
            {{ item.content }}
          </div>
          <div class="authorIntroduction">
            <div
              class="headPortrait"
              :style="{
                backgroundImage: `url(${item.headPortrait});`
              }"
            ></div>
            <div class="author">{{ item.author }}</div>
            <div class="author-time">
              {{ item.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paging">
      <div class="paging-text">
        {{ $t('resources.blog.paging1') }}
        <span class="bold">12</span>
        {{ $t('resources.blog.paging2') }}
        <span class="bold">98</span>
        {{ $t('resources.blog.paging3') }}
      </div>
      <div class="pageNumber">
        <div class="activation"></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="LoadMore">Load more</div>
    </div>
  </div>
  <Footer />
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
.AllPosts {
  margin-bottom: 100px;
  background: #fafafa;
}
.Post-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  .Post-item {
    width: 384px;
    height: 513px;
    display: flex;
    flex-direction: column;
    .img-box {
      width: 100%;
      height: 288px;
      background-size: cover;
    }
    .title-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 384px;
      height: 225px;
      background: #ffffff;
      border-radius: 0px 0px 12px 12px;
      padding: 20px;
      box-sizing: border-box;
      gap: 11px;
      .title {
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 32px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .Post-content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .authorIntroduction {
        display: flex;
        align-items: center;
        .headPortrait {
          width: 32px;
          height: 32px;
          background-size: cover;
          margin-right: 12px;
        }
        .author {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .author-time {
          margin-left: auto;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4e4e4e;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
.paging {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  .paging-text {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    display: flex;
    align-items: center;
    gap: 2px;
    .bold {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 20px;
      color: #000000;
      line-height: 28px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .pageNumber {
    display: flex;
    gap: 8px;
    div {
      width: 50px;
      height: 8px;
      background: #ebebeb;
      border-radius: 4px;
    }
    .activation {
      background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
      border-radius: 4px;
    }
  }
  .LoadMore {
    width: 139px;
    height: 50px;
    background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
    border-radius: 25px;
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

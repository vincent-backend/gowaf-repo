<template>
  <div class="header-container">
    <div class="page-container header">
      <div class="content-container">
        <div class="title">
          {{ $t('resources.contact.header.title') }}
        </div>
        <h4>{{ $t('resources.contact.header.subTitle') }}</h4>
        <div class="content">
          {{ $t('resources.contact.header.content') }}
        </div>
      </div>
    </div>
  </div>
  <ResourcesContactForm />
  <Footer />
</template>

<style lang="less" scoped>
.header-container {
  height: 350px;
  min-width: 1200px;
  background: url(/public/images/resources/contact/banner-bg.png) no-repeat
    center;
  background-size: 1920px 350px;

  .header {
    position: relative;
    overflow: hidden;

    .logo-container {
      position: absolute;
      left: 0;
      top: 14px;

      .logo {
        width: 112px;
        height: 32px;
        background: url(/public/images/book-meeting/logo.png);
      }
    }

    .content-container {
      margin-top: 90px;
      font-family: Mont, Mont;
      .title {
        width: 564px;
        margin: 0 auto;
        font-weight: bold;
        font-size: 30px;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        opacity: 0.9;
      }
      h4 {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        color: #ffffff;
        line-height: 70px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        opacity: 0.9;
      }
      .content {
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 24px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        opacity: 0.8;
        margin-top: 15px;
      }
    }
  }
}
</style>

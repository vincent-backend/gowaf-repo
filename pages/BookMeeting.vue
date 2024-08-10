<template>
  <XsOnly>
    <Header />
  </XsOnly>
  <div class="header-container">
    <div class="page-container header">
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <div class="content-container">
        <div class="title">
          {{ $t('bookMeeting.header.title') }}
        </div>
        <div class="content">
          {{ $t('bookMeeting.header.content') }}
        </div>
      </div>
    </div>
  </div>
  <div class="form-container">
    <div class="page-container form">
      <ProductsBookmeetingForm />
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row row-message"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'BookMeeting'
});
</script>
<style lang="less" scoped>
.header-container {
  height: 350px;
  min-width: 1200px;
  background: url(/images/book-meeting/banner.png) no-repeat center;
  background-size: 1920px 350px;

  .header {
    position: relative;
    overflow: hidden;

    .logo-container {
      position: absolute;
      left: 0;
      top: 14px;

      .logo {
        width: 114px;
        height: 44px;
        background: url('/images/home/Gowaf_logo+文字.png');
      }
    }

    .content-container {
      margin-top: 90px;

      .title {
        width: 564px;
        margin: 0 auto;

        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 30px;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
      }
      .content {
        margin: 12px auto 0;
        width: 724px;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        opacity: 0.8;
      }
    }
  }
}

.form-container {
  margin-top: -70px;

  .form {
    width: 1000px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
    border-radius: 24px;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 50px 200px;
  }
}
@media (max-width: 767px) {
  .header-container {
    width: 100%;
    min-width: 0;
    height: 35.56rem;
    background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);

    .header {
      position: relative;
      overflow: hidden;
      .logo-container {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        .logo {
          display: none;
        }
      }

      .content-container {
        margin-top: 6.8rem;

        .title {
          margin: 0 auto;
          width: 39.38rem;
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 2.5rem;
          color: #ffffff;
          line-height: 3.31rem;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
        .content {
          margin: 2.25rem auto 0;
          width: 40.13rem;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.75rem;
          color: #ffffff;
          line-height: 2.5rem;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }

  .form-container {
    margin-top: -6.25rem;
    padding-bottom: 6.25rem;

    .form {
      width: 43.13rem;
      margin: 0 auto;
      background: #ffffff;
      box-shadow: 0rem 0.63rem 1.88rem 0rem rgba(166, 183, 183, 0.1);
      border-radius: 1.5rem;
      border: 1px solid #e6e6e6;
      box-sizing: border-box;
      padding: 2.5rem 2.19rem;
    }
  }
}
</style>

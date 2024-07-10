<template>
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
<style lang="less" scoped>
.header-container {
  height: 350px;
  min-width: 1200px;
  background: url(/public/images/book-meeting/banner.png) no-repeat center;
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
</style>

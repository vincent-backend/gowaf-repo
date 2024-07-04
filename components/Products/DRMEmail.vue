<template>
  <div class="drm-email-container">
    <div class="drm-email-content-container">
      <div class="left">
        <h3>{{ $t('products.stream.multiDRM.email.title') }}</h3>
        <h3>{{ $t('products.stream.multiDRM.email.subTitle') }}</h3>
        <ul>
          <li
            v-for="(item, index) in $tm('products.stream.multiDRM.email.list')"
            :key="index"
          >
            <img :src="item.icon" :alt="item.content" />
            <p>{{ item.content }}</p>
          </li>
        </ul>
        <p>{{ $t('products.stream.multiDRM.email.content1') }}</p>
        <p>{{ $t('products.stream.multiDRM.email.content2') }}</p>
      </div>
      <div class="right">
        <ProductsDRMEmailForm />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.drm-email-container {
  margin: 0 auto;
  padding: 70px 0;
  width: 100%;
  background: #fafafa;
  .drm-email-content-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 433px;

      h3 {
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      ul {
        margin-top: 40px;
        width: 390px;
        li {
          display: flex;
          margin-bottom: 30px;
          p {
            padding-top: 10px;
            font-family:
              PingFangSC,
              PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #4e4e4e;
            line-height: 20px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-bottom: 30px;
          }
          img {
            width: 60px;
            height: 60px;
            margin-right: 26px;
          }
        }
      }
      > p {
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-bottom: 30px;
      }
    }
    .right {
      width: 598px;
    }
  }
}
</style>

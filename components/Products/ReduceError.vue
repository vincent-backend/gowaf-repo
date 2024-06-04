<template>
  <div class="reduce-error-container">
    <div class="reduce-error page-container">
      <div class="title">{{ $t('products.cdn.safeHop.reduceError.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.safeHop.reduceError.subTitle') }}</div>
      <div class="content">
        <div class="pic-l">
          <div class="title">{{ $t('products.cdn.safeHop.reduceError.picL.title') }}</div>
          <div class="sub-title">{{ $t('products.cdn.safeHop.reduceError.picL.content') }}</div>
        </div>
        <div class="label-1">
          <div class="title">{{ $t('products.cdn.safeHop.reduceError.picRT.title') }}</div>
          <div class="sub-title">{{ $t('products.cdn.safeHop.reduceError.picRT.content') }}</div>
        </div>
        <div class="label-2">
          <div class="title">{{ $t('products.cdn.safeHop.reduceError.picRB.title') }}</div>
          <div class="sub-title">{{ $t('products.cdn.safeHop.reduceError.picRB.content') }}</div>
        </div>
      </div>
      <div class="hint">{{ $t('products.cdn.safeHop.reduceError.hint') }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.reduce-error-container {
  margin-top: 120px;

  .reduce-error {
    width: 874px;

    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin: 20px auto 0;

      width: 604px;


      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.content {
      margin-top: 53px;

      width: 628px;
      height: 354px;
      background: url(/public/images/products/cdn/safe-hop/cdnsafehop_reduce_graph@2x.png) left;
      background-size: 628px 354px;

      position: relative;

      >.pic-l,
      >.label-1,
      >.label-2 {
        position: absolute;

        .title {

          font-weight: 500;
          font-size: 20px;

          line-height: 28px;


        }

        .sub-title {
          margin-top: 10px;



          font-size: 16px;
          color: #4E4E4E;



        }
      }

      >.pic-l {
        left: 78px;
        top: 190px;

        width: 190px;

        text-align: center;
      }

      >.label-1 {
        left: 650px;
        top: 50px;
        width: 300px;
      }

      >.label-2 {
        left: 650px;
        top: 230px;
        width: 300px;
      }
    }

    >.hint {
      margin: 44px auto 0;

      width: 522px;


      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }
  }
}
</style>
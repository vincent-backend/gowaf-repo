<template>
  <div class="get-in-touch-container">
    <div class="get-in-touch page-container">
      <div class="left">
        <div class="title">{{ $t('pricing.cdn.getInTouch.title') }}</div>
        <div class="sub-title">{{ $t('pricing.cdn.getInTouch.subTitle') }}</div>
        <div class="pic"></div>
      </div>
      <div class="right">
        <Form>
          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelFirstName')">
              <FormInput name="first-name" :placeholder="$t('pricing.cdn.getInTouch.form.placeholderFirstName')" />
            </FormItem>

            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelLastName')">
              <FormInput name="last-name" :placeholder="$t('pricing.cdn.getInTouch.form.placeholderLastName')" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelEmail')">
              <FormInput name="email" :placeholder="$t('pricing.cdn.getInTouch.form.placeholderEmail')" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelCompanyName')">
              <FormInput name="company-name" :placeholder="$t('pricing.cdn.getInTouch.form.placeholderCompanyName')" />
            </FormItem>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelPhone')">
              <FormInput name="phone" :placeholder="$t('pricing.cdn.getInTouch.form.placeholderPhone')" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelEstimatedTraffic')">
              <FormInput name="estimated-traffic"
                :placeholder="$t('pricing.cdn.getInTouch.form.placeholderEstimatedTraffic')" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelMessage')">
              <FormTextarea name="message" :placeholder="$t('pricing.cdn.getInTouch.form.placeholderMessage')" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem>
              <FormCheckbox name="agree" value="1">
                <span>{{ $t('pricing.cdn.getInTouch.form.agree') }}</span>
                <a class="agree-link" :href="$t('pricing.cdn.getInTouch.form.agreeHref')">
                  {{ $t('pricing.cdn.getInTouch.form.agreeLink') }}
                </a>
              </FormCheckbox>
            </FormItem>
          </FormRow>

          <div class="btn-container">
            <button type="submit" class="btn-submit">
              {{ $t('pricing.cdn.getInTouch.form.btnSubmit') }}
            </button>
          </div>

          <div class="hint">
            <span class="hint1">{{ $t('pricing.cdn.getInTouch.form.hint1') }}</span>
            <a href="#" class="hint2">{{ $t('pricing.cdn.getInTouch.form.hint2') }}</a>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.get-in-touch-container {
  margin-top: 120px;

  .get-in-touch {
    padding: 50px 0;
    display: flex;

    >.left {
      >.title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      >.sub-title {
        margin-top: 20px;

        width: 320px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4E4E4E;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      >.pic {
        width: 555px;
        height: 518px;
        background: url(/public/images/pricing/cdn/Pricing_CDN_connection_graph.png);
      }
    }

    >.right {
      margin-left: 78px;
      flex: 1;

      .agree-link {
        margin-left: 5px;
        color: #0EBF6A;
      }

      .btn-container {
        margin-top: 14px;

        .btn-submit {
          box-sizing: border-box;

          width: 100%;
          height: 50px;
          background: #FFFFFF;
          border-radius: 25px;
          border: 2px solid #46CF3A;

          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 16px;
          color: #000000;
        }
      }

      .hint {
        margin-top: 6px;

        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #4E4E4E;
        line-height: 20px;
        text-align: center;
        font-style: normal;
        text-transform: none;

        .hint1 {}

        .hint2 {
          margin-left: 6px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
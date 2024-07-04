<template>
<div class="email-form-container">
  <Form>
    <FormRow>
      <FormItem :label="$t('bookMeeting.form.firstName')">
        <FormInput name="first-name" :placeholder="$t('bookMeeting.form.firstNameLabel')" />
      </FormItem>
      <FormItem :label="$t('bookMeeting.form.email')">
        <FormInput name="email" :placeholder="$t('bookMeeting.form.emailLabel')" />
      </FormItem>
    </FormRow>
    <FormRow>
      <FormItem :label="$t('bookMeeting.form.companyName')">
        <FormInput name="company-name" :placeholder="$t('bookMeeting.form.companyNameLabel')" />
      </FormItem>
      <FormItem :label="$t('bookMeeting.form.meetupDate')">
        <FormInput name="meetupDate" :placeholder="$t('bookMeeting.form.meetupDate')" />
      </FormItem>
    </FormRow>
    <FormRow>
      <FormItem :label="$t('bookMeeting.form.phoneNumber')">
        <FormInput name="phone-number" :placeholder="$t('bookMeeting.form.phoneLabel')" />
      </FormItem>
      <FormItem :label="$t('bookMeeting.form.meetWith')">
        <FormInput name="meet-with" :placeholder="$t('bookMeeting.form.meetWithLabel')" />
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
        {{ $t('bookMeeting.form.btn') }}
      </button>
    </div>
  </Form>
</div>
</template>

<style lang="less" scoped>
    .email-form-container {
      width: 598px;
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
</style>
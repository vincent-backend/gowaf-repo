<template>
  <div class="email-form-container">
    <Form>
      <FormRow>
        <FormItem :label="$t('bookMeeting.form.firstName')">
          <FormInput
            name="first-name"
            :placeholder="$t('bookMeeting.form.firstNameLabel')"
          />
        </FormItem>
        <FormItem :label="$t('bookMeeting.form.email')">
          <FormInput
            name="email"
            :placeholder="$t('bookMeeting.form.emailLabel')"
          />
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem :label="$t('bookMeeting.form.companyName')">
          <FormInput
            name="company-name"
            :placeholder="$t('bookMeeting.form.companyNameLabel')"
          />
        </FormItem>
        <FormItem :label="$t('bookMeeting.form.meetupDate')">
          <FormInput
            name="meetupDate"
            :placeholder="$t('bookMeeting.form.meetupDate')"
          />
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem :label="$t('bookMeeting.form.phoneNumber')">
          <FormInput
            name="phone-number"
            :placeholder="$t('bookMeeting.form.phoneLabel')"
          />
        </FormItem>
        <FormItem :label="$t('bookMeeting.form.meetWith')">
          <FormInput
            name="meet-with"
            :placeholder="$t('bookMeeting.form.meetWithLabel')"
          />
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem :label="$t('pricing.cdn.getInTouch.form.labelMessage')">
          <FormTextarea
            name="message"
            :placeholder="$t('pricing.cdn.getInTouch.form.placeholderMessage')"
          />
        </FormItem>
      </FormRow>

      <FormRow>
        <FormItem>
          <FormCheckbox name="agree" value="1">
            <span>{{ $t('pricing.cdn.getInTouch.form.agree') }}</span>
            <NuxtLinkLocale class="agree-link" href="#">
              {{ $t('pricing.cdn.getInTouch.form.agreeLink') }}
            </NuxtLinkLocale>
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
    color: #0ebf6a;
  }

  .btn-container {
    margin-top: 14px;

    .btn-submit {
      box-sizing: border-box;

      width: 100%;
      height: 50px;
      background: #ffffff;
      border-radius: 25px;
      border: 2px solid #46cf3a;

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
    color: #4e4e4e;
    line-height: 20px;
    text-align: center;
    font-style: normal;
    text-transform: none;

    .hint1 {
    }

    .hint2 {
      margin-left: 6px;
      text-decoration: underline;
    }
  }
}
@media (max-width: 767px) {
  .email-form-container {
    width: 100%;
    flex: 1;
    .agree-link {
      margin-left: 1rem;
      color: #0ebf6a;
    }

    .btn-container {
      margin-top: 3rem;

      .btn-submit {
        box-sizing: border-box;

        width: 100%;
        height: 4.63rem;
        background: #ffffff;
        border-radius: 2.31rem;
        border: 0.13rem solid #46cf3a;

        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 1.63rem;
        color: #000000;
      }
    }

    .hint {
      margin-top: 1.88rem;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.63rem;
      color: #4e4e4e;
      line-height: 2.31rem;
      text-align: center;
      font-style: normal;
      text-transform: none;

      .hint1 {
      }

      .hint2 {
        margin-left: 1rem;
        text-decoration: underline;
      }
    }
  }
}
</style>

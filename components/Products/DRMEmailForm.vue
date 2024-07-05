<template>
  <div class="email-form-container">
    <Form>
      <FormRow>
        <LgOnly>
          <FormItem
            :label="$t('products.stream.multiDRM.email.form.firstName')"
          >
            <FormInput
              name="first-name"
              :placeholder="
                $t('products.stream.multiDRM.email.form.firstNameLabel')
              "
            />
          </FormItem>
          <FormItem :label="$t('products.stream.multiDRM.email.form.lastName')">
            <FormInput
              name="last-name"
              :placeholder="
                $t('products.stream.multiDRM.email.form.lastNameLabel')
              "
            />
          </FormItem>
        </LgOnly>
        <XsOnly>
          <div class="flex-row">
            <FormItem
              :label="$t('products.stream.multiDRM.email.form.firstName')"
            >
              <FormInput
                name="first-name"
                :placeholder="
                  $t('products.stream.multiDRM.email.form.firstNameLabel')
                "
              />
            </FormItem>
            <FormItem
              :label="$t('products.stream.multiDRM.email.form.lastName')"
            >
              <FormInput
                name="last-name"
                :placeholder="
                  $t('products.stream.multiDRM.email.form.lastNameLabel')
                "
              />
            </FormItem>
          </div>
        </XsOnly>
      </FormRow>
      <FormRow>
        <FormItem
          :label="$t('products.stream.multiDRM.email.form.companyName')"
        >
          <FormInput
            name="company-name"
            :placeholder="
              $t('products.stream.multiDRM.email.form.companyNameLabel')
            "
          />
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem :label="$t('products.stream.multiDRM.email.form.email')">
          <FormInput
            name="email"
            :placeholder="$t('products.stream.multiDRM.email.form.emailLabel')"
          />
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem :label="$t('products.stream.multiDRM.email.form.phone')">
          <FormInput
            name="phone"
            :placeholder="$t('products.stream.multiDRM.email.form.phoneLabel')"
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
            <a
              class="agree-link"
              :href="$t('pricing.cdn.getInTouch.form.agreeHref')"
            >
              {{ $t('pricing.cdn.getInTouch.form.agreeLink') }}
            </a>
          </FormCheckbox>
        </FormItem>
      </FormRow>

      <div class="btn-container">
        <button type="submit" class="btn-submit">
          {{ $t('products.stream.multiDRM.email.form.btn') }}
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
    .flex-row{
      display: flex;
      width: 100%;
      gap: 1rem;
    }
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
}
</style>

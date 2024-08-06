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
              <FormInput
                name="first-name"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderFirstName')
                "
              />
            </FormItem>

            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelLastName')">
              <FormInput
                name="last-name"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderLastName')
                "
              />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelEmail')">
              <FormInput
                name="email"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderEmail')
                "
              />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem
              :label="$t('pricing.cdn.getInTouch.form.labelCompanyName')"
            >
              <FormInput
                name="company-name"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderCompanyName')
                "
              />
            </FormItem>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelPhone')">
              <FormInput
                name="phone"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderPhone')
                "
              />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem
              :label="$t('pricing.cdn.getInTouch.form.labelEstimatedTraffic')"
            >
              <FormInput
                name="estimated-traffic"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderEstimatedTraffic')
                "
              />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem :label="$t('pricing.cdn.getInTouch.form.labelMessage')">
              <FormTextarea
                name="message"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderMessage')
                "
              />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem>
              <FormCheckbox name="agree" value="1">
                <span>{{ $t('pricing.cdn.getInTouch.form.agree') }}</span>
                <NuxtLink
                  class="agree-link"
                  href="#"
                >
                  {{ $t('pricing.cdn.getInTouch.form.agreeLink') }}
                </NuxtLink>
              </FormCheckbox>
            </FormItem>
          </FormRow>

          <div class="btn-container">
            <button type="submit" class="btn-submit">
              {{ $t('pricing.cdn.getInTouch.form.btnSubmit') }}
            </button>
          </div>
        </Form>

        <div class="hint">
          <span class="hint1">{{
            $t('pricing.cdn.getInTouch.form.hint1')
          }}</span>
          <NuxtLink href="#" class="hint2">{{
            $t('pricing.cdn.getInTouch.form.hint2')
          }}</NuxtLink>
        </div>
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

    > .left {
      > .title {
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
      }

      > .sub-title {
        margin-top: 20px;

        width: 320px;
        font-size: 16px;
        color: #4e4e4e;
      }

      > .pic {
        width: 555px;
        height: 518px;
        background: url(/public/images/pricing/cdn/Pricing_CDN_connection_graph.png);
      }
    }

    > .right {
      margin-left: 78px;
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
        }
      }

      .hint {
        margin-top: 6px;

        color: #4e4e4e;
        line-height: 20px;
        text-align: center;

        .hint1 {
        }

        .hint2 {
          margin-left: 6px;
          text-decoration: underline;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .get-in-touch-container {
    margin-top: 3.13rem;

    .get-in-touch {
      padding: 0;
      flex-direction: column;

      > .left {
        > .title {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        > .sub-title {
          margin-top: 1rem;

          font-size: 1.75rem;
          line-height: 2.38rem;
        }

        > .pic {
          margin: 3.13rem auto 0;

          width: 34.69rem;
          height: 32.38rem;
        }
      }

      > .right {
        margin-left: 0;
        margin-top: 4.13rem;

        .agree-link {
        }

        .btn-container {
          .btn-submit {
          }
        }

        .hint {
          margin-top: 1.25rem;

          font-size: 1.63rem;
          line-height: 2.31rem;

          .hint1 {
          }

          .hint2 {
          }
        }
      }
    }
  }
}
</style>

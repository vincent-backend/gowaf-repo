<template>
  <div class="form-container">
    <div class="page-container my-form">
      <div class="list-container">
        <ul>
          <li
            v-for="(item, index) in $tm('resources.contactUs.list')"
            :key="index"
          >
            <img :src="item.icon" :alt="item.title" />
            <div class="content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.subTitle }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="form-contact-container">
        <div class="email-form-container">
          <Form>
            <FormRow>
              <FormItem :label="$t('resources.contactUs.form.firstName')">
                <FormInput
                  name="first-name"
                  :placeholder="$t('resources.contactUs.form.firstNameLabel')"
                />
              </FormItem>
              <FormItem :label="$t('resources.contactUs.form.lastName')">
                <FormInput
                  name="email"
                  :placeholder="$t('resources.contactUs.form.lastNameLabel')"
                />
              </FormItem>
            </FormRow>
            <FormRow>
              <FormItem :label="$t('resources.contactUs.form.email')">
                <FormInput
                  name="email"
                  :placeholder="$t('resources.contactUs.form.emailLabel')"
                />
              </FormItem>
              <FormItem :label="$t('resources.contactUs.form.info')">
                <FormInput
                  name="info"
                  :placeholder="$t('resources.contactUs.form.infoLabel')"
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
                {{ $t('resources.contactUs.form.btn') }}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.form-container {
  margin-top: -70px;
  .list-container {
    margin: 0 auto 50px auto;
    width: 1100px;
    height: 256px;
    border-bottom: 1px solid #e6e6e6;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 80px;
      li {
        text-align: center;
        width: 206px;
        img {
          width: 100px;
          height: 100px;
          display: block;
          margin: 0 auto 20px auto;
        }
        h3 {
          font-weight: 500;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: center;
          font-style: normal;
          text-transform: none;
          padding-bottom: 10px;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: center;
          font-style: normal;
          text-transform: none;
          padding: 0 2px;
        }
      }
    }
  }
  .form-contact-container {
    padding: 0 250px;
  }
  .my-form {
    width: 1200px;
    margin: 0 auto 50px auto;
    background: #ffffff;
    box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
    border-radius: 24px;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 50px 50px;
  }
}
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
  .form-container {
    margin-top: -1.88rem;
    .list-container {
      margin: 0 auto 1.88rem auto;
      width: 100%;
      height: fit-content;
      border-bottom: 1px solid #e6e6e6;
      ul {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 2.38rem;
        padding: 0 0 1.88rem 0;
        li {
          text-align: center;
          width: 100%;
          display: flex;
          align-items: center;
          .content{
            display: flex;
            flex-direction: column;
          }
          img {
            width: 9.38rem;
            height: 9.38rem;
            display: block;
            margin: 0;
          }
          h3 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 1.88rem;
            color: #000000;
            line-height: 2.63rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding: 0;
          }
          p {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.63rem;
            color: #4e4e4e;
            line-height: 2.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
    .form-contact-container {
      padding: 0;
    }
    .my-form {
      width: 43.13rem;
      height: fit-content;
      background: #ffffff;
      box-shadow: 0rem 0.63rem 1.88rem 0rem rgba(166, 183, 183, 0.1);
      border-radius: 1.5rem;
      border: 0.06rem solid #e6e6e6;
      box-sizing: border-box;
      padding: 2.5rem 1.25rem;
      display: flex;
      flex-direction: column;
    }
  }
  .email-form-container {
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    padding: 0 1.88rem;
    .agree-link {
      margin-left: 0.88rem;
      color: #0ebf6a;
    }

    .btn-container {
      width: 100%;
      margin-top: 3.13rem;

      .btn-submit {
        box-sizing: border-box;
        width: 100%;
        height: 4.63rem;
        text-align: center;
        background: #ffffff;
        border-radius: 2.31rem;
        border: 0.13rem solid rgba(70, 207, 58, 1);
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 1.63rem;
        color: #000000;
        line-height: 2.13rem;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>

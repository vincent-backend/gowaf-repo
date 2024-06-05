<template>
  <footer class="footer-1-container">
    <div class="page-container footer-1">
      <div class="left">
        <div class="title">
          {{ $t('footer.footer1.title') }}
        </div>
        <div class="content">
          {{ $t('footer.footer1.content') }}
        </div>
      </div>
      <div class="right">
        <div class="btn-container">
          <a href="#" class="btn">
            {{ $t('footer.footer1.btn') }}
          </a>
        </div>
        <div class="btn-hint">
          {{ $t('footer.footer1.hint') }}
        </div>
      </div>
    </div>
  </footer>
  <footer class="footer-2-container">
    <div class="page-container footer-2">
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <div class="content">
        <div class="left">
          <div class="hot-links">
            <a v-for="item in $tm('footer.footer2.hotlinks')" :href="item.link" class="link">
              {{ item.label }}
            </a>
          </div>
          <div class="shortcuts-container">
            <dl class="shortcuts" v-for="item in $tm('footer.footer2.shortcuts')">
              <dt>{{ item.title }}</dt>
              <dd v-for="item2 in item.items">
                <a :href="item2.href">{{ item2.label }}</a>
              </dd>
            </dl>
          </div>
          <Line top="70px" />
          <div class="links">
            <a v-for="item in $tm('footer.footer2.links')" :href="item.link">
              {{ item.label }}
            </a>
          </div>
          <div class="copyright">
            {{ $t('footer.footer2.copyright') }}
          </div>
        </div>
        <div class="right">
          <div class="section-1">
            <div class="title">
              {{ $t('footer.footer2.section1Title') }}
            </div>
            <div class="content">
              <div class="sub-title">
                {{ $t('footer.footer2.section1Content') }}
              </div>
              <div class="contacts">
                <a href="#" class="contact">
                  <span class="icon icon-email"></span>
                  sales@Polyfill
                </a>
                <a href="#" class="contact">
                  <span class="icon icon-phone"></span>
                  +1-339-300-4270
                </a>
              </div>
              <div class="btn-container">
                <a href="#" class="trail-btn" style="margin-top: 40px;">Contact Sales</a>
              </div>
            </div>
          </div>
          <div class="section-2">
            <div class="title">
              {{ $t('footer.footer2.section2Title') }}
            </div>
            <div class="content">
              <div class="sub-title">
                {{ $t('footer.footer2.section2Content') }}
              </div>
              <div class="social-icons">
                <a href="#" class="social-icon social-icon-1"></a>
                <a href="#" class="social-icon social-icon-2"></a>
                <a href="#" class="social-icon social-icon-3"></a>
              </div>
            </div>
          </div>
          <div class="section-3">
            {{ $t('footer.footer2.section3') }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="less" scoped>
.footer-1-container {
  margin-top: 120px;
  background: linear-gradient(316deg, #3475F5 0%, #12E599 100%);
  height: 190px;

  .footer-1 {
    height: 100%;
    background: url(/public/images/home/home_bot_banner_bg_dot.png) no-repeat left center;
    background-size: 1018px 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      .title {
        font-weight: 500;
        font-size: 30px;
        color: #FFFFFF;
        line-height: 42px;
      }

      .content {
        margin-top: 10px;

        font-size: 16px;
        color: #FFFFFF;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .btn-container {
        .btn {
          display: flex;
          width: 174px;
          height: 50px;
          background: #FFFFFF;
          border-radius: 25px;
          align-items: center;
          justify-content: center;
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 16px;
          line-height: 21px;
        }
      }

      .btn-hint {
        margin-top: 13px;

        font-size: 12px;
        color: #FFFFFF;
        line-height: 17px;
        opacity: .7;
      }
    }
  }
}

.footer-2-container {
  .footer-2 {
    .logo-container {
      padding: 30px 0;

      .logo {
        width: 112px;
        height: 32px;
        background: url(/public/images/home/logo2.png) no-repeat;
      }
    }

    >.content {
      display: flex;
      justify-content: space-between;

      >.left {
        .hot-links {
          display: flex;
          justify-content: flex-start;
          gap: 30px;

          .link {
            color: #4E4E4E;
            line-height: 20px;
          }
        }

        .shortcuts-container {
          margin-top: 50px;
          display: flex;
          justify-content: flex-start;
          gap: 90px;

          .shortcuts {
            dt {
              margin-bottom: 14px;

              font-weight: 500;
              line-height: 20px;
            }

            dd {
              margin-top: 10px;

              a {
                color: #4E4E4E;
                line-height: 20px;
              }
            }
          }
        }

        .links {
          margin-top: 30px;
          display: flex;
          align-items: flex-start;
          gap: 30px;

          a {
            color: #4E4E4E;
            line-height: 20px;
          }
        }

        .copyright {
          margin-top: 10px;

          color: #4E4E4E;
          line-height: 20px;
        }
      }

      >.right {
        width: 400px;

        .section-1 {
          >.title {
            font-weight: 500;
            line-height: 20px;
          }

          >.content {
            .sub-title {
              margin-top: 14px;

              color: #4E4E4E;
              line-height: 20px;
            }

            .contacts {
              margin-top: 14px;
              display: flex;
              gap: 30px;

              .contact {
                font-size: 16px;
                color: #3CCF87;
                line-height: 22px;
                display: flex;

                .icon {
                  width: 24px;
                  height: 24px;
                  margin-right: 10px;

                  &.icon-email {
                    background: url(/public/images/home/bot_ic_email.png) no-repeat;
                  }

                  &.icon-phone {
                    background: url(/public/images/home/bot_ic_phone.png) no-repeat;
                  }
                }
              }
            }

            .btn-container {}
          }
        }

        .section-2 {
          margin-top: 60px;

          .title {
            font-weight: 500;

            line-height: 20px;
          }

          .content {
            .sub-title {
              margin-top: 14px;

              color: #4E4E4E;
              line-height: 20px;
            }

            .social-icons {
              margin-top: 14px;
              display: flex;
              gap: 24px;

              .social-icon {
                width: 24px;
                height: 24px;

                &.social-icon-1 {
                  background: url(/public/images/home/bot_logo_twitter.png) no-repeat;
                }

                &.social-icon-2 {
                  background: url(/public/images/home/bot_logo_face.png) no-repeat;
                }

                &.social-icon-3 {
                  background: url(/public/images/home/nav_logo_in.png) no-repeat;
                }
              }
            }
          }
        }

        .section-3 {
          margin-top: 30px;

          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
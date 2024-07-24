<script lang="ts" setup>
withDefaults(
  defineProps<{
    isShowBanner: boolean;
    type?: {
      page: string;
    };
    showFoot?: boolean;
    showbotFoot?: boolean;
  }>(),
  {
    showFoot: true,
    isShowBanner: true,
    showbotFoot: true
  }
);
</script>
<template>
  <footer
    class="footer-1-container"
    v-if="isShowBanner"
    :style="{ marginTop: type && type.page == 'about' ? 0 : '10px' }"
  >
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
  <footer v-if="showbotFoot" class="footer-2-container">
    <div class="page-container footer-2">
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <div class="content">
        <div class="left">
          <div class="hot-links">
            <a
              v-for="item in $tm('footer.footer2.hotlinks')"
              :href="item.link"
              class="link"
            >
              {{ item.label }}
            </a>
          </div>
          <div class="shortcuts-container">
            <dl
              class="shortcuts"
              v-for="item in $tm('footer.footer2.shortcuts')"
            >
              <dt>{{ item.title }}</dt>
              <dd v-for="item2 in item.items">
                <a :href="item2.href">{{ item2.label }}</a>
              </dd>
            </dl>
          </div>
          <Line top="70px" m-top="3.13rem" />

          <!-- laptop only -->
          <LgOnly>
            <div class="links">
              <a v-for="item in $tm('footer.footer2.links')" :href="item.link">
                {{ item.label }}
              </a>
            </div>
            <div class="copyright">
              {{ $t('footer.footer2.copyright') }}
            </div>
          </LgOnly>
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
                <a href="#" class="trail-btn">Contact Sales</a>
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

          <!-- mobile only -->
          <XsOnly>
            <Line top="0" m-top="3.13rem" />
            <div class="links">
              <a v-for="item in $tm('footer.footer2.links')" :href="item.link">
                {{ item.label }}
              </a>
            </div>
            <div class="copyright">
              {{ $t('footer.footer2.copyright') }}
            </div>
          </XsOnly>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="less" scoped>
.footer-1-container {
  margin-top: 120px;
  background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
  height: 190px;

  .footer-1 {
    height: 100%;
    background: url(/public/images/home/home_bot_banner_bg_dot@2x.png) no-repeat
      left center;
    background-size: 1018px 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      .title {
        font-weight: 500;
        font-size: 30px;
        color: #ffffff;
        line-height: 42px;
      }

      .content {
        margin-top: 10px;

        font-size: 16px;
        color: #ffffff;
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
          background: #ffffff;
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
        color: #ffffff;
        line-height: 17px;
        opacity: 0.7;
      }
    }
  }
}

.footer-2-container {
  padding-bottom: 43px;
  background: #ffffff;
  .footer-2 {
    .logo-container {
      padding: 30px 0;

      .logo {
        width: 114px;
        height: 44px;
        background: url(/public/images/home/Gowaf_logo+文字.png) no-repeat;
      }
    }

    > .content {
      display: flex;
      justify-content: space-between;

      > .left {
        .hot-links {
          display: flex;
          justify-content: flex-start;
          gap: 30px;

          .link {
            color: #4e4e4e;
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
                color: #4e4e4e;
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
            color: #4e4e4e;
            line-height: 20px;
          }
        }

        .copyright {
          margin-top: 10px;

          color: #4e4e4e;
          line-height: 20px;
        }
      }

      > .right {
        width: 400px;

        .section-1 {
          > .title {
            font-weight: 500;
            line-height: 20px;
          }

          > .content {
            .sub-title {
              margin-top: 14px;

              color: #4e4e4e;
              line-height: 20px;
            }

            .contacts {
              margin-top: 14px;
              display: flex;
              align-items: center;
              gap: 30px;

              .contact {
                font-size: 16px;
                color: #3ccf87;
                line-height: 22px;
                display: flex;

                .icon {
                  width: 24px;
                  height: 24px;
                  margin-right: 10px;

                  &.icon-email {
                    background: url(/public/images/home/bot_ic_email@2x.png)
                      no-repeat;
                  }

                  &.icon-phone {
                    background: url(/public/images/home/bot_ic_phone@2x.png)
                      no-repeat;
                  }
                }
              }
            }

            .btn-container {
              margin-top: 40px;
            }
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

              color: #4e4e4e;
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
                  background: url(/public/images/home/bot_logo_twitter@2x.png)
                    no-repeat;
                }

                &.social-icon-2 {
                  background: url(/public/images/home/bot_logo_face@2x.png)
                    no-repeat;
                }

                &.social-icon-3 {
                  background: url(/public/images/home/nav_logo_in@2x.png)
                    no-repeat;
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

// For mobile devices
@media (max-width: 767px) {
  .footer-1-container {
    margin-top: 6.25rem;

    height: 26rem;

    .footer-1 {
      flex-direction: column;
      justify-content: center;

      .left {
        .title {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        .content {
          margin-top: 1.25rem;

          font-size: 1.63rem;
          line-height: 2.38rem;
        }
      }

      .right {
        margin-top: 2.5rem;

        align-items: flex-start;

        .btn-container {
          .btn {
            width: auto;
            height: auto;
            padding: 1.25rem 1.63rem;
            font-size: 1.63rem;
            line-height: 2.13rem;
          }
        }

        .btn-hint {
          margin-top: 0.63rem;

          font-size: 1.38rem;
          line-height: 1.88rem;
        }
      }
    }
  }

  .footer-2-container {
    .footer-2 {
      .logo-container {
        padding: 0;
        padding-top: 3.75rem;

        .logo {
          width: 10.69rem;
          height: 4.13rem;
          background: url(/public/images/home/Gowaf_logo+文字.png) no-repeat;
        }
      }

      > .content {
        flex-direction: column;
        justify-content: flex-start;

        > .left {
          .hot-links {
            margin-top: 1.81rem;
            flex-wrap: wrap;
            gap: 1.25rem 2.5rem;

            .link {
            }
          }

          .shortcuts-container {
            margin-top: 3.13rem;
            justify-content: space-between;
            gap: 0;

            .shortcuts {
              flex: 1;
              gap: 1.25rem;

              dt {
                margin-bottom: 1.25rem;

                font-size: 1.5rem;
              }

              dd {
                margin-top: 1.25rem;

                a {
                  font-size: 1.5rem;
                }
              }
            }
          }

          .links {
            a {
            }
          }

          .copyright {
          }
        }

        > .right {
          margin-top: 3.13rem;

          width: 100%;

          .section-1 {
            > .title {
              font-size: 1.5rem;
              line-height: 2.06rem;
            }

            > .content {
              .sub-title {
                margin-top: 0.63rem;

                font-size: 1.5rem;
                line-height: 2.06rem;
              }

              .contacts {
                margin-top: 1.25rem;
                gap: 4.38rem;

                .contact {
                  font-size: 1.63rem;
                  line-height: 2.31rem;

                  .icon {
                    width: 2.25rem;
                    height: 2.25rem;
                    margin-right: 0.63rem;

                    &.icon-email {
                    }

                    &.icon-phone {
                    }
                  }
                }
              }

              .btn-container {
                margin-top: 1.88rem;
              }
            }
          }

          .section-2 {
            margin-top: 3.13rem;

            .title {
              font-size: 1.5rem;
              line-height: 2.06rem;
            }

            .content {
              .sub-title {
                margin-top: 0.63rem;

                font-size: 1.5rem;
                line-height: 2.13rem;
              }

              .social-icons {
                margin-top: 1.25rem;
                gap: 2.25rem;

                .social-icon {
                  width: 2.25rem;
                  height: 2.25rem;

                  &.social-icon-1 {
                    background: url(/public/mobile-images/home/bot_logo_twitter@2x.png)
                      no-repeat;
                  }

                  &.social-icon-2 {
                    background: url(/public/mobile-images/home/bot_logo_face@2x.png)
                      no-repeat;
                  }

                  &.social-icon-3 {
                    background: url(/public/mobile-images/home/nav_logo_in@2x.png)
                      no-repeat;
                  }
                }
              }
            }
          }

          .section-3 {
            margin-top: 1.88rem;

            font-size: 1.88rem;
            line-height: 2.63rem;
          }

          > .links {
            margin-top: 3.13rem;

            display: flex;
            flex-wrap: wrap;
            gap: 1.25rem 3.13rem;

            a {
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 2.06rem;
            }
          }

          > .copyright {
            margin-top: 1.88rem;

            font-size: 1.5rem;
            color: #4e4e4e;
            line-height: 2.06rem;
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>

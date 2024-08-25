<script lang="ts" setup>
withDefaults(
  defineProps<{
    isShowBanner?: boolean;
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

const { t } = useI18n();
const i18ntext = computed(() => {
  return {
    hotlinks: [
      {
        label: t('iel4wvDVxDtYpCp0Kmj0c'),
        link: '/resources/about'
      },
      {
        label: t('Z8_dfRA8k0ubujjwt9aub'),
        link: '/resources/blog'
      },
      {
        label: t('resources.careers.header.preTitle'),
        link: '/resources/careers'
      },
      {
        label: t('resources.breadCrumbs.caseStudies'),
        link: '/resources/caseStudiesDetails'
      },
      {
        label: t('J2qqgq-Hiv84l1lFqK2ay'),
        link: '/AffiliateProgram'
      }
    ],
    shortcuts: [
      {
        title: t('header.menus.products'),
        items: [
          {
            label: t('products.cdn.breadCrumbs.gowaf'),
            href: '/Products/Cdn/Overview'
          },
          {
            label: t('products.optimizer.overview.header.preTitle'),
            href: '/Products/optimizer/Overview'
          },
          {
            label: t('products.storage.BouuyStorage.header.preTitle'),
            href: '/Products/Storage/Asia'
          },
          {
            label: t('products.stream.overview.header.preTitle'),
            href: '/Products/Stream/Overview'
          },
          {
            label: t('products.DNS.multiDRM.header.preTitle'),
            href: '/Products/Cdn/Overview'
          }
        ]
      },
      {
        title: t('eV9_CH_QH2k9pszEVQmz0'),
        items: [
          {
            label: t('aVsg8L3Z9Y5IbfjwP5CtV'),
            href: '/Network/Overview'
          },
          {
            label: t('05n379hA1Mgm8myY0n37B'),
            href: '/Products/Cdn/Features'
          },
          {
            label: t('HN1RxYCLGJ5DawUit6GYr'),
            href: '/Network/Tools'
          },
          {
            label: t('aPb8E6Yk7hQYmz9MvnLzp'),
            href: '#'
          },
          {
            label: t('xpt836mV8sUbNb_V6wctW'),
            href: '#'
          }
        ]
      },
      {
        title: t('DatncyiDVR-hTrqFFKx4v'),
        items: [
          {
            label: 'SLA',
            href: '/SLA'
          },
          {
            label: t('3kl0FglXxLti4w6lNs80V'),
            href: '/SupportHUB'
          },
          {
            label: t('DdqZuHF6WD_99dzH8-o_q'),
            href: '/BookMeeting'
          },
          {
            label: t('vGM6PVGty61xM9JUR-fOS'),
            href: '#'
          },
          {
            label: 'hello@Gowaf.net',
            key: 'email',
            href: '#'
          }
        ]
      }
    ],
    links: [
      {
        label: t('-6YVE_WEiVr9F14y2Y1fH'),
        link: '/tos'
      },
      {
        label: t('d92bjdYH9U7f3wxcYguP3'),
        link: '/acceptableUse'
      },
      {
        label: 'GDPR',
        link: '/GDPR'
      },
      {
        label: t('-acsM5DRwC1wi7mvWm-pG'),
        link: '/privacy'
      },
      {
        label: t('bHKl1j8fqOHjWwujqTFRg'),
        link: '/abuse'
      }
    ]
  };
});
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
          <NuxtLinkLocale class="btn">
            {{ $t('footer.footer1.btn') }}
          </NuxtLinkLocale>
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
            <NuxtLinkLocale
              v-for="item in i18ntext.hotlinks"
              :to="item.link"
              class="link"
            >
              {{ item.label }}
            </NuxtLinkLocale>
          </div>
          <div class="shortcuts-container">
            <dl class="shortcuts" v-for="item in i18ntext.shortcuts">
              <dt>{{ item.title }}</dt>
              <dd v-for="item2 in item.items">
                <NuxtLinkLocale :to="item2.href">
                  <img
                    v-if="item2.key && item2.key == 'email'"
                    src="/images/home/bot_ic_email_2@2x.png"
                    class="img"
                    alt=""
                    srcset=""
                  />
                  {{ item2.label }}
                </NuxtLinkLocale>
              </dd>
            </dl>
          </div>
          <Line top="70px" m-top="3.13rem" />

          <!-- laptop only -->
          <LgOnly>
            <div class="links">
              <NuxtLinkLocale v-for="item in i18ntext.links" :to="item.link">
                {{ item.label }}
              </NuxtLinkLocale>
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
                <NuxtLinkLocale class="contact">
                  <span class="icon icon-email"></span>
                  sales@Gowaf
                </NuxtLinkLocale>
                <NuxtLinkLocale class="contact">
                  <span class="icon icon-phone"></span>
                  +1-339-300-4270
                </NuxtLinkLocale>
              </div>
              <div class="btn-container">
                <NuxtLinkLocale class="trail-btn" to="/ContactSales">{{
                  $t('resources.caseStudiesDetailsEskimi.header.btn')
                }}</NuxtLinkLocale>
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
                <NuxtLinkLocale
                  class="social-icon social-icon-1"
                ></NuxtLinkLocale>
                <NuxtLinkLocale
                  class="social-icon social-icon-2"
                ></NuxtLinkLocale>
                <NuxtLinkLocale
                  class="social-icon social-icon-3"
                ></NuxtLinkLocale>
              </div>
            </div>
          </div>
          <div class="section-3">
            {{ $t('footer.footer2.section3') }}
          </div>
          <XsOnly>
            <Line top="0" m-top="3.13rem" />
            <div class="links">
              <NuxtLinkLocale v-for="item in i18ntext.links" :to="item.link">
                {{ item.label }}
              </NuxtLinkLocale>
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
    background: url('/images/home/home_bot_banner_bg_dot@2x.png') no-repeat left
      center;
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
        background: url('/images/home/Gowaf_logo+文字.png') no-repeat;
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
            .img {
              width: 16px;
              height: 16px;
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
          color: rgba(78, 78, 78, 0.5);
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
                    background: url('/images/home/bot_ic_email@2x.png') no-repeat;
                  }

                  &.icon-phone {
                    background: url('/images/home/bot_ic_phone@2x.png') no-repeat;
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
                  background: url('/images/home/bot_logo_twitter@2x.png')
                    no-repeat;
                }

                &.social-icon-2 {
                  background: url('/images/home/bot_logo_face@2x.png') no-repeat;
                }

                &.social-icon-3 {
                  background: url('/images/home/nav_logo_in@2x.png') no-repeat;
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
      align-items: flex-start;

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
          background: url('/images/home/Gowaf_logo+文字.png') no-repeat;
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
                font-weight: 600;
              }

              dd {
                margin-top: 1.25rem;
                a {
                  font-size: 1.5rem;
                }
              }
              .img {
                width: 1.5rem;
                height: 1.5rem;
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
              font-weight: 600;
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
              font-weight: 600;
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
                    background: url('/mobile-images/home/bot_logo_twitter@2x.png')
                      no-repeat;
                  }

                  &.social-icon-2 {
                    background: url('/mobile-images/home/bot_logo_face@2x.png')
                      no-repeat;
                  }

                  &.social-icon-3 {
                    background: url('/mobile-images/home/nav_logo_in@2x.png')
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
            color: rgba(78, 78, 78, 0.5);
            line-height: 2.06rem;
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
const { t } = useI18n();
const props = defineProps({
  title: String,
  subTitle: String
});
const i18ntext = computed<any>(() => {
  return [
    {
      header: t('B4-PpmwOgSVHRRxvI7xQX'),
      icon1:
        '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_time@2x.png',
      number: '2.5',
      unit: 'seconds',
      label: t('pjTHlPsa1vh-YZNwBSabl'),
      icon2:
        '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_graph_left@2x.png',
      content: t('wHeR4zoOjmGOLcjnYQX0v')
    },
    {
      header: t('MRQmJFZanR8PEOzbUERR9'),
      icon1:
        '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_time2@2x.png',
      number: '0.7',
      unit: 'seconds',
      label: t('PgjQbHtE77ZqmhJXjW1Kg'),
      icon2:
        '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_graph_right@2x.png',
      content: t('LSQmpudJqzUU-kFaI4KI9')
    }
  ];
});
</script>

<template>
  <div class="closer-to-user-container">
    <div class="closer-to-user page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div class="list">
        <div
          class="item"
          :class="[`item-${index}`]"
          v-for="(item, index) in i18ntext"
        >
          <div class="header">{{ item.header }}</div>
          <div class="head">
            <div
              
            >
            <img class="icon-1" :src="item.icon1" />
          </div>
            <div class="time-container">
              <div class="time">{{ item.number }}</div>
              <div class="right">
                <div class="unit">{{ item.unit }}</div>
                <div class="label">{{ item.label }}</div>
              </div>
            </div>
            <div
               
            >
            <img class="icon-2"  :src="item.icon2" />
          </div>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.closer-to-user-container {
  margin-top: 120px;

  .closer-to-user {
    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .list {
      margin-top: 80px;

      display: flex;
      gap: 20px;

      background: #ffffff;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;

      box-sizing: border-box;
      padding: 20px;

      > .item {
        height: 360px;
        background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);
        border-radius: 14px;
        box-sizing: border-box;
        position: relative;
        padding: 20px;
        padding-top: 74px;

        .header {
          position: absolute;
          height: 54px;
          width: 100%;
          left: 0;
          top: 0;
          border-radius: 14px 14px 0px 0px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 500;
          font-size: 22px;
          color: #ffffff;
          line-height: 30px;
        }

        .head {
          width: 530px;
          height: 122px;
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          align-items: center;

          .icon-1 {
            margin-left: 14px;
            width: 60px;
            height: 60px;
          }

          .time-container {
            margin-left: 16px;
            flex: 1;
            display: flex;
            align-items: center;

            .time {
              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 48px;

              line-height: 64px;
            }

            .right {
              margin-left: 15px;
              display: flex;
              flex-direction: column;
              justify-content: center;

              .unit {
                font-weight: 500;
                font-size: 24px;

                line-height: 33px;
              }

              .label {
                font-size: 16px;
                color: #4e4e4e;
              }
            }
          }

          .icon-2 {
            width: 144px;
            height: 122px;
          }
        }

        .content {
          margin-top: 20px;
          padding-right: 30px;

          font-size: 16px;
          color: #4e4e4e;
        }

        &.item-0 {
          background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);

          .header {
            background: #292929;
          }
        }

        &.item-1 {
          background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);

          .header {
            background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
          }
        }
      }
    }
  }
}
// For mobile devices
@media (max-width: 767px) {
  .closer-to-user-container {
    margin-top: 6.25rem;

    .closer-to-user {
      > .title {
        font-weight: 500;
        font-size: 2.25rem;

        line-height: 42px;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .list {
        margin-top: 3.13rem;
        flex-direction: column;
        display: flex;
        gap: 1.3rem;

        background: #ffffff;
        box-shadow: 0rem 0rem 1.88rem 0rem rgba(173, 173, 173, 0.14);
        border-radius: 1.5rem;

        box-sizing: border-box;
        padding: 1.25rem;

        > .item {
          height: auto;
          background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);
          border-radius: 1rem;
          box-sizing: border-box;
          position: relative;
          padding: 1.25rem;
          padding-top: 3.3rem;

          .header {
            position: absolute;
            height: 4.13rem;
            width: 100%;
            left: 0;
            top: 0;
            border-radius: 0.88rem 0.88rem 0rem 0rem;

            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: 500;
            font-size: 2rem;
            color: #ffffff;
            line-height: 1.6;
          }

          .head {
            width: 100%;
            height: 8rem;
            background: #ffffff;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin-top: 2.38rem;

            .icon-1 {
              margin-left: 0.3rem;
              width: 5.63rem;
              height: 5.63rem;
            }

            .time-container {
              margin-left: 0.6rem;
              flex: 1;
              display: flex;
              align-items: center;

              .time {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 3.13rem;

                line-height: 1.6;
              }

              .right {
                margin-left: 1.88rem;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .unit {
                  font-weight: 500;
                  font-size: 2.13rem;

                  line-height: 1.6;
                }

                .label {
                  font-size: 1.63rem;
                  color: #4e4e4e;
                }
              }
            }

            .icon-2 {
              width: 9rem;
              height: 7.63rem;
            }
          }

          .content {
            margin-top: 1.7rem;
            padding-right: 1.7rem;

            font-size: 1.63rem;
            color: #4e4e4e;
          }

          &.item-0 {
            background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);

            .header {
              background: #292929;
            }
          }

          &.item-1 {
            background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);

            .header {
              background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
            }
          }
        }
      }
    }
  }
}
</style>

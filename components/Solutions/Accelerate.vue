<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
  list1: Array,
  upDown: Object,
  list2: Array,
  btn: String,
  href: String,
});

const hovered = ref(-1);
</script>

<template>
  <div class="accelerate-container">
    <div class="accelerate page-container">
      <div class="left">
        <div class="title">{{ props.title }}</div>
        <div class="content">{{ props.content }}</div>
        <div class="list" v-if="props.list1">
          <div class="item" v-for="item in props.list1">
            <div class="icon"></div>
            <div class="title">{{ item }}</div>
          </div>
        </div>

        <div class="up-down" v-if="props.upDown">
          <div class="up">
            <div class="content">
              <div class="value">{{ props.upDown.up.value }}</div>
              <div class="icon"></div>
            </div>
            <div class="title">{{ props.upDown.up.title }}</div>
          </div>
          <div class="down">
            <div class="content">
              <div class="value">{{ props.upDown.down.value }}</div>
              <div class="icon"></div>
            </div>
            <div class="title">{{ props.upDown.down.title }}</div>
          </div>
        </div>

        <div class="btn-container" v-if="props.btn">
          <a :href="props.href" class="trail-btn">{{ props.btn }}</a>
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div class="item" :class="{ active: index === hovered }" v-for="item, index in props.list2"
            @mouseenter="hovered = index" @mouseleave="hovered = -1">
            <div class="head">
              <div class="icon" :style="{ backgroundImage: `url(${hovered === index ? item.iconActive : item.icon})` }">
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.accelerate-container {
  margin-top: 120px;

  .accelerate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;

    >.left {
      >.title {

        font-weight: 500;
        font-size: 30px;

        line-height: 42px;



      }

      >.content {
        margin-top: 18px;

        width: 520px;




        color: #4E4E4E;




      }

      >.list {
        margin-top: 40px;

        display: flex;
        flex-wrap: wrap;
        gap: 24px 0;

        .item {
          width: 50%;
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
            background: url(/public/images/solutions/storage-game/home_Text_list_ic_tick@2x.png);
          }

          .title {
            margin-left: 8px;


            font-weight: 500;
            font-size: 16px;

            line-height: 22px;



          }
        }
      }

      .up-down {
        margin-top: 40px;

        display: flex;

        .up,
        .down {
          flex: 1;

          >.content {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .value {
              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 48px;

              line-height: 64px;



            }

            .icon {
              margin-left: 10px;
              width: 40px;
              height: 40px;
            }
          }

          .title {


            font-size: 16px;
            color: #4E4E4E;




          }
        }

        .up {
          >.content {
            .value {
              background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .icon {
              background: url(/public/images/solutions/storage-software/SmartEdge™_ic_rise@2x.png);
            }
          }
        }

        .down {
          >.content {
            .value {
              background: linear-gradient(0deg, #F9C22F 0%, #FA6E4A 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .icon {
              background: url(/public/images/solutions/storage-software/SmartEdge™_ic_descend@2x.png);
            }
          }
        }
      }

      .btn-container {
        margin-top: 40px;
      }
    }

    >.right {
      .list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .item {
          width: 288px;
          height: 190px;
          box-sizing: border-box;
          padding: 16px;

          background: #FFFFFF;
          border-radius: 14px;

          border: 2px solid #FFF;

          .head {
            display: flex;
            align-items: center;

            .icon {
              width: 80px;
              height: 80px;
            }

            .title {
              margin-left: 12px;

              flex: 1;

              font-weight: 500;
              font-size: 16px;

              line-height: 22px;



            }
          }

          .content {
            margin-top: 6px;




            color: #4E4E4E;




          }

          &.active {
            border: 2px solid #46CF3A;
            // border-image: linear-gradient(90deg, rgba(70, 207, 58, 1), rgba(54, 207, 188, 1)) 2 2;
          }
        }
      }
    }
  }
}
</style>
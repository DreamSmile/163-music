<template>
  <div class="tri_item">
    <!-- 子组件这是列表{{tab}} -->
    <div class="left_box" ref="left">
      <div class="items left_item" v-for="(itemL,i) in leftList" :key="i">
        <div class="show_photo">
          <img :src="itemL.imgUrl">
          <div class="photo_info">
            <div class="photo" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
            <span class="time">01.23</span>
          </div>
        </div>
        <div class="info">
          <p class="name">{{itemL.name}}</p>
          <div class="info_play">
            <van-icon class="play_icon" name="play-circle-o" /><span class="play">555.9万</span>
            <van-icon class=" play_icon play_icon_last" name="thumb-circle-o" /><span class="play">555.9万</span>
            <span class="play_msg">混剪</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right_box" ref="right">
      <div class="items right_item" v-for="(item,j) in rightList" :key="j">
        <div class="show_photo">
          <img :src="item.imgUrl">
          <div class="photo_info">
            <div class="photo" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
            <span class="time">01.23</span>
          </div>
        </div>
        <div class="info">
          <p class="name">{{item.name}}</p>
          <div class="info_play">
            <van-icon class="play_icon" name="play-circle-o" /><span class="play">555.9万</span>
            <van-icon class=" play_icon play_icon_last" name="thumb-circle-o" /><span class="play">555.9万</span>
            <span class="play_msg">混剪</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">到底啦~</div>
  </div>
</template>
<style scoped lang="less">
.tri_item {
  box-sizing: border-box;
  margin-top: 14px;
  .left_box,
  .right_box {
    width: 50%;
    display: inline-block;
    font-size: 0;
    box-sizing: border-box;
    vertical-align: top; //解决最上面有个空白bug
  }
  .left_box {
    padding: 0 7px 14px 0;
  }
  .right_box {
    padding: 0 0 14px 7px;
  }
  .items {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    .show_photo {
      position: relative;
      img {
        width: 100%;
      }
      .photo_info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        .photo {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #fff;
          position: absolute;
          left: 12px;
          bottom: 10px;
        }
        .time {
          position: absolute;
          right: 10px;
          bottom: 12px;
          font-size: 10px;
          color: @msg-color;
        }
      }
    }
    .info {
      padding: 10px 10px;
      .name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
      .info_play {
        font-size: 10px;
        color: @msg-color;
        .play_icon {
          vertical-align: middle;
          margin-right: 2px;
        }
        .play_icon_last {
          margin-left: 14px;
        }
        .play_msg {
          float: right;
        }
      }
    }
  }
  .bottom {
    text-align: center;
    color: @msg-color;
  }
}
</style>
<script>
export default {
  props: {
    tab: {
      typeof: String,
      default: "",
    },
  },
  data() {
    return {
      leftList: [],
      rightList: [],
      itemList: [
        {
          imgUrl: this.$assetsUrl + "user.jpg",
          name: "1这是视频这是",
        },
        {
          imgUrl: this.$assetsUrl + "recommend1.jpg",
          name: "2这是介绍",
        },
        {
          imgUrl: this.$assetsUrl + "swiper1.jpg",
          name: "3这是视频这是视频这是视频这是视频这是视频",
        },
        {
          imgUrl: this.$assetsUrl + "user.jpg",
          name: "4这是视频这是视频这是视频这是视频这是视频",
        },
        {
          imgUrl: this.$assetsUrl + "recommend2.jpg",
          name: "5这是视频这是视频这",
        },
        {
          imgUrl: this.$assetsUrl + "swiper2.jpg",
          name: "6这是视频这是视频这是视频这是视频这是视频",
        },
        {
          imgUrl: this.$assetsUrl + "user.jpg",
          name: "7这是视频这是视频这是视频这是视频",
        },
        // {
        //   imgUrl: this.$assetsUrl + "user.jpg",
        //   name: "8这是",
        // },
        // {
        //   imgUrl: this.$assetsUrl + "logo.png",
        //   name: "9这是@@@@@",
        // },
        // {
        //   imgUrl: this.$assetsUrl + "swiper3.jpg",
        //   name: "10这是频这是视频",
        // },
        // {
        //   imgUrl: this.$assetsUrl + "user.jpg",
        //   name: "11这是视频这是视频这是视频这是视频",
        // },
        // {
        //   imgUrl: this.$assetsUrl + "user.jpg",
        //   name: "12这是",
        // },
        // {
        //   imgUrl: this.$assetsUrl + "logo.png",
        //   name: "13这是@@@@@",
        // },
      ],
      site: "left",
      num: 0,
    };
  },
  mounted() {
    this.$utils.showToast("在加载啦~", { type: "loading" });
    this.setItem();
  },
  methods: {
    async setItem() {
      if (this.itemList.length > this.num) {
        await new Promise((resolve, reject) => {
            let left = this.$refs.left.clientHeight;
            let right = this.$refs.right.clientHeight;
            if (right > left) {
              this.leftList.push(this.itemList[this.num]);
            } else {
              this.rightList.push(this.itemList[this.num]);
            }
            this.num++;
            resolve();
        });
        this.setItem();
      } else {
        this.$toast.clear();
      }
    },
  },
};
</script>
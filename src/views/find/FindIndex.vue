<template>
  <div class="find_index">
    <top></top>
    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe :autoplay="3000" style="width:100%;border-radius:8px">
        <van-swipe-item v-for="(image, index) in swiperList" :key="index">
          <!-- 使用lazy页面第一次滚动出现空白区 -->
          <!-- <img v-lazy="image.imgUrl" /> -->
          <img :src="image.imgUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 图标块 -->
    <div class="icons">
      <div class="item">
        <div class="icon_bg"><i class="iconfont">&#xe782;</i></div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="icon_bg"><i class="iconfont">&#xe782;</i></div>
        <p>歌单</p>
      </div>
      <div class="item" @click="$router.push('/ranking')">
        <div class="icon_bg"><i class="iconfont">&#xe782;</i></div>
        <p>排行榜</p>
      </div>
    </div>
    <hr />
    <!-- 推荐歌单 -->
    <div class="recommend">
      <div class="box_header rec_header">
        <div class="box_name">
          <span>推荐歌单</span>
        </div>
        <div class="box_edit">
          <button>更多<i class="iconfont more">&#xe629;</i></button>
        </div>
      </div>
      <div class="recommend_list">
        <div class="item">
          <van-swipe :autoplay="3000" :show-indicators="false" style="height: 100px;width:100px;" vertical>
            <van-swipe-item>
              <div class="imgs">
                <img :src="$assetsUrl+'recommend1.jpg'">
                <button><i class="iconfont">&#xe769;</i>404万</button>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="imgs">
                <img :src="$assetsUrl+'recommend2.jpg'">
                <button><i class="iconfont">&#xe769;</i>4万</button>
              </div>
            </van-swipe-item>
          </van-swipe>
          <p>歌单介绍歌</p>
        </div>
        <div class="item" v-for="(item,i) in 6" :key="i">
          <div class="imgs">
            <img :src="$assetsUrl+'recommend1.jpg'">
            <button><i class="iconfont">&#xe769;</i>404万</button>
          </div>
          <p>歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍</p>
        </div>
      </div>
    </div>
    <!-- 欢快古风 -->
    <div class="g_style">
      <div class="box_header">
        <div class="box_name">
          <i class="iconfont">&#xe65e;</i>
          <span>欢快古风恰是少年时</span>
        </div>
        <div class="box_edit">
          <button>
            <van-icon class="play_icon" name="play" />播放
          </button>
        </div>
      </div>
      <div class="list">
        <div class="page" v-for="(pages,j) in 3" :key="j">
          <div class="rows" v-for="(row,i) in 3" :key="i">
            <div class="img_box">
              <img :src="$assetsUrl+'recommend2.jpg'" />
              <i class="iconfont">&#xe63a;</i>
            </div>
            <div class="name_info">
              <span class="name">{{j}}{{i}}歌单名称歌单名称歌单名称歌单名称歌单名称</span>
              <span class="author">-作者名称</span>
            </div>
            <div class="paly_icon">
              <van-icon name="play" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 其他歌单推荐 -->
    <div class="recommend radar">
      <div class="box_header rec_header">
        <div class="box_name">
          <span>XXX的雷达歌单</span>
        </div>
        <div class="box_edit">
          <button>
            <van-icon class="change_icon" name="replay" />换一批
          </button>
        </div>
      </div>
      <div class="recommend_list">
        <div class="item">
          <van-swipe :autoplay="3000" :show-indicators="false" style="height: 100px;width:100px;" vertical>
            <van-swipe-item>
              <div class="imgs">
                <img :src="$assetsUrl+'recommend1.jpg'">
                <button><i class="iconfont">&#xe769;</i>404万</button>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="imgs">
                <img :src="$assetsUrl+'recommend2.jpg'">
                <button><i class="iconfont">&#xe769;</i>404万</button>
              </div>
            </van-swipe-item>
          </van-swipe>
          <p>歌单介绍歌</p>
        </div>
        <div class="item" v-for="(item,i) in 6" :key="i">
          <div class="imgs">
            <img :src="$assetsUrl+'recommend1.jpg'">
            <button><i class="iconfont">&#xe769;</i>404万</button>
          </div>
          <p>歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍</p>
        </div>
      </div>
    </div>
    <!-- 底部tab -->
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item name="FindIndex" replace :to="{path:'/findIndex',query:{isUseTab:true}}" icon="home-o">发现</van-tabbar-item>
      <van-tabbar-item name="TribeIndex" replace :to="{path:'/tribeIndex',query:{isUseTab:true}}" icon="friends-o">云村</van-tabbar-item>
      <van-tabbar-item name="MyIndex" replace :to="{path:'/myIndex',query:{isUseTab:true}}" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped lang="less">
.find_index {
  padding-bottom: 60px;
  .box_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box_name {
      span {
        font-size: 17px;
        font-weight: 700;
      }
      .iconfont {
        margin-right: 4px;
      }
    }
    .box_edit {
      button {
        font-size: 12px;
        border: 1px solid @line-color;
        border-radius: 99px;
        padding: 1px 8px;
        background-color: transparent;
        i {
          vertical-align: 0;
          font-size: 12px;
          color: #333;
        }
        .play_icon {
          vertical-align: -2px;
        }
        .change_icon {
          vertical-align: -1px;
        }
      }
    }
  }
  .swiper {
    background-color: #fff;
    background: linear-gradient(#f6f6f6, #fff);
    background: -moz-linear-gradient(#f6f6f6, #fff);
    padding: 0 14px;
    width: calc(100% - 28px);
    img {
      width: 100%;
    }
  }
  .icons {
    padding: 16px 14px 10px 12px;
    background-color: #fff;
    display: flex;
    align-items: center;
    overflow: auto;
    .item {
      margin-right: 20px;
      .icon_bg {
        background-color: #fef2f2;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 28px;
          color: @base-color;
        }
      }
      p {
        width: 4em;
        font-size: 12px;
        margin-top: 4px;
        text-align: center;
      }
    }
  }
  .recommend {
    background-color: #fff;
    border-radius: 0px 0px 8px 8px;
    padding-top: 14px;
    padding-bottom: 12px;
    .rec_header {
      padding: 0 14px;
    }
    .recommend_list {
      margin-top: 12px;
      display: flex;
      align-items: center;
      overflow: auto;
      text-align: center;
      .item {
        margin-left: 14px;
        .imgs {
          width: 100px;
          height: 100px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
          }
          button {
            position: absolute;
            top: 2px;
            right: 4px;
            font-size: 8px;
            color: #fff;
            padding: 0 2px;
            border-radius: 99px;
            vertical-align: middle;
            background-color: rgba(0, 0, 0, 0.2);
            i {
              color: #fff;
              font-size: 8px;
            }
          }
        }
        p {
          width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          min-height: 3em;
          text-align: left;
          font-size: 12px;
        }
      }
    }
  }
  .g_style {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 12px;
    padding: 16px 0;
    .box_header {
      padding: 0 14px;
    }
    .list {
      width: 100%;
      display: flex;
      overflow: auto;
      margin-top: 12px;
      .page {
        margin-left: 14px;
        .rows {
          width: 330px;
          display: flex;
          align-items: center;
          margin: 5px 0;
          .img_box {
            width: 56px;
            height: 56px;
            position: relative;
            margin-right: 10px;
            border-radius: 8px;
            overflow: hidden;
            img {
              width: 100%;
            }
            i {
              position: absolute;
              top: 50%;
              margin-top: -17px;
              left: 50%;
              font-size: 26px;
              margin-left: -12px;
              color: #fff;
            }
          }
          .name_info {
            border-bottom: 1px solid @bg-color;
            height: 100%;
            line-height: 56px;
            flex: 1;
            display: flex;
            align-items: center;
            min-width: 0;
            .name {
              flex: 1;
              font-size: 16px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .author {
              color: @font-msg-color;
              font-size: 12px;
            }
          }
          .name_info:last-child {
            border: none;
          }
          .paly_icon {
            margin-left: 10px;
            border-radius: 8px;
            padding: 0 5px;
            border: 1px solid @msg-color;
            i {
              color: @msg-color;
              font-size: 12px;
              vertical-align: -1px;
            }
          }
        }
      }
    }
  }
  .radar {
    margin-top: 12px;
  }
}
</style>
<script>
import Top from "../../components/Top.vue";
export default {
  components: {
    Top,
  },
  data() {
    return {
      active: "FindIndex",
      swiperList: [
        { imgUrl: this.$assetsUrl + "swiper1.png" },
        { imgUrl: this.$assetsUrl + "swiper2.png" },
        { imgUrl: this.$assetsUrl + "swiper3.png" },
      ],
    };
  },
  mounted() {
    // alert("测试swiper");
  },
};
</script>
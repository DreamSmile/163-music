<template>
  <div class="my_index">
    <top></top>
    <!-- 用户头像 -->
    <div class="user_info">
      <div class="photo face" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
      <div class="user_title">
        <p class="name">张XXX</p>
        <p class="grade">lv.7</p>
      </div>
      <i class="iconfont">&#xe629;</i>
    </div>
    <!-- 用户功能 -->
    <div class="fun_box">
      <div class="item" v-for="(item,i) in funList" :key="i">
        <i class="iconfont" v-html="item.icon"></i>
        <p>{{item.name}}</p>
      </div>
    </div>
    <!-- 我喜欢的音乐 -->
    <div class="like_box" @click="goSeetDetail">
      <div class="photo photo_bg" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"><i class="iconfont">&#xe64f;</i></div>
      <div class="like_info">
        <p>我喜欢的音乐</p>
        <p>999首</p>
      </div>
      <button><i class="iconfont">&#xe68d;</i>心动模式</button>
    </div>
    <!-- 歌单 -->
    <div class="song_box">
      <div class="song_tab tab_up">
        <span :class="{song_sel:songSel==1}" @click="songChange(1,'create')">创建歌单</span>
        <span :class="{song_sel:songSel==2}" @click="songChange(2,'collection')">收藏歌单</span>
        <span :class="{song_sel:songSel==3}" @click="songChange(3,'assistant')">歌单助手</span>
      </div>
      <!-- 创建的歌单 -->
      <div class="song_list" id="create">
        <div class="song_top">
          <span>创建歌单(2)</span>
          <div class="edit">
            <i class="iconfont">&#xe617;</i>
            <i class="iconfont">&#xe689;</i>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <div class="photo song_bg" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
            <div class="info">
              <p>歌单名称名称歌单名称名称歌单名称名称歌单名称名称歌单名称名称</p>
              <p>111首</p>
            </div>
            <i class="iconfont">&#xe689;</i>
          </div>
          <div class="item">
            <div class="photo song_bg" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
            <div class="info">
              <p>名称</p>
              <p>111首</p>
            </div>
            <i class="iconfont">&#xe689;</i>
          </div>
          <div class="import">
            <div class="import_box"><i class="iconfont">&#xe65d;</i></div>
            <span>一键导入外部歌曲</span>
          </div>
        </div>
      </div>
      <!-- 收藏的歌单 -->
      <div class="song_list" id="collection">
        <div class="song_top">
          <span>收藏的歌单(2)</span>
          <div class="edit">
            <i class="iconfont">&#xe689;</i>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <div class="photo song_bg" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
            <div class="info">
              <p>名称</p>
              <p>111首</p>
            </div>
            <i class="iconfont">&#xe689;</i>
          </div>
          <div class="item">
            <div class="photo song_bg" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
            <div class="info">
              <p>名称</p>
              <p>111首</p>
            </div>
            <i class="iconfont">&#xe689;</i>
          </div>
        </div>
      </div>
      <!-- 歌单助手 -->
      <div class="assistant" id="assistant">
        <p class="title">歌单助手</p>
        <p class="msg">你可以从歌单中筛选出</p>
        <van-swipe :autoplay="2000" loop :show-indicators="false" style="height: 2em;" vertical>
          <van-swipe-item><span><em class="bg_red">很久未听</em>的<em class="bg_blue">老歌</em></span></van-swipe-item>
          <van-swipe-item><span><em class="bg_orange">最近一年</em>收藏的<em class="bg_blue">电子音乐</em></span></van-swipe-item>
          <van-swipe-item><span>适合<em class="bg_red">夜晚</em>听<em class="bg_orange">催眠音乐</em></span></van-swipe-item>
        </van-swipe>
        <button>试试看</button>
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
.my_index {
  padding-bottom: 70px;
  .user_info {
    margin: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .face {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
      margin-right: 16px;
    }
    .user_title {
      flex: 1;
      .name {
        font-weight: bold;
        font-size: 18px;
      }
      .grade {
        display: inline-block;
        font-size: 12px;
        padding: 0 10px;
        border-radius: 99px;
        background-color: #fff;
      }
    }
  }
  .fun_box {
    margin: 0 14px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: 16px 0;
    box-sizing: border-box;
    padding-bottom: 20px;
    .item {
      width: 25%;
      box-sizing: border-box;
      text-align: center;
      margin-top: 20px;
      i {
        font-size: 24px;
        color: @base-color;
      }
    }
    .item:last-child {
      i {
        color: @msg-color;
      }
    }
  }
  .like_box {
    background-color: #fff;
    border-radius: 8px;
    padding: 14px;
    display: flex;
    align-items: center;
    margin: 0 14px;
    .photo_bg {
      border-radius: 8px;
      width: 46px;
      height: 46px;
      margin-right: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: #fff;
        font-size: 18px;
      }
    }
    .like_info {
      flex: 1;
      p:last-child {
        color: @msg-color;
        font-size: 12px;
      }
    }
    button {
      font-size: 12px;
      padding: 0px 6px;
      background-color: transparent;
      border: 1px solid @msg-color;
      border-radius: 99px;
      i {
        vertical-align: middle;
      }
    }
  }
  .song_box {
    margin: 0 14px;
    margin-top: 16px;
    .song_tab {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 4px;
      span {
        font-size: 16px;
      }
      .song_sel {
        font-weight: bold;
        position: relative;
      }
      .song_sel:after {
        position: absolute;
        content: "";
        width: 4em;
        height: 4px;
        bottom: 2px;
        left: 0;
        right: 0;
        border-radius: 99px;
        background-color: rgba(221, 44, 34, 0.8);
      }
    }
    .tab_up {
      //吸顶
      position: sticky;
      top: 56px;
      left: 0;
      right: 0;
      z-index: 4;
      background-color: @bg-color;
    }
    .song_list {
      margin-top: 16px;
      background-color: #fff;
      border-radius: 8px;
      padding: 12px;
      .song_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 12px;
          color: @font-msg-color;
        }
        .edit {
          i {
            color: @font-msg-color;
            font-size: 18px;
          }
          i:last-child {
            margin-left: 16px;
          }
        }
      }
      .list {
        .item {
          display: flex;
          align-items: center;
          margin-top: 12px;
          .song_bg {
            border-radius: 8px;
            width: 46px;
            height: 46px;
            margin-right: 14px;
          }
          .info {
            flex: 1;
            min-width: 0;
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all;
            }
            p:last-child {
              color: @font-msg-color;
              font-size: 12px;
            }
          }
        }
        .import {
          margin-top: 12px;
          display: flex;
          align-items: center;
          .import_box {
            background-color: @bg-color;
            border-radius: 8px;
            width: 46px;
            height: 46px;
            margin-right: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 24px;
            }
          }
        }
      }
    }
    .assistant {
      margin-top: 20px;
      background-color: #fff;
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      .title {
        color: @font-msg-color;
        font-size: 12px;
        text-align: left;
      }
      .msg {
        text-align: center;
        color: @msg-color;
        font-size: 12px;
        margin-bottom: 14px;
      }
      span {
        color: @msg-color;
        em {
          margin: 0 2px;
          border-radius: 99px;
          display: inline-block;
          padding: 0 4px;
        }
      }
      .bg_red {
        background-color: #f9d2d2;
        color: #f31616;
      }
      .bg_orange {
        color: #ff976a;
        background-color: #f5e7dc;
      }
      .bg_blue {
        color: #1989fa;
        background-color: #ccddf1;
      }

      button {
        background-color: @base-color;
        color: #fff;
        border-radius: 99px;
        padding: 4px 16px;
        margin-top: 14px;
      }
    }
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
      active: "MyIndex",
      songSel: 1, //歌单tab
      funList: [
        {
          icon: "&#xe6d8;",
          name: "本地/下载",
          url: "#",
        },
        {
          icon: "&#xe6db;",
          name: "云盘",
          url: "#",
        },
        {
          icon: "&#xe613;",
          name: "已购",
          url: "#",
        },
        {
          icon: "&#xe67a;",
          name: "最近播放",
          url: "#",
        },
        {
          icon: "&#xe7fe;",
          name: "我的好友",
          url: "#",
        },
        {
          icon: "&#xe62a;",
          name: "收藏和赞",
          url: "#",
        },
        {
          icon: "&#xe616;",
          name: "我的播客",
          url: "#",
        },
        {
          icon: "&#xe61f;",
          name: "音乐应用",
          url: "#",
        },
      ],
    };
  },
  methods: {
    songChange(num, el) {
      this.songSel = num;
      document.querySelector(`#${el}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
    // 去往歌单详情页
    goSeetDetail() {
      this.$router.push("/sheetDetail");
    },
  },
};
</script>
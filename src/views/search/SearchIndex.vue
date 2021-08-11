<template>
  <!-- 1：音乐专区超出隐藏透明效果 -->
  <div class="search_index" :style="{backgroundColor:`${isFirst || tab_sel!=1?'#fff':'#f6f6f6'}`}">
    <!-- 搜索框 -->
    <div class="search" :style="{backgroundColor:`${isFirst || tab_sel!=1?'#fff':'#f6f6f6'}`}">
      <i @click="out" class="iconfont">&#xe622;</i>
      <input type="text" v-model="inpVal" @keyup.enter="searchVal" :placeholder="inpPla" :style="{backgroundColor:`${isFirst || tab_sel!=1?'#fff':'#f6f6f6'}`}" />
    </div>
    <!-- 第一次进入展示的搜索信息 -->
    <div class="first_show" v-show="isFirst">
      <!-- 历史记录 -->
      <div class="history">
        <h2>历史</h2>
        <div class="his_list">
          <span class="his_item" v-for="(his,i) in 10" :key="i">吴亦凡{{i}}</span>
        </div>
        <i class="iconfont">&#xe652;</i>
      </div>
      <!-- 热搜榜 -->
      <div class="hot">
        <div class="hot_tab">
          <span :class="{hot_sel:isHot==1}" @click="changeHot(1)">热搜榜</span>
          <span :class="{hot_sel:isHot==2}" @click="changeHot(2)">视频榜</span>
          <span :class="{hot_sel:isHot==3}" @click="changeHot(3)">博客榜</span>
        </div>
        <div class="page" v-show="isHot==1">
          <div class="strip" v-for="(strips,i) in 10" :key="i">
            <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
            <span :class="['name',{hots_black: i<3}]">这是热搜榜</span>
            <i class="iconfont hots_red">&#xe608;</i>
          </div>
        </div>
        <div class="page" v-show="isHot==2">
          <div class="strip" v-for="(strips,i) in 10" :key="i">
            <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
            <span :class="['name',{hots_black: i<3}]">这是视频榜</span>
            <i class="iconfont hots_red">&#xe608;</i>
          </div>
        </div>
        <div class="page" v-show="isHot==3">
          <div class="strip" v-for="(strips,i) in 10" :key="i">
            <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
            <span :class="['name',{hots_black: i<3}]">这是博客榜</span>
            <i class="iconfont hots_red">&#xe608;</i>
          </div>
        </div>
      </div>
      <!-- 音乐专区 -->
      <div class="music_class">
        <h2>音乐专区</h2>
        <div class="class_list">
          <div class="items" v-for="item in 4" :key="item">
            <div class="title">
              <h3>曲风分类</h3>
              <i class="iconfont">&#xe66a;</i>
            </div>
            <p>查看你的专属曲风偏好</p>
          </div>
        </div>
        <!-- <div class="class_hidden">查看更多专区<i class="iconfont">&#xe63b;</i></div> -->
      </div>
      <!-- 推荐活动 -->
      <div class="recommend">
        <h2>推荐活动</h2>
        <ul>
          <li v-for="item in 3" :key="item">
            <img :src="$assetsUrl+'icon.jpg'" />
            <span>邀请朋友加入，得丰厚大奖</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="showSearch" v-show="!isFirst">
      <div class="tabs" :style="{backgroundColor:`${isFirst || tab_sel!=1?'#fff':'#f6f6f6'}`}">
        <span :class="{isTab:tab_sel==1}" @click="changeTab(1)">综合</span>
        <span :class="{isTab:tab_sel==2}" @click="changeTab(2)">单曲</span>
        <span :class="{isTab:tab_sel==3}" @click="changeTab(3)">歌单</span>
        <span :class="{isTab:tab_sel==4}" @click="changeTab(4)">视频</span>
        <span :class="{isTab:tab_sel==5}" @click="changeTab(5)">歌手</span>
        <span :class="{isTab:tab_sel==6}" @click="changeTab(6)">博客</span>
        <span :class="{isTab:tab_sel==7}" @click="changeTab(7)">歌词</span>
        <span :class="{isTab:tab_sel==8}" @click="changeTab(8)">专辑</span>
        <span :class="{isTab:tab_sel==9}" @click="changeTab(9)">声音</span>
        <span :class="{isTab:tab_sel==10}" @click="changeTab(10)">云圈</span>
        <span :class="{isTab:tab_sel==11}" @click="changeTab(11)">用户</span>
      </div>
      <div class="show">
        <div class="show_list" v-show="tab_sel==1">
          <!-- 综合 -->
          <div class="block">
            <h2>单曲</h2>
            <song-list :item="song"></song-list>
            <div class="more" @click="tab_sel=2">查看更多<em>{{this.inpVal || this.inpPla}}</em>的歌曲
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 歌单 -->
          <div class="block">
            <h2>歌单</h2>
            <sheet-list :list="song"></sheet-list>
            <div class="more" @click="tab_sel=3">查看更多<em>{{this.inpVal || this.inpPla}}</em>的歌单
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 视频 -->
          <div class="block">
            <h2>视频</h2>
            <video-list :list="song"></video-list>
            <div class="more" @click="tab_sel=4">查看更多<em>{{this.inpVal || this.inpPla}}</em>的视频
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 用户 -->
          <div class="block">
            <h2>用户</h2>
            <user-list :list="song"></user-list>
            <div class="more" @click="tab_sel=5">查看更多<em>{{this.inpVal || this.inpPla}}</em>的用户
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
        <div class="song" v-show="tab_sel==2">
          <song-list :item="song"></song-list>
        </div>
        <div class="sheet" v-show="tab_sel==3">
          <sheet-list :list="song"></sheet-list>
        </div>
        <div class="video" v-show="tab_sel==4">
          <video-list :list="song"></video-list>
        </div>
        <div class="user" v-show="tab_sel==5">
          <user-list :list="song"></user-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SongList from "../../components/list/SongList.vue";
import SheetList from "../../components/list/SheetList.vue";
import VideoList from "../../components/list/VideoList.vue";
import UserList from "../../components/list/UserList.vue";
export default {
  data() {
    return {
      isFirst: false, //第一次进入该搜索界面展示搜索热点列表
      isHot: 1, //热搜tab
      inpVal: "", //搜索输入框
      inpPla: "哈哈", //输入框的placeholder，搜索时没有value将使用placeholder作为关键字搜索
      tab_sel: 1, //搜索到展示的tab
      song: [
        {
          name: "搜索的歌曲",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "搜索到的",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "作者名称 ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "薛之谦",
          album: "专辑名称",
        },
        {
          name: "搜索到的",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "作者名称 ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "薛之谦",
          album: "专辑名称",
        },
      ],
    };
  },
  components: { SongList, SheetList, VideoList, UserList },
  mounted() {
    console.log(this.$toast);
  },
  methods: {
    // 更换tab
    changeTab(tabIndex) {
      this.tab_sel = tabIndex;
    },
    // 搜索
    searchVal() {
      let val = !this.inpVal ? this.inpPla : this.inpVal;
      // this.$utils.showToast("搜索：" + val);
      // setTimeout(() => {
      this.isFirst = false;
      //   this.$toast.clear();
      // }, 4000);
      // this.$router.push({ path: "/showSearch", query: { val: val } });
    },
    changeHot(num) {
      this.isHot = num;
    },
    // 返回上一页
    out() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="less">
.search_index {
  background-color: #fff;
  min-height: 100vh;
  .search {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 14px 6px 14px;
    z-index: 3;
    background-color: #fff;
    .iconfont {
      font-size: 20px;
      vertical-align: middle;
      margin-right: 14px;
    }
    input {
      width: calc(100% - 44px);
      padding: 6px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      background-color: transparent;
    }
  }
  .first_show {
    padding: 0 14px 14px 14px;
    box-sizing: border-box;
    .history {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      h2 {
        font-weight: 600;
        color: #000;
        margin-right: 20px;
      }
      .his_list {
        flex: 1;
        min-width: 0;
        overflow-y: hidden;
        white-space: nowrap;
        box-sizing: border-box;
        .his_item {
          display: inline-block;
          background-color: @bg-color;
          padding: 2px 10px;
          border-radius: 99px;
          margin-right: 6px;
        }
      }
      .iconfont {
        margin-left: 20px;
        font-size: 22px;
        color: @msg-color;
      }
    }
    .hot {
      margin-top: 16px;
      .hot_tab {
        margin-bottom: 14px;
        span {
          color: @font-msg-color;
          margin-right: 20px;
        }
        .hot_sel {
          color: #000;
        }
      }
      .page {
        //   animation: move 0.8s infinite;
        animation: move 0.3s ease-out;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        width: 100%;
        border-radius: 8px;
        padding: 12px;
        box-sizing: border-box;
        .strip {
          width: 50%;
          display: inline-block;
          line-height: 28px;
          box-sizing: border-box;
          .No {
            width: 18px;
            display: inline-block;
          }
          .hots_red {
            color: @base-color;
          }
          .hots_black {
            color: #000;
            font-weight: 600;
          }
          .name {
            max-width: calc(100% - 54px);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: inline-block;
            vertical-align: middle;
          }
          .iconfont {
            margin-left: 8px;
          }
        }
      }
      @keyframes move {
        0% {
          transform: translateX(100%);
          opacity: 0.8;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
    .music_class {
      margin-top: 16px;
      h2 {
        font-weight: 600;
        color: #000;
        margin-bottom: 14px;
      }
      .class_list {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        //   height: 120px;
        overflow: hidden;
        .items {
          width: 49%;
          box-sizing: border-box;
          border-radius: 8px;
          margin-bottom: 10px;
          color: #fff;
          overflow: hidden;
          background: linear-gradient(to right, #dd2c22, #ffc0cb);
          .title {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 7px 12px;
            h3 {
              font-size: 16px;
              font-weight: 600;
            }
            .iconfont {
              font-size: 24px;
            }
          }
          p {
            padding: 4px 12px;
            font-size: 12px;
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
      .class_hidden {
        text-align: center;
      }
    }
    .recommend {
      margin-top: 16px;
      h2 {
        color: #000;
        font-weight: 600;
        margin-bottom: 14px;
      }
      ul {
        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            margin-right: 12px;
          }
          span {
            border-bottom: 1px solid @line-color;
          }
          span:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
  .showSearch {
    .tabs {
      white-space: nowrap;
      overflow: auto;
      position: sticky;
      top: 50px;
      left: 0;
      right: 0;
      z-index: 2;
      background-color: @bg-color;
      padding-bottom: 12px;
      span {
        margin-right: 20px;
      }
      span:nth-child(1) {
        margin-left: 14px;
      }
      span:last-child {
        margin-right: 14px;
      }
      .isTab {
        position: relative;
      }
      .isTab::after {
        content: "";
        width: 2em;
        height: 6px;
        background-color: rgba(221, 44, 34, 0.8);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 99px;
      }
    }
    .show {
      min-height: calc(100vh - 90px);
      .block {
        box-sizing: border-box;
        border-radius: 8px;
        background-color: #fff;
        margin: 12px 14px;
        overflow: hidden;
        h2 {
          line-height: 20px;
          border-bottom: 1px solid @line-color;
          margin: 0 14px;
          line-height: 38px;
          font-weight: bold;
          font-size: 16px;
          color: #000;
        }
        .song_list {
          padding-top: 14px;
        }
        .more {
          text-align: center;
          font-size: 10px;
          color: @font-msg-color;
          margin: 0 12px;
          box-sizing: border-box;
          padding: 12px 0;
          border-top: 1px solid @line-color;
          em {
            color: @href-color;
          }
          i {
            vertical-align: middle;
          }
        }
      }
      .song {
        .song_list {
          padding-top: 0;
        }
      }
    }
  }
}
</style>
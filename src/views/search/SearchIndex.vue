<template>
  <!-- 1：音乐专区超出隐藏透明效果 -->
  <div class="search_index" :style="{backgroundColor:`${isFirst || tab_sel!=1018?'#fff':'#f6f6f6'}`}">
    <!-- 搜索框 -->
    <div class="search" :style="{backgroundColor:`${isFirst || tab_sel!=1018?'#fff':'#f6f6f6'}`}">
      <i @click="out" class="iconfont">&#xe622;</i>
      <input type="text" v-model="inpVal" @keyup.enter="searchVal(inpVal)" :placeholder="inpPla" :style="{backgroundColor:`${isFirst || tab_sel!=1018?'#fff':'#f6f6f6'}`}" />
    </div>
    <!-- 第一次进入展示的搜索信息 -->
    <div class="first_show" v-show="isFirst">
      <!-- 历史记录 -->
      <div class="history" v-show="$store.state.searchHis.length>0">
        <h2>历史</h2>
        <div class="his_list">
          <span class="his_item" v-for="(his,i) in $store.state.searchHis" :key="i">{{his}}</span>
        </div>
        <i class="iconfont" @click="delHis">&#xe652;</i>
      </div>
      <!-- 热搜榜 -->
      <div class="hot music_class">
        <h2>热搜榜</h2>
        <div class="page">
          <div class="strip" v-for="(strips,i) in hotList" :key="i" @click="searchVal(strips.searchWord)">
            <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
            <span :class="['name',{hots_black: i<3}]">{{strips.searchWord}}</span>
            <img :src="strips.iconUrl" />
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
      <!-- 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 -->
      <div class="tabs" :style="{backgroundColor:`${isFirst || tab_sel!=1018?'#fff':'#f6f6f6'}`}">
        <span :class="{isTab:tab_sel==1018}" @click="changeTab(1018,'all')">综合</span>
        <span :class="{isTab:tab_sel==1}" @click="changeTab(1,'song')">单曲</span>
        <span :class="{isTab:tab_sel==1000}" @click="changeTab(1000,'sheet')">歌单</span>
        <span :class="{isTab:tab_sel==1014}" @click="changeTab(1014,'vedio')">视频</span>
        <!-- <span :class="{isTab:tab_sel==5}" @click="changeTab(5)">歌手</span> -->
        <!-- <span :class="{isTab:tab_sel==6}" @click="changeTab(6)">博客</span> -->
        <span :class="{isTab:tab_sel==1006}" @click="changeTab(1006)">歌词</span>
        <span :class="{isTab:tab_sel==10}" @click="changeTab(10)">专辑</span>
        <!-- <span :class="{isTab:tab_sel==9}" @click="changeTab(9)">声音</span> -->
        <!-- <span :class="{isTab:tab_sel==10}" @click="changeTab(10)">云圈</span> -->
        <span :class="{isTab:tab_sel==1002}" @click="changeTab(1002,'user')">用户</span>
      </div>
      <div class="show">
        <div class="show_list" v-show="tab_sel==1018">
          <!-- 综合 -->
          <div class="block">
            <h2>单曲</h2>
            <song-list :item="all.song"></song-list>
            <div class="more" @click="changeTab(1)">查看更多<em>{{this.inpVal || this.inpPla}}</em>的歌曲
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 歌单 -->
          <div class="block">
            <h2>歌单</h2>
            <sheet-list :list="all.sheet"></sheet-list>
            <div class="more" @click="changeTab(1000)">查看更多<em>{{this.inpVal || this.inpPla}}</em>的歌单
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 视频 -->
          <div class="block">
            <h2>视频</h2>
            <video-list :list="all.video"></video-list>
            <div class="more" @click="changeTab(1014)">查看更多<em>{{this.inpVal || this.inpPla}}</em>的视频
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 用户 -->
          <div class="block">
            <h2>用户</h2>
            <user-list :list="all.user"></user-list>
            <div class="more" @click="changeTab(1002)">查看更多<em>{{this.inpVal || this.inpPla}}</em>的用户
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
        <div class="song" v-show="tab_sel==1">
          <song-list :item="song"></song-list>
        </div>
        <div class="sheet" v-show="tab_sel==1000">
          <sheet-list :list="sheet"></sheet-list>
        </div>
        <div class="video" v-show="tab_sel==1014">
          <video-list :list="video"></video-list>
        </div>
        <div class="user" v-show="tab_sel==1002">
          <user-list :list="user"></user-list>
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
      isFirst: true, //第一次进入该搜索界面展示搜索热点列表
      isHot: 1, //热搜tab
      hotList: [],
      inpVal: "", //搜索输入框
      inpPla: "哈哈", //输入框的placeholder，搜索时没有value将使用placeholder作为关键字搜索
      tab_sel: 1018, //搜索到展示的tab
      all: {
        song: [{ id: 0, name: "", al: { name: "" }, ar: { name: "" } }],
        sheet: [
          {
            id: 0,
            name: "",
            coverImgUrl: "",
            playCount: 0,
            trackCount: 0,
            creator: { nickname: "" },
          },
        ],
        video: [
          {
            id: 0,
            title: "",
            coverUrl: "",
            durationms: 0,
            playTime: 0,
            creator: { name: "" },
          },
        ],
        user: [{ nickname: "", signature: "", avatarUrl: "" }],
      },
      song: [
        {
          id: 1325897164,
          name: "",
          artists: [
            {
              id: 30618494,
              name: "金瀚",
              picUrl: null,
              alias: [],
              albumSize: 0,
              picId: 0,
              img1v1Url:
                "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              img1v1: 0,
              trans: null,
            },
          ],
          al: { name: "" },
          ar: { name: "" },
          album: {
            id: 74269067,
            name: "电视剧 你和我的倾城时光 原声带",
            artist: {
              id: 0,
              name: "",
              picUrl: null,
              alias: [],
              albumSize: 0,
              picId: 0,
              img1v1Url:
                "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              img1v1: 0,
              trans: null,
            },
            publishTime: 1543420800007,
            size: 28,
            copyrightId: 1415871,
            status: 0,
            picId: 109951163676646740,
            mark: 0,
          },
          duration: 193322,
          copyrightId: 1415871,
          status: 0,
          alias: [],
          rtype: 0,
          ftype: 0,
          mvid: 0,
          fee: 8,
          rUrl: null,
          mark: 131072,
        },
      ],
      sheet: [
        {
          id: 0,
          name: "",
          coverImgUrl: "",
          playCount: 0,
          trackCount: 0,
          creator: { nickname: "" },
        },
      ],
      video: [
        {
          id: 0,
          title: "",
          coverUrl: "",
          durationms: 0,
          playTime: 0,
          creator: { name: "" },
        },
      ],
      user: [{ nickname: "", signature: "", avatarUrl: "" }],
    };
  },
  mounted() {
    this.initHot();
  },
  components: { SongList, SheetList, VideoList, UserList },
  methods: {
    test() {
     
    },
    // 删除所有历史记录
    delHis() {
      this.$utils
        .showDialog("是否删除所有历史记录？", "询问", {
          confirmButtonText: "确定",
          showCancelButton: true,
          cancelButtonText: "取消",
        })
        .then((res) => {
          this.$store.commit("delSearchHis");
        })
        .catch(() => {});
    },
    // 热搜榜
    initHot() {
      this.$api
        .getHotSearch()
        .then((res) => {
          console.log(res);
          if (res.code != 200) {
            this.$utils.showDialog(res.msg);
            return;
          }
          this.hotList = res.data;
        })
        .catch((err) => {
          this.$utils.showDialog(err);
        });
    },
    // 更换tab
    // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
    changeTab(tabIndex) {
      this.tab_sel = tabIndex;
      this.$utils.showToast("正在加载中。。", { type: "loading" });
      let val = !this.inpVal ? this.inpPla : this.inpVal;
      this.shearchAxios(val, 10, tabIndex);
    },
    // 搜索
    searchVal(value) {
      let val = !value ? this.inpPla : value;
      this.inpVal = val;
      this.isFirst = false;
      this.$utils.showToast("正在努力查啦~", { forbidClick: true });
      this.$store.commit("addSearchHis", val);
      this.shearchAxios(val, 5, 1018);
    },
    // 关键字查找
    shearchAxios(keyword, limit, type) {
      this.$api
        .getSearch({
          keywords: keyword,
          limit: limit,
          type: type,
        })
        .then((res) => {
          this.$toast.clear();
          console.log(res);
          if (res.code != 200) {
            this.$utils.showDialog(res.msg);
            return;
          }
          switch (type) {
            case 1018:
              Object.assign(this.all, { song: res.result.song.songs });
              Object.assign(this.all, { sheet: res.result.playList.playLists });
              Object.assign(this.all, { video: res.result.video.videos });
              Object.assign(this.all, { user: res.result.user.users });
              break;
            case 1000:
              this.sheet = res.result.playLists;
              break;
            case 1:
              this.song = res.result.songs;
              break;
            case 1014:
              this.video = res.result.videos;
              break;
            case 1002:
              this.user = res.result.users;
              break;
            default:
              break;
          }
        })
        .catch((err) => {
          this.$toast.clear();
          console.log(err);
          this.$utils.showDialog(err);
        });
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
            width: 24px;
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
          img {
            margin-left: 12px;
            height: 12px;
          }
        }
      }
      .show_page {
        animation: move 0.3s ease-out;
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
      padding: 12px 0;
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
        font-weight: bold;
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
          font-size: 12px;
          color: @font-msg-color;
          margin: 0 12px;
          box-sizing: border-box;
          padding: 12px 0;
          border-top: 1px solid @line-color;
          em {
            color: @href-color;
          }
          i {
            vertical-align: -1px;
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
<template>
  <div class="sheet_square">
    <header>
      <div class="out" @click="$router.go(-1)">
        <i class="iconfont">&#xe622;</i>
        <h1>歌单广场</h1>
      </div>
      <div class="tabs">
        <van-icon class="icon" name="apps-o" @click="showEdit=true" />
        <van-tabs v-model="active" background="#f6f6f6" swipeable offset-top="50px">
          <van-tab :title="tabs.name" :name="tabs.name" v-for="(tabs,i) in myType" :key="i">
          </van-tab>
        </van-tabs>
      </div>
    </header>
    <div class="main" v-show="active=='推荐'">
      <div class="box">
        <h2>XXX的专属歌单</h2>
        <sheet-block-list :list="userSheetList"></sheet-block-list>
      </div>
      <div class="box">
        <h2>今日编辑推荐</h2>
        <sheet-block-list :list="userSheetList" :type="'auto'"></sheet-block-list>
      </div>
      <div class="box">
        <div class="title_box">
          <h2>排行榜</h2>
          <span>更多
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="page_list">
          <div class="page" v-for="(page,j) in 3" :key="j">
            <h2 class="page_title">排行榜
              <van-icon name="arrow" />
            </h2>
            <div class="row" v-for="(rows,i) in 3" :key="i">
              <div class="NO">
                <p>1</p>
                <van-icon name="arrow-up" />
              </div>
              <div class="photo"></div>
              <div class="row_info">
                <p class="name">歌曲名称名称</p>
                <p class="msg"><i class="iconfont">&#xe769;</i>777万，by 作者</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <h2>必听的官方歌单</h2>
        <sheet-block-list :list="userSheetList" :type="'auto'"></sheet-block-list>
      </div>
      <div class="box">
        <h2>这些歌单必合你心意</h2>
        <sheet-block-list :list="userSheetList" :type="'block'"></sheet-block-list>
        <div class="over">没有啦~</div>
      </div>
    </div>
    <!-- 其他tab展示的内容 -->
    <div class="other" v-show="active=='官方'">
      <sheet-block-list :list="userSheetList" :type="'block'"></sheet-block-list>
      <div class="over">没有啦~</div>
    </div>
    <!-- tab编辑弹出层 -->
    <van-popup v-model="showEdit" position="right" close-on-popstate :style="{width:'85%',height:'100%'}">
      <div class="edit_wrap">
        <div class="box_title">
          <h2>我的歌单广场<em> ({{isEdit?'拖动可排序':'长按可编辑'}})</em></h2>
          <button @click="isEdit = !isEdit;">{{isEdit?'完成':'编辑'}}</button>
        </div>
        <div class="box_btn my_btn_box">
          <button v-for="(my,i) in myType" :key="i" :class="[{no_btn:!my.isEdit}]" @touchstart="mouStart" @touchend="mouEnd(my,i,true)">
            <van-icon v-show="isEdit" name="minus" />{{my.name}}
          </button>
        </div>
      </div>
      <div class="edit_wrap">
        <div class="box_title">
          <h2>语种</h2>
        </div>
        <div class="box_btn lang_btn_box">
          <button v-for="(lang,i) in langType" @touchstart="mouStart" @touchend="mouEnd(lang,i,false)" :key="i" :class="[{no_btn:!lang.isEdit}]">
            <van-icon v-show="isEdit" name="plus" />{{lang.name}}
          </button>
        </div>
      </div>
      <div class="edit_wrap">
        <div class="box_title">
          <h2>风格</h2>
        </div>
        <div class="box_btn style_btn_box">
          <button v-for="(style,i) in styleType" :key="i" :class="[{no_btn:!style.isEdit}]" @touchstart="mouStart" @touchend="mouEnd(style,i,false)">
            <van-icon v-show="isEdit" name="plus" />{{style.name}}
          </button>
        </div>
      </div>
      <div class="edit_wrap">
        <div class="box_title">
          <h2>场景</h2>
        </div>
        <div class="box_btn scene_btn_box">
          <button v-for="(scene,i) in sceneType" :key="i" :class="[{no_btn:!scene.isEdit}]" @touchstart="mouStart" @touchend="mouEnd(scene,i,false)">
            <van-icon v-show="isEdit" name="plus" />{{scene.name}}
          </button>
        </div>
      </div>
      <div class="edit_wrap">
        <div class="box_title">
          <h2>情感</h2>
        </div>
        <div class="box_btn feel_btn_box">
          <button v-for="(feel,i) in feelType" :key="i" :class="[{no_btn:!feel.isEdit}]" @touchstart="mouStart" @touchend="mouEnd(feel,i,false)">
            <van-icon v-show="isEdit" name="plus" />{{feel.name}}
          </button>
        </div>
      </div>
      <div class="edit_wrap">
        <div class="box_title">
          <h2>主题</h2>
        </div>
        <div class="box_btn theme_btn_box">
          <button v-for="(theme,i) in themeType" :key="i" :class="[{no_btn:!theme.isEdit}]" @click="move(theme,i,false)">
            <van-icon v-show="isEdit" name="plus" />{{theme.name}}
          </button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<style scoped lang="less">
.sheet_square {
  min-height: 100vh;

  header {
    background-color: @bg-color;
    z-index: 2;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    .out {
      padding: 0 14px;
      height: 50px;
      line-height: 50px;
      i {
        font-size: 20px;
      }
      h1 {
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-left: 16px;
      }
    }
    .tabs {
      position: relative;
      /deep/.van-tabs {
        width: calc(100% - 45px);
      }
      .icon {
        position: absolute;
        right: 14px;
        top: 12px;
        z-index: 3;
        font-size: 20px;
        padding-left: 10px;
        border-left: 1px solid @bg-color;
      }
    }
  }
  .main {
    padding: 0 14px;
    .box {
      margin-bottom: 12px;
      .title_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
          vertical-align: -1px;
        }
      }
      .page_list {
        overflow: auto;
        white-space: nowrap;
        margin-top: 12px;
        .page {
          width: 90%;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
          padding: 12px;
          display: inline-block;
          margin-right: 14px;
          .page_title {
            text-align: center;
            i {
              vertical-align: -2px;
            }
          }
          .row {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            margin: 6px 0;
            .NO {
              font-size: 18px;
              p {
                color: @base-color;
              }
              i {
                font-size: 12px;
                color: @base-color;
              }
            }
            .photo {
              width: 60px;
              height: 60px;
              border-radius: 8px;
              margin: 0 12px;
            }
            .row_info {
              flex: 1;
              width: calc(100% - 100px);
              p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .name {
                font-weight: 600;
                font-size: 16px;
              }
              .msg {
                font-size: 12px;
                color: @font-msg-color;
              }
            }
          }
        }
        .page:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .over {
    text-align: center;
    color: @msg-color;
    font-size: 12px;
    padding-bottom: 14px;
  }
  h2 {
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin: 12px 0;
  }
  .other {
    transition: 0.3s;
    animation: show 0.5s;
    padding: 14px;
  }
  @keyframes show {
    0% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .edit_wrap {
    padding: 0 14px;
    margin: 6px;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .box_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        em {
          color: @no-color;
          font-size: 12px;
          font-weight: 200;
        }
      }
      button {
        border: 1px solid @base-color;
        padding: 3px 14px;
        background-color: #fff;
        border-radius: 99px;
        color: @base-color;
      }
    }
    .box_btn {
      box-sizing: border-box;
      button {
        i {
          vertical-align: middle;
          margin-right: 10px;
        }
        margin: 9px 5px;
        width: calc((100% - 30px) / 3);
        background-color: @bg-color;
        padding: 8px 0;
        border-radius: 99px;
      }
      .no_btn {
        color: #d5d5d5;
      }
      .active_btn {
        background-color: rgba(221, 44, 34, 0.5);
        color: #fff;
      }
    }
  }
}
</style>
<script>
import SheetBlockList from "../../components/list/sheetBlockList.vue";
export default {
  data() {
    return {
      active: "推荐",
      tabList: [],
      userSheetList: [
        {
          name: "歌单名称",
          img: this.$assetsUrl + "user.jpg",
          msg: "098万",
          id: "999",
        },
        {
          name: "哈哈哈哈专属歌一个特 个逃不过问问过热区 UR单",
          img: this.$assetsUrl + "user.jpg",
          msg: "098万",
          id: "57",
        },
        {
          name: "歌单",
          img: this.$assetsUrl + "user.jpg",
          msg: "098万",
          id: "23",
        },
        {
          name: "哈哈哈",
          img: this.$assetsUrl + "user.jpg",
          msg: "098万",
          id: "45",
        },
        {
          name: "哈哈哈哈专属歌一个特 个逃不过问问过热区 UR单",
          img: this.$assetsUrl + "user.jpg",
          msg: "098万",
          id: "57",
        },
        {
          name: "歌单",
          img: this.$assetsUrl + "user.jpg",
          msg: "098万",
          id: "23",
        },
      ],
      showEdit: false, //展示tab编辑页面
      isEdit: false, //是否开始编辑歌单tab
      timer: null, //监听长按事件
      time: 0, //长按开始的时间
      myType: [
        { id: 1, name: "推荐", type: "my", isEdit: false, isMove: false },
        { id: 2, name: "官方", type: "my", isEdit: false, isMove: false },
        { id: 3, name: "视频歌单", type: "my", isEdit: false, isMove: false },
        { id: 4, name: "精品", type: "my", isEdit: false, isMove: false },
        { id: 23, name: "华语", type: "lang", isEdit: true, isMove: true },
        { id: 19, name: "流行", type: "style", isEdit: true, isMove: true },
        { id: 39, name: "电子", type: "style", isEdit: true, isMove: true },
        { id: 49, name: "古风", type: "style", isEdit: true, isMove: true },
        { id: 29, name: "民谣", type: "style", isEdit: true, isMove: true },
      ],
      langType: [
        { id: 23, name: "华语", type: "lang", isEdit: false, isMove: false },
        { id: 43, name: "欧美", type: "lang", isEdit: true, isMove: true },
        { id: 45, name: "日语", type: "lang", isEdit: true, isMove: true },
        { id: 56, name: "韩语", type: "lang", isEdit: true, isMove: true },
        { id: 67, name: "粤语", type: "lang", isEdit: true, isMove: true },
      ],
      styleType: [
        { id: 19, name: "流行", type: "style", isEdit: false, isMove: false },
        { id: 29, name: "民谣", type: "style", isEdit: false, isMove: false },
        { id: 39, name: "电子", type: "style", isEdit: false, isMove: false },
        { id: 49, name: "古风", type: "style", isEdit: false, isMove: false },
        { id: 59, name: "说唱", type: "style", isEdit: true, isMove: true },
        { id: 69, name: "轻音乐", type: "style", isEdit: true, isMove: true },
        { id: 79, name: "爵士", type: "style", isEdit: true, isMove: true },
        { id: 89, name: "乡村", type: "style", isEdit: true, isMove: true },
        { id: 99, name: "R&B/soul", type: "style", isEdit: true, isMove: true },
        { id: 51, name: "古典", type: "style", isEdit: true, isMove: true },
        { id: 61, name: "民族", type: "style", isEdit: true, isMove: true },
        { id: 71, name: "英伦", type: "style", isEdit: true, isMove: true },
        { id: 81, name: "金属", type: "style", isEdit: true, isMove: true },
        { id: 91, name: "蓝调", type: "style", isEdit: true, isMove: true },
        { id: 15, name: "雷鬼", type: "style", isEdit: true, isMove: true },
        { id: 61, name: "世界音乐", type: "style", isEdit: true, isMove: true },
        { id: 17, name: "拉丁", type: "style", isEdit: true, isMove: true },
        { id: 81, name: "New Age", type: "style", isEdit: true, isMove: true },
        { id: 19, name: "舞曲", type: "style", isEdit: true, isMove: true },
      ],
      sceneType: [
        { id: 132, name: "清晨", type: "scene", isEdit: true },
        { id: 232, name: "夜晚", type: "scene", isEdit: true },
        { id: 332, name: "学习", type: "scene", isEdit: true },
        { id: 372, name: "工作", type: "scene", isEdit: true },
        { id: 2323, name: "午休", type: "scene", isEdit: true },
        { id: 1739, name: "下午茶", type: "scene", isEdit: true },
        { id: 3739, name: "地铁", type: "scene", isEdit: true },
        { id: 4329, name: "驾车", type: "scene", isEdit: true },
        { id: 2329, name: "运动", type: "scene", isEdit: true },
        { id: 2733, name: "旅行", type: "scene", isEdit: true },
        { id: 1739, name: "散步", type: "scene", isEdit: true },
        { id: 3329, name: "酒吧", type: "scene", isEdit: true },
      ],
      feelType: [
        { id: 172, name: "情感", type: "feel", isEdit: true },
        { id: 272, name: "清新", type: "feel", isEdit: true },
        { id: 372, name: "浪漫", type: "feel", isEdit: true },
        { id: 472, name: "伤感", type: "feel", isEdit: true },
        { id: 2723, name: "治愈", type: "feel", isEdit: true },
        { id: 1729, name: "放松", type: "feel", isEdit: true },
        { id: 3729, name: "孤独", type: "feel", isEdit: true },
        { id: 4729, name: "感动", type: "feel", isEdit: true },
        { id: 2729, name: "兴奋", type: "feel", isEdit: true },
        { id: 2723, name: "快乐", type: "feel", isEdit: true },
        { id: 1729, name: "安静", type: "feel", isEdit: true },
        { id: 3729, name: "思念", type: "feel", isEdit: true },
      ],
      themeType: [
        { id: 15, name: "综艺", type: "theme", isEdit: true },
        { id: 25, name: "影视原声", type: "theme", isEdit: true },
        { id: 35, name: "ACG", type: "theme", isEdit: true },
        { id: 45, name: "儿童", type: "theme", isEdit: true },
        { id: 523, name: "校园", type: "theme", isEdit: true },
        { id: 529, name: "游戏", type: "theme", isEdit: true },
        { id: 359, name: "70后", type: "theme", isEdit: true },
        { id: 529, name: "80后", type: "theme", isEdit: true },
        { id: 529, name: "90后", type: "theme", isEdit: true },
        { id: 275, name: "网络歌曲", type: "theme", isEdit: true },
        { id: 159, name: "KTV", type: "theme", isEdit: true },
        { id: 529, name: "经典", type: "theme", isEdit: true },
        { id: 529, name: "翻唱", type: "theme", isEdit: true },
        { id: 529, name: "吉他", type: "theme", isEdit: true },
        { id: 523, name: "钢琴", type: "theme", isEdit: true },
        { id: 159, name: "器乐", type: "theme", isEdit: true },
        { id: 359, name: "榜单", type: "theme", isEdit: true },
        { id: 529, name: "00后", type: "theme", isEdit: true },
      ],
    };
  },
  mounted() {
    this.tabList = JSON.parse(JSON.stringify(this.myType));
  },
  components: { SheetBlockList },
  methods: {
    // 移动
    async move(el, index, isMy) {
      if (!el.isEdit || !this.isEdit) return;
      let type = null; //数据
      console.log(el);
      if (el.type == "lang") {
        type = this.langType;
      } else if (el.type == "style") {
        type = this.styleType;
      } else if (el.type == "scene") {
        type = this.sceneType;
      } else if (el.type == "feel") {
        type = this.feelType;
      } else if (el.type == "theme") {
        type = this.themeType;
      } else {
        return;
      }
      if (isMy) {
        this.myType.splice(index, 1);
        type.forEach((element) => {
          if (element.id == el.id) {
            element.isEdit = true;
            element.isMove = true;
          }
        });
      } else {
        if (this.myType.length > 12) {
          console.log(this.myType.length);
          this.$utils.showToast("最多添加12个类别哦~", { duration: 2000 });
          return;
        }
        // await this.showAnimation(el.type);
        this.myType.push(JSON.parse(JSON.stringify(el)));
        type[index].isEdit = false;
      }
    },
    // 动画
    showAnimation(el) {
      let newEl = document.createElement("button");
      newEl.className = "";
      return new Promise(resolve=>{

      })
    },
    // 开始长按按钮
    mouStart(el) {
      console.log(el);
      this.time = 0;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.time++;
      }, 300);
    },
    // 结束长按，并且检测是否是长按
    mouEnd(el, index, isMy) {
      clearInterval(this.timer);
      if (this.time > 2) {
        this.isEdit = true;
      } else {
        this.move(el, index, isMy);
      }
      this.time = 0;
    },
  },
};
</script>
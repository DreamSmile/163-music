<template>
  <div class="ranking">
    <header>
      <div class="out" @click="$router.push('/findIndex')">
        <i class="iconfont">&#xe622;</i>
        <h1>排行榜</h1>
      </div>
      <div class="tabs">
        <span :class="['tab',{tab_sel:isSel==1}]" @click="changeTab(1)">官方</span>
        <span :class="['tab',{tab_sel:isSel==2}]" @click="changeTab(2)">精选</span>
        <span :class="['tab',{tab_sel:isSel==3}]" @click="changeTab(3)">曲风</span>
        <span :class="['tab',{tab_sel:isSel==4}]" @click="changeTab(4)">全球</span>
        <span :class="['tab',{tab_sel:isSel==5}]" @click="changeTab(5)">MV</span>
        <span :class="['tab',{tab_sel:isSel==6}]" @click="changeTab(6)">特色</span>
      </div>
    </header>
    <!-- 榜单推荐 -->
    <div class="recommend">
      <h2>榜单推荐</h2>
      <div class="wrap">
        <div class="block">
          <div class="bg_block"></div>
          <div class="bg">
            <span>每周五更新</span>
            <h3>国电榜</h3>
            <van-icon name="play" />
          </div>
          <p>云音乐国电榜</p>
        </div>
        <div class="block">
          <div class="bg_block"></div>
          <div class="bg">
            <span>刚更更新</span>
            <h3>电音榜</h3>
            <van-icon name="play" />
          </div>
          <p>云音乐电音榜</p>
        </div>
        <div class="block">
          <div class="bg_block"></div>
          <div class="bg">
            <span>更新12首</span>
            <h3>欧美音乐榜</h3>
            <van-icon name="play" />
          </div>
          <p>云音乐欧美新歌榜</p>
        </div>
      </div>
    </div>
    <!-- 官方榜 -->
    <div class="official" id="tab1">
      <h2>官方榜单</h2>
      <div class="wrap">
        <p class="msg">刚刚更新</p>
        <div class="title">
          <h3>飙升榜</h3>
          <div class="photo">
            <van-icon name="play" />
          </div>
        </div>
        <div class="list">
          <div class="row">
            <p>1.STAY<em>- The Kid LAROI/justin Bieber - StAy</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>2.骁<em>- 井胧/井迪</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>1.休息之道<em>- 林彦俊</em></p>
            <span>新</span>
          </div>
        </div>
      </div>
      <div class="wrap" style="backgroundColor:#e0efea">
        <p class="msg">刚刚更新</p>
        <div class="title">
          <h3 style="color:#279588">新歌榜</h3>
          <div class="photo">
            <van-icon name="play" />
          </div>
        </div>
        <div class="list">
          <div class="row">
            <p>1.STAY<em>- The Kid LAROI/justin Bieber - StAy</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>2.骁<em>- 井胧/井迪</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>1.休息之道<em>- 林彦俊</em></p>
            <span>新</span>
          </div>
        </div>
      </div>
      <div class="wrap" style="backgroundColor:#e0efea">
        <p class="msg">刚刚更新</p>
        <div class="title">
          <h3 style="color:#279588">热歌榜</h3>
          <div class="photo">
            <van-icon name="play" />
          </div>
        </div>
        <div class="list">
          <div class="row">
            <p>1.STAY<em>- The Kid LAROI/justin Bieber - StAy</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>2.骁<em>- 井胧/井迪</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>1.休息之道<em>- 林彦俊</em></p>
            <span>新</span>
          </div>
        </div>
      </div>
      <div class="wrap" style="backgroundColor:#f2e9e2">
        <p class="msg">刚刚更新</p>
        <div class="title">
          <h3 style="color:#e18145">人气榜</h3>
          <div class="photo">
            <van-icon name="play" />
          </div>
        </div>
        <div class="list">
          <div class="row">
            <p>1.STAY<em>- The Kid LAROI/justin Bieber - StAy</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>2.骁<em>- 井胧/井迪</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>1.休息之道<em>- 林彦俊</em></p>
            <span>新</span>
          </div>
        </div>
      </div>
      <div class="wrap" style="backgroundColor:#e4e8f1">
        <p class="msg">刚刚更新</p>
        <div class="title">
          <h3 style="color:#4368b8">原创榜</h3>
          <div class="photo">
            <van-icon name="play" />
          </div>
        </div>
        <div class="list">
          <div class="row">
            <p>1.STAY<em>- The Kid LAROI/justin Bieber - StAy</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>2.骁<em>- 井胧/井迪</em></p>
            <span>新</span>
          </div>
          <div class="row">
            <p>1.休息之道<em>- 林彦俊</em></p>
            <span>新</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 精选榜 -->
    <div class="recommend choice" id="tab2">
      <h2>精选榜</h2>
      <div class="wrap">
        <div class="block" v-for="(item,i) in choiceList" :key="i" @click="$router.push({path:'/sheetDetail',query:{name:item.name,isRanking:true}})">
          <div class="bg_block"></div>
          <div class="bg" :style="item.bg">
            <span>{{item.msg}}</span>
            <h3>{{item.name}}</h3>
            <van-icon name="play" />
          </div>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- 曲风榜单 -->
    <div class="recommend choice" id="tab3">
      <h2>曲风榜</h2>
      <div class="wrap">
        <div class="block" v-for="(item,i) in genreList" :key="i" @click="$router.push({path:'/sheetDetail',query:{name:item.name,isRanking:true}})">
          <div class="bg_block"></div>
          <div class="bg" :style="item.bg">
            <span>{{item.msg}}</span>
            <h3>{{item.name}}</h3>
            <van-icon name="play" />
          </div>
          <p>云音乐{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- 全球榜 -->
    <div class="recommend choice" id="tab4">
      <h2>全球榜</h2>
      <div class="wrap">
        <div class="block" v-for="(item,i) in globalList" :key="i" @click="$router.push({path:'/sheetDetail',query:{name:item.name,isRanking:true}})">
          <div class="bg_block"></div>
          <div class="bg" :style="item.bg">
            <span>{{item.msg}}</span>
            <h3>{{item.name}}</h3>
            <van-icon name="play" />
          </div>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- MV榜 -->
    <div class="recommend choice" id="tab5">
      <h2>MV榜</h2>
      <div class="wrap">
        <div class="block" v-for="(item,i) in MVList" :key="i" @click="$router.push({path:'/sheetDetail',query:{name:item.name,isRanking:true}})">
          <div class="bg_block"></div>
          <div class="bg" :style="item.bg">
            <span>{{item.msg}}</span>
            <h3>{{item.name}}</h3>
            <van-icon name="play" />
          </div>
          <p>云音乐{{item.name}}</p>
        </div>
        <div class="block"></div>
      </div>
    </div>
    <!-- 特色榜 -->
    <div class="recommend choice" id="tab6" style="background: linear-gradient(#fff, #f6f6f6);marigin-bottom:0">
      <h2>特色榜</h2>
      <div class="wrap">
        <div class="block" v-for="(item,i) in fashionList" :key="i" @click="$router.push({path:'/sheetDetail',query:{name:item.name,isRanking:true}})">
          <div class="bg_block"></div>
          <div class="bg" :style="item.bg">
            <span>{{item.msg}}</span>
            <h3>{{item.name}}</h3>
            <van-icon name="play" />
          </div>
          <p>云音乐{{item.name}}</p>
        </div>
        <div class="block"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSel: 1, //tab
      choiceList: [
        {
          name: "硬地原创音乐榜",
          bg: "background:#000",
          msg: "每月更新",
          url: "#",
        },
        {
          name: "黑胶VIP爱听榜",
          bg: "background:linear-gradient(to bottom left,#f6cbc2,#dc4a6e)",
          msg: "今日热门",
          url: "#",
        },
        {
          name: "K歌榜",
          bg: "background:linear-gradient(to bottom left,#62c8d4,#7e46ef)",
          msg: "每日更新",
          url: "#",
        },
        {
          name: "云音乐达人榜",
          bg: "background:linear-gradient(to bottom left,#ea96a5,#774094)",
          msg: "每周一更新",
          url: "#",
        },
        {
          name: "网络热歌榜",
          bg: "background:linear-gradient(to bottom left,#92cb98,#4289c1)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "专属榜单",
          bg: "background:linear-gradient(to bottom left,#88e4f1,#d959e4)",
          msg: "每日更新",
          url: "#",
        },
      ],
      genreList: [
        {
          name: "电音榜",
          bg: "background:linear-gradient(to bottom left,#88e4f1,#d959e4)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "ACG榜",
          bg: "background:linear-gradient(to bottom left,#f6cbc2,#dc4a6e)",
          msg: "每周四更新",
          url: "#",
        },
        {
          name: "说唱榜",
          bg: "background:linear-gradient(to bottom left,#62c8d4,#7e46ef)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "摇滚榜",
          bg: "background:linear-gradient(to bottom left,#ea96a5,#774094)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "民谣榜",
          bg: "background:linear-gradient(to bottom left,#92cb98,#4289c1)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "国电榜",
          bg: "background:linear-gradient(to bottom left,#88e4f1,#d959e4)",
          msg: "每五更新",
          url: "#",
        },
        {
          name: "古典榜",
          bg: "background:linear-gradient(to bottom left,#c5987b,#863a3a)",
          msg: "每周四更新",
          url: "#",
        },
        {
          name: "古风榜",
          bg: "background:linear-gradient(to bottom left,#dfccac,#8d6657)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "中文DJ榜单",
          bg: "background:linear-gradient(to bottom left,#b998f1,#3a54df)",
          msg: "每五更新",
          url: "#",
        },
      ],
      globalList: [
        {
          name: "美国billboard榜",
          bg: "background:#000",
          msg: "每周三更新",
          url: "#",
        },
        {
          name: "UK排行榜周榜",
          bg: "background:#000",
          msg: "每周一更新",
          url: "#",
        },
        {
          name: "说唱榜",
          bg: "background:#000",
          msg: "每周三更新",
          url: "#",
        },
        {
          name: "法国NRJ Vos Hit周榜",
          bg: "background:#000",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "云音乐欧美新歌榜",
          bg: "background:linear-gradient(to bottom left,#eaacad,#d52f3d)",
          msg: "每天更新",
          url: "#",
        },
        {
          name: "云音乐欧美热歌榜",
          bg: "background:linear-gradient(to bottom left,#ab2560,#113897)",
          msg: "每周四更新",
          url: "#",
        },
        {
          name: "云音乐日语榜",
          bg: "background:linear-gradient(to bottom left,#d5c228,#d63620)",
          msg: "每周二更新",
          url: "#",
        },
        {
          name: "云音乐韩语榜",
          bg: "background:linear-gradient(to bottom left,#398875,#0e4957)",
          msg: "每周四更新",
          url: "#",
        },
        {
          name: "俄语榜",
          bg: "background:linear-gradient(to bottom left,#b998f1,#3a54df)",
          msg: "每周四更新",
          url: "#",
        },
      ],
      MVList: [
        {
          name: "MV榜",
          bg: "background:linear-gradient(to bottom left,#4d77b3,#294e6b)",
          msg: "每天更新",
          url: "#",
        },
        {
          name: "K歌榜",
          bg: "background:linear-gradient(to bottom left,#b75a65,#793a42)",
          msg: "每周一更新",
          url: "#",
        },
      ],
      fashionList: [
        {
          name: "火前留名榜",
          bg: "background:#000",
          msg: "每天更新",
          url: "#",
        },
        {
          name: "歌手榜单",
          bg: "background:#000",
          msg: "每周一更新",
          url: "#",
        },
        {
          name: "听歌识曲榜",
          bg: "background:#000",
          msg: "每周四更新",
          url: "#",
        },
        {
          name: "潜力爆款榜",
          bg: "background:#000",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "KTV唛榜",
          bg: "background:linear-gradient(to bottom left,#eaacad,#d52f3d)",
          msg: "每周五更新",
          url: "#",
        },
        {
          name: "中国新乡村音乐排行榜",
          bg: "background:linear-gradient(to bottom left,#ab2560,#113897)",
          msg: "每周四更新",
          url: "#",
        },
      ],
    };
  },
  methods: {
    changeTab(tabIndex) {
      this.isSel = tabIndex;
      document.querySelector(`#tab${tabIndex}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
  },
};
</script>
<style scoped lang="less">
.ranking {
  box-sizing: border-box;
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
      overflow: auto;
      white-space: nowrap;
      .tab {
        display: inline-block;
        margin-left: 36px;
        font-size: 16px;
        color: @font-msg-color;
        margin-bottom: 6px;
      }
      .tab:nth-child(1) {
        margin-left: 14px;
      }
      .tab:last-child {
        margin-right: 14px;
      }
      .tab_sel {
        color: #000;
        font-weight: bold;
        position: relative;
      }
      .tab_sel::after {
        content: "";
        width: 2em;
        height: 6px;
        background-color: rgba(221, 44, 34, 0.8);
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        border-radius: 99px;
      }
    }
  }
  //   榜单推荐榜
  .recommend {
    margin: 4px 14px 0 14px;
    border-radius: 8px;
    background-color: #fff;
    padding: 14px 14px 0 14px;
    box-sizing: border-box;
    h2 {
      font-weight: bold;
      font-size: 18px;
      color: #000;
      margin-bottom: 10px;
    }
    .wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .block {
        width: calc((100vw - 70px) / 3);
        position: relative;
        margin-bottom: 14px;
        .bg_block {
          background-color: @bg-color;
          position: absolute;
          top: -5px;
          left: 0;
          right: 0;
          width: 80%;
          height: 30px;
          margin: auto;
          border-radius: 8px;
        }
        .bg {
          border-radius: 8px;
          position: relative;
          background: linear-gradient(to bottom left, #92cb98, #4289c1);
          span {
            display: inline-block;
            position: absolute;
            right: 2px;
            top: 4px;
            padding: 0 4px;
            background-color: rgba(0, 0, 0, 0.3);
            color: #fff;
            font-size: 10px;
            border-radius: 99px;
          }
          h3 {
            text-align: center;
            line-height: calc((100vw - 70px) / 3);
            font-weight: bold;
            font-size: 20px;
            color: #fff;
            overflow: hidden;
            white-space: nowrap;
          }
          i {
            color: rgba(255, 255, 255, 0.7);
            font-size: 30px;
            position: absolute;
            right: 2px;
            bottom: 2px;
          }
        }
        p {
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          white-space: nowrap;
          margin-top: 6px;
        }
      }
    }
  }
  //   官方榜
  .official {
    background: linear-gradient(#f6f6f6, #fff);
    border: 8px;
    padding: 14px;
    box-sizing: border-box;
    width: 100%;
    h2 {
      font-size: 18px;
      color: #000;
      font-weight: bold;
    }
    .wrap {
      border-radius: 8px;
      background-color: #f3e0e6;
      padding: 10px 14px;
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 14px;
      .msg {
        font-size: 12px;
        color: @msg-color;
        text-align: right;
      }
      .title {
        display: inline-block;
        vertical-align: middle;
        padding-right: 20px;
        box-sizing: border-box;
        h3 {
          color: #dd387a;
          font-weight: bold;
          font-size: 18px;
        }
        .photo {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 24px;
            color: rgba(255, 255, 255, 0.3);
          }
        }
      }
      .list {
        display: inline-block;
        vertical-align: middle;
        width: calc(100% - 80px);
        .row {
          display: flex;
          align-content: center;
          p {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 29px;
            vertical-align: middle;
            em {
              color: @font-msg-color;
            }
          }
          span {
            vertical-align: middle;
            color: #6f8e6f;
            line-height: 29px;
            margin-left: 30px;
          }
        }
      }
    }
  }
  //   精选榜，主要使用榜单推荐榜样式
  .choice {
    margin: 14px 0;
    .wrap {
      margin-bottom: 14px;
    }
  }
}
</style>
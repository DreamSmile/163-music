<template>
  <div class="video_list">
    <div class="row" v-for="(item , i) in list" :key="i">
      <div class="photo" :style="{backgroundImage:'url('+item.coverUrl+')'}">
        <van-icon name="play" />
      </div>
      <div class="info">
        <p class="name">{{item.title}}</p>
        <p class="msg">{{item.playTime}}，by {{item.creator.userName}}，{{item.durationms}}播放</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
<style scoped lang="less">
.video_list {
  padding: 0 12px;
  box-sizing: border-box;
  .row {
    margin: 6px 0;
    display: flex;
    align-items: center;
    .photo {
      width: 120px;
      height: 60px;
      border-radius: 8px;
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 24px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .info {
      flex: 1;
      width: calc(100% - 132px);
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .msg {
        color: @font-msg-color;
        font-size: 12px;
      }
    }
  }
}
</style>
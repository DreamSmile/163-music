<template>
  <div class="sheet_list">
    <div class="row" v-for="(item,i) in list" :key="i">
      <div class="photo"></div>
      <div class="info">
        <p class="name">{{item.name}}</p>
        <p class="msg">129首，by 哈哈，播放111万次</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped lang="less">
.sheet_list {
  padding: 0 12px;
  .row {
    display: flex;
    align-items: center;
    margin: 6px 0;
    .photo {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      margin-right: 12px;
    }
    .info {
      flex: 1;
      width: calc(100% - 72px);
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
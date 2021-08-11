<template>
  <div class="user_list">
    <div class="row" v-for="(item,i) in list" :key="i">
      <div class="user_info">
        <div class="photo"></div>
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p class="msg">粉丝：222万</p>
        </div>
      </div>
      <button>
        <van-icon name="plus" />关注
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserList",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped lang="less">
.user_list {
  padding: 0 12px;
  .row {
    margin: 6px 0;
    display: flex;
    align-items: center;
    .user_info {
      flex: 1;
      display: flex;
      align-items: center;
      width: calc(100% - 90px);
      .photo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 12px;
      }
      .info {
        width: calc(100% - 72px);
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        .msg {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    button {
      background-color: transparent;
      border: 1px solid @base-color;
      padding: 2px 10px;
      font-size: 12px;
      color: @base-color;
      border-radius: 99px;
    }
  }
}
</style>
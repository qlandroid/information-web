<template>
  <div class="information-item">
    <div class="ifm-img-box">
      <img src="../../assets/icon_normal.png" class="ifm-img"/>
    </div>
    <div class="right-details" :style="{'width':itemWidth}">
      <div
        style="font-size: 16px;height: 20px;line-height: 20px;white-space:nowrap;text-overflow: ellipsis;overflow:hidden;">
        地址dfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      </div>
      <div class="pt-1 pb-1 tag-style">
        <span>发布时间:</span>
      </div>
      <div class="pt-1 pb-1 tag-style">
        <span>区域:</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "information-item",
    props: {},
    data() {
      return {
        itemWidth: 222
      }
    },
    created() {
      let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.itemWidth = screenWidth - 90;
      console.log(this.itemWidth)
    }
  }

</script>

<style scoped>
  .information-item {
    margin: 10px 0px;
    background-color: #fff;
    padding: 10px 10px;
  }

  .ifm-img {
    width: 26%;
  }

  .ifm-img-box {
    width: 26%;
    display: inline;
  }

  .right-details {
    float: right;
    margin-left: 6px;
    display: inline-block;
    width: 70%;
  }

  .tag-style {
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    white-space: nowrap
  }

</style>

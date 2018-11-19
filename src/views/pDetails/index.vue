<template>
  <div class="wrapper">
    <div class="div-title">
      <div class="mt-3 mb-3">
        <span class="pl-3 pr-3  s-title">这个是个商业项目着急</span>
      </div>
      <div class="ml-3 mr-3">
        <span class="s-date"> 2018-12-12</span> <span class="s-date">浙江省/杭州市/拱墅区</span>
        <a @click="handleClickCollect" class="ml-3 s-date ">收藏</a>
      </div>
    </div>
    <div class="div-content">
      <div class="p-content p-3 mt-2">
        <p>
          如果操作系统中“微软雅黑”，XP系统中就没有这种字体，那么就会使用“宋体”，如果没有“宋体”，
          就会再使用系统中默认的字体，不过操作系统中一般都是有“宋体”的，而且，如果没有给网页设置字体类型，网页就会按照操作系统中默认的字体来显示。
        </p>
      </div>
      <div class="pl-3 pr-3 pt-3">
        <span class="s-label">联系人:</span> <span>张三</span>
      </div>
      <div class="pl-3 pr-3 pt-3">
        <span class="s-label">联系电话:</span> <span>15601953393</span>
      </div>
    </div>
    <div class="banner-advertising mt-5">
      <img src="../../assets/banner_0.png" width="100%"/>
    </div>

    <div class="back-box">
      <img class="nav nav-home" src="../../assets/nav_back_home.png" @click="handleBackHome"/>
      <img class="nav nav-back mt-2" src="../../assets/nav_back.png" @click="handleBack"/>
      <img class="nav mt-2" src="../../assets/nav_back_top.png" @click="handleBackTop"/>
    </div>
  </div>
</template>

<script>
  import informationItem from "../home/information-item"
  export default {
    name: "index",
    components:{
      "information-item": informationItem
    },
    data() {
      return {
      }
    },
    created(){
    },

    methods: {
      handleBackHome() {
        this.$router.push({name: "首页"});
      },
      handleBack() {
        this.$router.go(-1);
      },
      handleBackTop() {
        // this.$router.push({name: "首页"});
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

      },
      handleClickItem(id){
        console.log(id);
      },
      handleClickCollect(){
        console.log("点击收藏了");
      }
    }
  }
</script>

<style scoped>
  .div-title {
    font-family: "微软雅黑"
  }
  .div-title a{
    color: #ffbc3e;
  }
  .s-title {
    font-weight: bold;
    font-size: 1.4em;
  }

  .p-content {
    background-color: #f3f3f3;
    line-height: 130%
  }

  .s-date {
    font-family: "微软雅黑";
    font-size: 0.7em;
    color: #7a7a7a;
  }

  .s-label {
    font-family: "微软雅黑";
    color: #868686
  }

  .back-box {
    position: fixed;
    bottom: 10px;
    right: 10px;

  }

  .nav {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 40px;

  }

  .nav-home{
    border: 2px solid #ff791d;
  }
  .nav-back{
    border: 2px solid #bababa;
  }
</style>

<template>
  <div>
    <div class="sc-style" :style="{'height': scHeight}" style="background-color: #f9f9f9">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <information-item v-for="item in list">{{ item }}</information-item>
      </div>
    </div>

    <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="0">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="1">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import informationItem from "./information-item"
  import {Toast} from 'mint-ui';

  export default {
    name: "home",
    components: {
      "information-item": informationItem
    },
    data() {
      return {
        value:'',
        scHeight: '800px',
        selected: '1',
        loading: false,
        list: []
      }
    },
    created() {
      let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      console.log(height);
      this.scHeight = (height-80) + 'px';
      this.screen();
    },
    methods: {
      screen() {
        let instance = Toast('提示信息');
        setTimeout(() => {


          }, 2000
        )

      },
      loadMore() {
        for (let i = 0; i < 40; i++) {
          this.list.push(i);
        }
        this.loading=true;
      }
    }
  }
</script>

<style scoped>
  .bottom-nav {
    position: absolute;
    bottom: auto;
  }

  .sc-style {
    overflow: scroll;
    height: 200px;
  }

  .sc-style::-webkit-scrollbar {
    display: none;
  }
  ul{
    list-style-type:none;
    margin:0px;
  }
</style>

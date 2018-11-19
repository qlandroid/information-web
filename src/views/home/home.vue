<template>
  <div>


    <mt-tab-container :value="selected">
      <mt-tab-container-item id="0">
        <div class="sc-style" :style="{'height': scHeight}" style="background-color: #f9f9f9">
          <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <information-item  v-for="item in list" :key="item.id" @click.native="handleClickItem(item.id)">{{ item }}</information-item>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <my-view :userId="userId"></my-view>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar :value="selected" v-model="selected">

      <mt-tab-item id="0">
        <img slot="icon" style="display: inline-block;width: 24px;height: 24px" :src="selected =='0' ?require('../../assets/icon_home_select.png'):require('../../assets/icon_home.png')">
        <span>绝密文件</span>
      </mt-tab-item>


      <mt-tab-item id="3">
        <img slot="icon" style="width: 24px;height: 24px" src="../../assets/icon_home.png">
        我的
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<script>
  import informationItem from "./information-item"
  import myView from "./my_view"
  import {Toast} from 'mint-ui';

  export default {
    name: "home",
    components: {
      "information-item": informationItem,
      "my-view": myView
    },
    data() {
      return {
        userId: '',
        value: '',
        scHeight: '800px',
        selected: '3',
        loading: false,
        list: []
      }
    },
    created() {
      this.userId = this.$route.params.userId;
      let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      console.log(height);
      this.scHeight = (height - 60) + 'px';
    },
    methods: {
      loadMore() {
        for (let i = 0; i < 40; i++) {
          this.list.push(i);
        }
      },
      handleClickItem(id){
        this.$router.push({name:"项目详情",params:{bProjectId:id}})
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

  ul {
    list-style-type: none;
    margin: 0px;
  }
</style>

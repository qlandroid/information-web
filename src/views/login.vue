<template>

  <div>

    <div class="pt-5">

      <div class="tt">
        登录
      </div>

    </div>
    <div class="mt-5">
      <mt-field placeholder="请输入账号" v-model="loginParams.account"></mt-field>
      <mt-field placeholder="请输入密码" type="password" v-model="loginParams.pw"></mt-field>
    </div>
    <div class="mt-2">
      <mt-button type="primary" size="large" @click="handlerLogin">登录</mt-button>
    </div>
    <div>
      <div>
        <span class="pl-3" style="color: #9f9da5;">万豪商业机密分享系统 </span>
      </div>
    </div>
    <span></span>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import localStory from "../api/LocalStroryHelper"

  export default {
    name: "login",
    data() {
      return {
        bottom: {
          top: '',
        },
        loginParams: {
          account: '123456',
          pw: '12345678'
        }
      }
    },
    created() {
      let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      this.bottom.top = (height - 50) + "px";
    },
    methods: {
      handlerLogin() {
        if (!this.loginParams.account) {
          Toast('请输入账号');
          return
        }
        if (!this.loginParams.pw) {
          Toast('请输入密码');
          return
        }
        if (this.loginParams.pw.trim().length < 8) {
          Toast('密码不正确');
          return
        }
        this.$urlApi.login(this.loginParams)
          .then(res => {
            localStory.saveToken(res.a,res.b);
            this.$router.push({name:"首页",params:{userId:res.user.id}})
          })
          .catch(err =>{
            Toast(err.response.data.message);
          })
      }
    }
  }
</script>

<style scoped>
  .tt {
    width: 100px;
    margin: 20px auto 10px auto;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    color: #94929a;
  }
</style>

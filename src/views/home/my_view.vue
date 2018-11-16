<template>

  <div>
    <div class="header">
      <div class="font_div" :style="{'width':img.width}">
        <img :src="userDetails.headImg"
             style="border:2px solid #fff;border-radius:120px;width: 120px;height: 120px;margin-top: 10px">
        <div class="font_div mt-3" :style="{'width':img.width}">
          <span style="margin-top: 10px">{{userDetails.niceName?userDetails.niceName:"没有名称哦"}}</span>
        </div>

      </div>
      <div></div>
    </div>
    <div class="nav">
    </div>
    <div class="list-nav">

    </div>
  </div>
</template>

<script>
  export default {
    name: "my_view",
    props: {
      userId: ''
    },
    data() {
      return {
        img: {
          marginLeft: 0,
          width: 0
        },
        userDetails: {
          account: "123456",
          createDate: '',
          email: '',
          headImg: '',
          id: 1,
          idCard: '',
          mobile: '',
          name: '',
          niceName: '',
          pw: '',
          vipEndDate: '',
        }
      }
    },
    created() {
      let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      // this.img.width = width * 0.3;
      this.img.marginLeft = (width / 2 - 60) + 'px';
      this.img.width = width;
      console.log("0000=-----")
      console.log(this.img.width);
      this.$urlApi.userDetails()
        .then(res => {
          console.log(res);
          this.userDetails = res;
          var newImg = new Image()
          newImg.src = this.userDetails.headImg;
          newImg.onerror = () => {    // 图片加载错误时的替换图片
            newImg.src = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=366477766,2798963955&fm=111&gp=0.jpg',
              console.log("newImgOnerror")
          }
          newImg.onload = () => { // 图片加载成功后把地址给原来的img
            console.log(newImg);
            this.userDetails.headImg = newImg.src
            console.log("onload")
          }
        })
        .catch(err => {
          console.log(err.response.data.message);
        })

    },
    methods() {

    }
  }
</script>

<style scoped>

  .font_div {
    padding-bottom: 10px;
    background-color: #48ffd3;
    text-align: center; /* 水平居中 */
    /*line-height: 100px; !* 垂直剧终 *!*/
  }
</style>

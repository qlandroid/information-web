<template>

  <mu-bottom-sheet :open.sync="open" :overlay-close="false">
    <div>
      <mu-button flat color="secondary" @click="handleSelectCancel">取消</mu-button>
      <mu-button class="float-right" flat color="success" @click="handleSelectAddress">确定</mu-button>
    </div>
    <mu-divider></mu-divider>
    <mu-slide-picker :slots="typeSlots" :visible-item-count="7" @change="addressChange"
                     :values="selectTyes"></mu-slide-picker>
  </mu-bottom-sheet>

</template>

<script>
  export default {
    name: "citySelect",
    props: {
      open: Boolean,
    },
    data() {
      return {
        typeSlots: [
          {
            width: '100%',
            textAlign: 'right',
            values: []
          },
          {
            width: '100%',
            textAlign: 'left',
            values: ['北京']
          }
        ],
        typeClazzs: [],
        selectTyes: ['北京', '北京'],
        typeClazz: '北京',
        child: '北京',
        types:[],
      }
    },
    created() {
      this.$urlApi.getProjectTypes().then(res => {
        this.types = res;
        this.typeClazzs = [];
        this.typeClazz = res[0].typeName;
        for (let i in res) {
          this.typeClazzs.push(res[i].typeName);
        }
        console.log(res)
        let childList = res[0].childList;
        this.child = childList[0].typeName;
        let childs = [];
        for (let i in childList) {
          childs.push(childList[i].typeName);
        }
        this.typeSlots[0].values = this.typeClazzs;
        this.typeSlots[1].values = childs;

        this.selectTyes = [this.typeClazz, this.child]
      });
    },
    methods: {
      addressChange(value, index) {
        switch (index) {
          case 0:
            this.typeClazz = value;
            let childs = [];
            for (let i in this.types) {
              if (value == this.types[i].typeName) {
                let childList = types[i].childList;
                for (let i in childList) {
                  childs.push(childList[i].typeName);
                }
              }
            }
            this.typeSlots[1].values = childs;
            break
          case 1:
            this.child = value
            break
        }
        this.selectTyes = [this.typeClazz, this.child]
      },
      handleSelectAddress() {
        // this.open = false;
        let s = [];
        for(let l  in this.types){
          var clazz = this.types[l];
          if (clazz.typeName == this.selectTyes[0]) {
            s.push(clazz);
            var childList = clazz.childList;
            for(let c in childList){
              if (childList[c].typeName == this.selectTyes[1]) {
                s.push(childList[c]);
              }
            }
          }
        }
        this.$emit('select', s);
      },
      handleSelectCancel() {
        this.$emit('cancel');
      }
    }
  }
</script>

<style scoped>
  .float-right {
    float: right;
  }
</style>

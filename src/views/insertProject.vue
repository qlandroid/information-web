<template>
  <mu-container>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="input" label="项目名称">
        <mu-text-field v-model="form.title"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="类型选择">
        <div @click="showProjectType=true">{{this.form.selectTypes[0]?this.form.selectTypes[0].typeName:'--'}} -
          {{this.form.selectTypes[1]?this.form.selectTypes[1].typeName:'--'}}
        </div>
      </mu-form-item>

      <mu-form-item label="城市选择">
        <div @click="showCity=true">{{this.form.province?this.form.province:'--'}}省
          {{this.form.city?this.form.city:'--'}}市 {{this.form.district?this.form.district:'--'}}区
        </div>
      </mu-form-item>
      <mu-divider></mu-divider>

      <mu-form-item prop="textarea" label="详细内容">
        <mu-text-field multi-line :rows="4" :rows-max="6" aria-placeholder="请输入详细内容"
                       v-model="form.details"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="input" label="联系人">
        <mu-text-field v-model="form.contactsUser"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="input" label="联系电话">
        <mu-text-field v-model="form.contactsMobile"></mu-text-field>
      </mu-form-item>
      <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="success" @click="handleClickInsertProject">提交</mu-button>
      </mu-flex>
    </mu-form>

    <city-select :open="showCity" @cancel="showCity=false" @selectaddress="selectaddress"></city-select>
    <project-type-select :open="showProjectType" @cancel="showProjectType=false"
                         @select="selectType"></project-type-select>
  </mu-container>
</template>

<script>
  // import china from '../assets/china'
  import citySelect from './citySelect';
  import projectTypeSelect from './projectTypeSelect';

  export default {
    name: "insertProject",
    components: {
      "city-select": citySelect,
      "project-type-select": projectTypeSelect,
    },
    data() {
      return {
        showProjectType: false,
        showCity: false,
        labelPosition: 'left',
        form: {
          title: '',
          bProjectTypeId: '',
          details: '',
          province: '',
          city: '',
          district: '',
          contactsUser: '',
          contactsMobile: '',
          selectTypes: [],
        }
      }
    },
    created() {

    },
    methods: {
      onValuesTypeChange() {

      },
      handleClickInsertProject() {
        this.$urlApi.insertProjectTypes(this.form).then(res => {

        }).catch(err => {

        })
      },
      selectaddress(values) {
        this.showCity = false;
        this.form.province = values[0];
        this.form.city = values[1];
        this.form.district = values[2];
        console.log(values)
      },
      selectType(values) {
        this.showProjectType = false;
        this.form.selectTypes = values;
        this.form.bProjectTypeId = values[1].id;
      }
    }
  }
</script>

<style scoped>

</style>

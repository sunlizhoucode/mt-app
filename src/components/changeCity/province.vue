<template>
  <div>
    <span>按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled ="cityDisabled"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searWrod"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      showWrapperActive
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>


<script>
import api from '@/api/index.js'
import MSelect from "./select";
export default {
  data() {
    return {
      cityList: [],
      city: "城市",
      province: "省份",
      provinceList: [],
      cityActive: false,
      provinceActive: false,
      searchList:[ "重庆", "西安", "郑州", "广汉", "江油"],
      searWrod:'',
      loading:false,
      cityDisabled:true,

    };
  },
  created(){
    api.getProvinceList().then(res=>{
      this.provinceList = res.data.data.map((item) =>{
        item.name = item.provinceName;
        return item
      })
    })
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item){
      this.province = item;
      this.cityDisabled= false;
      this.cityList = item.cityInfoList;

    },
    changeCity(item){
      this.city = item.name;
      this.$store.dispath('setPosition', item);
      this.$router.push({name:'index'})
    },
    remoteMethod(val){
      //val 就是搜索时输入的值
      // 请求后端接口
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
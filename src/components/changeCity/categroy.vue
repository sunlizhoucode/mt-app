<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>    
    </dl>
    <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-' + index">
      <dt>{{index}}</dt>
      <dd >
        <span v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList:[],
      cityGroup:{},
    }
  },
  created(){
    var data = [
      {
          "id":1,
          "name":"安阳",
          "pinyin":"anyang",
          "firstChar":"a"
        },
        {
          "id":2,
          "name":"北京",
          "pinyin":"beijing",
          "firstChar":"b"
        },
        {
          "id":3,
          "name":"成都",
          "pinyin":"chengdu",
          "firstChar":"c"
        },
        {
          "id":4,
          "name":"大连",
          "pinyin":"dalian",
          "firstChar":"d"
        },
        {
          "id":5,
          "name":"峨眉山",
          "pinyin":"emeishan",
          "firstChar":"e"
        },
        {
          "id":6,
          "name":"福州",
          "pinyin":"fuzhou",
          "firstChar":"f"
        },
        {
          "id":7,
          "name":"广汉",
          "pinyin":"guanghan",
          "firstChar":"g"
        },
        {
          "id":8,
          "name":"杭州",
          "pinyin":"hangzhou",
          "firstChar":"h"
        },
        {
          "id":9,
          "name":"济南",
          "pinyin":"jinan",
          "firstChar":"j"
        },
        {
          "id":10,
          "name":"昆明",
          "pinyin":"kunming",
          "firstChar":"k"
        },
        {
          "id":11,
          "name":"连云港",
          "pinyin":"lianyungang",
          "firstChar":"l"
        },
        {
          "id":12,
          "name":"绵阳",
          "pinyin":"mianyang",
          "firstChar":"m"
        },
        {
          "id":13,
          "name":"南京",
          "pinyin":"nanjing",
          "firstChar":"n"
        },
        {
          "id":14,
          "name":"普洱",
          "pinyin":"puer",
          "firstChar":"p"
        },
        {
          "id":15,
          "name":"青岛",
          "pinyin":"qingdao",
          "firstChar":"q"
        },
        {
          "id":16,
          "name":"日照",
          "pinyin":"rizhao",
          "firstChar":"r"
        },
        {
          "id":17,
          "name":"上海",
          "pinyin":"shanghai",
          "firstChar":"s"
        },
        {
          "id":18,
          "name":"天津",
          "pinyin":"tianjin",
          "firstChar":"t"
        },
        {
          "id":19,
          "name":"武汉",
          "pinyin":"wuhan",
          "firstChar":"w"
        },
        {
          "id":20,
          "name":"西安",
          "pinyin":"xian",
          "firstChar":"x"
        },
        {
          "id":21,
          "name":"烟台",
          "pinyin":"yantai",
          "firstChar":"y"
        },
        {
          "id":22,
          "name":"郑州",
          "pinyin":"zhengzhou",
          "firstChar":"z"
        }
    ]
    var obj = {}
    data.forEach((item,index)=>{
      if(!obj[item.firstChar.toUpperCase()]){
        obj[item.firstChar.toUpperCase()] = [];

      }
      obj[item.firstChar.toUpperCase()].push(item);
    });

    window.console.log(obj);
    this.cityGroup = obj;
  },
  methods:{

  }
};
</script>

<style lang="scss">
  @import "@/assets/css/changecity/categroy.scss"
</style>
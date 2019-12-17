<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
            <!-- <dd>
                            <router-link to="/s">99旅馆连锁</router-link>
                        </dd>
                        <dd>
                            <router-link to="/s">尚客快捷酒店</router-link>
            </dd>-->
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
            <!-- <dd> <router-link to="/s"> 火锅自助餐 </router-link> </dd>
            <dd> <router-link to="/s"> 火锅 重庆 </router-link> </dd>-->
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>

          <!-- <a href="#">蜀王府</a>
          <a href="#">武侯祠</a>-->
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      searchWord: "",
      // isHotplace:false,
      // isSearchList:false,
      isFocus: false,
      hotPlaceList: [],
      searchList: ["火锅", "火锅自助餐", "火锅 重庆"],
      suggestList: ["奇迹运动健身", "成都博物馆", "蜀王府", "武侯祠"]
    };
  },
  created() {
    api.searchHotWord().then(res => {
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },

  computed: {
    isHotPlace() {
      // 聚焦了 并且 搜索框内无字  isHotPlace 为真
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      // 要在定时器里操作this需要保存this
      let self = this;
      setTimeout(() => {
        // 它的this指向window
        this.isFocus = false;
      }, 200);
    },
    input() {
      let val = this.searchWord
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item,index)=>{
          return item.indexOf(val) > -1;
        })
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>

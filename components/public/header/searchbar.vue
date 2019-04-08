<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <img
          src="../../../assets/img/红点创科透明底.png"
          alt="美团">
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <a href="http://localhost:3000/products?keyword=煎饼果子&type=美食"><button class="el-button el-button--primary"><i class="el-icon-search"/></button></a> 
          <dl
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item,idx) in searchList"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)"
            :key="idx"
            :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            <!-- //products?keyword=煎饼果子&type=美食 -->
        </p>
        <ul class="nav">
          <li><nuxt-link
            to="/"
            class="takeout">快递带领</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="movie">食堂预定</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="hotel">社区交流</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="apartment">零食小店</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="business">校园服务</nuxt-link></li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"/><p class="txt">随时退</p></li>
          <li><i class="single"/><p class="txt">随身服务</p></li>
          <li><i class="overdue"/><p class="txt">赚外快</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return {
      search:'',
      isFocus:false,
      hotPlace:[],
      searchList:["qqqqqqq","sssssssss"]
    }
  },
  computed:{
    isHotPlace:function(){
      return this.isFocus&&!this.search
    },
    isSearchList:function(){
      return this.isFocus&&this.search
    }
  },
  methods:{
    focus:function(){
      this.isFocus=true
    },
    blur:function(){
      let self=this;
      setTimeout(function(){
        self.isFocus=false
      },200)
    },
    input:_.debounce(async function(){
      let self=this;
      let city=self.$store.state.geo.position.city.replace('市','')
      self.searchList=[]
      let {status,data:{top}}=await self.$axios.get('/search/top',{
        params:{
          input:self.search,
          city
        }
      })
      self.searchList=top.slice(0,10)
    },300)
  }
}
</script>

<style lang="css">
</style>

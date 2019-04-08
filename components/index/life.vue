<template>
  <div class="m-life">
    <el-row>
      <el-col :span="18">
        <slider/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4><img 
            src="../../assets/img/u=3646774597,451987592&fm=26&gp=0.jpg" 
            alt=""></h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p class="m-life-login-name">欢迎您的到来</p>
          <p><nuxt-link to="/register"><el-button 
            round 
            size="medium">注册</el-button></nuxt-link></p>
          <p><nuxt-link to="/login"><el-button 
            round 
            size="medium">立即登录</el-button></nuxt-link></p>
          <p><nuxt-link to="/login"><el-button 
            round 
            size="medium">社区</el-button></nuxt-link></p>
          <p class="m-life-login-name"> <a href="">关于我们</a> </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from './slider.vue'
export default {
  components: {
    Slider
  }
}
</script>


<style lang="scss">
    @import "@/assets/css/index/life.scss";
</style>

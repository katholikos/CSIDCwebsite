<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的菜单</nuxt-link>
        <dl>
          <dd><nuxt-link to="/order">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/order">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/order">我的社区</nuxt-link></dd>
          <dd><nuxt-link to="/order">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">服务中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="/userCenter">登录中心</nuxt-link></dd>
          <dd><nuxt-link to="/coop">我想加入</nuxt-link></dd>
          <dd><nuxt-link to="/wap">免费开店</nuxt-link></dd>
          <dd><nuxt-link to="/kaipiao">随手接单</nuxt-link></dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>校园服务</dt>
            <dd>校园服务</dd>
            <dd>校园服务</dd>
            <dd>校园服务</dd>
            <dd>校园服务</dd>
            <dd>校园服务</dd>
            <dd>校园服务</dd>

          </dl>
          <dl class="food">
            <dt>compous</dt>
            <dd>compous</dd>
            <dd>compous</dd>
            <dd>compous</dd>
            <dd>compous</dd>
            <dd>compous</dd>
            <dd>compous</dd>
          </dl>
          <dl class="movie">
            <dt>校园热映电影</dt>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

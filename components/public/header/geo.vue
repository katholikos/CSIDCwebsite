<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{ $store.state.geo.position.city }}
    <nuxt-link
      class="changeCity"
      to="/changeCity">切换学校</nuxt-link>
    [黑大 哈工大 哈工程]
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

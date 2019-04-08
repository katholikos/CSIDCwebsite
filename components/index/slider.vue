<template>
  <div class="slide">
    <el-carousel 
      height="415px" 
      :interval="4000">
      <el-carousel-item 
        v-for="item in 6" 
        :key="item">
        <h3>红点创科欢迎您的加入</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
// export default {
//   data: () => {
//     return {
//       list: [{
//         url: '#abc',
//         img: 'http://p0.meituan.net/codeman/00c8bc1c25fbcc6d0651b29a2057a8c1560658.png'
//       }, {
//         url: '#bsbsb',
//         img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
//       }, {
//         url: '#sjfkajfj',
//         img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
//       }, {
//         url: '#sjfkajfja',
//         img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
//       }, {
//         url: '#kjljj',
//         img: 'http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg'
//       }]
//     }
//   }
// }
</script>

<style lang="scss">
.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
 .el-carousel__item h3 {
    color: #000000;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 15px
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #e6385e;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #6aa6eb;
  }
</style>


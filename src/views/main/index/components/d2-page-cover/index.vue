<template>
  <div class="d2-page-cover">
     <div class="block">
    <el-carousel >
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="small">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.el-carousel__container {
    position: relative;
    height: 1000px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background: #99a9bf url('./image/meow (3).jpg') center no-repeat;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background: #d3dce6 url('./image/meow (1).jpg') center no-repeat;
  }
</style>

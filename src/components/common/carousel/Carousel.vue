<template>
  <el-carousel :interval="5000" arrow="never" ref="carousel" class="carousel-box">
    <el-carousel-item v-for="item in carouselImg" class="carousel-item">
      <img :src="item" alt="加载出错了!" @touchstart="touchStart" @touchend="touchEnd">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "Carousel",
    props:{
      carouselImg:{
        type: Array,
        default(){
          return undefined;
        },
      }
    },
    data() {
      return {
        // 记录触摸的开始位置
        startX: 0,
        // 记录触摸的结束位置
        endX: 0,
      };
    },
    methods: {
      // 触摸开始
      touchStart(e){
        this.startX = e.changedTouches[0].clientX;
      },

      // 触摸结束
      touchEnd(e){
        this.endX = e.changedTouches[0].clientX;
        // 判断调用是切换上一张还是下一张，小于50px的触摸滑动视为误触，不进行切换
        if(this.startX - this.endX > 50) {
          this.$refs.carousel.next();
        }
        if(this.startX - this.endX < -50){
          this.$refs.carousel.prev();
        }
      }
    },
    components: {},
  }
</script>

<style scoped>
  .carousel-box{
    height: 200px;
    overflow: hidden;
  }

  .carousel-item{
    background-color: #fff;
    text-align: center;
  }

  .carousel-item img{
    /*width: 100%;*/
    height: 200px;
    max-width: 100%;
  }
</style>

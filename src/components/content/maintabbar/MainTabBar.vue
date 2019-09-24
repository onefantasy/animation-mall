<template>
    <el-row class="main-tab-bar-box">
      <el-col :span="6" :class="{active:current === '/home'}" @click.native="goTo('/home')">
        <div class="icon-word"></div>
        <div>首页</div>
      </el-col>
      <el-col :span="6" :class="{active:current === '/category'}" @click.native="goTo('/category')">
        <div class="el-icon-menu icon-word"></div>
        <div>分类</div>
      </el-col>
      <el-col :span="6" :class="{active:current === '/cart'}" @click.native="goTo('/cart')">
        <div class="icon-word"></div>
        <div>购物车</div>
      </el-col>
      <el-col :span="6" :class="{active:current === '/profile'}" @click.native="goTo('/profile')">
        <div class="icon-word"></div>
        <div>我的</div>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    name: "MainTabBar",
    data() {
      return {

      };
    },
    computed:{
      current(){
        return this.$route.path;
      }
    },
    methods: {
      // 控制页面进行跳转
      goTo(path){
        this.$router.push(path);
      }
    },
    components: {

    },
  }
</script>

<style scoped>

  .main-tab-bar-box{
    width: 100%;
    height: 50px;
    text-align: center;
    position: fixed;
    bottom: 0;
    box-shadow: 0 1px 2px 1px #333;
    font-size: 13px;
    background-color: #fff;
    z-index: 10;
  }

  .main-tab-bar-box div{
    height: 25px;
    padding: 3px;
  }

  .active{
    color: var(--color-tint);
  }

  .icon-word{
    font-family: "icomoon";
    font-size: 20px;
  }
</style>

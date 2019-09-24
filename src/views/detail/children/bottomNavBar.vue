<template>
  <el-row class="bottom-nav-bar-box">
    <el-col :span="4" class="span4">
      <div class="icon"></div>
      <div class="word">店铺</div>
    </el-col>
    <el-col :span="4" class="span4">
      <div><i class="el-icon-service el-icon"></i></div>
      <div class="word">客服</div>
    </el-col>
    <el-col :span="4" class="span4">
      <div><i class="el-icon-star-off el-icon"></i></div>
      <div class="word">收藏</div>
    </el-col>
    <el-col :span="6" class="span6 addToCart" @click.native="clickAddToCart">
      加入购物车
    </el-col>
    <el-col :span="6" class="span6 buy">
      购买
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "bottomNavBar",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'userData'
      ]),
    },
    methods: {
      // 添加到购物车
      clickAddToCart(){
        if(this.userData.id)
          this.$emit('clickAddToCart');
        else
          this.$toast.showToast('请先登录!');
      }
    },
    components: {},
  }
</script>

<style scoped>

  .bottom-nav-bar-box{
    width: 100%;
    height: 50px;
    text-align: center;
    box-shadow: 0 1px 5px 1px #666;
    background-color: #fff;
  }

  .span4{
    padding-top: 7px;
  }
  .span6{
    line-height: 50px;
  }

  .icon{
    font-family: "icomoon";
    font-size: 20px;
  }
  .word{
    font-size: 12px;
  }

  .el-icon{
    font-size: 20px;
  }

  .addToCart{
    background-color: yellow;
  }

  .buy{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

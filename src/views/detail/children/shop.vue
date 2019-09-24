<template>
  <el-container class="shop-box" v-if="goodsInfo">
    <el-header class="shop-header">
      <div class="flex">
        <div><img :src="goodsInfo.shop.logo" alt="" class="shop-header-img"></div>
        <div class="shop-name">{{goodsInfo.shop.name}}</div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="shop-aside">
        <div class="number">{{goodsInfo.shop.fan}}</div>
        <div class="text">购买人数</div>
        <div class="number">{{goodsInfo.shop.sell}}</div>
        <div class="text">销量</div>
      </el-aside>
      <el-main class="shop-main">
        <div>描述相符&nbsp
          <span :class="{good:goodsInfo.shop.score[0] >= 4.5}">{{goodsInfo.shop.score[0]}}</span>
        </div>
        <div>价格合理&nbsp
          <span :class="{good:goodsInfo.shop.score[1] >= 4.5}">{{goodsInfo.shop.score[1]}}</span>
        </div>
        <div>质量满意&nbsp
          <span :class="{good:goodsInfo.shop.score[2] >= 4.5}">{{goodsInfo.shop.score[2]}}</span>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "shop",
    props:{
      // 父组件的传来的商品信息
      goodsInfo:{
        type: Object,
        default(){
          return undefined;
        }
      },
    },
    created(){

    },
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .shop-box{
    width: 100%;
    border-bottom: 3px solid #eee;
  }

  .shop-header{
    height: 100px !important;
    padding: 15px;
  }
  .flex{
    display: flex;
  }
  .shop-name{
    padding-left: 10px;
    line-height: 70px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }
  .shop-header-img{
    width: 70px;
    border-radius: 50%;
  }

  .shop-aside{
    width: 187px !important;
    height: 100%;
    text-align: center;
    padding: 10px;
    border-right: 1px solid #eee;
  }
  .shop-aside div+div{
    margin-top: 5px;
  }
  .number{
    font-size: 20px;
    color: var(--color-tint);
  }
  .text{
    font-size: 12px;
    color: #999;
  }

  .shop-main{
    line-height: 25px;
    font-size: 15px;
  }
  .good{
    color: red;
  }
</style>

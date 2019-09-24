<template>
  <div class="detail-info-box" v-if="goodsInfo">
    <div class="name">{{goodsInfo.info.name}}</div>
    <div class="price">&yen{{goodsInfo.info.price}}</div>
    <el-row class="server-top server">
      <el-col :span="8" class="tl">月销 <span class="colorTint">{{goodsInfo.sellOfMonth}}</span> 笔</el-col>
      <el-col :span="8">收藏 <span class="colorTint">{{goodsInfo.manOfBuy}}</span> 人</el-col>
      <el-col :span="8" class="tr">{{goodsInfo.server[0]}}</el-col>
    </el-row>
    <el-row class="server">
      <el-col :span="12" class="tl">{{goodsInfo.server[1]}}</el-col>
      <el-col :span="12" class="tr">{{goodsInfo.server[2]}}</el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "detailInfo",
    props:{
      // 商品信息
      goodsInfo:{
        type: Object,
        default(){
          return undefined;
        }
      },
    },
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .detail-info-box{
    width: 100%;
    padding: 15px;
    border-bottom: 3px solid #eee;
  }

  .name{
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
  }
  .price{
    font-size: 20px;
    line-height: 30px;
    color: #ff5000;
    margin-bottom: 10px;
  }
  .colorTint{
    color: var(--color-tint);
  }

  .server{
    font-size: 12px;
    text-align: center;
    line-height: 25px;
  }
  .server-top{
    border-bottom: 1px solid #ccc;
  }
  .tl{
    text-align: left;
  }
  .tr{
    text-align: right;
  }
</style>

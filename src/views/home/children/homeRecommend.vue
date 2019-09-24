<template>
  <el-row class="recommend-box">
    <el-col :span="6" class="recommend-item" v-for="item in recommend">
      <img :src="item.img" alt="加载出错!">
      <div>{{item.title}}</div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "homeRecommend",
    props:{
      recommend:{
        type: Array,
        default(){
          return undefined;
        }
      }
    },
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>
  .recommend-box{
    background-color: #fff;
  }
  .recommend-item{
    padding: 10px 10px 0 10px;
    text-align: center;
    font-size: 15px;
  }
  .recommend-item img{
    width: 70px;
    border-radius: 50%;
  }
</style>

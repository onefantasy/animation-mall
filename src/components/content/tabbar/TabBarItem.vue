<template>
  <el-card :body-style="{ padding: '0px' }" class="tab-bar-item-box">
    <img v-lazy="img" class="image" @load="imgLoaded">
    <div style="padding: 14px;">
      <span>{{name}}</span>
      <div class="bottom clearfix">
        <span class="word"><span>&yen</span>{{price}}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      img:{
        type: String,
        default: ''
      },
      name:{
        type: String,
        default: '',
      },
      price:{
        type: String,
        default: ''
      },
      id:{
        type: Number,
        default: -1,
      }
    },
    data() {
      return {};
    },
    methods: {
      // 告诉父组件图片加载完成
      imgLoaded(){
        this.$emit("imgLoaded");
      }
    },
    components: {},
  }
</script>

<style scoped>

  .tab-bar-item-box{
    margin: 10px 5px 0 5px;
  }

  .bottom{
    padding-top: 5px;
  }

  .word{
    font-size: 15px;
    color: #999;
  }

  .word span{
    color: var(--color-high-text)
  }

  img{
    width: 100%;
  }
</style>

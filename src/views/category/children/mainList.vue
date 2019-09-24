<template>
  <div class="main-list-box">
    <div v-for="item of listData" class="main-list-item">
      <div class="good-img"><img :src="item.imgUrl" alt="图片加载出错!"></div>
      <div class="good-name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainList",
    props: {
      categoryData:{
        type: Array,
        default(){
          return undefined;
        }
      },
      current: 0,
    },
    data() {
      return {};
    },
    computed:{
      // 获取需要展示的商品数据
      listData(){
        if(!this.categoryData) return [];
        return this.categoryData[this.current].value;
      }
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .main-list-box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .main-list-item{
    padding-top: 10px;
  }


  .good-img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .good-name{
    text-align: center;
    font-size: 15px;
  }
</style>

<template>
  <ul>
    <li v-for="(item,index) of categoryData"
        class="aside-item"
        :class="{active:current === index}"
        @click="clickLi(index)">{{item.key}}</li>
  </ul>
</template>

<script>
  export default {
    name: "asideList",
    props: {
      categoryData: {
        type: Array,
        default(){
          return undefined;
        }
      }
    },
    data() {
      return {
        // 当前活动的列表项
        current: 0,
      };
    },
    methods: {
      // 点击li事件
      clickLi(index){
        this.current = index;
        // 发射li的点击事件以及点击的参数
        this.$emit("clickLi",index);
      }
    },
    components: {},
  }
</script>

<style scoped>

  .aside-item{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
  }
  
  .active{
    background-color: #fff;
    border-left: 3px solid red;
  }
</style>

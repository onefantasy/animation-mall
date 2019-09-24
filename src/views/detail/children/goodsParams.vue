<template>
  <div class="params-box" v-if="goodsDetail">
    <!--<div class="params-title">参数列表</div>-->
    <div class="params-item" v-for="item in goodsDetail.params">
      <span class="params-keys">{{item.key}}</span>
      <span class="params-value">{{item.value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsParams",
    props:{
      goodsDetail:{
        type: Object,
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

  .params-title{
    font-size: 17px;
    font-weight: 500;
    color: var(--color-tint);
    line-height: 40px;
  }
  .params-box{
    padding: 10px;
  }
  .params-item{
    border-bottom: 2px solid #eee;
    font-size: 15px;
    line-height:40px;
  }
  .params-keys{
    color: var(--color-tint);
  }
  .params-value{
    float: right;
    padding-right: 10px;
  }
</style>

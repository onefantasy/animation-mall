<template>
  <div class="feature-box">
    <img :src="feature.img" alt="加载出错!">
  </div>
</template>

<script>
  export default {
    name: "homeFeatureImg",
    props:{
      feature:{
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

  .feature-box{
    padding-top: 10px;
    background-color: #fff;
  }
  .feature-box img{
    width: 100%;
  }
</style>

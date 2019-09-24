<template>
  <div v-if="paramsImg" class="params-img-box">
    <div v-for="item in paramsImg" class="img-box"><img :src="item" alt="" @load="emitImgLoaded"></div>
  </div>
</template>

<script>
  export default {
    name: "goodsParamsImg",
    props:{
      paramsImg:{
        type: Array,
        default(){
          return undefined;
        }
      },
    },
    data() {
      return {};
    },
    methods: {
      emitImgLoaded(){
        this.$emit("imgLoaded");
      }
    },
    components: {},
  }
</script>

<style scoped>

  .params-img-box{
    width: 100%;
    padding-top: 10px;
    border-bottom: 3px solid #eee;
  }

  .img-box{
    width: 100%;
  }
  .img-box img{
    width: 100%;
  }
</style>

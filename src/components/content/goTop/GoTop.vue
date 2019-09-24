<template>
  <div class="back-top-box">
    <img src="~assets/imgs/arrow/arrow.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "GoTop",
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>
  .back-top-box{
    position: fixed;
    right: 7px;
    bottom: 50px;
    display: none;
    z-index: 30;
  }
  .back-top-box img{
    width: 40px;
    height: 40px;
    border: 3px solid #000;
    border-radius: 50%;
  }
</style>

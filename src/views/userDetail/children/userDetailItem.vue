<template>
  <div class="user-detail-item-box">
    <div><slot name="key">key</slot></div>
    <div class="value"><slot name="value">value</slot></div>
  </div>
</template>

<script>
  export default {
    name: "userDetailItem",
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .user-detail-item-box{
    line-height: 40px;
    font-size: 17px;
    font-weight: 600;
    padding: 0 10px;
    border-bottom: 2px solid #eee;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .value{

  }

  .value img{
    width: 30px;
    position: absolute;
    right: 10px;
    top: 5px;
  }

</style>

<template>
  <div class="operation-box">
    <div class="icon">
      <slot name="icon"><span></span></slot>
    </div>
    <div class="word">
      <slot name="word">我的购物车</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "operation",
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .operation-box{
    display: flex;
    line-height: 40px;
    font-size: 17px;
  }

  .icon{
    width: 50px;
    text-align: right;
    padding-right: 10px;
    font-family: "icomoon";
    color: var(--color-tint);
  }

  .word{
    flex: 1;
  }
</style>

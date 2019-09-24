<template>
  <el-row class="nav-bar-box">
    <el-col :span="6">
      <slot name="left">
        <div class="left-div">123</div>
      </slot>
    </el-col>
    <el-col :span="12">
      <slot name="center"></slot>
    </el-col>
    <el-col :span="6">
      <slot name="right"></slot>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .nav-bar-box{
    text-align: center;
    background: var(--color-tint);
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    box-shadow: 0 -1px 5px 1px #666;
  }

  .left-div{
    color: var(--color-tint);
  }
</style>

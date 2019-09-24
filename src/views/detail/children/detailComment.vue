<template>
  <div class="comment-box">
    <div class="comment-header">
      <span>用户评论</span>
      <span class="more">更多 >></span>
    </div>
    <div>
      某年某月某一天，某某在某个车站前买了某物送给了某人。（为后面写评论区占位的位置）
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailComment",
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .comment-box{
    height: 100px;
    width: 100%;
    padding: 10px;
    border-bottom: 3px solid #eee;
  }

  .comment-header{
    line-height: 35px;
    font-size: 15px;
    border-bottom: 2px solid #eee;
  }

  .more{
    float: right;
    padding-right: 10px;
  }
</style>

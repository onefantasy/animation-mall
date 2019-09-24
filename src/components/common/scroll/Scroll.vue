<template>
  <div ref="wrapper">
    <div ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probeTypeNum:{
        type: Number,
        default: 1
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      },
    },
    data() {
      return {};
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        // 设置scroll组件里面的点击事件有效
        click: true,
        probeType: this.probeTypeNum,
        pullUpLoad: this.pullUpLoad,
      });

      // 监听滚动事件，并且发射滚动事件
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position);
      });

      // 上拉加载更多
      this.scroll.on('pullingUp',()=>{
        this.$emit('loadMore');
      });
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

</style>

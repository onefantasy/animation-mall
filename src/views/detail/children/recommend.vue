<template>
  <div class="recommend" v-if="recommendData">
    <div class="recommend-title">商品推荐</div>
    <div class="recommend-content">
      <waterfall :col="2" :data="recommendData">
        <template>
          <div v-for="item in recommendData">
            <TabBarItem v-if="item" :img="item.src" :name="item.value.name" :price="item.value.price" :key="item.value.id" @imgLoaded="emitImgsLoaded" @click.native="clickGoods(item.value.id)"/>
          </div>
        </template>
      </waterfall>
    </div>
  </div>
</template>

<script>
  import TabBarItem from 'components/content/tabbar/TabBarItem'

  import { debounce } from 'common/debounce'

  export default {
    name: "recommend",
    props: {
      recommendData:{
        type: Array,
        default(){
          return undefined;
        }
      },
    },
    data(){
      return {
        // 防抖的图片图片加载完成事件
        imgsLoaded:debounce(()=>{
          this.$emit("imgsLoaded");
        },500),
      };
    },
    methods: {
      //发射图片加载完成事件
      emitImgsLoaded(){
        this.imgsLoaded();
      },
      // 点击推荐商品后,跳转到推荐商品对应的详情页
      clickGoods(id){
        this.$router.push('/detail/'+id);
      },
    },
    components: {
      TabBarItem,
    },
  }
</script>

<style scoped>

  .recommend{
    padding: 10px;
  }

  .recommend-title{
    border-left: 5px solid red;
    color: #333;
    line-height: 40px;
    font-size: 20px;
    padding-left: 10px;
  }

  .recommend-content{
    margin-top: 7px;
    padding-top: 7px;
    border-top: 2px solid #eee;
  }


</style>

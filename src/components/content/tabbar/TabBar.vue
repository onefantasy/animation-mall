<template>
  <div v-if="imgsArr[0]">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-bar-box">
      <el-tab-pane label="漫画" name="comics" class="tab-content">
        <keep-alive>
          <waterfall :col="2" :data="goodsShow">
            <template>
              <div v-for="item in goodsShow">
                <TabBarItem v-if="item" :img="item.src" :name="item.value.name" :price="item.value.price" :key="item.value.id" @imgLoaded="emitImgsLoaded" @click.native="clickGoods(item.value.id)"/>
              </div>
            </template>
          </waterfall>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="动画" name="animation">
        <keep-alive>
          <waterfall :col="2" :data="goodsShow">
            <template>
              <div v-for="item in goodsShow">
                <TabBarItem v-if="item" :img="item.src" :name="item.value.name" :price="item.value.price" :key="item.value.id" @imgLoaded="emitImgsLoaded" @click.native="clickGoods(item.value.id)"/>
              </div>
            </template>
          </waterfall>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="周边" name="derivative">
        <keep-alive>
          <waterfall :col="2" :data="goodsShow">
            <template>
              <div v-for="item in goodsShow">
                <TabBarItem v-if="item" :img="item.src" :name="item.value.name" :price="item.value.price" :key="item.value.id" @imgLoaded="emitImgsLoaded" @click.native="clickGoods(item.value.id)"/>
              </div>
            </template>
          </waterfall>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
  import TabBarItem from './TabBarItem'

  import { debounce } from 'common/debounce'

  export default {
    name: "TabBar",
    props:{
      // 接收父组件传来的商品数据
      imgsArr:{
        type: Array,
        default(){
          return [];
        },
      }
    },
    watch:{
      imgsArr:function(){
        this.goodsShow = [].concat(this.imgsArr);
      },
    },
    data() {
      return {
        activeName: 'comics',
        goodsShow: [],
        // 防抖函数版图片加载完成事件
        imgsLoaded:debounce(()=>{
          this.$emit('imgsLoaded');
        },500),
      };
    },
    computed:{

    },
    created(){

    },
    methods: {
      // 更改tab栏的选项时触发的事件
      // 第一个参数为点击的tab栏的当前选项的信息
      // 第二个参数是点击事件
      handleClick(tab, event) {
        this.goodsShow.splice(0,this.goodsShow.length);
        // 发射事件
        this.$emit('changTab',tab.name)
      },
      // 发送已经有一部分图片加载完成事件
      emitImgsLoaded(){
        this.imgsLoaded();
      },
      // 点击商品事件
      clickGoods(id){
        this.$emit("clickGoods",id);
      },
    },
    components: {
      TabBarItem,
    },
  }
</script>

<style>
  .el-tabs__nav{
    display: flex;
    float: none;
  }

  .el-tabs__item{
    height: 40px;
    line-height: 40px;
    list-style: none;
    font-size: 17px;
    font-weight: 500;
    color: #303133;

    flex: 1;
    padding: 0;
  }

  .is-active{
    color: var(--color-tint) !important;
  }

  .el-tabs__active-bar{
    background-color: var(--color-tint) !important;
  }
</style>

<style scoped>

  .tab-bar-box{
    width: 100%;
    text-align: center;
    padding: 0 10px;
    background-color: #fff;
    height: 100%;
  }

  .tab-content{
    height: 100%;
  }
</style>

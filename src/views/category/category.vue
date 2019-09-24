<template>
  <div>
    <!--顶部导航栏-->
    <NavBar class="nav-bar">
      <div slot="center">分类</div>
    </NavBar>

    <!--主要内容，分为侧边栏以及主体-->
    <el-container class="category-container">
      <el-aside class="category-aside">
        <Scroll class="content-aside">
          <asideList :category-data="categoryData" @clickLi="clickLi"></asideList>
        </Scroll>
      </el-aside>
      <el-main class="category-main">
        <Scroll class="content-main">
          <mainList :category-data="categoryData" :current="current"></mainList>
        </Scroll>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import asideList from './children/asideList'
  import mainList from './children/mainList'

  import { getCategoryData } from "network/category";

  export default {
    name: "category",
    data() {
      return {
        // 向后端请求的分类列表的数据
        categoryData: null,
        // 当前正在活动的列表项,默认为0，表示第一项
        current: 0,
      };
    },
    created(){
      getCategoryData().then(res => {
        this.categoryData = res.data;
      });
    },
    methods: {
      // 接收到点击，更改当前正在活动的列表项
      clickLi(index){
        this.current = index;
      }
    },
    components: {
      NavBar,
      Scroll,
      asideList,
      mainList,
    },
  }
</script>

<style scoped>

  .nav-bar{
    position: relative;
    z-index: 10;
  }

  .category-container{
    width: 100%;
  }

  .category-aside{
    width: 100px !important;
    background-color: #eee;
    height: 100vh;
    position: relative;
    /*隐藏滚动条*/
    overflow: hidden;
  }
  .content-aside{
    position: absolute;
    top: 0;
    bottom: 100px;
    left: 0;
    right: 0;
  }

  .category-main{
    width: 100px !important;
    height: 100vh;
    position: relative;
    /*隐藏滚动条*/
    overflow: hidden;
  }
  .content-main{
    position: absolute;
    top: 0;
    bottom: 100px;
    left: 0;
    right: 0;
  }
</style>

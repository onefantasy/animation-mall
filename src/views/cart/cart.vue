<template>
    <div>
      <!--顶部导航栏-->
      <NavBar class="nav-bar">
        <div slot="center">购物车</div>
      </NavBar>

      <Scroll class="content" ref="scroll">
        <div v-for="item of cartList" class="good-box">
          <div class="good-box-left">
            <el-checkbox class="check-box" @change="changeCheckBox(item)" v-model="item.checked"></el-checkbox>
            <div>
              <img
                :src="item.img"
                alt="图片加载出错!"
                class="good-img"
                @load="imgLoaded"
                @click="goDetail(item.id)">
            </div>
          </div>
          <div class="good-box-right">
            <div class="good-name">
              {{item.name}}
            </div>
            <div class="good-cost">
              <span class="good-price">&yen{{item.price}}</span>
              <span class="good-count">✖ {{item.count}}</span>
            </div>
          </div>
        </div>
      </Scroll>

      <!--底边结算栏-->
      <cartBottomNavBar></cartBottomNavBar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import cartBottomNavBar from './children/cartBottomNavBar'

  import { debounce } from 'common/debounce'

  import { mapGetters } from 'vuex'

  export default {
    name: "cart",
    data() {
      return {

      };
    },
    computed:{
      ...mapGetters([
        'cartList',
        'cartLength',
      ]),
    },
    methods: {
      // 点击更改商品选中的状态
      changeCheckBox(item){
        item.checked = !item.checked;
      },
      // 图片加载完成事件
      imgLoaded(){
        this.$refs.scroll.scroll.refresh();
      },
      // 点击商品图片跳转到商品页面
      goDetail(id){
        this.$router.push('/detail/'+id);
      }
    },
    activated(){
      // 如果添加了新定商品，重新计算可以滚动的距离
      this.$refs.scroll.scroll.refresh();
    },
    components: {
      NavBar,
      cartBottomNavBar,
      Scroll,
    },
  }
</script>

<style scoped>

  .content{
    position: absolute;
    top: 44px;
    bottom: 100px;
    left: 0;
    right: 0;
  }

  .nav-bar{
    font-size: 15px;
    position: relative;
    z-index: 40;
  }

  .good-box{
    height: 100px;
    line-height: 30px;
    font-size: 15px;
    width: 100%;
    padding: 10px;
    border-bottom: 2px solid #eee;
   display: flex;
  }

  .good-box-left{
    width: 104px;
    display: flex;
  }
  .check-box{
    margin-top: 30px;
  }
  .good-img{
    padding-left: 10px;
    height: 80px;
  }

  .good-box-right{
    flex: 1;
    font-size: 15px;
  }
  .good-name{
    width: 100%;
    height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .good-cost{
    width: 100%;
    height: 40px;
  }
  .good-count{
    float: right;
    padding-right: 10px;
  }
</style>

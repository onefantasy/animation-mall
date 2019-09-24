<template>
  <div>
    <!--顶部横栏-->
    <NavBar class="nav-bar">
      <div slot="left" @click="goback"> < </div>
      <div slot="center" class="nav-bar-item">
        <div :class="{active:current === 1}" @click="goTo(1)">商品</div>
        <div :class="{active:current === 2}" @click="goTo(2)">参数</div>
        <div :class="{active:current === 3}" @click="goTo(3)">评论</div>
        <div :class="{active:current === 4}" @click="goTo(4)">推荐</div>
      </div>
    </NavBar>
    
    <!--可滚动的主体部分-->
    <Scroll class="content"
            v-if="goodsDetail"
            ref="scroll"
            :probeTypeNum="3"
            @scroll="getScrollY">
      <Carousel v-if="goodsDetail" :carouselImg="goodsDetail.topImg" ref="carousel"></Carousel>
      <detailInfo :goods-info="goodsDetail"></detailInfo>
      <shop :goods-info="goodsDetail"></shop>
      <goodsParams :goods-detail="goodsDetail" ref="params"></goodsParams>
      <detailComment ref="comment"></detailComment>
      <goodsParamsImg :params-img="goodsDetail.imgInfo" @imgLoaded="computedTop"></goodsParamsImg>
      <recommend :recommend-data="recommendGood" @imgsLoaded="refreshScroll" ref="recommend"></recommend>
    </Scroll>

    <!--底边栏-->
    <bottomNavBar class="bottom-nav-bar" @clickAddToCart="addGoodToCart"></bottomNavBar>

    <!--回到顶部的箭头-->
    <GoTop :class="{DShow:positionY < -500}" @click.native="goTop"></GoTop>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import Carousel from 'components/common/carousel/Carousel'

  import GoTop from 'components/content/goTop/GoTop'

  import detailInfo from "./children/detailInfo"
  import shop from './children/shop'
  import bottomNavBar from './children/bottomNavBar'
  import detailComment from './children/detailComment'
  import goodsParams from './children/goodsParams'
  import recommend from './children/recommend'
  import goodsParamsImg from './children/goodsParamsImg'

  import { getDetailInfo } from 'network/detail'
  import { getGoodsComics,getGoodsAnimation,getGoodsDerivative } from "network/home";

  import { mapActions } from 'vuex'

  export default {
    name: "detail",
    data() {
      return {
        // 商品的详细信息
        goodsDetail: null,
        // 商品推荐的商品
        recommendGood: null,
        // 记录页面已滚动过的距离
        positionY: 0,
        // 商品区域距离顶部的距离
        goodTop: 0,
        // 参数区域距离顶部的距离
        paramsTop: null,
        // 评论区域距离顶部的距离
        commentTop: null,
        // 推荐区域距离顶部的距离
        recommendTop: null,
      };
    },
    computed:{
      // 计算可视区域所在的页面区域
      current(){
        if(-this.positionY >= this.recommendTop )
          return 4;
        else if(-this.positionY >= this.commentTop)
          return 3;
        else if(-this.positionY >= this.paramsTop)
          return 2;
        else
          return 1;
      },
    },
    deactivated(){

    },
    activated(){
      let goodsId = this.$route.params.id;
      getDetailInfo(goodsId).then(res => this.goodsDetail = res.data);
      if(goodsId < 200){
        getGoodsComics().then(res => this.recommendGood = res.data);
      }else if(goodsId < 300){
        getGoodsAnimation().then(res => this.recommendGood = res.data);
      }else if(goodsId < 400){
        getGoodsDerivative().then(res => this.recommendGood = res.data);
      }
      console.log();
    },
    watch:{
      // 监听路由的变化
      "$route":"changeRoute"
    },
    created(){

    },
    methods: {
      // 获取添加购物车的actions函数
      ...mapActions([
        'addToCart'
      ]),
      // 返回上一页
      goback(){
        this.$router.go(-1);
      },
      // 因为图片加载完成，重新计算可滑动的高度
      refreshScroll(){
        // 重新计算可以滚动的距离
        this.$refs.scroll.scroll.refresh();
        // 计算各个部分距离顶部的距离
        /*this.paramsTop = this.$refs.params.$el.offsetTop;
        this.commentTop = this.$refs.comment.$el.offsetTop;
        this.recommendTop = this.$refs.recommend.$el.offsetTop;
        console.log("recommendTop",this.recommendTop);*/
      },
      // 记录已经滚动的页面的距离
      getScrollY(position){
        this.positionY = position.y;
      },
      // 回到顶部的函数
      goTop(){
        this.$refs.scroll.scroll.scrollTo(0,0,500);
      },
      // 监听路由发生了变化
      changeRoute(){
        // 路由发生了变化之后，重新请求数据，然后渲染页面，然后滑动到页面顶部
        if(this.$route.path.indexOf('/detail/') !== -1){
          let goodsId = this.$route.params.id;
          getDetailInfo(goodsId).then(res => this.goodsDetail = res.data);
          if(goodsId < 200){
            getGoodsComics().then(res => this.recommendGood = res.data);
          }else if(goodsId < 300){
            getGoodsAnimation().then(res => this.recommendGood = res.data);
          }else if(goodsId < 400){
            getGoodsDerivative().then(res => this.recommendGood = res.data);
          }
          // 页面跳转后回到顶部
          if(this.$refs.scroll.scroll)
            this.$refs.scroll.scroll.scrollTo(0,0,0);
        }
      },
      // 点击顶部导航栏进行跳转
      goTo(index){
        switch(index){
          case 1:
            this.$refs.scroll.scroll.scrollTo(0,-this.goodTop,500);
            break;
          case 2:
            this.$refs.scroll.scroll.scrollTo(0,-this.paramsTop,500);
            break;
          case 3:
            this.$refs.scroll.scroll.scrollTo(0,-this.commentTop,500);
            break;
          case 4:
            this.$refs.scroll.scroll.scrollTo(0,-this.recommendTop,500);
            break;
          default:
            break;
        }
      },
      // 计算各个部分距离顶部的距离
      computedTop(){
        // 计算各个部分距离顶部的距离
        this.paramsTop = this.$refs.params.$el.offsetTop;
        this.commentTop = this.$refs.comment.$el.offsetTop;
        setTimeout(()=>{
          this.recommendTop = this.$refs.recommend.$el.offsetTop;
        },100);
      },
      // 添加商品到购物车
      addGoodToCart(){
        let good = {};
        good.img = this.goodsDetail.imgInfo[0];
        good.name = this.goodsDetail.info.name;
        good.id = this.goodsDetail.id;
        good.price = this.goodsDetail.info.price;
        good.count = 1;
        good.checked = true;
        this.addToCart(good).then(()=>{
          this.$toast.showToast('添加成功!');
        });
      }

    },
    components: {
      NavBar,
      Scroll,
      Carousel,
      detailInfo,
      shop,
      bottomNavBar,
      detailComment,
      goodsParams,
      recommend,
      goodsParamsImg,
      GoTop,
    },
  }
</script>

<style scoped>

  .DShow{
    display: block;
  }

  .active{
    color: var(--color-tint);
  }

  .nav-bar{
    background-color: #fff;
    color: #999;
    position: fixed;
    top: 0;
    z-index: 30;
  }
  .nav-bar-item{
    display: flex;
  }
  .nav-bar-item div{
    flex: 1;
    text-align: center;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 55px;
    left: 0;
    right: 0;
    z-index: 20;
    background-color: #fff;
  }

  .bottom-nav-bar{
    position: fixed;
    bottom: 0;
    z-index: 30;
  }
</style>

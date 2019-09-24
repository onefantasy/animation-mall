<template>
  <div class="home-box">
    <!--顶部导航栏-->
    <NavBar class="nav-bar">
      <div slot="center">动漫街</div>
    </NavBar>

    <Scroll class="content"
            :pullUpLoad="true"
            @loadMore="getMore"
            ref="scroll"
            :probeTypeNum="3"
            @scroll="getScroll">
      <!--轮播图 || 走马灯-->
      <Carousel :carouselImg="carouselImg"></Carousel>
      <!--推荐栏-->
      <homeRecommend :recommend="recommend"></homeRecommend>
      <!--特别活动-->
      <homeFeatureImg :feature="feature"></homeFeatureImg>
      <!--tab bar-->
      <TabBar :imgsArr="goodsShow" @imgsLoaded="refresh" @changTab="changTabFlag" @clickGoods="goDeatail"></TabBar>
    </Scroll>
    
    <!--重回该界面时的遮罩，优化用户体验-->
    <div class="mask" :class="{DShow:showMask}"></div>

    <GoTop @click.native="goTop" :class="{DShow:positionY < -500}"></GoTop>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Carousel from 'components/common/carousel/Carousel'
  import Scroll from 'components/common/scroll/Scroll'

  import TabBar from 'components/content/tabbar/TabBar'
  import GoTop from 'components/content/goTop/GoTop'

  import homeRecommend from './children/homeRecommend'
  import homeFeatureImg from './children/homeFeatureImg'

  import { getCarouselImg,getRecommend,getFeature,getGoodsComics,getGoodsAnimation,getGoodsDerivative} from "network/home";

  export default {
    name: "home",
    data() {
      return {
        // 轮播图图片
        carouselImg:[],
        // 推荐的内容
        recommend: [],
        // 特别活动图片
        feature: {},
        // 漫画商品
        goodsComicsPage: 0,
        goodsComics:[],
        // 动漫商品
        goodsAnimationPage: 0,
        goodsAnimation:[],
        // 周边商品
        goodsDerivativePage: 0,
        goodsDerivative:[],
        // 传给tabbar的数据
        goodsShow:[],
        // tab flag
        tabFlag: 'comics',
        // 垂直方向滚动的距离
        scrollY: 0,
        positionY: 0,
        // 是否显示页面的遮罩
        showMask: false,
      };
    },
    methods: {
      // 更改tab flag，更改需要展示的商品
      changTabFlag(tabName){
        this.tabFlag = tabName;
        // 重新计算可滑动的高度
        this.$refs.scroll.scroll.refresh();
        switch(tabName){
          case 'comics':
            this.goodsShow = this.goodsShow.splice(0,0);
            this.goodsShow = this.goodsShow.concat(this.goodsComics);
            break;
          case 'animation':
            this.goodsShow = this.goodsShow.splice(0,0);
            this.goodsShow = this.goodsShow.concat(this.goodsAnimation);
            break;
          case 'derivative':
            this.goodsShow = this.goodsShow.splice(0,0);
            this.goodsShow = this.goodsShow.concat(this.goodsDerivative);
            break;
          default:
            break;
        }
      },

      // 上拉加载更多
      getMore(){
        switch(this.tabFlag){
          case 'comics':
            if(this.goodsComicsPage >= 35) {
              this.$refs.scroll.scroll.finishPullUp();
              return;
            }
            getGoodsComics(this.goodsComicsPage).then(res => {
              this.goodsComics = this.goodsComics.concat(res.data);
              this.goodsComicsPage += 5;
              this.goodsShow = this.goodsComics;
            }).catch(
              err => {
                console.log(err);
              }
            ).finally(()=>{
              // 完成本次上拉
              this.$refs.scroll.scroll.finishPullUp();
            });
            break;
          case 'animation':
            if(this.goodsAnimationPage >= 35) {
              this.$refs.scroll.scroll.finishPullUp();
              return;
            };
            getGoodsAnimation(this.goodsAnimationPage).then(res => {
              this.goodsAnimation = this.goodsAnimation.concat(res.data);
              this.goodsAnimationPage += 5;
              this.goodsShow = this.goodsAnimation;
            }).catch(
              err => {
                console.log(err);
              }
            ).finally(()=>{
              // 完成本次上拉
              this.$refs.scroll.scroll.finishPullUp();
            });
            break;
          case 'derivative':
            if(this.goodsDerivativePage >= 35) {
              this.$refs.scroll.scroll.finishPullUp();
              return;
            };
            getGoodsDerivative(this.goodsDerivativePage).then(res => {
              this.goodsDerivative = this.goodsDerivative.concat(res.data);
              this.goodsDerivativePage += 5;
              this.goodsShow = this.goodsDerivative;
            }).catch(
              err => {
                console.log(err);
              }
            ).finally(()=>{
              // 完成本次上拉
              this.$refs.scroll.scroll.finishPullUp();
            });
            break;
          default:
            // 完成本次上拉
            this.$refs.scroll.scroll.finishPullUp();
            break;
        }
      },
      // 刷新可滑动的高度
      refresh(){
        // 重新计算可滑动的高度
        this.$refs.scroll.scroll.refresh();
      },

      // 监听滚动的距离
      getScroll(position){
        /*console.log(position);
        let tab_header = document.querySelectorAll(".el-tabs__header")[0];
        if(position.y <= -502 && !tab_header.className.includes("fixed")) tab_header.className += " fixed";
        if(position.y >-502 && tab_header.className.includes("fixed")) tab_header.className = "el-tabs__header is-top";*/
        this.positionY = position.y;
      },

      // 跳转到商品详情页面
      goDeatail(id){
        this.$router.push('/detail/'+id);
      },
      // 返回页面顶部
      goTop(){
        this.$refs.scroll.scroll.scrollTo(0,0,1000);
      }
    },
    deactivated(){
      this.scrollY = this.positionY;
    },
    activated(){
      // 显示页面的遮罩，在100ms后再次隐藏遮罩
      this.showMask = true;

      // 一旦回到该页面，再次滚动到上次离开的位置
      setTimeout(()=>{
        // 滚动到上次用户离开时的位置
        this.$refs.scroll.scroll.scrollTo(0,this.scrollY,0);
        // 隐藏遮罩
        this.showMask = false;
      },100);
    },
    created(){
      // 请求轮播图的图片
      getCarouselImg().then(res => this.carouselImg = res.data);
      // 请求推荐的的内容
      getRecommend().then(res => this.recommend = res.data);
      // 请求特别活动的内容（图片以及链接）
      getFeature().then(res => this.feature = res.data);
      // 请求漫画商品内容
      getGoodsComics(this.goodsComicsPage).then(res => {
        this.goodsComics = res.data;
        this.goodsComicsPage += 5;
        // 初始化tab bar下需要展示的商品的内容
        this.goodsShow = this.goodsComics;
      });
      // 请求漫画商品内容
      getGoodsAnimation(this.goodsAnimationPage).then(res => {
        this.goodsAnimation = res.data;
        this.goodsAnimationPage += 5;
        // this.goodsShow = this.goodsAnimation;
      });
      // 请求漫画商品内容
      getGoodsDerivative(this.goodsDerivativePage).then(res => {
        this.goodsDerivative = res.data;
        this.goodsDerivativePage += 5;
      });
    },
    components: {
      NavBar,
      Carousel,
      homeRecommend,
      homeFeatureImg,
      TabBar,
      Scroll,
      GoTop,
    },
  }
</script>

<style>
</style>

<style scoped>
  .nav-bar{
    position: relative;
    z-index: 10;
  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 55px;
    background-color: #fff;
  }
  
  .mask{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 50px;
    background-color: #fff;
    z-index: 10;
    display: none;
  }

  .DShow{
    display: block;
  }
</style>

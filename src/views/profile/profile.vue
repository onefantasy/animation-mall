<template>
  <div>
    <!--顶部导航栏-->
    <NavBar class="nav-bar">
      <div slot="center">我的</div>
    </NavBar>

    <!--header-->
    <el-container>
      <el-header class="profile-header">
        <profileHeader></profileHeader>
      </el-header>
      <el-main class="profile-main">
        <profileProperty></profileProperty>
      </el-main>
      <el-main class="profile-main borderTop">
        <operation>
          <i class="el-icon-message" slot="icon"></i>
          <div slot="word" class="borderBottom">我的消息</div>
        </operation>
        <operation>
          <i class="el-icon-goods" slot="icon"></i>
          <div slot="word" class="borderBottom">积分商城</div>
        </operation>
        <operation>
          <i class="el-icon-info" slot="icon"></i>
          <div slot="word">会员卡</div>
        </operation>
      </el-main>
      <el-main class="profile-main borderTop">
        <operation @click.native="clickMyCart">
          <div slot="word" class="borderBottom">我的购物车</div>
        </operation>
        <operation>
          <i class="el-icon-sold-out" slot="icon"></i>
          <div slot="word">下载购物APP</div>
        </operation>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import profileHeader from './children/profileHeader'
  import profileProperty from './children/profileProperty'
  import operation from './children/operation'

  export default {
    name: "profile",
    data() {
      return {};
    },
    methods: {
      clickMyCart(){
        this.$router.push('/cart');
      },
    },
    components: {
      NavBar,
      profileHeader,
      profileProperty,
      operation,
    },
  }
</script>

<style scoped>
  .nav-bar{
    box-shadow: none;
  }

  .profile-header{
    width: 100%;
    height: 120px !important;
    background-color: var(--color-tint);
  }

  .profile-main{
    width: 100%;
    padding: 0 !important;
  }

  .borderTop{
    border-top: 10px solid #eee;
  }

  .borderBottom{
    border-bottom: 2px solid #eee;
  }
</style>

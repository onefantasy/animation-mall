<template>
  <div>
    <!--顶部栏-->
    <NavBar class="nav-bar">
      <span slot="left" class="el-icon-arrow-left" @click="goBack"></span>
      <div slot="center">个人信息</div>
    </NavBar>

    <!--个人信息列表-->
    <div class="content" v-if="userData.id">
      <userDetailItem>
        <div slot="key">头像</div>
        <img slot="value" :src="userData.img" alt="">
      </userDetailItem>
      <userDetailItem>
        <div slot="key">账号</div>
        <span slot="value">{{userData.id}}</span>
      </userDetailItem>
      <userDetailItem>
        <div slot="key">用户名</div>
        <span slot="value">{{userData.name || "尚未填写"}}</span>
      </userDetailItem>
      <userDetailItem>
        <div slot="key">我的号码</div>
        <span slot="value">{{userData.phone || "尚未填写"}}</span>
      </userDetailItem>
      <userDetailItem>
        <div slot="key">我的地址</div>
        <span slot="value">{{userData.address || "尚未填写"}}</span>
      </userDetailItem>
      <userDetailItem>
        <div slot="key">我的邮箱</div>
        <span slot="value">{{userData.mail || "尚未填写"}}</span>
      </userDetailItem>
      <div class="button-box">
        <el-button type="primary" class="login-button" @click.native="goProfile">退出账号</el-button>
      </div>
      <div class="button-box">
        <el-button type="primary" class="login-button" @click.native="goLogin">切换账号</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import userDetailItem from './children/userDetailItem'

  import { mapGetters,mapActions } from 'vuex'

  export default {
    name: "userDetail",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'userData',
      ]),
    },
    methods: {
      ...mapActions([
        'setUser'
      ]),

      // 返回上一个页面
      goBack(){
        this.$router.go(-1);
      },
      // 结束当前账号的登录状态
      endLogin(){
        this.setUser({operation: "logout"}).then(()=>{
          this.$toast.showToast('已退出当前账号!');
        });
      },
      // 切换账户，跳转到登录页面
      goLogin(){
        this.endLogin();
        this.$router.push("/login");
      },
      // 退出当前账号，返回到 我的 页面
      goProfile(){
        this.endLogin();
        this.$router.push("/profile");
      }
    },
    components: {
      NavBar,
      userDetailItem,
    },
  }
</script>

<style scoped>

  .nav-bar{
    position: relative;
    z-index: 30;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 20;
    font-size: 15px;
  }

  .button-box{
    padding: 10px 10px 0 ;
    width: 100%;
  }

  .login-button{
    width: 100% !important;
    background-color: var(--color-tint) !important;
    border-color: var(--color-tint) !important;
  }
</style>

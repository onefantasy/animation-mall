<template>
  <div>
    <NavBar>
      <span class="el-icon-arrow-left" slot="left" @click="goBack"></span>
      <div slot="center">登录</div>
    </NavBar>

    <div class="content">
      <div class="content-item">
        <span>账号:</span>
        <el-input
          v-model="user"
          placeholder="请输入账号"
          @keyup.enter.native="login">
        </el-input>
      </div>
      <div class="content-item">
        <span>密码:</span>
        <el-input
          v-model="password"
          type="password"
          placeholder="请输入密码"
          @keyup.enter.native="login">
        </el-input>
      </div>
      <div class="button-box">
        <el-button type="primary" class="login-button" @click.native="login">登录</el-button>
      </div>
      <div class="button-box">
        <el-button type="primary" class="login-button" @click.native="reset">重置</el-button>
      </div>
      <div class="button-box">
        <el-button type="primary" class="login-button" @click.native="goRegister">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import { proving,getUserInfo } from 'network/login'

  import { mapActions } from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        user: null,
        password: null
      };
    },
    methods: {
      ...mapActions([
        'setUser'
      ]),

      // 返回上一个页面
      goBack(){
        this.$router.push('/profile');
      },
      // 登录验证
      login(){
        if(!this.user || !this.password){
          this.$toast.showToast('请先输入账号与密码');
          return;
        }
        proving(this.user,this.password).then(res =>{
          if(!res.data.login){
            this.$toast.showToast('账号或密码错误!');
            return;
          }
          this.$toast.showToast('登陆成功!');
          let user = this.user;
          // 重置
          this.reset();
          //  返回 “我的” 页面
          this.$router.push('/profile');
          return getUserInfo(user);
        }).then( res => {
          if(res.data){
            this.setUser({isLogin: true,...res.data});
          }
        });
      },
      // 重置按钮
      reset(){
        this.user = null;
        this.password = null;
      },
      // 注册按钮，跳转到注册页面
      goRegister(){
        this.$router.push('/register');
      }
    },
    components: {
      NavBar,
    },
  }
</script>

<style scoped>

  .content{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 20;
    padding: 100px 20px;
  }

  .content-item{
    display: flex;
    padding-bottom: 10px;
  }
  .content-item span{
    width: 60px;
    font-size: 20px;
    line-height: 40px;
  }

  .button-box{
    padding-bottom: 10px;
    width: 100%;
  }

  .login-button{
    width: 100% !important;
    background-color: var(--color-tint) !important;
    border-color: var(--color-tint) !important;
  }
</style>

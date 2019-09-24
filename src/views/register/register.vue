<template>
  <div>
    <!--顶部横栏-->
    <NavBar class="nav-bar">
      <span class="el-icon-arrow-left" slot="left" @click="goLogin"></span>
      <div slot="center">注册页面</div>
    </NavBar>

    <!--主体部分-->
    <div class="content">
      <div class="content-item">
        <span>账号:</span>
        <el-input
          v-model="user"
          type="text"
          placeholder="请输入账号（9位纯数字）"
          @keyup.enter.native="registering">
        </el-input>
      </div>
      <div class="content-item">
        <span>密码:</span>
        <el-input
          v-model="password"
          type="password"
          placeholder="请输入密码（11位，必须有数字和字母）"
          @keyup.enter.native="registering">
        </el-input>
      </div>
      <div class="content-item">
        <span>邮箱:</span>
        <el-input
          v-model="mail"
          type="text"
          placeholder="请输入邮箱地址"
          @keyup.enter.native="registering">
        </el-input>
      </div>
      <div class="button-box">
        <el-button type="primary" class="register-button" @click.native="registering">注册</el-button>
      </div>
      <div class="button-box">
        <el-button type="primary" class="register-button">重置</el-button>
      </div>
    </div>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "register",
    data() {
      return {
        user: null,
        password: null,
        mail: null,
      };
    },
    methods: {
      // 返回到登录界面
      goLogin(){
        this.$router.push('/login');
      },

      // 注册
      registering(){
        // 正则表达式
        let reg_user = /(?=^.{9}$)(?=[0-9]{9}).*$/;
        let reg_password = /(?=^.{11}$)(?=.*[0-9])(?=.*[a-zA-Z])(?!.*\W).*$/;
        let reg_mail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        if(!reg_user.test(this.user) || !this.user){
          this.$toast.showToast("账号只能是纯数字，且必须是9位!");
          return;
        }
        if(!reg_password.test(this.password) || !this.password){
          this.$toast.showToast("密码必须得有11位，且必须包含数字和字母!");
          return;
        }
        if(!reg_mail.test(this.mail) || !this.mail){
          this.$toast.showToast("请输入有效的邮箱!");
          return;
        }

        // do something register ...

      },
    },
    components: {
      NavBar,
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
    padding: 100px 20px 0;
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

  .register-button{
    width: 100% !important;
    background-color: var(--color-tint) !important;
    border-color: var(--color-tint) !important;
  }
</style>

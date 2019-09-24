<template>
  <div class="profile-header-box">
    <div class="profile-header-left">
      <img v-if="userData.img" :src="userData.img" alt="">
      <img v-else src="~assets/imgs/profile/touxiang.jpg" alt="">
    </div>
    <div class="profile-header-center">
      <div>
        <div v-if="userData.name || userData.id" class="login" @click="goLogin">{{userData.name || userData.id}}</div>
        <div v-else class="login" @click="goLogin">登录/注册</div>
      </div>
      <div>
        <div v-if="userData.phone"><i class="el-icon-mobile-phone"></i> {{userData.phone}}</div>
        <div v-else><i class="el-icon-mobile-phone"></i> 暂无绑定手机号</div>
      </div>
    </div>
    <div class="profile-header-right">
      <i class="el-icon-arrow-right" @click="goUserDetail"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "profileHeader",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'userData'
      ]),
    },
    activated(){

    },
    methods: {
      // 跳转到登录页面
      goLogin(){
        if(this.$store.state.userInfo.id) return;
        this.$router.push('login');
      },
      // 跳转个人详细信息页面
      goUserDetail(){
        if(this.userData.id)
          this.$router.push('/userDetail');
        else
          this.$toast.showToast("请先登录!");
      },
    },
    components: {},
  }
</script>

<style scoped>

  .profile-header-box{
    display: flex;
    padding: 20px 0;
    font-size: 15px;
  }

  .profile-header-left{
    width: 80px;
  }
  .profile-header-left img{
    width: 80px;
    border-radius: 50%;
    /*解决3像素bug*/
    display: block;
  }

  .profile-header-center{
    flex: 1;
    color: #fff;
    padding-left: 10px;
  }
  .login{
    font-size: 25px;
    line-height: 50px;
  }

  .profile-header-right{
    width: 10px;
    line-height: 80px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
  }
</style>


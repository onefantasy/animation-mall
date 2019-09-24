<template>
  <div class="profile-property-box">
    <div class="profile-property-item">
      <p v-if="userData.money"><span class="number">{{userData.money}}</span>元</p>
      <p v-if="!userData.money"><span class="number">0.00</span>元</p>
      <p>我的余额</p>
    </div>
    <div class="profile-property-item">
      <p v-if="userData.discount"><span class="number">{{userData.discount}}</span>个</p>
      <p v-if="!userData.discount"><span class="number">0</span>个</p>
      <p>我的优惠</p>
    </div>
    <div class="profile-property-item point">
      <p v-if="userData.point"><span class="number">{{userData.point}}</span>分</p>
      <p v-if="!userData.point"><span class="number">0</span>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "profileProperty",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'userData'
      ]),
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .profile-property-box{
    display: flex;
    height: 100px;
    text-align: center;
    font-size: 15px;
  }

  .profile-property-item{
    flex: 1;
    border-right: 2px solid #eee;
    padding-top: 25px;
  }

  .number{
    font-size: 25px;
    color: red;
  }

  .point{
    border: none;
  }
</style>

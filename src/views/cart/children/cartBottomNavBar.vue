<template>
  <div class="cart-bottom-nav-bar-box">
    <el-row>
      <el-col :span="6">
        <el-checkbox
          :indeterminate="checkedNumber !== 0 && checkedNumber < cartLength"
          v-model="checkAll"
          @change="selectAll">
          全选
        </el-checkbox>
      </el-col>
      <el-col :span="10" class="cost">总计:{{cost}}元</el-col>
      <el-col :span="8" class="accounts" @click.native="accounts">去结算({{checkedNumber}})</el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "cartBottomNavBar",
    data() {
      return {

      };
    },
    computed:{
      ...mapGetters([
        'cartList',
        'cartLength',
        'userData'
      ]),
      // 计算已经选中的商品的数量
      checkedNumber(){
        let len = 0;
        for(let item of this.cartList)
          if(item.checked)
            len++;
        return len;
      },
      // 是否已经全选
      checkAll:{
        get(){
          if(this.checkedNumber === 0 ) return false;
          return this.checkedNumber === this.cartLength;
        },
        set(){
          if(this.checkedNumber === 0 ) return false;
          return this.checkedNumber === this.cartLength;
        }
      },
      // 总计
      cost(){
        let cost = 0 ;
        this.cartList.filter(item => item.checked).forEach(item => {
          cost += item.price * item.count;
        });
        return cost;
      }
    },
    methods: {
      // 点击全选/取消全选
      selectAll(){
        let flag = !this.checkAll;
        this.cartList.forEach(item=>{
          item.checked = flag;
        });
      },
      // 点击结算按钮的事件
      accounts(){
        if(!this.userData.id){
          this.$toast.showToast('请先登录!');
          return;
        }
        if(this.checkedNumber === 0){
          this.$toast.showToast('请先勾选结算的商品!');
          return;
        }
      },
    },
    components: {},
  }
</script>

<style scoped>

  .cart-bottom-nav-bar-box{
    position: fixed;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    bottom: 50px;
    width: 100%;
    border-top: 2px solid #eee;
    background-color: #fff;
    z-index: 10;
  }


  .cost{
    text-align: left;
  }

  .accounts{
    background-color: red;
    color: #fff;
  }
</style>

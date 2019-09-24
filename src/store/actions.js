import Vue from 'vue'

export default {
  // 添加购物车
  addToCart(store,payload){
    return new Promise((resolve, reject)=>{
      resolve();
      if(store.state.cart){
        for(let item of store.state.cart){
          if(item.id === payload.id){
            item.count += payload.count;
            return;
          }
        }
      }
      store.state.cart.push(payload);
    });
  },

  // 用户登录或者退出操作
  setUser(store,payload){
    if(payload.operation === 'logout'){
      return new Promise((resolve, reject)=>{
        resolve();
        store.state.userInfo = {};
      });
    }else{
      let userInfo = store.state.userInfo;
      for(let key in payload){
        Vue.set(userInfo,key,payload[key]);
      }
    }
  }
};

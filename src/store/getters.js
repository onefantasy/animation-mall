export default {
  cartList(state){
    return state.cart;
  },
  cartLength(state){
    return state.cart.length;
  },
  userData(state){
    return state.userInfo;
  }
};

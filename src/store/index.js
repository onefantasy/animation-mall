import Vue from 'vue'
import Vuex from "vuex"

import actions from './actions'
import getters from './getters'

// 1.安装
Vue.use(Vuex);

const state = {
  cart:[],
  userInfo:{},
};

// 2.实例化对象
let store = new Vuex.Store({
  state,
  actions,
  getters,
});

// 3.挂载
export default store;

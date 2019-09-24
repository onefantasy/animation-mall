import { request,requestPost } from './index'

export function proving(user,password){
  return requestPost('./proving',{user,password});
}

export function getUserInfo(id){
  return request({
    url: '/userInfo',
    params:{
      id,
    }
  });
}

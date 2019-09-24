import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://localhost:8082'
  });

  // 设置拦截器

  // 返回请求
  return instance(config);
}

// post请求
export function requestPost(url,data){
  let HTTP = axios.create({
    baseURL: "http://localhost:8082",
    headers: {"Control-Type":"application/x-www-form-urlencoded"},
  });

  return HTTP.post(url,data);
}

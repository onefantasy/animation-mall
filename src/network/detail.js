import { request } from "./index.js"

export function getDetailInfo(id){
  return request({
    url: '/detailGoodsInfo',
    params:{
      id,
    }
  });
}

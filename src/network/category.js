import { request } from './index'

export function getCategoryData(){
  return request({
    url: '/categoryData'
  });
}

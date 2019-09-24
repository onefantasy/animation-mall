import { request } from './index.js'

export function getCarouselImg(){
  return request({
    url: '/homeCarouselImg'
  });
}

export function getRecommend(){
  return request({
    url: '/homeRecommend'
  });
}

export function getFeature(){
  return request({
    url: '/homeFeature'
  });
}

export function getGoodsComics(page){
  return request({
    url: '/homeGoodsComics',
    params: {
      page,
    }
  });
}

export function getGoodsAnimation(page){
  return request({
    url: '/homeGoodsAnimation',
    params: {
      page,
    }
  });
}

export function getGoodsDerivative(page){
  return request({
    url: '/homeGoodsDerivative',
    params: {
      page,
    }
  });
}

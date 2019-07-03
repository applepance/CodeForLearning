import jsonp from './jsonp';
import { URL, PARAM, OPTION } from './config'

export function getCarousel() {
  return jsonp(
    URL.carousel,
    {
      ...PARAM,
      _: new Date().getTime(),
      g_tk: 5381,
      uin: 0,
      platform: 'h5',
      needNewCode: 1
    },
    OPTION
  )
}

export function getNewAlbum() {
  return jsonp(
    URL.newAlbum,
    {
      ...PARAM,
      g_tk: 5381,
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0,
      data: `{"albumlib":{"method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},"module":"music.web_album_library"}}`
    },
    {
      param: 'callback',
      prefix: 'callback'
    }
  )
}
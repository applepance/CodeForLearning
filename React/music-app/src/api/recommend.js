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
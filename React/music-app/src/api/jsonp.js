import originalJsonp from 'jsonp';

const jsonp = (url, data, option) => {
  return new Promise((resolve, reject) => {
    originalJsonp(buildUrl(url, data), option, (err, res) => {
      if (!err) {
        resolve(res);
      } else {
        reject(err);
      }
    })
  })
}

/**
 * @param {*} url baidu.com
 * @param {*} data {a:1, b:2}
 * baidu.com?a=1&b=2
 */
function buildUrl (url, data) {
  let param = [];
  for(var k in data) {
    // decodeURIComponent
    param.push(`${k}=${encodeURIComponent(data[k])}`);
  }
  let paramStr = param.join('&');
  if(url.indexOf('?') === -1) {
    url += "?" + paramStr;
  } else {
    url += "&" + paramStr;
  }
  return url;
}

export default jsonp;
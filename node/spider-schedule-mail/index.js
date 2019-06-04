const superagent = require('superagent');

const local = 'jiangxi/anyuan-county'
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`
const getWeatherTips = function () {
  return new Promise((resolve, reject) => {
    superagent.get(weatherUrl)
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          
        }
      })
  })
}
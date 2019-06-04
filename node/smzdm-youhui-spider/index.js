const request = require('request');
const cheerio = require('cheerio');

request('http://www.smzdm.com/youhui/',
  (err, res) => {
    if (!err) {
      const body = res.body;
      const $ = cheerio.load(body, {
        decodeEntities: false
      })
      $('.list.list_preferential')
        .each(function () {
          const price = $('.itemName .red', this)
            .text().trim();
          let title = $('.itemName a', this).text();
          console.log({
            title,
            price,
          })
        })
    }
  })

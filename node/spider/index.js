const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const url = 'https://weibo.com';
const imageDir = './math/';
const newsDir = './new/';

const doSpider = (childUrl, newUrls, time) => {
  https.get(childUrl, res => {
    // 源源不断收到数据
    if (time === 0) {
      const redirectUrl = res.headers['location'];
      console.log(res);
      doSpider(redirectUrl, newUrls, ++time);
    } else {
      let html = '';
      res.on('data', chunk => {
        html += chunk;
      });
      // 完毕
      res.on('end', () => {
        const $ = cheerio.load(html);
        let news = [];
        $('.UG_list_b').each(function () {
          const picUrl = $('.pic.W_piccut_v img', this).attr('src');
          const title = $('.list_des .list_title_b a', this).text();
          const newUrl = $('.list_des .list_title_b a', this).attr('href');
          const userImg = $('.subinfo_box a .subinfo_face img', this).attr('src');
          const userName = $('.subinfo_box a .subinfo', this).text();
          const time = $('.subinfo_box .subinfo.S_txt2', this).text();
          // console.log(picUrl);
          const newitem = {
            title,
            picUrl,
            newUrl,
            userImg,
            userName,
            time
          }
          news.push(newitem);
          newUrls.push(newUrl);
        })
        saveLocalData(0, news);
      })
    }
  })
}

function doSpiderChild(childUrl, i) {

  https.get(url + childUrl, res => {
    // 源源不断收到数据
    let html = '';
    res.on('data', chunk => {
      html += chunk;
    });
    console.log(html);
    // 完毕
    res.on('end', () => {
      const $ = cheerio.load(html);
      let types = [];
      var newpage = {};
      $('.UG_list_e').each(function () {
        const picUrl = $('.list_nod .pic img', this).attr('src');
        const title = $('.list_title', this).text();
        const des = $('.list_nod .list_des', this).text();
        const userImg = $('.list_nod .subinfo_box a .subinfo_face img', this).attr('src');
        const userName = $('.list_nod .subinfo_box a .subinfo', this).text();
        const time = $('.list_nod .subinfo_box .subinfo.S_txt2', this).text();
        // console.log(picUrl);
        newpage = {
          title,
          picUrl,
          des,
          userImg,
          userName,
          time,
          newUrl: childUrl
        }
      })
      $('.UG_content_row').each(function () {
        let list = [];
        const title = $('.UG_row_title', this).text();
        $('.UG_list_v2 .list_des').each(function () {
          const content = $('.list_title_s', this).text();
          const userImg = $('.subinfo_box a .subinfo_face img', this).attr('src');
          const userName = $('.subinfo_box a .subinfo', this).text();
          const time = $('.subinfo_box .subinfo.S_txt2', this).text();
          const like = $('.subinfo_box.subinfo_box_btm .subinfo_rgt:eq(0) em:eq(1)', this).text();
          const comment = $('.subinfo_box.subinfo_box_btm .subinfo_rgt:eq(1) em:eq(1)', this).text();
          const relay = $('.subinfo_box.subinfo_box_btm .subinfo_rgt:eq(2) em:eq(1)', this).text();
          const newUrl = $('.list_title_s a', this).attr('href');
          let newitem = {
            content,
            userImg,
            userName,
            time,
            like,
            comment,
            relay,
            newUrl
          }
          list.push(newitem);
        })
        $('.UG_list_b').each(function () {
          const content = $('.list_des .list_title_s', this).text();
          const newUrl = $('.list_des .list_title_s a', this).attr('href');
          const img = $('.pic img', this).attr('src');
          const userImg = $('.list_des .subinfo_box a .subinfo_face img', this).attr('src');
          const userName = $('.list_des .subinfo_box a .subinfo', this).text();
          const time = $('.list_des .subinfo_box .subinfo.S_txt2', this).text();
          const like = $('.list_des .subinfo_box .subinfo_rgt:eq(0) em:eq(1)', this).text();
          const comment = $('.list_des .subinfo_box .subinfo_rgt:eq(1) em:eq(1)', this).text();
          const relay = $('.list_des .subinfo_box .subinfo_rgt:eq(2) em:eq(1)', this).text();
          let newitem = {
            img,
            content,
            userImg,
            userName,
            time,
            like,
            comment,
            relay,
            newUrl
          }
          list.push(newitem);
        })
        const newitem = {
          title,
          list
        }
        types.push(newitem);
      })
      newpage.types = types;
      saveLocalData(i + 1, newpage);
    })
  })
}

function saveLocalData(pageNum, news) {
  fs.writeFile(newsDir + `data${pageNum}.json`, JSON.stringify(news), 'utf-8', err => {
    if (!err) {
      console.log('数据保存成功！');
    }
  })
}
function downloadImage(picUrl) {
  https.get(picUrl, (res) => {
    res.setEncoding('binary');
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      const filename = path.basename(picUrl);
      fs.writeFile(imageDir + filename, data, 'binary', (err) => {
        if (!err) {
          console.log(filename, '保存成功');
        }
      })
    })
  })
}


var newUrls = [];
doSpider('https://weibo.com/?category=novelty', newUrls, 0);
// let i = 0;
// while (newUrls[i]) {
//   doSpiderChild(newUrls[i], i);
//   i++;
// }
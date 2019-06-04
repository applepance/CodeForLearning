const puppeteer = require('puppeteer');
const fs = require('fs');
const url = 'https://weibo.com';
const newsDir = './new/';
// https://passport.weibo.com/
// visitor/visitor?entry=miniblog
// &a=enter
// &url=https%3A%2F%2Fweibo.com%2F%3Fcategory%3Dnovelty
// &domain=.weibo.com
// &ua=php-sso_sdk_client-0.6.28
// &_rand=1559379350.1378
const sleep = (time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, time);
})
async function getindex(url) {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(100001)
  await page.goto('https://weibo.com' + url, {
    timeout: 100000,
    waitUntil: "domcontentloaded"
  });
  await sleep(80000);
  const data = await page.evaluate(() => {
    const lists = document.querySelectorAll('.UG_list_b');
    var newarr = [Array.from(lists)[3]]
    return newarr.map(node => {
      const title = node.querySelector('.list_des .list_title_b a').innerText;
      const picUrl = node.querySelector('.pic.W_piccut_v img').getAttribute('src');
      const newUrl = node.querySelector('.list_des .list_title_b a').getAttribute('href');
      const userImg = node.querySelector('.subinfo_box a .subinfo_face img').getAttribute('src');
      const userName = node.querySelector('.subinfo_box a .subinfo').innerText;
      const time = node.querySelector('.subinfo_box>.subinfo.S_txt2').innerText;
      return newitem = {
        title,
        picUrl,
        newUrl,
        userImg,
        userName,
        time
      }
    })
  });
  // browser.close()
  return data;
}

function saveLocalData(name, news) {
  fs.writeFile(newsDir + `${name}.json`, JSON.stringify(news), 'utf-8', err => {
    if (!err) {
      console.log('数据保存成功！');
    }
  })
}

async function getTopic(url, i, arr) {
  if (i < url.length) {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(100001)
    await page.goto('https://weibo.com' + url[i].newUrl, {
      timeout: 100000,
      waitUntil: "domcontentloaded"
    });
    await sleep(80000);
    var data = {}

    const item = await page.evaluate(() => {
      const picUrl = document.querySelector('.UG_list_e .list_nod .pic img').getAttribute('src');
      const topicTitle = document.querySelector('.UG_list_e .list_title').innerText;
      const des = document.querySelector('.UG_list_e .list_nod .list_des').innerText;
      const userImg = document.querySelector('.UG_list_e .list_nod .subinfo_box a .subinfo_face img').getAttribute('src');
      const userName = document.querySelector('.UG_list_e .list_nod .subinfo_box a .subinfo').innerText;
      const time = document.querySelector('.UG_list_e .list_nod .subinfo_box>.subinfo.S_txt2').innerText;
      const lists = document.querySelectorAll('.UG_content_row');
      return Array.from(lists).map(node => {
        const title = node.querySelector('.UG_row_title').innerText;

        const v2list = document.querySelectorAll('.UG_list_v2 .list_des');

        var v2Item = Array.from(v2list).map(node => {
          const content = node.querySelector('h3').innerText;
          const userImg = node.querySelector('.subinfo_box a .subinfo_face img').getAttribute('src');
          const userName = node.querySelector('.subinfo_box a .subinfo').innerText;
          const time = node.querySelector('.subinfo_box>.subinfo.S_txt2').innerText;
          const like = node.querySelector('.subinfo_box.subinfo_box_btm .subinfo_rgt:nth-of-type(1) em:nth-of-type(2)').innerText;
          const comment = node.querySelector('.subinfo_box.subinfo_box_btm .subinfo_rgt:nth-of-type(3) em:nth-of-type(2)').innerText;
          const relay = node.querySelector('.subinfo_box.subinfo_box_btm .subinfo_rgt:nth-of-type(5) em:nth-of-type(2)').innerText;
          const newUrl = node.getAttribute('href');
          return newitem = {
            content,
            userImg,
            userName,
            time,
            like,
            comment,
            relay,
            newUrl,
            img: []
          }
        })

        const alist = document.querySelectorAll('.UG_list_a');

        var aItem = Array.from(alist).map(node => {
          const content = node.querySelector('h3').innerText;
          const newUrl = node.getAttribute('href');
          const img1 = node.querySelector('.list_nod .pic:nth-of-type(1) img').getAttribute('src');
          const img2 = node.querySelector('.list_nod .pic:nth-of-type(2) img').getAttribute('src');
          const img3 = node.querySelector('.list_nod .pic:nth-of-type(3) img').getAttribute('src');
          const img4 = node.querySelector('.list_nod .pic:nth-of-type(4) img').getAttribute('src');
          const userImg = node.querySelector('.subinfo_box a .subinfo_face img').getAttribute('src');
          const userName = node.querySelector('.subinfo_box a .subinfo').innerText;
          const time = node.querySelector('.subinfo_box>.subinfo.S_txt2').innerText;
          const like = node.querySelector('.subinfo_box .subinfo_rgt:nth-of-type(2) em:nth-of-type(2)').innerText;
          const comment = node.querySelector('.subinfo_box .subinfo_rgt:nth-of-type(4) em:nth-of-type(2)').innerText;
          const relay = node.querySelector('.subinfo_box .subinfo_rgt:nth-of-type(6) em:nth-of-type(2)').innerText;
          return newitem = {
            img: [img1, img2, img3, img4],
            content,
            userImg,
            userName,
            time,
            like,
            comment,
            relay,
            newUrl
          }
        })

        const blist = document.querySelectorAll('.UG_list_b');

        var bItem = Array.from(blist).map(node => {
          const content = node.querySelector('.list_des h3').innerText;
          const newUrl = node.getAttribute('href');
          var img = ''
          if (node.querySelector('.pic img') != null) {
            img = node.querySelector('.pic img').getAttribute('src');
          }
          const userImg = node.querySelector('.list_des .subinfo_box a .subinfo_face img').getAttribute('src');
          const userName = node.querySelector('.list_des .subinfo_box a .subinfo').innerText;
          const time = node.querySelector('.list_des .subinfo_box>.subinfo.S_txt2').innerText;
          const like = node.querySelector('.list_des .subinfo_box .subinfo_rgt:nth-of-type(2) em:nth-of-type(2)').innerText;
          const comment = node.querySelector('.list_des .subinfo_box .subinfo_rgt:nth-of-type(4) em:nth-of-type(2)').innerText;
          const relay = node.querySelector('.list_des .subinfo_box .subinfo_rgt:nth-of-type(6) em:nth-of-type(2)').innerText;
          return newitem = {
            img: [img],
            content,
            userImg,
            userName,
            time,
            like,
            comment,
            relay,
            newUrl
          }
        })
        return newitem = {
          topicTitle,
          picUrl,
          des,
          userImg,
          userName,
          time,
          item: {
            title,
            list: [...v2Item, ...aItem, ...bItem]
          }
        }
      })
    });
    data = {
      title: item[0].topicTitle,
      picUrl: item[0].picUrl,
      des: item[0].des,
      userImg: item[0].userImg,
      userName: item[0].userName,
      time: item[0].time,
      newUrl: url[i].newUrl,
      types: item.map(node => node.item)
    }
    // browser.close()
    arr.push(data)
    return getTopic(url, ++i, arr);
  } else {
    return arr;
  }
}

async function getPage(url, i, arr, t, x) {
  if (i < url.length) {
    if (t < url[i].types.length) {
      if (x < url[i].types[t].list.length) {
        const browser = await puppeteer.launch({
          headless: false
        });
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(100001)
        await page.goto('https:' + url[i].types[t].list[x].newUrl, {
          timeout: 100000,
          waitUntil: "domcontentloaded"
        });
        await sleep(80000);
        var data = {}

        const Page = await page.evaluate(() => {
          var data = {}
          const content = document.querySelector('.WB_text.W_f14').innerText;
          const piclist = document.querySelectorAll('.S_bg1.S_line2.bigcursor.WB_pic');
          const picUrls = Array.from(piclist).map(node => {
            const picUrl = node.querySelector('img').getAttribute('src');
            return picUrl
          })
          const time = document.querySelector('.WB_detail>.WB_from.S_txt2>a').innerText;
          const userImg = document.querySelector('.WB_face>.face>a>img').getAttribute('src');
          const userName = document.querySelector('.WB_info>a').innerText;
          const like = document.querySelector('.WB_row_line>li:nth-of-type(4) em:nth-of-type(2)').innerText;
          const comment = document.querySelector('.WB_row_line>li:nth-of-type(3) em:nth-of-type(2)').innerText;
          const relay = document.querySelector('.WB_row_line>li:nth-of-type(2) em:nth-of-type(2)').innerText;

          const lists = document.querySelectorAll('.list_box>.list_ul>.list_li[comment_id]');
          const commentItems = Array.from(lists).map(node => {
            const userImg = node.querySelector('.WB_face>a>img').getAttribute('src');
            const userName = node.querySelector('.list_con>.WB_text>a[usercard]').innerText;

            const [frist, ...contentkey] = [...node.querySelector('.list_con>.WB_text').innerText.split('：')]
            const content = [...contentkey].toString();
            const time = node.querySelector('.WB_func>.WB_from').innerText
            const like = node.querySelector('.list_con>.WB_func [node-type=like_status]>em:nth-of-type(2)').innerText

            return newitem = {
              userImg,
              userName,
              content,
              time,
              like
            }
          })
          return data = {
            content,
            picUrls,
            time,
            userImg,
            userName,
            like,
            comment,
            relay,
            commentItems
          }
        });
        // browser.close()
        data = {
          newUrl: url[i].types[t].list[x].newUrl,
          ...Page
        }
        arr.push(data)
        return getPage(url, i, arr, t, ++x);
      } else {
        return getPage(url, i, arr, ++t, 0);
      }
    } else {
      return getPage(url, ++i, arr, 0, 0);
    }
  } else {
    return arr;
  }
}

getindex('/?category=novelty')
  .then(res => {
    saveLocalData('Index', res)
    let Topic = []
    getTopic(res, 0, Topic)
      .then(res => {
        saveLocalData('Topic', res)
        let Page = []
        getPage(res, 0, Page, 0, 0)
          .then(res => {
            saveLocalData('Page', res)
          })
      })
  })

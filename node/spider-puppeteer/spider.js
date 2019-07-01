const puppeteer = require('puppeteer');
const fs = require('fs');
const baseurl = 'https://weibo.com';
const Dir = './data/';

const sleep = (time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, time);
})

async function doSpider(url, pageFunction) {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(url, {
    timeout: 100000
  });
  await sleep(60321);
  if (page.url().indexOf(url) === -1) {
    console.log('+------------------------------------');
    console.log('|失败,当前页面:' + page.url());
    console.log('|再次跳转：    ' + url);
    console.log('+------------------------------------');
    browser.close();
    return doSpider(url, pageFunction);
  }
  const data = await page.evaluate(pageFunction, url);
  browser.close();
  return data;
}

async function runPromiseByQueue(myPromises) {
  return await myPromises.reduce(
    async (previousPromise, nextPromise) => previousPromise.then(await nextPromise),
    Promise.resolve([])
  );
}

function saveLocalData(name, data) {
  fs.writeFile(Dir + `${name}.json`, JSON.stringify(data), 'utf-8', err => {
    if (!err) {
      console.log(`${name}.json保存成功！`);
    }
  })
}

const spiderIndex = () => {
  const lists = document.querySelectorAll('.UG_list_b');
  var newarr = [Array.from(lists)[2], Array.from(lists)[3]]
  return newarr.map(node => {
    const title = node.querySelector('.list_des .list_title_b a').innerText;
    const picUrl = node.querySelector('.pic.W_piccut_v img').getAttribute('src');
    const newUrl = node.querySelector('.list_des .list_title_b a').getAttribute('href');
    const userImg = node.querySelector('.subinfo_box a .subinfo_face img').getAttribute('src');
    const userName = node.querySelector('.subinfo_box a .subinfo').innerText;
    const time = node.querySelector('.subinfo_box>.subinfo.S_txt2').innerText;
    return {
      title,
      picUrl,
      newUrl,
      userImg,
      userName,
      time
    }
  })
}

const spiderTopic = (url) => {
  const picUrl = document.querySelector('.UG_list_e .list_nod .pic img').getAttribute('src');
  const topicTitle = document.querySelector('.UG_list_e .list_title').innerText;
  const des = document.querySelector('.UG_list_e .list_nod .list_des').innerText;
  const userImg = document.querySelector('.UG_list_e .list_nod .subinfo_box a .subinfo_face img').getAttribute('src');
  const userName = document.querySelector('.UG_list_e .list_nod .subinfo_box a .subinfo').innerText;
  const time = document.querySelector('.UG_list_e .list_nod .subinfo_box>.subinfo.S_txt2').innerText;
  const lists = document.querySelectorAll('.UG_content_row');
  const types = Array.from(lists).map(node => {
    const title = node.querySelector('.UG_row_title').innerText;

    const v2list = node.querySelectorAll('.UG_list_v2 .list_des');

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

    const alist = node.querySelectorAll('.UG_list_a');

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

    const blist = node.querySelectorAll('.UG_list_b');

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
    return {
      title,
      list: [...v2Item, ...aItem, ...bItem]
    }
  })
  return {
    topicTitle,
    picUrl,
    des,
    userImg,
    userName,
    time,
    newUrl: url,
    types
  }
}

const spiderPage = (url) => {
  var data = {}
  const content = document.querySelector('.WB_text.W_f14').innerText;
  const piclist = document.querySelectorAll('.S_bg1.S_line2.bigcursor.WB_pic');
  const picUrls = Array.from(piclist).map(node => {
    const picUrl = node.querySelector('img').getAttribute('src');
    return picUrl;
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

    return {
      userImg,
      userName,
      content,
      time,
      like
    }
  })
  return data = {
    newUrl: url,
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
}

function start() {
  doSpider(baseurl + '/?category=novelty', spiderIndex)
    .then(async data => {
      await saveLocalData('Index', data);
      return data.map(item => item.newUrl);
    })
    .then(async (urls) => {
      let doSpiders = await urls.map(async url => {
        if (url[1] === '/') {
          let newdata = await doSpider('https:' + url, spiderTopic);
          return async (data) => [...data, newdata]
        } else {
          let newdata = await doSpider(baseurl + url, spiderTopic);
          return async (data) => [...data, newdata]
        }
      })
      let datas = await runPromiseByQueue(doSpiders);
      return datas;
    })
    .then(async data => {
      saveLocalData('Topic', data);
      let list = [];
      await data.forEach(item =>
        item.types.forEach(type =>
          type.list.forEach(item =>
            list.push(item.newUrl)
          )
        )
      )
      return list;
    })
    .then(async (urls) => {
      let doSpiders = await urls.map(async url => {
        if (url[1] === '/') {
          let newdata = await doSpider('https:' + url, spiderPage);
          return (data) => [...data, newdata]
        } else {
          let newdata = await doSpider(baseurl + url, spiderPage);
          return (data) => [...data, newdata]
        }
      })
      let datas = await runPromiseByQueue(doSpiders);
      return datas;
    })
    .then(async data => {
      saveLocalData('Page', data);
    })
}

start();
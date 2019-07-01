## 场景
---
前不久，在学校仿微博鲜知微信小程序的时候，正愁数据从哪来，翻到了数据一样的页面[微博新鲜事](https://weibo.com/?category=novelty)（需退出登录状态），接着用[cheerio](https://zhuanlan.zhihu.com/p/31624732)爬取数据。结果翻车了，检查了一下发现发出请求拿到的body是空的，到[微博新鲜事](https://weibo.com/?category=novelty)的网页源代码一看，发现...人家的html是js渲染的，应该是还有一次跳转。哇，好狠！

本着只要思想不滑坡，办法总比困难多的精神，我用上了[puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.18.1&show=outline)。

## puppeteer
-----
就我的使用体验来讲，puppeteer就像是一个完整的浏览器一样，它真正的去解析、渲染页面，所以上面提到因为跳转拿不到页面结构的问题也可以解决。

话不多说，先来安装试试吧，因为puppeteer还挺大的，安装就用cnpm吧（淘宝镜像的快很多）。

- 安装cnpm，有的话直接跳过

    `npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 安装puppeteer

    `cnpm i puppeteer -S`
- Hello World

    举一个栗子试试就爬[微博新鲜事](https://weibo.com/?category=novelty)的第一个选项的标题吧
![微博新鲜事](https://user-gold-cdn.xitu.io/2019/6/30/16ba762086ef5e7b?w=1280&h=628&f=png&s=218148)
    ```javascript
    const puppeteer = require('puppeteer');
    
    const url = 'https://weibo.com/?category=novelty';
    const sleep = (time) => new Promise((resolve, reject) => { // 因为中间包含一次人为设置的跳转所以只好搞一个sleep等跳转
      setTimeout(() => {
        resolve(true);
      }, time);
    })
    async function getindex(url) {
      const browser = await puppeteer.launch({  // 一个浏览器对象
        headless: false // puppeteer的功能很强大，但这里用不到无头，就关了
      });
      const page = await browser.newPage(); // 创建一个新页面
      await page.goto(url, { // 跳转到想要的url，并设置跳转等待时间
        timeout: 60000
      });
      await sleep(60000); // 等待第二次跳转完成
      const data = await page.$$eval('.UG_list_b', (lists) => { // 相当于document.querySelectorAll('.UG_list_b')
        var newarr = [Array.from(lists)[0]] // 因为只要第一个，所以把其他的去掉了，若要所有的结果直接取Array.from(lists)即可
        return newarr.map(node => { // 遍历数组选择标题
          const title = node.querySelector('.list_des .list_title_b a').innerText;
          return title;
        })
      });
      browser.close(); // 关闭浏览器
      return data;
    }
    
    getindex(url)
      .then(res => {
        console.log(res);
      })
    ```
    结果如下
![结果](https://user-gold-cdn.xitu.io/2019/6/30/16ba7823534673ed?w=345&h=38&f=png&s=2372)
简要的解释一下这里用到的API：

    - #### puppeteer.launch([object]):

        通过 puppeteer.launch([object]) 创建一个 Browser 对象，它通过接收一个非必须的对象参数进行配置。
    
        可以设置字段包括 defaultViewport (默认视口大小), ignoreHTTPSErrors (是否在导航期间忽略 HTTPS 错误), timeout (超时时限)等。

    - #### browser.newPage()

        通过 browser.newPage() 创建一个新的 Page 对象，在浏览器中会打开一个新的标签页。

    - #### page.goto(url[, options])
    
        根据传入的url，页面导航去相应的页面，它也通过接收一个非必须的对象参数进行配置。
        
        可以设置字段包括 timeout (跳转等待时限), waitUntil (满足什么条件认为页面跳转完成，默认为load)。
        
        但是从这个demo的逻辑来说，只有第二次跳转 https://passport.weibo.com/visitor/visitor?entry=miniblog&a=enter&url=https%3A%2F%2Fweibo.com%2F%3Fcategory%3Dnovelty&domain=.weibo.com&ua=php-sso_sdk_client-0.6.28&_rand=1559379350.1378 并渲染完成才认为页面跳转完成，而这第二次跳转是人为设计的，所以直接访问[微博新鲜事](https://weibo.com/?category=novelty)未跳转完成时返回的状态码仍是200而不是3开头的，使得难以区分是否跳转完成。
    
    - #### page.$$eval(selector, pageFunction[, ...args])
    
        selector是选择器，如'.class', '#id', 'a[href]'等
        
        pageFunction是在浏览器实例上下文中要执行的方法
        
        ...args是要传给 pageFunction 的参数。
        
        其作用相当于在页面上执行 Array.from(document.querySelectorAll(selector))，然后把匹配到的元素数组作为第一个参数传给 pageFunction 并执行，返回的结果也是 pageFunction 返回的。
        
        而 page.evaluate(pageFunction) 有大致相同的功能，还更灵活。
    
    - #### browser.close()
    
        这个没什么好说的，就是关闭浏览器，毕竟谷歌浏览器占用内存还是不少的，要是家里有矿的当我没说。
    
        更多详细信息可查询[文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.18.1&show=outline)

## 实际使用
---
需求是抓取微博新鲜事页面的标题、头图、作者、时间等信息。
![微博新鲜事](https://user-gold-cdn.xitu.io/2019/6/30/16ba762086ef5e7b?w=1280&h=628&f=png&s=218148)
并抓取对应话题点击进去的页面信息，包括其左边分类线戳的类别，类别对应下的所有微博，包括博文、博主、时间、转发数、评论数、点赞数。
![明天开奖话题](https://user-gold-cdn.xitu.io/2019/6/30/16ba7bfd9641c8c1?w=1296&h=936&f=png&s=451411)
还有，要抓取对应话题里所有对应博文的页面信息，包括博文博主，相应的转发、评论、点赞数，以及博文下的所有评论，包括评论层主头像、昵称、评论内容和点赞数。
![话题内微博](https://user-gold-cdn.xitu.io/2019/6/30/16ba7c564900c340?w=1135&h=877&f=png&s=420515)
并将信息都存成json文件。
- #### 分析
    需要暂存爬下来的url地址，并遍历存下爬取的信息。
    
    而且微博设置的障碍还不止有二次跳转，还有随机跳到到访问过于频繁，请24小时后试的页面和未登录状态下随机跳转到 https://weibo.com/login.php 以及 504，这个只要用 page.url() 获取当前网址比对处理即可。

    ![过于频繁](https://user-gold-cdn.xitu.io/2019/7/1/16ba94c208dca9cd?w=783&h=710&f=png&s=92442)

    ![504](https://user-gold-cdn.xitu.io/2019/7/1/16ba966e5d1a770d?w=826&h=197&f=png&s=16330)
    麻烦的只有页面类型复杂繁琐，话题页面有四图、一图、纯文本、视频类型，他们的DOM结构都不同，博文页面也有些许不同，但都不是技术难点。
    ![类型多](https://user-gold-cdn.xitu.io/2019/6/30/16ba7e7120452f51?w=705&h=871&f=png&s=423432)
- #### 实际代码
    直接上代码吧
    ```javascript
    const puppeteer = require('puppeteer');
    const fs = require('fs');
    const baseurl = 'https://weibo.com';
    const Dir = './data/';
    
    const sleep = (time) => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    })
    
    async function doSpider(url, pageFunction) { // 爬虫函数
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
    
    async function runPromiseByQueue(myPromises) {  //
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
      var newarr = [Array.from(lists)[0], Array.from(lists)[1]]
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
    ```
    运行过程简要说明：
    运行可以分三个过程（**爬** 新鲜事页面获取包括多个话题页面url在内的信息并存储、**并发爬** 话题页面获取包括多个博文页面url在内的信息并存储、**并发爬** 博文页面包括所有评论在内的信息并存储），并且数据可以通过存下来的newUrl字段来匹配主从，建立联系。
    
    我原来写过一个把所有爬数据的异步操作都串联起来的版本，但是效率太低了，就用数组的reduce方法挖坑排序后直接并发操作，大大提升了效率（我跟你港哦，这个reduce真的好好用豁）。
    
    下面是控制台输出和3个爬下来的数据文件（行数太多影响观感就格式化后截成图）：
    
    ![index](https://user-gold-cdn.xitu.io/2019/7/1/16bac0615d833de5?w=1048&h=459&f=png&s=62207)
    ![话题](https://user-gold-cdn.xitu.io/2019/7/1/16bac072b8ae1797?w=1125&h=856&f=png&s=117821)
    ![博文](https://user-gold-cdn.xitu.io/2019/7/1/16bac093d7eae3b8?w=1161&h=845&f=png&s=114008)
    ![控制台输出](https://user-gold-cdn.xitu.io/2019/7/1/16babfecb6f43ee5?w=1547&h=668&f=png&s=80501)
    
    这份代码只爬了新鲜事里的头两个话题，爬的页面加起来13个，并没有爬列表里所有项，要爬所有项的话，改相应那行的代码就好spiderIndex里newarr的值即可，如`var newarr = Array.from(lists)`。剩下的，就交给时间吧...建议睡个觉，起来说不定就好了，也说不定大眼怪看你请求太多，把你IP拒了。
    
    
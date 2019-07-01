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
    timeout: 100000
  });
  await sleep(80000); // 等待第二次跳转完成
  const data = await page.$$eval('.UG_list_b', (lists) => { // 相当于document.querySelectorAll('.UG_list_b')
    var newarr = [Array.from(lists)[0]] // 因为只要第一个，所以把其他的去掉了，若要所有的结果直接取Array.from(lists)即可
    return newarr.map(node => { // 遍历数组选择标题
      const title = node.querySelector('.list_des .list_title_b a').innerText;
      return title;
    })
  });
  browser.close();
  return data;
}

getindex(url)
  .then(res => {
    console.log(res);
  })
const puppeteer = require('puppeteer');
const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, time)
});
async function getLeetCode() {
  // 默认 以无头启动
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  page.setViewport({
    width: 1376,
    height: 768
  })
  await page.goto('https://leetcode-cn.com/u/yan-bo-yi', {
    waitUntil: 'networkidle0'
  });
  // 等待一秒
  await sleep(1000);
  // eval
  const data = await page.evaluate(() => {
    const rank = document.querySelector('.css-1x529is-RankNumber');
    return rank.innerText;
  });
  console.log('rank data', data);
  await page.screenshot({
    path: './yanboyi.png'
  })
  browser.close();
}
getLeetCode();

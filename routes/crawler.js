const router = require('koa-router')();
const { resolve } = require('path');
const url = 'https://movie.douban.com/tag/#/?sort=R&range=0,10&tags=';
const puppeteer = require('puppeteer');
router.get('/crawler', async (ctx, next) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'public/images/demo.png' });
    await page.pdf({ path: 'public/images/demo.pdf', format: 'A4' });
    // await page.on('response',function (e) {
    //     console.log(e);
    // });

    await browser.close();
    await ctx.render('demo',{title: 123,txt: '测试页面'});
});
module.exports = router;

const router = require('koa-router')();
router.get('/demo', async (ctx, next) => {
    await ctx.render('demo',{title: 123,txt: '测试页面'});
});
module.exports = router;

/** ROUTER
@ a dbo/swm.js

middleware

*/

var server = op.gg('server');
var main = server.subApp.get('main');
var bvt = op.gg('plugin.bootstrap.bvt').v4beta3;
var router = require('koa-router')();

log('[server.router.swt - init]');

router.post('/swm', async(ctx, next) => {
  var msg = ctx.request.body;
  //console.log();
  
  //await ctx.render('number', msg);
  log('[server.router.swm - post/swm msg.type] ' + msg.type);
  switch(msg.type){
    case 'search' : //搜索
      // - unfinished
      
      await ctx.render(bvt.rank, {rcs : await rank()});
      break;
    case 'detail' : //详情
      // - unfinished
      
      ctx.status = 204; //"no content"
      //log(*);
      log('[server.router.swm - post/rc msg.value] ' + msg.value);
      //ts_delete(msg.value);
      //await ctx.render(bvt.rank, {rcs : ts_delete(msg.value)});
      break;
    case 'possible' : //unknown
      // - unfinished
      
      var a = op.gg('coms').get('a');
      var named = new (a.rc(a.i['named']))();
      log('[server.router.swm - post/rc named.max()] ' + await named.max());
      await ctx.render(bvt.named, {nameds : {}});
      break;
    default :
      ctx.status = 204; //"no content"
      log('[server.router.swm - post/swm Illegal]');
      log(msg, 1);
  }
  await next();
});

main.use(router.routes()).use(router.allowedMethods());
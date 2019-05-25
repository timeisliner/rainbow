/** ROUTER
@ top dbo/rc.js

middleware

*/

var server = op.gg('server');
var main = server.subApp.get('main');
var bvt = op.gg('plugin.bootstrap.bvt').v4beta3;
var router = require('koa-router')();


log('[server.router.rc - init]');

router.post('/rc', async(ctx, next) => {
  var msg = ctx.request.body;
  //console.log();
  
  //await ctx.render('number', msg);
  log('[server.router.rc - post/rc msg.type] ' + msg.type);
  log('[server.router.rc - post/rc msg.value] ' + msg.value);
  switch(msg.type){
    case 'rank' :
      var top = op.gg('coms').get('top');
      var rc = top.get('dbo', top.get('id', 'rc'));
    
      await ctx.render(bvt.rank, {rcs : await rc.rank()});
      break;
    case 'delete' :
      var top = op.gg('coms').get('top');
      var rc = top.get('dbo', top.get('id', 'rc'));
      log(await rc.count(), 1);
      ctx.status = 204; //"no content"
      //log(*);
      
      //ts_delete(msg.value);
      //await ctx.render(bvt.rank, {rcs : ts_delete(msg.value)});
      break;
    case 'obj' :
      var a = op.gg('coms').get('a');
      var swm = a.get('dbo', a.get('id', 'swm'));
      //log(rc, 1)

      var result = await swm.search(msg.value);
      await ctx.render(bvt.obj, {rcs : result});
      // log(result[0], 1);
      // ctx.body = result.length ? JSON.stringify(result[0]) : 'no result';
      //log(await swm.init(), 1);
      //log(await swm.count(), 1);
      // var a = op.gg('coms').get('a');
      // var named = new (a.rc(a.i['named']))();
      // log('[server.router.rc - post/rc named.max()] ' + await named.max());
      // await ctx.render(bvt.named, {nameds : {}});
      break;
    case 'test' :
      
      break;
  }
  await next();
});

main.use(router.routes()).use(router.allowedMethods());
/** ROUTER
@ top.0.1 dbo/rc.js
  顺应top版本变化

middleware

*/

var server = op.c.get('server');
var main = server.subApp.get('main');
var bvt = op.c.get('plugin.bootstrap.bvt').v4beta3;
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
      var top = op.c.get('coms').get('top');
      var rc = top.dbo.get(top.id.get('rc'));
    
      await ctx.render(bvt.rank, {rcs : await rc.rank()});
      break;
    case 'delete' :
      var top = op.c.get('coms').get('top');
      var rc = top.dbo.get(top.id.get('rc'));
      log('[server.router.rc - post/rc > delete.remain]');
      log(await rc.count(), 1);
      ctx.status = 204; //"no content"
      //log(*);
      
      //ts_delete(msg.value);
      //await ctx.render(bvt.rank, {rcs : ts_delete(msg.value)});
      break;
    case 'obj' :
      var gr = op.c.get('coms').get('gr');
      var named = gr.dbo.get(gr.id.get('named'));
      //log(rc, 1)

      var result = await named.find(msg.value);
      await ctx.render(bvt.gr.test, {nameds : result, tools : op.lib});
      // log(result[0], 1);
      // ctx.body = result.length ? JSON.stringify(result[0]) : 'no result';
      //log(await swm.init(), 1);
      //log(await swm.count(), 1);
      // var a = op.c.get('coms').get('a');
      // var named = new (a.rc(a.i['named']))();
      // log('[server.router.rc - post/rc named.max()] ' + await named.max());
      // await ctx.render(bvt.named, {nameds : {}});
      break;
    case 'test' :
      log(msg.value, 1)
      var record = op.c.get('coms').get('record');
      var index = record.dbo.get(record.id.get('index'));
      
      var item = record.dbo.get(record.id.get('item'));
      // log('[server.router.rc - post/rc > test.find]');
      // log(await index.find(1), 1)
      // log('[server.router.rc - post/rc > test.last]');
      // log(await index.last(), 1)
      // log('[server.router.rc - post/rc > test.next]');
      // log(await index.next(), 1)
      // log('[server.router.rc - post/rc > test.off]');
      // log(await index.on(1), 1)
      // log('[server.router.rc - post/rc > test.find]');
      // log(await index.find(), 1)
      
      
      if(typeof msg.value == 'string' || typeof msg.value == 'number'){
        // var result = await item.find(msg.value);
        var result = await item.find(msg.value);
        await ctx.render(bvt.record.item, {items : result});
      }else{
        
      }
      break;
  }
  await next();
});

router.post('/db', async(ctx, next) => {
  var msg = ctx.request.body;
  log('[server.router.rc - post/db msg] ');
  log(msg, 1);
  
  await next();
});

main.use(router.routes()).use(router.allowedMethods());
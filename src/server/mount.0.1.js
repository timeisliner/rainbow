var koa = require('koa');

var views = require('koa-views');

var pug = require('koa-pug');

var stc = require('koa-static');

var bp = require('koa-bodyparser')({
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
});
var router = require('koa-router')();

var bvt = op.c.get('plugin.bootstrap.bvt').v4beta3;

var mongoose = require('koa-mongoose');


var VIEW_DEF_PATH = './server/pugs';
var VIEW_DEF_OPTS = { 
  extension: 'pug',
  map: {
    pug: 'pug'
  }
};
var STATIC_DEF_PATH = './server/libs/'
var MONGO_DEF_OPTIONS = {
  username: '',
  password: '',
  host: '127.0.0.1',
  port: 27017,
  database: 'rainbow',
  db: {
      native_parser: true
  },
  server: {
      poolSize: 5
  }
};


var subApp = new koa();

//koa-views
subApp.use(views(VIEW_DEF_PATH, VIEW_DEF_OPTS));
new pug().use(subApp);
//koa-static
subApp.use(stc(STATIC_DEF_PATH));
//koa-bodyparser
subApp.use(bp);
//koa-router
router.get('/', async(ctx, next) => {
  //console.log(this);
  await ctx.render(bvt.index, {title : 'Welcome to my server!'});
  await next();
});
subApp.use(router.routes()).use(router.allowedMethods());
//koa-mongoose
subApp.use(mongoose(MONGO_DEF_OPTIONS));

exports.subApp = subApp;
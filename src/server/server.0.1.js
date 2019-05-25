var koa = require('koa');

var mount = require('koa-mount');

var MOUNTED_DEF_SUB_APP_PATH = '/';
exports.obj = {
  app : new koa(),
  port : 3001,
  subApp : new Map(),
  listen(){
    
    this.subApp.set('main', require('./' + vc.get('server.mount')).subApp);
    //koa-mount
    this.app.use(mount(MOUNTED_DEF_SUB_APP_PATH, this.subApp.get('main')));
    
    require('./router/' + vc.get('server.router.rc'));
    require('./router/' + vc.get('server.router.swm'));
    require('./router/' + vc.get('server.router.grtest'));
    
    this.app.listen(this.port);
    log(`[server - start.listen]} server started on port ${this.port}`);
  }
}
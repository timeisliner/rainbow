var koa = require('koa');

var mount = require('koa-mount');

var MOUNTED_DEF_SUB_APP_PATH = '/';
exports.obj = {
  app : new koa(),
  port : 3001,
  subApp : new Map(),
  listen(){
    
    this.subApp.set('main', require('./mount.js').subApp);
    //koa-mount
    this.app.use(mount(MOUNTED_DEF_SUB_APP_PATH, this.subApp.get('main')));
    
    require('./router/rc.js');
    require('./router/swm.js');
    
    this.app.listen(this.port);
    log(`[server.js - listen()] ${new Date()} server started on port ${this.port}`);
  }
}
//operation platform

exports.op = function(basedir){
  
  require('./log/log.js');
  log('[op.js - global.log.type] ' + typeof global['log']);
  log('[op.js - global.op] ' + global['op']);
  
  op.basedir = basedir;
  log('[op.js - dir] ' + __dirname);
  /** op 组件 定义
    命名空间 + 命名
    唯一性
  */
  
  /** op 组件 认证
  内部
    op 级别
  
  内部载入
    暂定 手动配置文件
  
  内部存储方法
    map : key - value
  
  内部调用方法
    暂定 无需验证
    map ; key - value
  
  外部
    非 op 级别
  
  外部调用方法
    释放一个 时效 动态 数字加密 签名
    比对 该签名 调用对应方法
  */
  
  //var com = op.com //macro

  op.globals = new Map();  //components
  
  op.gg = function (k){//get global -op
    if(!op.hg(k))
      return null;
  
    var rp = /(plugin)/gi; //筛选 plugin 类型 global
    log('[key.match(reg) - reg] ' + k.match(rp) + ' | ' + k);
    if(k.match(rp))
      return require(op.globals.get(k));
    return op.globals.get(k);
    
  }
  op.sg = function (k, v){//set global -op
    op.globals.set(k, v);
  }
  op.hg = function(k){//has global -op
    return op.globals.has(k);
  }
  
  initGlobals();
  log('[op.js - initGlobals] .. ok');
  initComponents();
  log('[op.js - initComponents] .. ok');
  initServer();
  log('[op.js - initServer] .. ok');
};

function initGlobals(){
  op.sg('plugin.mongoose.ms', '../plugins/mongoose/ms.js');
  op.sg('plugin.doc.doc', '../plugins/doc/doc.js');
  op.sg('plugin.doc.core', '../plugins/doc/core.js');
  op.sg('plugin.doc.dbo', '../plugins/doc/dbo.js');
  op.sg('plugin.bootstrap.bvt', '../plugins/bootstrap/bvt.js');
  op.sg('coms', require('../com/com.js').obj);
  op.sg('server', require('../server/server.js').obj);
  
}

function initComponents(){
  require('../com/top/init.js');
  // require('../com/a/init.js');
}

function initServer(){
  op.gg('server').listen();
}

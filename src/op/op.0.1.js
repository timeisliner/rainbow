//operation platform
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
exports.op = function(basedir){
  
  // test global - log | op
  log('[op - global.log.type] ' + typeof global['log']);
  log('[op - global.op] ' + global['op']);
  
  op.basedir = basedir;
  log('[op - global.__dirname] ' + __dirname);

  //var com = op.com //macro

  op.lib = require('./' + vc.get('op.lib')).lib;
  
  op.c = {
    storage : new Map(),    //components
    get(k){   //get components -op
      if(!this.has(k))
        return null;
    
      var rp = /(plugin)/gi; //筛选 plugin 类型 components
      log('[op - c.get | key.match(reg)] ' + k.match(rp) + ' | ' + k);
      if(k.match(rp))
        return require(this.storage.get(k));
      return this.storage.get(k);
    },
    set(k, v){//set components -op
      this.storage.set(k, v);
    },
    has(k){   //has components -op
      return this.storage.has(k);
    }
  }

  initContents();
  log('[op - initContents] .. ok');
  initComponents();
  log('[op - initComponents] .. ok');
  initServer();
  log('[op - initServer] .. ok');
};

function initContents(){
  op.c.set('plugin', '../plugins/' + vc.get('plugin'));
  log('[op - plugin.init ] .. ok')
  
   
  
  op.c.set('plugin.war3.core', '../plugins/war3/' + vc.get('plugin.war3.core'));
  log('[op - plugin.load : war3.core] .. ok')
  
  
  op.c.set('plugin.mongoose.ms', '../plugins/mongoose/' + vc.get('plugin.mongoose.ms'));
  log('[op - plugin.load : mongoose.ms] .. ok')
  
  op.c.set('plugin.doc.doc', '../plugins/doc/' + vc.get('plugin.doc.doc'));
  log('[op - plugin.load : doc.doc] .. ok')
  op.c.set('plugin.doc.core', '../plugins/doc/' + vc.get('plugin.doc.core'));
  log('[op - plugin.load : doc.core] .. ok')
  op.c.set('plugin.doc.dbo', '../plugins/doc/' + vc.get('plugin.doc.dbo'));
  log('[op - plugin.load : doc.dbo] .. ok')
  
  op.c.set('plugin.bootstrap.bvt', '../plugins/bootstrap/' + vc.get('plugin.bootstrap.bvt'));
  log('[op - plugin.load : bootstrap.bvt] .. ok')
  
  op.c.set('coms', require('../com/' + vc.get('coms')).obj);
  log('[op - coms.init] .. ok')
  
  op.c.set('server', require('../server/' + vc.get('server')).obj);
  log('[op - server.init] .. ok')
  
}

function initComponents(){
  require('../com/top/' + vc.get('com.top.init'));
  log('[op - com.init : top] .. ok')
  require('../com/a/' + vc.get('com.a.init'));
  log('[op - com.init : a] .. ok')
  require('../com/record/' + vc.get('com.record.init'));
  log('[op - com.init : record] .. ok')
  require('../com/war3/' + vc.get('com.war3.init'));
  log('[op - com.init : war3] .. ok')
  require('../com/birthday/' + vc.get('com.birthday.init'));
  log('[op - com.init : birthday] .. ok')
  require('../com/gr/' + vc.get('com.gr.init'));
  log('[op - com.init : gr] .. ok')
}

function initServer(){
  op.c.get('server').listen();
  log('[op - server.start] .. ok')
  
  var record = op.c.get('coms').get('record');
  var index = record.dbo.get(record.id.get('index'));
  var item = record.dbo.get(record.id.get('item'));
  index.init();
  log('[op - com.init : record.index.init] .. ok')
  item.init();
  log('[op - com.init : record.item.init] .. ok')
  

  // F:\app\_.new\rainbow\src\com\birthday\helper
  
  require('../com/birthday/helper/helper.js');
  require('../com/gr/helper/helper.js');
  
  // require('../com/war3/temp/rmhero.js');
  // require('../com/war3/temp/rmabher.js');
  // require('../com/war3/temp/rmbuff.js');
}

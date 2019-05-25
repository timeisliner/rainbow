//entry point

(function(){
  require('./config/config.0.1.js');  // 配置全局项, 目前主要指代 VC 版本控制
  
  require('./op/' + vc.get('op')).op(__dirname); // require op -operation platform
  
  
  log('[ep.js - dir] ' + __dirname);
  log('[op.basedir - dir] ' + op.basedir);
  
}());




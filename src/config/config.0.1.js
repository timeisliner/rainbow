// ? YAML

if(global['log']){
  throw new Error('System Error: log init error!');
}
//top level
global['log'] = function(msg, unlog){
  if(unlog){
    console.log(msg);
  }else{
    var d = new Date();
    var ds = `${d.getFullYear()}/${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(`<log ${ds}>\t ${msg}`);
  }
}


if(global['vc']){
  throw new Error('System Error: vc <version control> init error!');
}
//top level - config
global['vc'] = require('./version.js').normal; // require VC


if(global['op']){
  throw new Error('System Error: op <operation platform> init error!');
}
//top level - component manage tool
global['op'] = { };


// test log
log('[log.js - dir] ' + __dirname);

//entry point

(async function(){

  require('./op/op.js').op(__dirname); // require op -operation platform
  log('[ep.js - dir] ' + __dirname);
  log('[op.basedir - dir] ' + op.basedir);
  
}());




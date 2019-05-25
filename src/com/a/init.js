//初始化 a 的所有数据 doc 信息，并将之加载到 com 组件中
var core = new (op.gg('plugin.doc.core').CLASS)(__dirname, 'a');

//ids
core.set('id', 'named', 'named');
core.set('id', 'swm', 'swm');

//docs
core.set('doc', core.get('id', 'named'), '/doc/named.js');
core.set('doc', core.get('id', 'swm'), '/doc/swm.js');

//dbos
core.set('dbo', core.get('id', 'swm'), '/dbo/swm.js');

//注册 a 到 com 组件
op.gg('coms').set(core.name, core);
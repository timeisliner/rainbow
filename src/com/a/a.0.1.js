//初始化 a 的所有数据 doc 信息，并将之加载到 com 组件中
var core = new (op.c.get('plugin.doc.core').CLASS)(__dirname, 'a');

//ids
core.id.set('named', 'named');
core.id.set('swm', 'swm');

//docs
core.doc.set(core.id.get('named'), '/doc/' + vc.get('com.a.doc.named'));
core.doc.set(core.id.get('swm'), '/doc/' + vc.get('com.a.doc.swm'));

//dbos
core.dbo.set(core.id.get('swm'), '/dbo/' + vc.get('com.a.dbo.swm'));

//注册 a 到 com 组件
op.c.get('coms').set(core.name, core);
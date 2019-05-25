//初始化 top 的所有数据 doc 信息，并将之加载到 com 组件中
log('[com.top - init]');
var core = new (op.c.get('plugin.doc.core').CLASS)(__dirname, 'top');
log('[com.top - init.create] .. ok');

// test
// log(typeof core.id)
// log(core.id)
// log(typeof core.id.set)
// log(core.id.set)

//ids
core.id.set('root', 'root');
core.id.set('color', 'color');
core.id.set('rank', 'rank');
core.id.set('rc', 'rc');
log('[com.top - init.id] .. ok');

//docs
core.doc.set(core.id.get('root'), '/doc/' + vc.get('com.top.doc.root'));
core.doc.set(core.id.get('color'), '/doc/' + vc.get('com.top.doc.color'));
core.doc.set(core.id.get('rank'), '/doc/' + vc.get('com.top.doc.rank'));
log('[com.top - init.doc] .. ok');

//dbos
core.dbo.set(core.id.get('rc'), '/dbo/' + vc.get('com.top.dbo.rc'));
//core.dbo.set(core.id.get('swm'), '/dbo/swm.js');
log('[com.top - init.dbo] .. ok');

op.c.get('coms').set(core.name, core);
log('[com.top - init.finish] .. ok');
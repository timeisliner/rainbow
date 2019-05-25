//初始化 birthday 的所有数据 doc 信息，并将之加载到 com 组件中
log('[com.birthday - init]');
var core = new (op.c.get('plugin.doc.core').CLASS)(__dirname, 'birthday');
log('[com.birthday - init.create] .. ok');

// test
// log(typeof core.id)
// log(core.id)
// log(typeof core.id.set)
// log(core.id.set)

//ids
core.id.set('list', 'list');
log('[com.birthday - init.id] .. ok');

//docs
core.doc.set(core.id.get('list'), '/doc/' + vc.get('com.birthday.doc.list'));
log('[com.birthday - init.doc] .. ok');

//dbos
core.dbo.set(core.id.get('list'), '/dbo/' + vc.get('com.birthday.dbo.list'));
log('[com.birthday - init.dbo] .. ok');

op.c.get('coms').set(core.name, core);
log('[com.birthday - init.finish] .. ok');
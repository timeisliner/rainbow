//初始化 record 的所有数据 doc 信息，并将之加载到 com 组件中
log('[com.record - init]');
var core = new (op.c.get('plugin.doc.core').CLASS)(__dirname, 'record');
log('[com.record - init.create] .. ok');

//ids
core.id.set('index', 'index');
core.id.set('title', 'title');
core.id.set('item', 'item');
core.id.set('dict', 'dict');
core.id.set('section', 'section');
log('[com.record - init.id] .. ok');

//docs
core.doc.set(core.id.get('index'), '/doc/' + vc.get('com.record.doc.index'));
core.doc.set(core.id.get('title'), '/doc/' + vc.get('com.record.doc.title'));
core.doc.set(core.id.get('item'), '/doc/' + vc.get('com.record.doc.item'));
core.doc.set(core.id.get('dict'), '/doc/' + vc.get('com.record.doc.dict'));
core.doc.set(core.id.get('section'), '/doc/' + vc.get('com.record.doc.section'));
log('[com.record - init.doc] .. ok');

//dbos
core.dbo.set(core.id.get('index'), '/dbo/' + vc.get('com.record.dbo.index'));
core.dbo.set(core.id.get('item'), '/dbo/' + vc.get('com.record.dbo.item'));
core.dbo.set(core.id.get('dict'), '/dbo/' + vc.get('com.record.dbo.dict'));
// core.dbo.set(core.id.get('swm'), '/dbo/swm.js');
log('[com.record - init.dbo] .. ok');

op.c.get('coms').set(core.name, core);
log('[com.record - init.finish] .. ok');
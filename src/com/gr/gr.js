//初始化 Growth Ring 的所有数据 doc 信息，并将之加载到 com 组件中
log('[com.gr - init]');
const com = 'gr';
var core = new (op.c.get('plugin.doc.core').CLASS)(__dirname, com);
log('[com.gr - init.create] .. ok');

//ids
core.id.set('named', 'named');
core.id.set('titled', 'titled');
core.id.set('content', 'content');
log('[com.gr - init.id] .. ok');

//vc
// doc
vc.set('com.gr.doc.named', 'named.js');
vc.set('com.gr.doc.titled', 'titled.js');
vc.set('com.gr.doc.content', 'content.js');
log('[com.gr - init.doc.vc.setting] .. ok');
// dbo
vc.set('com.gr.dbo.named', 'named.js');
vc.set('com.gr.dbo.titled', 'titled.js');
log('[com.gr - init.dbo.vc.setting] .. ok');
//router
vc.set('server.router.grtest', 'grtest.js');

//docs
core.doc.set(core.id.get('named'), '/doc/' + vc.get('com.gr.doc.named'));
core.doc.set(core.id.get('titled'), '/doc/' + vc.get('com.gr.doc.titled'));
core.doc.set(core.id.get('content'), '/doc/' + vc.get('com.gr.doc.content'));
log('[com.gr - init.doc] .. ok');

//dbos
core.dbo.set(core.id.get('named'), '/dbo/' + vc.get('com.gr.dbo.named'));
core.dbo.set(core.id.get('titled'), '/dbo/' + vc.get('com.gr.dbo.titled'));
log('[com.gr - init.dbo] .. ok');

op.c.get('coms').set(core.name, core);
log('[com.gr - init.finish] .. ok');
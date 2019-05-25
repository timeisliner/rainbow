//初始化 top 的所有数据 doc 信息，并将之加载到 com 组件中
var core = new (op.gg('plugin.doc.core').CLASS)(__dirname, 'top');

//ids
core.set('id', 'root', 'root');
core.set('id', 'color', 'color');
core.set('id', 'rank', 'rank');
core.set('id', 'rc', 'rc');

//docs
core.set('doc', core.get('id', 'root'), '/doc/root.js');
core.set('doc', core.get('id', 'color'), '/doc/color.js');
core.set('doc', core.get('id', 'rank'), '/doc/rank.js');

//dbos
core.set('dbo', core.get('id', 'rc'), '/dbo/rc.js');
//core.set('dbo', core.get('id', 'swm'), '/dbo/swm.js');

op.gg('coms').set(core.name, core);
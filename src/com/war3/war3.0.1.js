//初始化 war3 的所有数据，并将之加载到 coms 中
// 1.
log('[com.war3 - init]');

// var core = new ()(__dirname, 'war3');
var core = new (op.c.get('plugin.war3.core').CLASS)(__dirname, 'war3')
    , loader = undefined
    , mf = undefined
    , fixed = undefined
    ;

log('[com.war3 - init | test name] ' + core.name);
log('[com.war3 - init | test type] ' + core.type);

core.id.set('ini', 'ini');
core.id.set('load', 'load');
core.id.set('model', 'model');

core.id.set('idmaker', 'idmaker');
core.id.set('abset', 'abset');

core.id.set('abher', 'abher');
core.id.set('abnor', 'abnor');
core.id.set('buff', 'buff');
core.id.set('hero', 'hero');
core.id.set('item', 'item');
core.id.set('unit', 'unit');
core.id.set('upgrade', 'upgrade');
core.id.set('w3i', 'w3i');


core.bin.set(core.id.get('ini'), '/basic/ini.js');
core.bin.set(core.id.get('load'), '/basic/load.js');
core.bin.set(core.id.get('model'), '/basic/model.js');


core.tool.set(core.id.get('idmaker'), '/tool/idmaker.js');
core.tool.set(core.id.get('abset'), '/tool/abset.js');


loader = core.bin.get(core.id.get('load'));
fixed = loader.CLASS;


core.fixed.set(core.id.get('abher'), new fixed(core.dir + '/model/abher.ini'));
core.fixed.set(core.id.get('abnor'), new fixed(core.dir + '/model/abnor.ini'));
core.fixed.set(core.id.get('buff'), new fixed(core.dir + '/model/buff.ini'));
core.fixed.set(core.id.get('hero'), new fixed(core.dir + '/model/hero.ini'));
core.fixed.set(core.id.get('item'), new fixed(core.dir + '/model/item.ini'));
core.fixed.set(core.id.get('unit'), new fixed(core.dir + '/model/unit.ini'));
core.fixed.set(core.id.get('upgrade'), new fixed(core.dir + '/model/upgrade.ini'));
// core.fixed.set(core.id.get('w3i'), new fixed(core.dir + '/model/w3i.ini'));


// mf = core.bin.get(core.id.get('model'));

// mf.generator(core.dir + '/temp/ability.ini', core.dir + '/model/_dsability.ini')
// mf.generator(core.dir + '/temp/abher.ini', core.dir + '/model/_dsabher.ini')
// mf.generator(core.dir + '/temp/abnor.ini', core.dir + '/model/_dsabnor.ini')
// mf.generator(core.dir + '/temp/buff.ini', core.dir + '/model/_dsbuff.ini')
// mf.generator(core.dir + '/temp/hero.ini', core.dir + '/model/_dshero.ini')
// mf.generator(core.dir + '/temp/item.ini', core.dir + '/model/_dsitem.ini')
// mf.generator(core.dir + '/temp/unit.ini', core.dir + '/model/_dsunit.ini')
// mf.generator(core.dir + '/temp/upgrade.ini', core.dir + '/model/upgrade.ini')

// log(core.fixed.get(core.id.get('upgrade')).load(), 1);
// log(core.fixed.get(core.id.get('hero')).load(), 1);


/*
, new fixed(core.dir + '/model/



var unit = core.model.unit = new fixed(core.dir + pout + file.unit)
    , hero = core.model.hero = new fixed(core.dir + pout + file.hero)
    , upgrade = core.model.upgrade = new fixed(core.dir + pout + file.upgrade);
    ;
// core.model.ability = new fixed(core.dir + pout + file.ability);
// core.model.w3i = new fixed(core.dir + pout + file.w3i);

    

// mf.generator(core.dir + pout + file.unit, pin + file.unit);
// mf.generator(core.dir + pout + file.upgrade, pin + file.upgrade);
// mf.generator(core.dir + pout + file.hero, core.dir + pout + 'dshero.ini');
idmaker.start = 200;
idmaker.prefix = 'x';
//var ids = idmaker.gens(50);


*/




// core.doc.set(core.id.get('index'), '/doc/' + vc.get('com.record.doc.index'));
// core.model['upgrade'] = `/model/${vc.get('com.war3.model.upgrade')}`


op.c.get('coms').set(core.name, core);
log('[com.war3 - init.finish] .. ok');
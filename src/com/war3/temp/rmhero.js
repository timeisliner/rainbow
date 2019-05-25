var obj = {}
    , war3 = op.c.get('coms').get('war3')
    , load = war3.bin.get('load')
    , idmaker = war3.tool.get('idmaker').obj
    , hero = war3.fixed.get('hero')
    , mf = war3.bin.get('model')
    , out = '/temp/unit.ini'
    , group = undefined
    , u = undefined
    ;

idmaker.start = 100;
idmaker.prefix = 'X';

group = hero.load().model;
u = group.d
// log(unit, 1)
u._parent = 'Obla';
u.Name = '剑圣';
u.EditorSuffix = '(近战-敏捷-进攻-侦查)';
u.race = 'human';
u.heroAbilList = 'x0Mo,x0Mp,x0Mq,x0Mr';
u.type = 'giant';
u.regenHP = 3;
u.regenType = 'always';
obj[idmaker.gen()] = group;

group = hero.load().model;
u = group.d
u._parent = 'Hpal';
u.Name = '圣骑士';
u.EditorSuffix = '(近战-力量-防御-辅助)';
u.race = 'human';
u.type = 'giant';
u.regenHP = 4.5;
u.regenType = 'always';
obj[idmaker.gen()] = group;

group = hero.load().model;
u = group.d
u._parent = 'Nbrn';
u.Name = '黑暗游侠';
u.EditorSuffix = '(远攻-敏捷-辅助)';
u.race = 'human';
u.type = 'giant';
u.regenHP = 1.5;
u.regenType = 'always';
obj[idmaker.gen()] = group;

obj = mf.convert(obj);
load.save(war3.dir + out, obj);


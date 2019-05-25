var obj = {}
    , war3 = op.c.get('coms').get('war3')
    , load = war3.bin.get('load')
    , idmaker = war3.tool.get('idmaker').obj
    , buff = war3.fixed.get('buff')
    , mf = war3.bin.get('model')
    , out = '/temp/buff.ini'
    , group = undefined
    , u = undefined
    ;

idmaker.start = 6000;
idmaker.prefix = 'x';


group = buff.load().model;
u = group.d
u._parent = 'BOwk'; // 疾步风
u.Bufftip = '剑术宗师';
u.Buffubertip = '这是一位强大的剑术宗师。';
u.Buffart = 'ReplaceableTextures\\\\CommandButtons\\\\BTNCloakOfFlames.blp'; // BIcf 火焰风衣
u.race = 'human';
u.Spelldetail = 0;
obj[idmaker.gen()] = group;

group = buff.load().model;
u = group.d
u._parent = 'BOwk'; // 疾步风
u.Bufftip = '剑气';
u.Buffubertip = '该单位的每一次普攻概率施放剑气，对单位附近的单位造成伤害。';
u.Buffart = 'ReplaceableTextures\\\\CommandButtons\\\\BTNBlizzard.blp'; // BHbd 暴风雪
u.race = 'human';
u.Spelldetail = 0;
obj[idmaker.gen()] = group;

group = buff.load().model;
u = group.d
u._parent = 'BOwk'; // 疾步风
u.Bufftip = '隐杀';
u.Buffubertip = '该单位受过严苛的匿踪训练，能悄然贴近目标，给予致命一击。';
u.race = 'human';
u.Spelldetail = 0;
obj[idmaker.gen()] = group;

group = buff.load().model;
u = group.d
u._parent = 'Bblo'; // 嗜血术
u.Bufftip = '战意';
u.Buffubertip = '这是一位可敬的剑术大师，他正以破釜沉舟之决心、有死无生之气概在战斗。';
u.Buffart = 'ReplaceableTextures\\\\CommandButtons\\\\BTNPurge.blp'; // Bprg 净化
u.race = 'human';
u.Spelldetail = 0;
obj[idmaker.gen()] = group;

obj = mf.convert(obj);
load.save(war3.dir + out, obj);


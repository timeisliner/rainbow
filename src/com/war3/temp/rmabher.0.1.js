var obj = {}
    , war3 = op.c.get('coms').get('war3')
    , load = war3.bin.get('load')
    , idmaker = war3.tool.get('idmaker').obj
    , abset = war3.tool.get('abset').obj
    , abher = war3.fixed.get('abher')
    , mf = war3.bin.get('model')
    , out = '/temp/ability.ini'
    , group = undefined
    , u = undefined
    ;



// -- 图标 - 学习
// abher.ResearchArt = "ReplaceableTextures\\CommandButtons\\BTNDranaiAkama.blp"

// -- 图标 -关闭
// Unart = "ReplaceableTextures\\CommandButtons\\BTNArthas.blp"

// -- 命令串 - 关闭
// Unorder = "absorb"
// -- 提示工具 -关闭

// -- 提示工具 - 学习
// Researchtip = "啊啊啊"
// -- 提示工具 - 学习 - 扩展
// Researchubertip = "啊啊啊"

idmaker.start = 3000;
idmaker.prefix = 'x';


group = abher.load().model;
u = group.d
// log(unit, 1)
u._parent = 'ANdb';   // 醉拳
u.Name = '剑术宗师';
u.EditorSuffix = '(剑圣)';
u.Art = 'ReplaceableTextures\\\\CommandButtons\\\\BTNCloakOfFlames.blp'; // AIcf 具有献祭效果的物品
u.ResearchArt = 'ReplaceableTextures\\\\CommandButtons\\\\BTNCloakOfFlames.blp'; // AIcf 具有献祭效果的物品
u.race = 'human';
abset.qwer(u, 1, true);
u.hero = 1;
u.levels = 5;
abset.BuffID(u, u.levels, 'x1yM');
obj[idmaker.gen()] = group;

group = abher.load().model;
u = group.d
u._parent = 'Asal'; // 减速光环 龙卷风
u.Name = '剑气';
u.EditorSuffix = '(剑圣)';
u.Art = 'ReplaceableTextures\\\\CommandButtons\\\\BTNBlizzard.blp'; // BHbd 暴风雪
u.ResearchArt = 'ReplaceableTextures\\\\CommandButtons\\\\BTNBlizzard.blp'; // BHbd 暴风雪
u.race = 'human';
abset.qwer(u, 2, true);
u.hero = 1;
u.levels = 5;
abset.BuffID(u, u.levels, 'x1yN');
obj[idmaker.gen()] = group;

group = abher.load().model;
u = group.d
u._parent = 'AOwk'; // 疾步风
u.Name = '隐杀';
u.EditorSuffix = '(剑圣)';
u.race = 'human';
abset.qwer(u, 3);
u.hero = 1;
u.levels = 5;
abset.BuffID(u, u.levels, 'x1yO');
obj[idmaker.gen()] = group;

group = abher.load().model;
u = group.d
u._parent = 'Absk';   // 狂战士
u.Name = '战意';
u.EditorSuffix = '(剑圣)';
u.Art = 'ReplaceableTextures\\\\CommandButtons\\\\BTNPurge.blp'; // Bprg 净化
u.ResearchArt = 'ReplaceableTextures\\\\CommandButtons\\\\BTNPurge.blp'; // Bprg 净化
u.race = 'human';
abset.qwer(u, 4);
u.hero = 1;
u.levels = 3;
abset.BuffID(u, u.levels, 'x1yP');
u.reqLevel = 6; // 大招
obj[idmaker.gen()] = group;

obj = mf.convert(obj);
load.save(war3.dir + out, obj);


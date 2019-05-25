/** [js template] github[mongoose] */

/**
 * rank 数据结构
 *
 */

/** doc references */
var com = op.c.get('coms').get('top');
var root = com.doc.get(com.id.get('root'));

/** schema data */
var aschema = {//rank 星级 [enum]            //划分游戏中的信息的稀有度的规格
  m : { //meta  数据元
    type : Number,
    required: true,
    index : true,
    unique : true
  },
  r : {
    type : root.scm,
    required: true
  }
}

/** source data */
var adata = [
  {m : 0, r : {n : 'gloom', e : '黯淡的'}},  //white 白色 255 255 255 #FFFFFF
  {m : 1, r : {n : 'hazy', e : '微茫的'}},   //powderblue 浅灰蓝色 176 224 230 #B0E0E6
  {m : 2, r : {n : 'bright', e : '鲜明的'}},  //springgreen 嫩绿色  0 255 127 #00FF7F
  {m : 3, r : {n : 'resplendent', e : '璀璨的'}},    //silver 银灰色 192 192 192 #C0C0C0
  {m : 4, r : {n : 'refulgence', e : '辉煌的'}},  //金黄色 255 215  0 #FFD700 | 黄色 255 255 0 #FFFF00
  {m : 5, r : {n : 'epic', e : '史诗的'}},  //orchid 淡紫色 218 112 214 #DA70D6
  {m : 6, r : {n : 'myth', e : '神话的'}}  //桔黄 255 128  0 #FF8000
];

exports.doc = op.c.get('plugin.doc.doc').fn('top', 'rank', aschema, adata);
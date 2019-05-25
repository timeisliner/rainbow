/** [js template] github[mongoose] */

/**
 * dict.js 2018-7-12 7:11:43
 * 
 * 字典 rainbow字典 记录信息
 * 

id    唯一标识
name  命名
sections
  type      un - seven - 
  explain   简介
  content   内容
  date      日期

 */

 
/** doc references */
var com = op.c.get('coms').get('record');
var section = com.doc.get(com.id.get('section'));
 
/** schema data */
var aschema = {
  name : { // 命名 标识符 唯一的 名称
    type: String
    , required: true
    , index: true
    , unique: true
    , trim: true
  }
  , sections : {
      type: [section.scm]
      , default : undefined
    }
}

/** source data */
var adata = [
];

exports.doc = op.c.get('plugin.doc.doc').fn('record', 'dict', aschema, adata);

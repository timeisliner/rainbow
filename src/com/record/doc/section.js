/** [js template] github[mongoose] */

/** DOC
 * section.js 2018-7-12 7:20:09
 * 记录块 解释说明 指定含义描述
 * 

type      un - seven - etc.
explain   简介
content   内容
date      日期

 */

/** schema data */
var aschema = {
  type : {
    type : String
    , required: true
    , trim: true
  }
  , explain : {
      type : String
      , required: true
    }
  , content : {
      type : String
      , required: true
    }
  , date : {
      type : Date
      , default: Date.now
    }
};

/** source data */
var adata = [
];

/** pug data */
var apug = {
  
};

exports.doc = op.c.get('plugin.doc.doc').fn('record', 'section', aschema, adata);




/** [js template] github[mongoose] */

/**
 * named 数据模型，描述存储的名词数据的结构
 *
 *
 */

/** doc references */
var com = op.c.get('coms').get('top');
var root = com.doc.get(com.id.get('root'));
 
/** schema data */
var aschema = {
  m : { //编号
    type : Number,
    required: true,
    index : true,
    unique : true
  },
  r : { //名词 + 解释
    type : root.scm,
    required: true
  },
  ref : [Number], //引用说明
  f : Number, //首次出现章节
  d : { //记录日期
    type: Date,
    default: Date.now 
  }
};

/** source data */
var adata = [
  {m : 0, r : {n : '名词', e : '解释'}, ref : [1, 2, 3], f : 1}
];

/** pug data */
var apug = {
  
};

exports.doc = op.c.get('plugin.doc.doc').fn('a', 'named', aschema, adata);
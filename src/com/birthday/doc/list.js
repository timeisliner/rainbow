/** [js template] github[mongoose] */

/**
 * list 数据结构
 *
 */

/** doc references */
var com = op.c.get('coms').get('top');
var root = com.doc.get(com.id.get('root'));

/** schema data */
var aschema = {
  yinli : {
    type : String
    , required: true
  }
  , yangli : {
      type : String
      , required: true
    }
  , phone : {
      type : String
    }
  , remark : {
      type : String
    }
  , r : {
      type : root.scm,
      required: true
    }
}

/** source data */
var adata = [
  { yinli : '九月三十'
    , yangli : '1110'
    , phone : '15574409869'
    , remark : '2018-7-6 18:20:09'
    , r : {n : '我', e : '自己'}
  }
];

exports.doc = op.c.get('plugin.doc.doc').fn('birthday', 'list', aschema, adata);
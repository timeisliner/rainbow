/** [js template] github[mongoose] */

/**
 * index 索引标识
 *
 */

/** schema data */
var aschema = {
  id : { // 标识
    type: Number,
    required: true
  },
  status : { // 标识状态 true-启用 or false-禁用
    type : Boolean,
    required: true
  }
}

/** source data */
var adata = [
  {id : 0, status : false},
  {id : 1, status : true}
];

exports.doc = op.c.get('plugin.doc.doc').fn('record', 'index', aschema, adata);

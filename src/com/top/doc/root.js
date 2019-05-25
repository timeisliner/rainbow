/** [js template] github[mongoose] */

/**
 * root 元 数据结构
 *
 */

/** schema data */
var aschema = {
  n : { //name 限定名称 or 标题
    type : String,
    required: true
  },
  e : { //explain 解释名称 or 副标题
    type : String,
    required: true
  }
}

/** source data */
var adata = [
  {n : 'name', e : 'explain'},
  {n : '限定名称', e : '解释名称'}
];

exports.doc = op.gg('plugin.doc.doc').fn('top', 'root', aschema, adata);

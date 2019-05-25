/** [js template] github[mongoose] */

/**
 * root 元 数据结构
 *
 */

/** schema data */
var aschema = {
  n : { //name 限定名称
    type : String,
    required: true
  },
  e : { //explain 解释名称
    type : String,
    required: true
  }
}

/** source data */
var adata = [
  {n : 'name', e : 'explain'},
  {n : '限定名称', e : '解释名称'}
];

exports.doc = op.c.get('plugin.doc.doc').fn('top', 'root', aschema, adata);

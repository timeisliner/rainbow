/** [js template] github[mongoose] */

/**
 * title 主标题 + 副标题
 *
 */

/** schema data */
var aschema = {
  mh : { // main head 主标题
    type: String,
    required: true
  },
  sh : { // sub head 副标题
    type : String,
    required: true
  }
}

/** source data */
var adata = [
  {mh : "main head", sh : "sub head"},
  {mh : "主标题", sh : "副标题"}
];

exports.doc = op.c.get('plugin.doc.doc').fn('record', 'title', aschema, adata);

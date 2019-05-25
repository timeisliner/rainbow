/** [js template] github[mongoose] */

/**
 * item 条目
 *
 */

 /** doc references */
var com = op.c.get('coms').get('record');
var index = com.doc.get(com.id.get('index'));
var title = com.doc.get(com.id.get('title'));
 
/** schema data */
var aschema = {
  index : { // 标识
    type : index.scm,
    required: true
  },
  title : { // 标题
    type : title.scm,
    required: true
  },
  desc : { // 描述 or 介绍 or 说明
    type : String
  }
}

/** source data */
var adata = [
  {index : {id : 0, status : false}, title : {mh : "main head", sh : "sub head"}, desc : "示例1"},
  {index : {id : 1, status : true}, title : {mh : "主标题", sh : "副标题"}, desc : "示例2"}
];

exports.doc = op.c.get('plugin.doc.doc').fn('record', 'item', aschema, adata);

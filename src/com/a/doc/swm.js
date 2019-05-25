/** [js template] github[mongoose] */

/** DOC
 * Search Word & Metas
 *
search word > log
metas
  title > log(msg:String, unlog:boolean=undefined)
  scope > global
  prototype > console.log
 */

/** doc references */
var com = op.gg('coms').get('top');
var root = com.get('doc', com.get('id', 'root'));
 
/** schema data */
var aschema = {
  sw : { //search word
    type : String,
    required: true,
  },
  t : { //title
    type : root.scm,
    required: true
  },
  ms : [root.scm] //metas
};

/** source data */
var adata = [
  {sw : 'log', t : {n : 'title', e : 'log(msg:String, unlog:boolean=undefined)'}, ms : [{n : 'scope', e : 'global'}, {n : 'prototype', e : 'console.log'}]}
];

/** pug data */
var apug = {
  
};

exports.doc = op.gg('plugin.doc.doc').fn('a', 'swm', aschema, adata);




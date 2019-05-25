/** DBO
@ top doc/color.js
@ top doc/rank.js

middleware

*/
var com = op.c.get('coms').get('record');
var doc = com.doc.get(com.id.get('item'));
var dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);

dbo.find = async function(id){ // 查找  id, 不指定id则查找所有 id
  var cd = (id == '' || Number(id) == NaN || id < 0) ? [{ $match : {'index.id' : {$gte : 0}}}] : [{ $match : {'index.id' : Number(id)}}];
  log(cd, 1);
  // {index : {id : 0, status : false}, title : {mh : "main head", sh : "sub head"}, desc : "示例1"},
  return await this.exec(cd);
}

exports.dbo = dbo;

/** DBO
dict.js 索引

middleware

*/
var com = op.c.get('coms').get('record');
var doc = com.doc.get(com.id.get('dict'));
var dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);


dbo.find = function(id){ // 查找  id, 不指定id则查找所有 id
  var cd = id != undefined ? [{ $match : {_id : id}}] : [{ $match : {}}];
  // log(cd, 1)
  return this.exec(cd);
}


exports.dbo = dbo;

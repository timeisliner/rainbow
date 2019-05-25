/** DBO
index.0.1.js 索引

middleware

*/
var com = op.c.get('coms').get('record');
var doc = com.doc.get(com.id.get('index'));
var dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);

dbo.last = async function(){ // max 取得最后生成的 id
  var cd = [{$group : { _id : null, last : { $max: "$id" }}}];
  
  return await this.exec(cd);
}
dbo.next = async function(){ // new 生成一个新的   id
  var docs = await this.last();
  if(docs.length > 0){
    return docs[0].last + 1;
  }else{
    return 0;
  }
}
dbo.find = async function(id){ // 查找  id, 不指定id则查找所有 id
  var cd = id != undefined ? [{ $match : {id : id}}] : [{ $match : {id : {$gte : 0}}}];
  log(cd, 1)
  return await this.exec(cd);
}

dbo.on = async function(id){ // 启用指定  id
  return await this.update({id : id}, {status : true}); // 默认修饰符 $set
  // return await this.update({id : id}, { $set : {status : true}}); 和上面相等
}
dbo.off = async function(id){ // 禁用指定 id
  return await this.update({id : id}, {status : false}); // 默认修饰符 $set
}


exports.dbo = dbo;

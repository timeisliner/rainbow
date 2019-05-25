//com 组件代号 - A01 
//doc 文档代号 - obj
//schema 数据结构 - {schema}
//data 数据实例 - {}

exports.fn = function (acom, adoc, aschema, adata){
  var com = op.c.get('coms').get(acom);
  
  var ms = new (op.c.get('plugin.mongoose.ms').CLASS)();
  
  var doc = {
    scm : undefined,
    mdl : com.id.get(adoc)
  };
  
  doc.scm = new ms.schema(aschema);
  
  return ms.doc(doc, adata);
}
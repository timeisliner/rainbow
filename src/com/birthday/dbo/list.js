/** DBO
@ birthday doc/color.js
@ birthday doc/rank.js

middleware

*/
var com = op.c.get('coms').get('birthday');
var doc = com.doc.get(com.id.get('list'));
var dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);

dbo.list = async function(){

  var cd = [
    { $match : {}}
    , { $project : {_id : 0, 'r._id' : 0, __v : 0}}
  ];
  
  var docs = await dbo.exec(cd)
      , out = []
      ;

  docs.forEach(function(doc, _, __){
    if (typeof doc !== 'object')
      return;
      
    out.push({
      name : doc.r.n
      , explain : doc.r.e
      , yinli : doc.yinli
      , yangli : doc.yangli
      , phone : doc.phone
      , remark : doc.remark
    });
  });
  
  return out;
}

exports.dbo = dbo;
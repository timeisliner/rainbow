/** DBO
@ a doc/swm.js

middleware

*/

var com = op.gg('coms').get('a');
var doc = com.get('doc', com.get('id', 'swm'));
var dbo = new (op.gg('plugin.doc.dbo').CLASS)(doc);


// dbo.search = async function(sw){
  // log('[a.dbo.swm.search(sw) - ] sw : ' + sw);
  // var query = {'sw' : { $regex: `/.*${sw}.*/`, $options: 'si' }};
  // var query = {'sw' : { $regex: `${sw}`, $options: 'si' }};
  // return dbo.find(query);
// }

dbo.search = async function(sw){ //$regex 引号之后首尾不需要添加 / /
  log('[a.dbo.swm.search(sw) - ] sw : ' + sw);
  // var query = {'sw' : { $regex: `/.*${sw}.*/`, $options: 'si' }};
  //var query = {'sw' : { $regex: `${sw}`, $options: 'si' }};
  var cd = [
    { $match : { 'sw' : {$regex: `${sw}`, $options: 'si'}}},
    { $project : { word : '$sw', title : '$t.e', metas : { n : '$ms.n', e : '$ms.e'}}}
  ];
  return dbo.exec(cd);
}
  
dbo.detail = function(id){
  
}

exports.dbo = dbo;


/** DBO
@ a doc/swm.js

middleware

*/

var com = op.c.get('coms').get('a');
var doc = com.doc.get(com.id.get('swm'));
var dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);


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
  log('[a.dbo.swm.detail(id) - ] id : ' + id);
  var cd = [
    { $match : { 'sw' : {$regex: `${sw}`, $options: 'si'}}},
    { $project : { word : '$sw', title : '$t.e', metas : { n : '$ms.n', e : '$ms.e'}}}
  ];
  return dbo.exec(cd);
}

exports.dbo = dbo;


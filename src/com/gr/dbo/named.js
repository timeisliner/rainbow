var com = op.c.get('coms').get('gr')
, doc
, dbo;
doc = com.doc.get(com.id.get('named'));
dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);

dbo.find = async function(named){
  var cd = named != undefined ? [{ $match : {name : named}}] : [{ $match : {}}];
  log(cd, 1);
  
  return await this.exec(cd);
}

dbo.finds = async function(title, options){
  log('[gr.dbo.named.finds(title, options) - ] title : ' + title);
  if(options === undefined){
    var cd = [
      { $match : { 'titles.title' : {$regex: `${title}`, $options: 'si'}}}
      //, { $project : { word : '$sw', title : '$t.e', metas : { n : '$ms.n', e : '$ms.e'}}}
    ];
    log(cd, 1);
    return await this.exec(cd);
  }
}

exports.dbo = dbo;

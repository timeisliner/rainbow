var com = op.c.get('coms').get('gr')
, doc
, dbo;
doc = com.doc.get(com.id.get('titled'))
dbo = new (op.c.get('plugin.doc.dbo').CLASS)(doc);

dbo.finds = async function(title, options){
  log('[gr.dbo.titled.finds(title, options) - ] title : ' + title);
  if(options === undefined){
    var cd = [
      { $match : { 'title' : {$regex: `${title}`, $options: 'si'}}}
      //, { $project : { word : '$sw', title : '$t.e', metas : { n : '$ms.n', e : '$ms.e'}}}
    ];
    return await this.exec(cd);
  }
}

exports.dbo = dbo;

var com = op.c.get('coms').get('birthday')
    , dbo = undefined
    , fs = require('fs')
    ;

dbo = com.dbo.get(com.id.get('list'));

new Promise(async(resove, reject)=>{
  await dbo.init();
  resove(dbo.list());
}).then(sove=>{log(sove, 1)});


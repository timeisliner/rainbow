var com = op.c.get('coms').get('gr')
    , dbo
    ;

dbo = com.dbo.get(com.id.get('titled'));

new Promise(async(resove, reject)=>{
  // await dbo.init();
  resove(dbo.count());
}).then(sove=>{log(sove.length)});


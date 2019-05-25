/** DBO
@ top doc/color.js
@ top doc/rank.js

middleware

*/
var com = op.gg('coms').get('top');
var doc = com.get('doc', com.get('id', 'rank'));
var dbo = new (op.gg('plugin.doc.dbo').CLASS)(doc);

dbo.rank = async function(){

  var cd = [
    //{ $match : {m : 1}},
    {
      $lookup : 
      {
        from: "colors",
        localField: "m",
        foreignField: "m",
        as: "c"
      }
    },
    { $project : {_id : 0, 'r._id' : 0, __v : 0}},
    { $project : {'c._id' : 0, 'c.r._id' : 0, 'c.__v' : 0}}
  ];
  
  var docs = await dbo.exec(cd);
  
  var rcs = [];
      
  for(var i = 0; i < docs.length; i ++){
    var doc = docs[i];
    rcs.push({
      r : {
        m : doc.m,
        r : {
          n : doc.r.n,
          e : doc.r.e
        }
      },
      c : {
        m : doc.c[0].m,
        v : doc.c[0].v,
        r : {
          n : doc.c[0].r.n,
          e : doc.c[0].r.e
        }
      }
    });
  }
  
  return rcs;
}



exports.dbo = dbo;

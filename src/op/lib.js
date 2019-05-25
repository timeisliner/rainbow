/** lib.js 通用方法 扩展库
 *
 * 
 * mydate @code/coms/cw.js
 */



var lib = {};

// 将 Date 转换成 '2018-11-25 15:25:40' 该类型的 String 
lib.tomydate = function (date){
  var mydate;
  
  if(typeof date === 'object' && date.constructor.name === 'Date'){
    mydate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }
  
  return mydate ? mydate : 'unknown';
}


// 将该 '2018-11-25 10:07:00' 类型的 String 转换成 Date
lib.mydate = function (str){
  var mydate;
  
  if(typeof str === 'string'){
    var invalid = [/-/gi, / /gi, /:/gi]
      , valid = ','
      , temp = str
      , groups;
      
    for(var i = 0; i < invalid.length; i++){
      temp = temp.replace(invalid[i], valid);
    }
    
    groups = temp.split(valid);

    if(groups.length == 6){
      mydate = new Date(groups[0], groups[1], groups[2], groups[3], groups[4], groups[5]);
    }
  }

  if(mydate === undefined){
    log(`[op.lib - mydate(str) - warning] unrecognized str : ${str} \n A new date was generated!`);
    mydate = new Date();
  }
  
  return mydate;
}


exports.lib = lib

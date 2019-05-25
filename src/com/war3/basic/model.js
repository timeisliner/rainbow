/**
数据结构模型 ：
struct = {
  node : {
    d : {}
    , n : {}
  }
  , node : {
      d : {}
      , n : {}
    }
  , node : {
      d : {}
      , n : {}
    }
  , node : {
      d : {}
      , n : {}
    }
}
*/

/** fn
将 source 中的数据模型化附加到 target 中
generator(target, source)

删除 obj 中的模型数据
convert(obj)
*/

var rpstr = 'abcdefghijk'
    , rparray = '<>'    // 使用 [] 读取时会因为ini.decode发生错误，所以改用 <>
    , rpint = 190909099
    , rpnote = '--'
    ;

// target 目标地址 - 模板存储路径
// source 源地址 - 需要进行扩充模板的的原始数据文件的路径
exports.generator = function (target, source){
var loader = require('./load.js')
    , obj = undefined
    , model = undefined
    , struct = {model : {d : {} , n : {}}}
    ;


//log(target);
//log(source);
model = loader.load(target);
// log(model, 1)
model = model === undefined
                  ? struct.model
                    : model.model

//log(model, 1)


obj = loader.load(source);

  Object.keys(obj).forEach(function (key, _, __) {
    // log(key)
    var d = obj[key].d
        , n = obj[key].n
        ;
    // data
    Object.keys(d).forEach(function (key, _, __) {
      if (model.d.hasOwnProperty(key))
        return;
      log(d[key]);
      model.d[key] =  typeof d[key] === 'string'
                        ? d[key] === rparray
                            ? rparray       // 无效值 array
                            : rpstr         // 无效值 string
                        : Array.isArray(d[key])  == true
                            ? rparray       // 无效值 array
                            : rpint;        // 无效值 number
      model.n[key] =  n.hasOwnProperty(key) 
                      ? n[key]
                        : rpnote            // 无效值 note
                      ;
    });
  });

//log(model, 1)

loader.save(target, {model : model});

}

exports.convert = function (obj){
  if (typeof obj !== 'object')
    return undefined;
  
  Object.keys(obj).forEach(function (key, _, __) {
    var d = obj[key].d
        , n = obj[key].n
        ;

    Object.keys(d).forEach(function (key, _, __) {
      if(d[key] == rpstr || d[key] == rparray || d[key] == rpint){
        delete d[key];
        delete n[key];
      }
      if(n[key] == rpnote){
        delete n[key];
      }
    });
    
  });

  return obj;
}

/*

创建模板
  载入原始数据
    
  生成模板数据
*/
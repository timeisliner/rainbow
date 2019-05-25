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


parse(str, quoted)
  将YEWD的ini文件转换为js的war3用对象
    str       utf-8字符串
    quoted    是否保留双引号，默认为不保留

stringify(obj, separator, line)
  将js的war3用对象转换为YEWD的ini文件
    obj       经过parse转换来的对象
    separator 间隔符，默认为有空格等号 >> ' = '
    line      换行符, 默认为 '\r\n'

*/


exports.parse = exports.decode = decode;
exports.stringify = exports.encode = encode;

var eol = process.platform === "win32" ? "\r\n" : "\n"

function isQuoted (val) {
  return (val.charAt(0) === "\"" && val.slice(-1) === "\"")
         || (val.charAt(0) === "'" && val.slice(-1) === "'")
}

function deformat(data, quoted){
  return isQuoted(data) ?
            quoted ?
              data
              : data.substr(1, data.length - 2)
         : Number(data);
}

function degroup(lines, quoted){
           // 1          2        3  4       5          6            7
           // title     |key       = value | -- note  | "",        | }
  var re = /^([^\]]*)\]$|^([^=\-"}]+)(=(.*))?$|^(-- .*)+$|^("[^"]*",)$|^}$/i
      , title = null
      , section = {t : undefined, d : {}, n: {}, list : false, key : undefined, note : undefined};

  lines.forEach(function (line, _, __) {
    
    if (!line) return;
    // log(line);
    // log(line.length);
    // log(typeof line);
    var match = line.match(re)
    if (!match) return;
    
    if (section.list && match[6] !== undefined){
      var list = section.d[section.key]
          , data = match[6].trim();
  
      list[list.length] = deformat(data.substr(0, data.length - 1), quoted);
      return;
    }
    
    if (match[1] !== undefined) {
      section.t = match[1].trim();
      return;
    }
    
    if (match[2] !== undefined) {
      // log(match, 1);
      var key = match[2].trim();
      var value = match[4].trim()
      
      if (section.note){
        section.n[key] = section.note
        section.note = undefined
      }      
      
      if (value === '{'){
        section.d[key] = [];
        section.key = key;
        section.list = true;
        return;
      }else if(value.charAt(0) === '{' && value.slice(-1) === '}'){
        var list = section.d[key] = [];
        value.substr(1, value.length - 2).split(',').forEach(function(v, _, __) {
          list[list.length] = Number(v.trim());
        });
        return;
      }else{
        section.d[key] = deformat(value, quoted);
      }
      
      return;
    }
    
    if (match[5] !== undefined) {
      section.note = match[5].trim();
      return;
    }
    
    if (match[7] !== undefined) {
      section.list = false;
      section.key = undefined;
      return;
    }
  
    });
  //log(section, 1)
  return section;
}

function decode(str, quoted){
  var out = undefined
    , groups = str.split(/[\[]+/g)
    , linereg = /[\r\n]+/g
    ;
  
  groups.forEach(function (group, _, __){
    if (!group.trim())
      return;
    // log(group, 1)
    var lines = group.split(linereg);
    // log(lines, 1)
    // log(lines.length)
    var deg = degroup(lines, quoted);
    
    if (out === undefined)
      out = {};

    out[deg.t] =  { // title
                    d : deg.d // data
                    , n : deg.n // note
                  };
    
    
  });
  
  return out;
}



function entitle(title){
  return `[${title}]`;
}

function enformat(data){
  if (typeof data === 'string'){
    return `"${data}"`;
  }else if(typeof data === 'number'){
    return data;
  }else{
    return data;
  }
}

function engroup(group, separator = '=', line = '\r\n'){
  if (typeof group != 'object' || typeof group.d != 'object')
      return '';
  
  var out = ''
      , datas = group.d
      , notes = group.n;


  Object.keys(datas).forEach(function (key, _, __) {
    // log(key)
    
    out += notes[key] === undefined ? '' : `${notes[key]}${line}`
    if(Array.isArray(datas[key])){
      var number = false;
      if (typeof datas[key][0] === 'number')
        number = true
      
      out += `${key}${separator}{`;
      out += number ? '' : line;
      var lists = datas[key];
      for(var i = 0; i < lists.length; i++){
        if (number){
          if (i == lists.length - 1){
            out += `${lists[i]}`;
          }else{
            out += `${lists[i]}, `;
          }
        }else{
          out += `${enformat(lists[i])},${line}`;
        }
      }
      out += `}${line}`;
    }else{
      out += `${key}${separator}${enformat(datas[key])}${line}`;
    }
    
  });
  
  return out;
}

function encode(obj, separator = true, line = '\r\n'){
  var out = '';
  if (typeof obj !== 'object')
    return out;
  
  separator = separator ? ' = ' : '='

  Object.keys(obj).forEach(function (key, _, __) {
    // log(key)
    out += entitle(key) + line;
    if (!obj[key].hasOwnProperty('d'))
      log('[ini - encode] Warning! expect object property not find : d');
    if (!obj[key].hasOwnProperty('n'))
      log('[ini - encode] Warning! expect object property not find : n');
    
    out += engroup(obj[key], separator, line);
    out += line;
  });
  // log(out)
  return out;
}


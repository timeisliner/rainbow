// ¾É°æ Ê§Ğ§

exports.parse = exports.decode = decode;
exports.stringify = exports.encode = test;

var eol = process.platform === "win32" ? "\r\n" : "\n"

function isQuoted (val) {
  return (val.charAt(0) === "\"" && val.slice(-1) === "\"")
         || (val.charAt(0) === "'" && val.slice(-1) === "'")
}

function deformat(data, quoted){
  return new Promise((resolve, reject) => {
    if(isQuoted(data)){
      if (quoted){
        resolve(data);
      }else{
        resolve(data.substr(1, data.length - 2))
      }
    }else{
      resolve(Number(data))
    }
  });
  
}

function degroup(lines, quoted){
           // 1          2        3  4       5          6            7
           // title     |key       = value | -- note  | "",        | }
  var re = /^([^\]]*)\]$|^([^=\-"}]+)(=(.*))?$|^(-- .*)+$|^("[^"]*",)$|^}$/i
      , title = null
      , section = {t : undefined, d : {}, n: {}, list : false, key : undefined, note : undefined};

  return new Promise((resolve, reject) => {
    lines.forEach(function (line, _, __) {
      
      if (!line) return;
      var match = line.match(re)
      if (!match) return;
      
      if (section.list && match[6] !== undefined){
        var list = section.d[section.key]
            , data = match[6].trim();
  
        deformat(data, quoted).then(value => {list[list.length] = value;});
        return;
      }
      
      if (match[1] !== undefined) {
        section.t = match[1].trim();
        return;
      }
      
      if (match[2] !== undefined) {
        //log(match, 1)
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
        }else{
          deformat(value, quoted).then(value => section.d[key] = value);
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
    resolve(section);
  });
}

function decode(str, quoted){
  var out = {}
    , groups = str.split(/[\[]+/g)
    , linereg = /[\r\n]+/g;
  
  return new Promise((resolve, reject) => {
    groups.forEach(function (group, _, __){
      if (!group) return;
      var lines = group.split(linereg)
          , deg;
      
      degroup(lines, quoted).then(value => deg = value);
      out[deg.t] = {d : deg.d, n : deg.n};
      
      
    });
  
  //log(out, 1);
    resolve(out);
  });
}

function test(obj, separator = true, line = '\r\n'){
  var out = '';
  
  separator = separator ? ' = ' : '='

  Object.keys(obj).forEach(function (key, _, __) {
    log(key)
    out += entitle(key) + line;
    out += engroup(obj[key], separator, line);
  });
}

function entitle(title){
  return `[${title}]`;
}

function engroup(group, separator = '=', line = '\r\n'){
  var out = ''
      , datas = group.d
      , notes = group.n;


  Object.keys(datas).forEach(function (key, _, __) {
    log(key)
    
    out += notes[key] === undefined ? '' : `${notes[key]}${line}`
    if (typeof datas[key] === 'string'){
      out += `${key}${separator}"${datas[key]}"${line}`;
    }else if(typeof datas[key] === 'number'){
      out += `${key}${separator}${datas[key]}${line}`;
    }else if(Array.isArray(datas[key])){
      out += `${key}${separator}{${line}`;
      var lists = datas[key];
      for(var i = 0; i < lists.length; i++){
        out += `${key}${separator}{${line}`;
        
      }
      
      out += `}${line}`;
    }else{
      
    }
    
    //out += `${key}${separator}"${typeof datas[key] == ?}"`entitle(key) + line;
    //out += engroup(obj[key]);
  });

}

function encode (obj, separator = true) {
  var children = []
    , out = ""

  separator = separator ? " = " : "="

  Object.keys(obj).forEach(function (k, _, __) {
    var val = obj[k]
    if (val && Array.isArray(val)) {
        val.forEach(function(item) {
            out += safe(k + "[]") + separator + safe(item) + "\n"
        })
    }
    else if (val && typeof val === "object") {
      children.push(k)
    } else {
      out += safe(k) + separator + safe(val) + eol
    }
  })

  if (opt.section && out.length) {
    out = "[" + safe(opt.section) + "]" + eol + out
  }

  children.forEach(function (k, _, __) {
    var nk = dotSplit(k).join('\\.')
    var section = (opt.section ? opt.section + "." : "") + nk
    var child = encode(obj[k], {
      section: section,
      whitespace: opt.whitespace
    })
    if (out.length && child.length) {
      out += eol
    }
    out += child
  })

  return out
}
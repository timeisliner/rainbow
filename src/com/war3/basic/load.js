var fs = require('fs')
    , ini = require('./ini.js')
    ;

   
function save(path, obj, code = 'utf-8'){
if (fs.existsSync(path))
  fs.unlinkSync(path)

fs.writeFileSync(path, ini.encode(obj), code)
}

function load(path, code = 'utf-8'){
if (fs.existsSync(path))
  return ini.decode(fs.readFileSync(path, code));
return undefined;
}

function stringify(path, obj, code = 'utf-8'){
if (fs.existsSync(path))
  fs.unlinkSync(path)

fs.writeFileSync(path, JSON.stringify(obj), code)
}

function parse(path, code = 'utf-8'){
if (fs.existsSync(path))
  return JSON.parse(fs.readFileSync(path, code));
return undefined;
}




class fixed{
  constructor(path, code = 'utf-8'){
    this.path = path;
    this.code = code;
  }
  
  save(obj){
    save(this.path, obj, this.code);
  }
  
  load(){
    return load(this.path, this.code);
  }
}



exports.save = save;
exports.load = load;
exports.stringify = stringify;
exports.parse = parse;
exports.CLASS = fixed;
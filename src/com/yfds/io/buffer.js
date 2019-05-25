var fs = require('fs');

   
function write(path, obj, code){
if (fs.existsSync(path))
  fs.unlinkSync(path)

fs.writeFileSync(path, JSON.stringify(obj), code)
}

function read(path, code){
if (fs.existsSync(path))
  return JSON.parse(fs.readFileSync(path, code));
return undefined;
}


class buffer{
  constructor(path, code = 'utf-8'){
    this.path = path;
    this.code = code;
  }
  
  write(obj){
    write(this.path, obj, this.code);
  }
  
  read(){
    return read(this.path, this.code);
  }
}

exports.CLASS = buffer;
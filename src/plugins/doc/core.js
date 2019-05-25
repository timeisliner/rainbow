/** [js template] github */

/** com 中 doc 的 core 设定
*/

/** expose */
class Core{
  constructor( dir , name){
    this.ids = new Map();
    this.docs = new Map();
    this.dbos = new Map();
    this.dir = dir;
    this.n = name;
  }
  
  get(type, k){
    switch(type){
      case 'id' :
        return this.ids.get(k);
      case 'doc' :
        return require(`${this.dir}${this.docs.get(k)}`).doc;
      case 'dbo' :
        return require(`${this.dir}${this.dbos.get(k)}`).dbo;
      default :
        log(`[doc.core.get(type, k) - Illegal Type]  type:${type} | k:${k}`);
    }
  }
  
  set(type, k, v){
    switch(type){
      case 'id' :
        this.ids.set(k, v);
        break;
      case 'doc' :
        this.docs.set(k, v);
        break;
      case 'dbo' :
        this.dbos.set(k, v);
        break;
      default :
        log(`[doc.core.set(type, k, v) - Illegal Type]  type:${type} | k:${k}`);
    }
  }

  get dirname(){
    return this.dir;
  }
  get name(){
    return this.n;
  }
  set name(name){
    this.n = name;
  }
}

exports.CLASS = Core;
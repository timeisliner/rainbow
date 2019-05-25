/** [js template] github */

/** com 中 doc 的 core 设定
core.0.3.js
  细微调整
    
*/

/** expose */
class Core{
  constructor( dir , name){
    var self = this;
    this.dir = dir;
    this.n = name;
    
    this.id = new Map();
    
    this.doc = {
      cache : new Map(),
      set(k, v){
        this.cache.set(k, v);
      },
      get(k){
        return require(`${self.dir}${this.cache.get(k)}`).doc;
      }
    };
    
    this.dbo = {
      cache : new Map(),
      set(k, v){
        this.cache.set(k, v);
      },
      get(k){
        return require(`${self.dir}${this.cache.get(k)}`).dbo;
      }
    };
  }

  get dirname(){
    return this.dir;
  }
  get name(){
    return this.n;
  }
}

exports.CLASS = Core;
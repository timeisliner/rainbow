/** [js template] github */

/** com 中 war3 的 core 设定
core.0.1.js
  基础结构
*/



class core extends op.c.get('plugin').CLASS {
  constructor(dir, name){
    super(name, 'war3');
    var self = this;
    this.d = dir;
    
    this.id = new Map();
    
    this.bin = {
      cache : new Map()
      , set(k, v){
          this.cache.set(k, v);
        }
      , get(k){
          return require(`${self.d}${this.cache.get(k)}`);
        }
    };
    this.tool = {
      cache : new Map()
      , set(k, v){
          this.cache.set(k, v);
        }
      , get(k){
          return require(`${self.d}${this.cache.get(k)}`);
        }
    };
    this.fixed = new Map();
  }
  
  get dir(){
    return this.d;
  }
  
  get model(){
    return this.m;
  }
}

/** expose */
exports.CLASS = core;
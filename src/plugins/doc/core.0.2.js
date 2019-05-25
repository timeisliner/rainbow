/** [js template] github */

/** com 中 doc 的 core 设定
core.0.2.js
  代码优化
*/

/** expose */
class Core{
  constructor( dir , name){
    this.dir = dir;
    this.n = name;
    
    this.id = {
      cache : new Map(),
      set(k, v){
        this.cache.set(k, v);
      },
      get(k){
        return this.cache.get(k);
      }
    };
    
    this.doc = {
      cache : new Map(),
      set(k, v){
        this.cache.set(k, v);
      },
      get(k){
        return require(`${dir}${this.cache.get(k)}`).doc;
      }
    };
    
    this.dbo = {
      cache : new Map(),
      set(k, v){
        this.cache.set(k, v);
      },
      get(k){
        return require(`${dir}${this.cache.get(k)}`).dbo;
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
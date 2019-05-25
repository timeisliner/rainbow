/** [js template] github */

/** com 中 doc 的 core 设定
core.0.1.js
*/

/** expose */
class Core{
  constructor( dir , name){
    var aids = new Map();
    var adocs = new Map();
    var adbos = new Map();
    
    this.ids = aids;
    this.docs = adocs;
    this.dbos = adbos;
    this.dir = dir;
    this.n = name;
    
    this.id = {
      set(k, v){
        aids.set(k, v);
      },
      get(k){
        return aids.get(k);
      }
    };
    
    this.doc = {
      set(k, v){
        adocs.set(k, v);
      },
      get(k){
        return require(`${dir}${adocs.get(k)}`).doc;
      }
    };
    
    this.dbo = {
      set(k, v){
        adbos.set(k, v);
      },
      get(k){
        return require(`${dir}${adbos.get(k)}`).dbo;
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
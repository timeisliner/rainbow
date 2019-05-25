/** [js template] github */

/** plugin.mongoose-ms  //models schema 模型模式
  dependences : mongoose
*/

/** expose */
class MS{
  constructor( mongoose = require('mongoose') ){
    this.m = mongoose;
  }
  
  get mongoose(){
    return this.m;
  }
  
  get schema(){
    return this.m.Schema;
  }
  
  model(doc){
    return this.m.model(doc.mdl, doc.scm);
  }
  
  doc(doc, data){
    return { scm : doc.scm, mdl : this.model(doc), td : data };
  }
}

exports.CLASS = MS;
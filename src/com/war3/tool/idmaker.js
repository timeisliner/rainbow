/** @war3 system 编号生成工具.js

*/

exports.obj = {
// 字符
  ids : "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
// 起始编号
  start : 0,
// 编号前缀
  prefix : "z",
// 生成一个编号
  gen(){
    var tpstart = this.start;
    var tpnext = 0;
    var tpcurr = 0;
    var tppreid = "";
    var tpgenid = "";
    
    if (this.start < this.ids.length){
      tppreid = this.prefix + "00";
    }else if(this.start < this.ids.length * this.ids.length){
      tppreid = this.prefix + "0";
    }else if(this.start < this.ids.length * this.ids.length * this.ids.length){
      tppreid = this.prefix;
    }else{
      log(this.start + " 该值太大了，建议修改下");
      return undefined;
    }
    
    
    var tpend = true;
    do{
      tpnext = Math.floor(tpstart / this.ids.length);
      if (tpnext > 0){
        tpcurr = tpstart - tpnext * this.ids.length;
        tpgenid = this.ids.substring(tpcurr, tpcurr + 1) + tpgenid;
        tpstart = tpnext;
      }else{
        tpgenid = this.ids.substring(tpstart, tpstart + 1) + tpgenid;
        tpend = false;
      }
    }while(tpend);
    this.start += 1;
    return tppreid + tpgenid;
  },

// 生成指定个数编号
  gens(n){
    n = n > 0 ? n : 0;
    var out = []
    for (var i = 0; i < n; i ++){
      // log(this.gen());
      out[i] = this.gen();
    }
    return out;
  }
}
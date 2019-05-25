//Database Operation

class Dbo {
  constructor(doc) {
    this.doc = doc;
    this.mdl = this.doc.mdl;
  }

  exec(aggregates){
    log('[doc.dbo.exec(aggregates) - modelName] ' + this.mdl.modelName);
    return new Promise((resolve, reject) => {
      this.mdl.aggregate(aggregates, function(err, docs){
        if(err)reject(log(err, 1));
        log('[doc.dbo.exec(aggregates) - return.result]');
        log(docs, 1);
        resolve(docs);
      });
    });
  }
/**  $regex 据说aggregate不能用，所以写了，测试了下$match可以附加$regex，所以注释了
  * 详见 @ a dbo/swm.js  search(sw)
  find(query){
    log('[doc.dbo.find(query) - modelName] ' + this.mdl.modelName);
    return new Promise((resolve, reject) => {
      this.mdl.find(query, function(err, docs){
        if(err)reject(log(err, 1));
        log('[doc.dbo.find(query) - return.result]');
        log(docs, 1);
        resolve(docs);
      });
    });
  }
*/
  count(){ // 获取文档总数
    log('[doc.dbo.count() - modelName] ' + this.mdl.modelName);
    var cd = [
      { $group: { _id: null, count: { $sum: 1 } } },
      { $project : {_id : 0}}
    ];
    return this.exec(cd);
  }
  
  drop(){ // 清空集合中的文档
    log('[doc.dbo.drop() - modelName] ' + this.mdl.modelName);
    return new Promise((resolve, reject) => {
      this.mdl.remove({}, function (err) {
        if(err)reject(log(err, 1));
        log('[doc.dbo.drop() - drop.success > return 1]');
        resolve(1);
      });
    });
  }
  
  //@force true 不论集合中存有数据与否都将执行操作
  // 会在执行时清空数据
  async init(force){ // 将[doc]中的测试数据[adata]初始化到集合中，如果集合不存有数据的话
    log('[doc.dbo.init(force) - modelName] ' + this.mdl.modelName);
    
    var count = await this.count();
    if(count.length == 0 || count[0].count == 0 || force){
      var dropped = await this.drop();
      if(dropped){
        log('[doc.dbo.init(force) - drop success] init ...');
        return await this.adds(this.doc.td);
      }else{
        log('[doc.dbo.init(force) - drop failed, init abort]');
      }
    }else{
      log('[doc.dbo.init(force) - no force, init abort] docs : ' + count[0].count);
    }

  }
  
  adds(datas){// 为集合添加数据文档
    log('[doc.dbo.adds() - modelName] ' + this.mdl.modelName);
    return new Promise((resolve, reject) => {
      this.mdl.insertMany(datas, function (err, docs) {
        if(err)reject(log(err, 1));
        log('[doc.dbo.adds() - insert.success > return inserts]');
        resolve(docs);
      });
    });
  }
  
  update(field, data){ // 更新集合指定数据
    log('[doc.dbo.update() - modelName] ' + this.mdl.modelName);
    return new Promise((resolve, reject) => {
      this.mdl.update(field, data, function (err, raw) {
        if(err)reject(log(err, 1));
        // log('[index.dbo.update() - update.success > The raw response from Mongo was ]');
        log(raw, 1)
        resolve(raw);
      });
    });
  }
  
}

exports.CLASS = Dbo;

  // 待测试
  // async _add(o){//添加新的 doc 数据 数据库
    // 自动获取编号 m
    // var m = await this.max();
    // 填充到 {m : 0, r : {n : '名词', e : '解释'}, ref : [1, 2, 3], f : 1}
    // o.m = m + 1;
    // return new Promise((resolve, reject) => {
      // this.mdl.insertMany([o], function(err, docs){
        // if(err)reject(log(err));
        // log(docs);
        // resolve(docs);
      // });
    // });
  // }
  
  // 待测试
  // _del(m){//删除指定编号 m 的doc 数据 数据库
    // return new Promise((resolve, reject) => {
      // this.mdl.deleteOne({
        // m : m
      // }, function(err){
        // if(err)reject(log(err));
        // log(0);
        // resolve(0);
      // });
    // });
  // }
  
  // 待测试
  // _update(o){//修改指定编号 m 的doc 数据 数据库
    // return new Promise((resolve, reject) => {
      // this.mdl.update({
        // m : o.m
      // }, o, function(err, doc){
        // if(err)reject(log(err));
        // log(doc);
        // resolve(doc);
      // });
    // });
  // }
  
  // 待测试
  // _get(m){//根据编号 m 取得 doc 数据 数据库
    // return new Promise((resolve, reject) => {
      // this.mdl.findOne({
        // m : m
      // }, function(err, doc){
        // if(err)reject(log(err));
        // log(doc);
        // resolve(doc);
      // });
    // });
  // }
  
  // 查询
  // _find(cd){//conditions
    // return new Promise((resolve, reject) => {
      // this.mdl.find({
        // 'r.n' : { $regex: `/.*${n}.*/`, $options: 'si' }
      // }, function(err, docs){
        // if(err)reject(log(err));
        // log(docs);
        // resolve(docs);
      // });
    // });
    // return new Promise((resolve, reject) => {
      // this.mdl.aggregate(cd, function(err, docs){
        // if(err)reject(log(err, 1));
        // log('[doc.dbo.find(cd) - docs]');
        // log(docs, 1);
        // resolve(docs);
      // });
    // });
    
  // }
  
  // 待测试
  // _max(){// 取得 doc数据 数据库 编号 m 最大值
    // return new Promise(async (resolve, reject) => {
      // var count = await this.count();
      // if(count > 0){
        // this.mdl.aggregate([
          // {
            // $project: {
              // m : { $max : "$m"}
            // }
          // }
        // ], function(err, docs){
          // if(err)reject(log(err));
          // log(docs);
          // log(docs[0].m);
          // resolve(docs[0].m);
        // });
      // }
      // log(-1);
      // resolve(0);
    // });
  // }
  
  // _count(){// 取得 doc数据 数据库 总条目
    // return new Promise((resolve, reject) => {
      // this.mdl.count({}, function (err, count) {
        // if(err)reject(log(err));
        // resolve(count);
      // });
    // });
  // }
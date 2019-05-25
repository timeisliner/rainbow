/** [js template] github[mongoose] */

/**
 * color 数据结构
 *
 */

/** doc references */
var com = op.gg('coms').get('top');
var root = com.get('doc', com.get('id', 'root'));

/** schema data */
var aschema = {
  m : { //meta  数据元
    type : Number,
    required: true,
    index : true,
    unique : true
  },
  v : { //value  值
    type : String,
    required: true,
    unique : true
  },
  r : {
    type : root.scm,
    required: true
  }
}

/** source data */
var adata = [
  {m : 0, v : 'FFFFFF', r : {n : 'white', e : '白色'}},
  {m : 1, v : 'B0E0E6', r : {n : 'powderblue', e : '浅灰蓝色'}},
  {m : 2, v : '00FF7F', r : {n : 'springgreen', e : '嫩绿色'}},
  {m : 3, v : 'C0C0C0', r : {n : 'silver', e : '银灰色'}},
  {m : 4, v : 'FFFF00', r : {n : 'golden', e : '金黄色'}},
  {m : 5, v : 'DA70D6', r : {n : 'orchid', e : '淡紫色'}},
  {m : 6, v : 'FF8000', r : {n : 'orange', e : '桔黄'}}
];

exports.doc = op.gg('plugin.doc.doc').fn('top', 'color', aschema, adata);
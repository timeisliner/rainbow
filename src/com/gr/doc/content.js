/** doc references */
var com = op.c.get('coms').get('gr');
 
/** schema data */
var schema = {
  content : {
    type: String
    , required: true
    , trim: true
  }
  , info : {
    type: String
    , default : ''
  }
  , rd : {
    type : Date
    , default: Date.now
  }
}

/** source data */
var data = [
];

exports.doc = op.c.get('plugin.doc.doc').fn('gr', 'content', schema, data);

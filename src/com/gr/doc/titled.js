/** doc references */
var com = op.c.get('coms').get('gr');
var content = com.doc.get(com.id.get('content'));
 
/** schema data */
var schema = {
  title : {
    type: String
    , required: true
    , index: true
    , unique: true
    , trim: true
  }
  , contents : {
      type: [content.scm]
      , default : undefined
  }
  , stage : {
    type: String
    , required: true
  }
  , keys : {
    type: [String]
    , default : ''
  }
  , type : {
    type: String
  }
  , rd : {
      type : Date
      , default: Date.now
  }
}

/** source data */
var data = [
];

exports.doc = op.c.get('plugin.doc.doc').fn('gr', 'titled', schema, data);

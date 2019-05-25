/** doc references */
var com = op.c.get('coms').get('gr');
var titled = com.doc.get(com.id.get('titled'));
 
/** schema data */
var schema = {
  name : {
    type: String
    , required: true
    , index: true
    , unique: true
    , trim: true
  }
  , titles : {
      type: [titled.scm]
      , default : undefined
  }
  , rd : {
      type : Date
      , default: Date.now
  }
}
 
/** source data */
var data = [
{
  name : '巴别塔'
  , titles : [
    {
      title : '萨拉齐·巴别塔'
      , stage : 'rainbow.id'
      , keys : ['星魂之剑']
      , type : 'role'
      , contents : [
          {
            content : '相关'
            , info : `Babel 巴别塔-巴比伦式的城市
企业集团`
          }
        ]
      , rd : op.lib.mydate('2018-9-14 20:26:43')
    }
    , {
      title : '巴别塔集团'
      , stage : 'rainbow.id'
      , keys : ['星魂之剑']
      , type : 'group'
      , contents : [
          {
            content : '相关'
            , info : `民用重工集团

载运输机械，D型为百吨级，II型在原有人工基础上增加了人工智能的自动机制，银灰色，该类型是巴别塔集团民用机械中的王牌，适应性极强。

tropism-25`
          }
        ]
      , rd : op.lib.mydate('2018-9-14 20:26:43')
    }
  ]
}
];

exports.doc = op.c.get('plugin.doc.doc').fn('gr', 'named', schema, data);

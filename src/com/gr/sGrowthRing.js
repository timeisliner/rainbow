growth ring
年轮，数据记录模型的设计文档
2018-11-04 - 2018-11-24 15:28:00

{handing 2018-11-24 15:56:14 .. ok 2018-11-25 15:44:48
struct .. ok 2018-11-24 15:54:55
init
  id .. ok 2018-11-24 15:59:23
  doc .. ok 2018-11-24 16:01:25
  dbo .. ok 2018-11-24 17:23:19
vc .. ok 2018-11-24 16:07:58
doc
  named .. ok 2018-11-24 16:22:35
  titled .. ok 2018-11-24 16:22:35
  content .. ok 2018-11-24 16:22:35
dbo
  search ... ok 2018-11-24 17:23:13
op .. ok 2018-11-24 16:14:08
router
  rc - test - obj .. ok 2018-11-24 18:03:47
server .. ok 2018-11-24 18:03:43
bvt
  gr.test : gr/test .. ok 2018-11-24 18:04:54
pug
  server/pugs/gr .. ok 2018-11-25 15:42:52
}

depend : rainbow.com - component
name : gr
vc : com.gr.init
dir : com/gr
  doc : com/gr/doc
    named.js
    titled.js
    content.js
  dbo : com/gr/dbo
    search.js

id : named - vc.doc : com.gr.doc.named
/** named.js 2018-11-24 15:02:32
 * 
 * [js template] github[mongoose]
 * 
 * 命名的 标记性质的分类名词，用于将名称上相同的名词聚集在一起
 *            包含一系列相同名称的主题 titles
 *            记录日期 record
 * 

name 名称 [String/unique]
titles 一组具备相同名称的主题，即同名不同意义的主题 [Array.Object-titled]
rd - record date 记录日期 [Date]

 */

id : titled - vc.doc : com.gr.doc.titled
/** titled.js 2018-11-24 15:11:42
 * 
 * [js template] github[mongoose]
 * 
 * 有主题的 具有指定含义的事物
 *            包含一系列的内容 - 或连续或片段的信息 contents
 *            主题应用的场景 - 限定【具象化name】的背景 - 应用分类 stage
 *            标志性的说明 - 关键字 特殊搜索字 - 特别分类 keys
 *            属性特征 - 性质分类 type
 *            记录日期 record
 * 

title 主题 [String/unique]
contents 一系列的内容 [Array.Object-content]
stage 应用的舞台 [String]
keys 特殊搜索字 [Array.String]
type 性质类别 [String]
rd - record date 记录日期 [Date]

 */

id : content - vc.doc : com.gr.doc.content
/** content.js 2018-11-24 15:25:01
 * 
 * [js template] github[mongoose]
 * 
 * 内容 描述一个关于某个主题的事件
 *            内容描述 info
 *            记录日期 record
 * 

content 内容 [String]
info 内容描述 [String]
rd - record date 记录日期 [Date]

 */


dbo : search - vc.dbo
/** search.js 2018-11-24 16:44:55
 * 
 * middleware
 * 
 * 检索 查询任务
 *        查找指定 named
 *        查找指定 titled
 *        查找指定 titled.stage
 * 

find 查找指定 named
finds 查找指定 titled , [options | titled.stage ...]
  options : {
    stage :
    type : 
    date : 
    keys :
  }

 */


router : grtest.js - server\router - vc : server.router.grtest
  post : grtest
 
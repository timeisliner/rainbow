preprocess
2018-11-4 - 2018-11-25 11:20:31

/** 预处理机制 2018-11-25 11:22:07
 * 全局注册 pres
 * 版本注册 vcs
 * 预定义功能注册 libs
 * 组件注册并初始化 coms
 * 启动服务 start

pres
  log
  vc
  op
vcs
  统筹版本控制 - 将所有文件的版本数据放在一个文件中
  分组版本控制 - 依照不同的功能将文件的版本数据分组存放，最后集中处理这些分组文件


 */

{handing 2018-11-24 15:56:14 .. model
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
pug ..
}

depend : rainbow - preprocess
name : op
vc : 
  op.init - op.js 主程序
  
dir : com/gr
  doc : com/gr/doc
    named.js
    titled.js
    content.js
  dbo : com/gr/dbo
    search.js

normal.set('op', 'op.0.1.js');



{/** 数据信息化 */
  数据体 - [DV - Data volume]- 完整的数据登记
  特征识别码 - [FIC - Feature identification code]- 标记数据体的属性特征

{/* DV */
  信息化编号 [IN - Informatization number]
    FIC-UN
  数据体定名 [DVD - Data volume designation]
    FIC-CS

}

{/* FIC */
  唯一 [UN - Unique]
  字符串 [CS - character string]
}
}

{// [B]链Block [L]块Link
[LU] 逻辑单元

[B] 块 - 信息共享

[L] 链 - 协议通信


}

{//组织结构
class Root{
  constructor() {
    this.name = 'Root';
    this.type = -1;
    this.types = [ 'Block', 'Link', 'Info' ];
  }
  
  get typed () {
    if(typeof this.type === 'undefined'){
      //throw error
    }else if(this.type === -1){
      return this.name;
    }else{
      return this.types[this.type];
    }
  }
}

class Block extends Root {
  constructor() {
    super();
    this.type = 0;
  }
}

B block 块
  - 组件 封闭 - 内部流通实现所需功能的完整信息链[L]，通过开放API接纳外部信息链[I.L]而独立存在。
  Root class - Block

L link 链
  - 结构 - 通过信息[I]关联在一起的块[B]构成逻辑链[L]，以完成一项任务为目的。
  链级别
    构建 build.L 0
    测试 test.L 1
    系统 sys.L 2
    组件 com.L 3
  Root class - Link

I information 信息
  - 标识 + 数据 - 识别与用于实际用途的载体，识别具有一致性，载体可能会发生变化。
  载体
    签名 S signature 标识、认证信息，唯一性、一致性
      ['ID', 'en explain', 'cn ID', 'cn explain']
      or
      'ID'
    信息集 IS Information Set 信息收纳
      Map - Build-in Object
        key - I.s
        value - I.is
  Root class - Info
}


{// build.L - 构建链 搭设前后端软件，配置前后端信息
  git version 2.12.2.windows.2
    git-bash -- cmd tool
  node v7.9.0
  npm@4.2.0
  
  node src/ep.js - Run
  
  npm init 初始化项目信息
    package.json
    install i
      -D --save-dev > devDependencies
      -P --save-prod > dependencies
      -g --global > install the package globally rather than locally

  grunt - CPU占用率过高
    npm i --save-dev grunt grunt-concurrent load-grunt-tasks
    npm i --save-dev grunt-contrib-jshint grunt-nodemon grunt-contrib-watch
    Gruntfile.js
      jshint
        rb.jshintrc

  koa
    npm un koa koa-mount koa-views koa-pug koa-static koa-bodyparser koa-router koa-mongoose
    npm i --save-prod koa koa-mount koa-views koa-pug koa-static koa-bodyparser koa-router koa-mongoose
    koa-mongoose 文件未及时更新，需要手动修改
}


{// 

}

{//op.L - operation platform 
  
}

{//sys.L - 系统级信息链框架，解决应用级签名识别任务。
构建 build B - 组织维系顶级块[系统级 | sys.B]的基本信息链[sys.L]，进而搭建顶级块[系统级 | sys.B]
  
应用 apply B
  
测试 test B
  log
}

{//com - 组件级 B
  
}

{//doc - 中间件 数据模型
DM 数据标识
  - B | Data Mark - 在与数据关联的一系列块链中标记、识别数据

DSL 数据存储逻辑
  - B | Data Storage Logic - 为数据存储关联的数据库相关操作而执行相应的逻辑预处理
  MongoDB
    schema
    model

DPL 数据呈现逻辑
  - B | Data Presentation Logic - 为数据呈现关联的数据应用操作而执行相应的逻辑预处理
Web 界面
  pug
  common

}

{/** 数据信息化 2018-6-20 7:38:59 */
  块链 - [BL - Block Link] - 数据逻辑搭建方式

  数据体 - [DV - Data volume]- 完整的数据登记
  特征识别码 - [FIC - Feature identification code]- 标记数据体的属性特征
}
  
{/* BL */
B block 块
  - 组件 封闭 - 内部流通实现所需功能的完整信息链[L]，通过开放API接纳外部信息链[I.L]而独立存在。

L link 链
  - 结构 - 通过信息[I]关联在一起的块[B]构成逻辑链[L]，以完成一项任务为目的。
  链级别

{Build.L 构建架构 构建链

{前端
}

{后端
git version 2.12.2.windows.2
  git-bash -- cmd tool
node v7.9.0
npm@4.2.0

cd path
  这里如果不切换到项目目录，则会使得node的basedir为磁盘目录，因而导致后续相对路径引用出错
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

}

{System.L 系统架构 系统链

{Config.B 配置

L.ep - 程序入口 初始化
  B.config    - 文件版本
  B.op        - 操作加载项 
  B.log       - L.ep 提示信息


L.config - 配置全局定义项
  B.log     - 提示信息
  B.config  - 文件版本使用设置
  B.op      - op系统


L.op - 操作加载
  B.basedir - 记录根目录路径
  B.c       - 组件管理
  B.init    - 为op中部署组件


}

{Apply.B 部署

L.op.init - 初始化
  B.contents    - 环境部署
  B.components  - 组件载入
  B.servers     - 服务启动


L.contents - 内容环境
  B.plugins   - 插件，类 CLASS | 函数 fn
  B.coms      - 管理容器 obj
  B.server    - 后端服务 obj


L.components - 组件配置初始化
  B.coms.init - 初始化文件加载


L.servers - 服务开启
  B.server.start - 启动后端服务
}




  


}    



}

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

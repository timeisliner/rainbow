
const fs = require('fs');
const http = require('http');

// 单个图片 异步处理
function getctt(i, j, options, content){
  return new Promise((resolve, reject) => {
    http.get(options, (res) => {
      console.log(`i : ${i}`)
      res.setEncoding('binary');//转成二进制
      content = '';
      // Do stuff  with response
      res.on('data', (data) => {
        content += data;
      }).on('end', () => {
        if (content.length < 700) {
          console.log("700 error break!")
          resolve(true);
        }else{
          fs.writeFileSync(`a${i}to${j}` + ".jpg", content,'binary');
          console.log('down! No more data in response.');
          resolve(false);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  });
}

  
  var path = "/2016/0809/41/44.jpg!960.jpg"
  
  var options = {
    hostname: "pic2016.ytqmx.com",
    port: 82,
    path: path,
    agent: false // create a new agent just for this one request
  };
  
// 35 44 25 24
  var ooff = false;
  
  var x = 0;
  var content = '';
  
  for (var i = 38; i < 46; i ++){
    ooff = false;
    for (var j = 1; j < 100; j ++){
      if(ooff) break;
      //options.path = "/2016/0809/41/" + i + ".jpg!960.jpg"
      //options.path = "/2016/0809/" + i + "/1.jpg!960.jpg"
      options.path = `/2016/0809/${i}/${j}.jpg!960.jpg`
      console.log(options.path)
      ooff = await getctt(i, j, options, content);
    }
  }


/*  
var request = http.request( {hostname:'www.zhuoku.com'}, function (response) {
  response.on('data', function (data) {
    //Buffer
    var string =  data.toString() ;
    var rule = /http:\/\/.[^"]+\.jpg/gi;
    var ary = string.match(rule);    //拿到所有jpg结尾的链接集合
    var x = 0;
  
    for(var i in ary) {
      console.log(ary[i]);
      //通过url重新连接服务器，获取图片，将图片写到磁盘上
      http.get(ary[i], function (res) {
        res.setEncoding('binary');//转成二进制
        var content = '';
        res.on('data', function (data) {
          content+=data;
        }).on('end', function () {
          fs.writeFile(x++ + '.jpg',content,'binary', function (err) {
            if (err) throw err;
            console.log('保存完成');
          });
        });
      });
    }
  });
});

request.end();
*/
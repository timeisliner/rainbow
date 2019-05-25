script.
  var welcome = 'instruction : <br/>-clear : clear info <br/> -cmd : show commands';
  var b = $('#gamebox');
  var st = $('#search_t'), sb = $('#search_b');
  var face = ['^_^', '^.^', '-_-', '^o^', '=_=', '+_+', 'T^T', '?_?', '$_$'];

  // 服务器开放 api 信息
  var cmd = ['rank', 'obj', 'delete', 'test'];
  var fn;
  function orders(order){
    var tp = {};
    if(order && order.constructor.name === 'Array' && order.length > 0){
      for(var i = 0; i < order.length; i ++){
        tp[order[i]] = 'cmd_' + order[i];
      }
      return tp;
    }
  }
  fn = orders(cmd);

  // 服务器通信
  function msg(type, value){
    var data = {};
    type ? data.type = type : 0;
    value ? data.value = value : 0;
  
  
    $.ajax({
      url : '/rc',
      timeout : 240000,
      method : 'post',
      data : data,
      //jqXHR (in jQuery 1.4.x, XMLHTTPRequest)
      //textStatus ("success", "notmodified", "nocontent", "error", "timeout", "abort", or "parsererror")
      complete(jqxhr, textStatus){
        
      },
      //textErr the textual portion of the HTTP status
      error(jqxhr, textStatus, textErr){
      
      },
      //data returned from the server, formatted according to the dataType parameter or the dataFilter //callback function, if specified
      success(data, textStatus, jqXHR ){
        //console.log(jqXHR.status);
        
        b.html(data);
      }
    });
    //alert('ok');
  }
  
  // 内容框 初始化 填充
  b.html(welcome);
  
  // 搜索键 click 检测
  sb.on('click', function(e){
    var search = st.val().trim();
    //e.preventDefault();
    //e.stopPropagation();
    if(!search){
      //console.log(sb);
      return;
    }
    

    if(search === '-clear'){
      b.html(welcome);
    }else if(search === '-cmd'){
      b.prepend(`cmd : ${cmd.join(' , ')}<br/>`);
    }else{
      var checked = false;
      for(var i = 0; i < cmd.length; i ++){
        if($(`#${fn[cmd[i]]}`)[0].checked){
          msg(cmd[i], search);
          checked = true;
          break;
        }
      }
      if(!checked){
        $('#gamebox').prepend(`<label style="color : red">warning : no cmd ! input : ${search}</label><br/>`);
      };
    }
    
    $('#face').text(face[Math.floor(Math.random() * 1000 % face.length)]);
    st.select();
  });
  
  
  // 搜索键入 enter 检测
  function keyhandler(e){
    //console.log(e.key);
    if(e.key === 'Enter'){
      sb.trigger( "click" );
      e.target.select();
    }
  }
  st.keypress( keyhandler )
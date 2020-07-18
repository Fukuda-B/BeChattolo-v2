/*
  BeChattolo v2 Ver.0.0.2
  (クライアント側)
*/

var sock = new WebSocket('ws://127.0.0.1:5001');

// 接続開始
sock.addEventListener('open',function(e){
    console.log('WebSocket @ '+new Date());
    contents.innerHTML = '<li class="contents_li">BeChattolo v2: WebSocket @'+new Date()+'</li>';
});

// サーバーからデータを受け取る
contents = document.getElementById('contents');
sock.addEventListener('message',function(e){
    console.log(e.data);
    recieve_data = e.data.split("\n")
    contents.innerHTML = '<li class=contents_li><span class=in_text>'+recieve_data[0]+'</span><span class=in_date>'+recieve_data[1]+'</span></li>'+contents.innerHTML;
});

document.addEventListener('DOMContentLoaded',function(e){
    // サーバーにデータを送る
    document.getElementById('send_button').addEventListener('click',function(e){
        send_data = document.getElementById('send_text');
        sock.send(send_data.value);
        send_data.value = '';
    });
});

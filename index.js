/*
  BeChattolo v2 Ver.0.0.2
  Node.js (サーバー側)
*/

var server = require('ws').Server;
var s = new server({port:5001});

s.on('connection',function(ws){

    ws.on('message',function(message){
        console.log("Received: "+message);

        s.clients.forEach(function(client){
            var date = new Date();
            var date_out = date.getFullYear()+'/'+zerosli((date.getMonth() + 1)) + '/' + zerosli(date.getDate()) +' '+ zerosli(date.getHours())+':'+zerosli(date.getMinutes())+':'+zerosli(date.getSeconds());
            client.send(message+'\n'+date_out);
        });
    });

    ws.on('close',function(){
        console.log('I lost a client');
      });

});

// ----- 2桁の0埋め -----
function zerosli(no) {
  return ("00" + no).slice(-2);
}

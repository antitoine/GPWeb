var net = require('net');
var fs = require('fs');


var PORT = 9001;
var HOST = '127.0.0.1';
var FILEPATH = '/home/razvan/Desktop/ac.fil-rouge-gpweb/app/scripts/clientside/random.json';

var client = new net.Socket()

//connect to the server
client.connect(PORT,HOST,function() {
    'Client Connected to server'

    //send a file to the server
    var fileStream = fs.createReadStream(FILEPATH);
    fileStream.on('error', function(err){
        console.log(err);
    })

    fileStream.on('open',function() {
        fileStream.pipe(client);
    });

});
//handle to receive the response of the server
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

//handle closed
client.on('close', function() {
    console.log('server closed connection')
});
// handle in case of error
client.on('error', function(err) {
    console.log(err);
});
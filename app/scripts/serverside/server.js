var fs = require("fs");
var file ="./" + "test.db";
var exists = fs.existsSync(file);

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');
var check;
// creation of the db using DROP TABLE ZONE to test .. 
// pay attention to PRIMARY KEY 
db.serialize(function() {
  db.run("DROP TABLE ZONE");
  db.run("CREATE TABLE if not exists ZONE (id PRIMARY KEY ASC, name, width text,height text, top text, left text,backgroundColor" +
  	",backgroundImage,border,font,color,size,style,decoration,align, text)");
});

var net = require('net');
var fs = require('fs');
var buffer = require('buffer');

// creation of the server
var server = net.createServer(function(conn) {
    console.log('server connected');

    // data to receive
    conn.on('data', function(data) {
        console.log('data received');
        console.log('data is: \n' + data);
        // parsing the json string
        var json = JSON.parse(data);
        // adding it to db
        db.serialize(function()
    	{
    		// insertion
     		db.run("INSERT INTO ZONE VALUES ("+
     			json.id +",\'"+ json.name +"\', \'"+ json.width +"\',\'"+ json.height +"\',\'" + json.top + "\',\'"+
     			json.left + "\',\'" + json.backgroundColor + "\',\'" + json.backgroundImage + "\',\'"+ json.border +
     			"\',\'" + json.font + "\',\'" +  json.color + "\',\'" + json.size +"\',\'" + json.style +"\',\'" + json.decoration
     			+ "\',\'" + json.align + "\',\"" + json.text+"\")"
     			);
     		// just for testing
  	 		db.each("SELECT * FROM ZONE", function(err, row) {
     			 console.log(row.id + ": " + row.text);
  				});
 		});
 		// reponse of the server 
 		conn.write("hi there");
    });
});

var HOST = '127.0.0.1';
var PORT = '9001';

// the server listes on the PORT 9001 and HOST localhost for the moment
server.listen(PORT, HOST, function() {
    //listening
    console.log('server bound to ' + PORT + '\n');

    server.on('connection', function(){
        console.log('connection made...\n')
    })
});
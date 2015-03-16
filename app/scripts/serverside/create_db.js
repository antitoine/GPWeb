var fs = require("fs");
var file ="./" + "test.db";
var exists = fs.existsSync(file);

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');
var check;
db.serialize(function() {
  db.run("DROP TABLE ZONE");
  db.run("CREATE TABLE if not exists ZONE (id PRIMARY KEY ASC, name , width ,height, top, left ,backgroundColor,backgroundImage,border,font,color,size,style,decoration,align, text)");
 db.run("INSERT INTO ZONE VALUES (0,'zoneTest','200px','50px','100px','100px',"+
    "'green','auto','2px solid red','auto','blue','20pt','auto','auto','center','Hello world !')");
});


db.serialize(function(){
  db.each("SELECT * FROM ZONE", function(err, row) {
      console.log(row.id + ": " + row.text);
  });

});

db.close();

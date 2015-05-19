var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

//app.use(require('json-middleware').middleware());

app.all('/service/pull', function (req, res) {
  res.json(fs.readFileSync(path.join(__dirname,'pagetest.json'),{encoding: 'utf-8'}));
});

app.all('/service/push', function (req, res) {
  var json = '';
  req.on('data', function(data) {
    json += data;
  });
  req.on('end', function() {
    //console.log(json);
    fs.writeFile('pagetest2.json',json,{encoding: 'utf-8'});
    res.send('OK');
  });
  //res.json(fs.readFileSync(path.join(__dirname,'pagetest.json'),{encoding: 'utf-8'}));
});

app.use('/', express.static(path.join(__dirname,'..','dist')));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  //console.log(__dirname);

});

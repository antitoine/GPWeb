var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.all('/service/pull', function (req, res) {
  res.json(fs.readFileSync(path.join(__dirname,'pagetest.json'),{encoding: 'utf-8'}));
});

app.all('/service/push', function (req, res) {
  var json = JSON.stringify(req.body);
  //console.log(json);
  fs.writeFile(path.join(__dirname,'pagetest.json'),json,{encoding: 'utf-8'});
  res.send('OK');
});

app.use('/', express.static(path.join(__dirname,'..','dist')));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  //console.log(__dirname);

});

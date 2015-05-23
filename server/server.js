var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var swig  = require('swig');

var app = express();

app.use(bodyParser.json());

app.get('/service/list', function (req, res) {
  res.json(fs.readFileSync(path.join(__dirname,'pages.json'),{encoding: 'utf-8'}));
});

app.post('/service/add', function (req, res) {
  //console.log(req.body.name);
  //console.log(req.body.title);
  var f = fs.openSync(path.join(__dirname,'projet',req.body.name+'.json'), 'wx');
  if(f instanceof Error) {
    res.status(500);
    res.json({'success': false});
  } else {
    fs.close(f);
    fs.readFile(path.join(__dirname, 'sample.json'), function(err, data) {
      fs.writeFile(path.join(__dirname, 'projet', req.body.name+'.json'), data, function(err) {
        if(err) {
          res.status(500);
          res.json({'success': false});
        } else {
          var list = JSON.parse(fs.readFileSync(path.join(__dirname,'pages.json'),{encoding: 'utf-8'}));
          list.push(req.body);
          fs.writeFile(path.join(__dirname,'pages.json'),JSON.stringify(list),{encoding: 'utf-8'});
          res.status(200);
          res.json({'success': true});
        }
      });
    });
  }
});

app.get('/service/pull', function (req, res) {
  //console.log(req.query.page);
  res.json(fs.readFileSync(path.join(__dirname,'projet',req.query.page+'.json'),{encoding: 'utf-8'}));
});

app.post('/service/push', function (req, res) {
  var json = JSON.stringify(req.body);
  fs.writeFile(path.join(__dirname,'projet',req.query.page+'.json'),json,{encoding: 'utf-8'});
  res.status(200);
  res.json({'success': false});
});

app.post('/service/upload', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
      // `file` is the name of the <input> field of type `file`
      var old_path = files.image.path,
          file_size = files.image.size,
          file_ext = files.image.name.split('.').pop(),
          index = old_path.lastIndexOf('/') + 1,
          file_name = old_path.substr(index),
          new_path = path.join(__dirname, 'projet', 'images',  file_name + '.' + file_ext);
      fs.readFile(old_path, function(err, data) {
          fs.writeFile(new_path, data, function(err) {
              fs.unlink(old_path, function(err) {
                  if (err) {
                      res.status(500);
                      res.json({'success': false});
                  } else {
                      res.status(200);
                      res.json({'success': true, 'url': '/images/' + file_name + '.' + file_ext});
                  }
              });
          });
      });
  });
});

app.get('/service/download', function (req, res) {
  var data = JSON.parse(fs.readFileSync(path.join(__dirname,'projet','index.json'),{encoding: 'utf-8'}));
  res.send(swig.renderFile(path.join(__dirname, 'sample.html'), {
    title: 'Accueil',
    data: data
  }));
  res.status(200);
});

app.use('/images', express.static(path.join(__dirname,'projet','images')));
app.use('/', express.static(path.join(__dirname,'..','dist')));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('GPWeb listening at http://%s:%s', host, port);

});

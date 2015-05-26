var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var swig  = require('swig');
var archiver = require('archiver');
require('array.prototype.find');

var app = express();

app.use(bodyParser.json());

app.get('/service/list', function (req, res) {
  // lire le fichier pages.json et renvoyer son contenu
  res.json(fs.readFileSync(path.join(__dirname,'pages.json'),{encoding: 'utf-8'}));
});

app.post('/service/add', function (req, res) {
  // on teste l'ouverture du fichier qu'on est sensé créer
  // le mode wx va provoquer un échec si le fichier existe déjà
  var f = fs.openSync(path.join(__dirname,'projet',req.body.name+'.json'), 'wx');
  // on obtient une erreur si le fichier existe déjà
  if(f instanceof Error) {
    res.status(500);
    res.json({'success': false});
  } else {
    // on ferme le fd, on en a plus besoin
    fs.close(f);
    // on lit le contenu de sample.json, qui contient les éléments de base d'une page
    fs.readFile(path.join(__dirname, 'sample.json'), function(err, data) {
      // on écrit son contenu dans le fichier demandé
      fs.writeFile(path.join(__dirname, 'projet', req.body.name+'.json'), data, function(err) {
        // je ne vois pas trop comment ça pourrait échouer, mais sait-on jamais
        if(err) {
          res.status(500);
          res.json({'success': false});
        } else {
          // on récupère la liste des pages
          var list = JSON.parse(fs.readFileSync(path.join(__dirname,'pages.json'),{encoding: 'utf-8'}));
          // on ajoute la nouvelle page
          list.push(req.body);
          // on écrit le résultat
          fs.writeFile(path.join(__dirname,'pages.json'),JSON.stringify(list),{encoding: 'utf-8'});
          res.status(200);
          res.json({'success': true});
        }
      });
    });
  }
});

app.get('/service/remove', function (req, res) {
  // on supprime le fichier json correspondant
  var list = JSON.parse(fs.readFileSync(path.join(__dirname,'pages.json'),{encoding: 'utf-8'}));
  for (var i = list.length - 1; i >= 0; i -= 1) {
    if (list[i].name === req.query.page) {
      list.splice(i, 1);
      fs.unlink(path.join(__dirname,'projet',req.query.page+'.json'), function(err) {
        if (err) {
            res.status(500);
            res.json({'success': false});
        } else {
            res.status(200);
            res.json({'success': true});
        }
      });
      break;
    }
  }
  fs.writeFile(path.join(__dirname,'pages.json'),JSON.stringify(list),{encoding: 'utf-8'});
});

app.get('/service/pull', function (req, res) {
  // on renvoie le contenu du fichier json demandé
  res.json(fs.readFileSync(path.join(__dirname,'projet',req.query.page+'.json'),{encoding: 'utf-8'}));
});

app.post('/service/push', function (req, res) {
  // on récupère le json envoyé
  var json = JSON.stringify(req.body);
  // on l'écrit dans le fichier correspondant à la page
  fs.writeFile(path.join(__dirname,'projet',req.query.page+'.json'),json,{encoding: 'utf-8'});
  res.status(200);
  res.json({'success': false});
});

app.post('/service/upload', function (req, res) {
  // on est sur du multipart, le traitement des données est plus compliqué
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
      // image est le nom du champ dans le formulaire
      var old_path = files.image.path,
          file_size = files.image.size,
          file_ext = files.image.name.split('.').pop(),
          index = old_path.lastIndexOf('/') + 1,
          file_name = old_path.substr(index),
          new_path = path.join(__dirname, 'projet', 'images',  file_name + '.' + file_ext);
      // le readFile/writeFile/unlink correspond à un déplacement de fichier
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
  var list = JSON.parse(fs.readFileSync(path.join(__dirname,'pages.json'),{encoding: 'utf-8'}));
  var zip = archiver('zip');
  zip.pipe(res);
  list.forEach(function (element, index, array) {
    zip.append(swig.renderFile(path.join(__dirname, 'sample.html'), {
      title: element.title,
      data: JSON.parse(fs.readFileSync(path.join(__dirname,'projet',element.name+'.json'),{encoding: 'utf-8'}).replace(/\/images/g,'images'))
    }), {name: element.name+'.html'});
  });
  zip.directory(path.join(__dirname,'projet','images'), 'images');
  res.status(200);
  zip.finalize();
  res.attachment('gpweb-my-website.zip');
});

app.use('/images', express.static(path.join(__dirname,'projet','images')));
app.use('/', express.static(path.join(__dirname,'..','dist')));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('GPWeb listening at http://%s:%s', host, port);

});

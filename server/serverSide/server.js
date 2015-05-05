var express = require('express');   //Express Web Server 
var bodyParser = require('body-parser'); //connects bodyParsing middleware
var formidable = require('formidable');
var path = require('path');     //used for file path
var fs =require('fs-extra');    //File System-needed for renaming file etc
var FileSaver=require('filesaver');
var archiver=require('archiver');

var app = express();
var project='project';

//The extensions that we consider.. to be added more
var extensionsImages=['jpg','png','jpeg','ico','gif'];
var extensionsJs = 'js';
var extensionsCss='css';

//the path to our html file .. we have to change it depending on our necessities
app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//creating folders
fs.mkdirp('./'+ project, function(err) { 
	    	// path was created unless there was error
});
fs.mkdirp('./'+ project+'/public', function(err) { 
	    	// path was created unless there was error
});

/* ========================================================== 
Innitializing our database
============================================================ */
var databaseName = 'MyDatabase.db';

fs.mkdirp('./Database');
var file ='Database/' + databaseName;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);
db.serialize(function() {
  db.run("CREATE TABLE if not exists ZONE (id PRIMARY KEY ASC, name , width ,"+
  	"height, top, left ,backgroundColor,backgroundImage,border,font,color,size,style,decoration,align, text)");
  db.run("CREATE TABLE if not exists LINK (id PRIMARY KEY ASC)");
  db.run("CREATE TABLE if not exists PAGE (id PRIMARY KEY ASC)");
});


/* ========================================================== 
We rename our project. At the beginning the name of the project
is simply Project (we can change that after)
============================================================ */
app.post('/setNameProject',function (req,res){
	console.log('Changing the name of the project');
	fs.rename('./'+ project,'./' + req.body.name, function(err) { 
	    	// path was created unless there was error
	});
	project = req.body.name;
});



/* ========================================================== 
Upload of a file to our server. Depending of the extention of
the file we can add it in different folders.
============================================================ */
 app.post('/upload', function (req, res, next) {
  console.log("We tried to upload something");

  var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = './'+ project;       //set upload directory
    form.keepExtensions = true;     //keep file extension
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log("form.bytesReceived");
        //TESTING
        console.log("file path: "+JSON.stringify(files.fileUploaded.path));
        console.log("file name: "+JSON.stringify(files.fileUploaded.name));
        console.log("file type: "+JSON.stringify(files.fileUploaded.type));
        console.log("astModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));

        var extension = files.fileUploaded.name.split('.').pop();
        console.log(extension); 
        var i;
        for(i=0;i<extensionsImages.length;++i)
        	if(extension===extensionsImages[i])
        		break;
        //Formidable changes the name of the uploaded file
        //Rename the file to its original name
        if(i==extensionsImages.length){
        	if(extension === extensionsCss)
        	{
        		if(!fs.exists('./'+project+'/'+'css')){
        			fs.mkdirp('./'+ project+'/css', function(err) { 
	    	// path was created unless there was error
					});
        		}
        		fs.rename(files.fileUploaded.path,'./' +project+'/css/'
        				+files.fileUploaded.name, function(err) {
        				if (err){
        					console.log('Error in uploading a css file');
           	 				throw err;	 				 
        				}
        				else console.log('The uploading was completed');
      	  		});
        	}
        	else if(extension === extensionsJs)
        	{
        		if(!fs.exists('./'+project+'/'+'js')){
        			fs.mkdirp('./'+ project+'/js', function(err) { 
	    	// path was created unless there was error
					});
        		}
        		fs.rename(files.fileUploaded.path,'./' +project+'/js/'
        				+files.fileUploaded.name, function(err) {
        				if (err)
        				{
        					console.log('Error in uploading a js file');
           	 				throw err;
        				}
        				else console.log('The uploading was completed');
        	 	 				 
      	  		});
        	}
        	else
        	{
        		fs.rename(files.fileUploaded.path,'./' +project+'/'+
        				'public/'+files.fileUploaded.name, function(err) {
        		if (err){
        			console.log('Error in uploading a normal file'); 
           	 		throw err;
        		}
        		else console.log('The uploading was completed');
      	  		});
        	}
        }else{
        	if(!fs.exists('./'+project+'/'+'images'))
        	{
        		fs.mkdirp('./'+ project+'/images', function(err) { 
	    	// path was created unless there was error
				});
        	}
        	fs.rename(files.fileUploaded.path,'./' +project+'/images/'+files.fileUploaded.name, function(err) {
        	if (err){
        		console.log('Error in uploading an image format file'); 
        		throw err; 
        	}
        	else console.log('The uploading was completed');
      	  });
        }
          res.end();
    });
});


/* ========================================================== 
Download of the project ..  The name of the archive will be the same
as the name of the project chosen by user 
============================================================ */
app.get('/download',function (req, res){
  var archive = archiver('zip');
  res.attachment(project+'.zip');
  res.on('close',function() {
    return res.status(200).send('OK').end();
  });
  archive.pipe(res);
  archive.directory(project,false);
  archive.finalize();
  console.log("We download our zip files");
});
var server = app.listen(3030, function() {
  console.log('Listening on port %d', server.address().port);
});


/* ========================================================== 
ADD a file to database depending of its type
============================================================ */
app.post('/addZone', function(req,res){
	var json =JSON.parse(req.body);
	db.serialize(function () {
  // insertion depending of the type of the request
  	db.run("INSERT INTO ZONE VALUES (" +
  	json.id + ",\'" + json.name + "\', \'" + json.width + "\',\'" + json.height + "\',\'" + json.top + "\',\'" +
  	json.left + "\',\'" + json.backgroundColor + "\',\'" + json.backgroundImage + "\',\'" + json.border +
  	"\',\'" + json.font + "\',\'" + json.color + "\',\'" + json.size + "\',\'" + json.style + "\',\'" + json.decoration +
 	"\',\'" + json.align + "\',\"" + json.text + "\")");
  	db.run("INSERT INTO LINK VALUES (" + json.id + ")");	
  	db.run("INSERT INTO PAGE VALUES (" + json.id + ")");
  	});
  });


 

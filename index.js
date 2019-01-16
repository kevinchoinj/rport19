const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const NodeCouchDb = require('node-couchdb');
const AWS = require('aws-sdk');
const bluebird = require('bluebird');

let couchUsername;
let couchPassword;
let couchViewUrl;
let dbName;

let awsAccessKey;
let awsSecretKey;
let awsBucketName;

let jsonData = require('./config.json');
couchUsername = jsonData.couchUsername;
couchPassword = jsonData.couchPassword;

dbName = jsonData.dbName;
couchViewUrl = jsonData.couchViewUrl;

awsAccessKey = jsonData.awsAccessKey;
awsSecretKey = jsonData.awsSecretKey;
awsBucketName = jsonData.awsBucketName;
authClientId = jsonData.authClientId;
authDomain = jsonData.authDomain;

/*======================================
=               AWS S3                =
======================================*/
AWS.config.update({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey
});
AWS.config.setPromisesDependency(bluebird);

const s3 = new AWS.S3();

const couch = new NodeCouchDb({
  auth: {
    user: couchUsername,
    password: couchPassword,
  }
});

const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

/*======================================
=               SERVER                 =
======================================*/

const app = express();

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
var urlencodedParser = bodyParser.urlencoded({extended: false});

/*======================================
=            MISC PROJECTS             =
======================================*/

app.get('/projects/view', (req, res) => {
  couch.get(dbName, couchViewUrl).then(
     function(data) {
       res.send(data.data.rows);
     },
     function(err) {
       res.send(err);
     }
   )
 });
app.post('/projects/post', urlencodedParser, (req, res) => {
  couch.uniqid().then(function(ids){
    const id = ids[0];
    couch.insert(dbName, {
      _id: id,
      name: req.body.name,
      awsKey: req.body.awsKey,
      url: req.body.url,
      price: req.body.price,
      quantity: req.body.quantity,
      created_at: Date.now(),
    }).then(
      function(data, headers, status) {
        res.send(data);
      },
      function(error) {
        res.send(error);
      }
    )
  })
});
app.post('/projects/delete', urlencodedParser, (req, res) => {
  const id = req.body.id;
  const rev = req.body.rev;
  couch.del(dbName, id, rev). then(
    function(data, headers, status) {
      res.send(data);
    },
    function(err) {
      res.send(err);
    });
});

/*======================================
=               AWS S3                =
======================================*/
app.post('/images/post', upload.single('awsAction'), (req, res) => {
  s3.putObject({
    Bucket: awsBucketName,
    Key: Date.now().toString() + req.file.originalname,
    Body: req.file.buffer,
    ACL: 'public-read',
  }, function(err, data) {
    var params = this.request.params;
    var region = this.request.httpRequest.region;
    res.send({
      awsKey: params.Key,
      url: 'https://s3-' + region + '.amazonaws.com/' + params.Bucket + '/' + params.Key
    });
  });
});

app.post('/images/url', urlencodedParser, (req, res) => {
  couch.uniqid().then(function(ids){
    const id = ids[0];
    couch.insert(dbName, {
      _id: id,
      url: req.body.url,
      created_at: Date.now(),
    }).then(
      function(data, headers, status) {
        res.send(data);
      },
      function(error) {
        res.send(error);
      }
    )
  })
});

app.post('/images/delete', urlencodedParser, (req, res) => {
  s3.deleteObject({
    Bucket: awsBucketName,
    Key: req.body.awsKey,
  },function (err,data){
    res.send(data);
  })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
const port = process.env.PORT || 1503;

server = app.listen(port, function(){
  console.log(`server is running on port ${port}`)
})


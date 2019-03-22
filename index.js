const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const AWS = require('aws-sdk');
const bluebird = require('bluebird');
const compression = require('compression');

let jsonData = require('./config.json');

const dbName = jsonData.dbName;
const couchViewUrl = jsonData.couchViewUrl;

const awsAccessKey = jsonData.awsAccessKey;
const awsSecretKey = jsonData.awsSecretKey;
const awsBucketName = jsonData.awsBucketName;

const {
  couchGet,
  couchPost,
  couchPut,
  couchDelete,
} = require('./couch.js');

const {
  sendError,
} = require('./errors.js');

/*======================================
=               AWS S3                =
======================================*/
AWS.config.update({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey
});
AWS.config.setPromisesDependency(bluebird);

const s3 = new AWS.S3();

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
app.use(compression());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
var urlencodedParser = bodyParser.urlencoded({extended: false});

/*======================================
=            MISC PROJECTS             =
======================================*/

app.get('/projects/view', (req, res) => {
  couchGet(dbName, couchViewUrl)
    .then((data) => {
      res.send(data.data.rows);
    })
    .catch((error) => {
      res.send(error);
      sendError('Express', error, 'Project Get Error');
    })
 });

app.post('/projects/post', urlencodedParser, (req, res) => {
  couchPost(dbName, {
    name: req.body.name,
    awsKey: req.body.awsKey,
    url: req.body.url,
    link: req.body.link,
  })
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error);
    sendError('Express', error, 'Project Post Error');
  });
});

app.post('/projects/delete', urlencodedParser, (req, res) => {
  const id = req.body.id;
  const rev = req.body.rev;
  couchDelete(dbName, id, rev)
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error);
    sendError('Express', error, 'Project Delete Error');
  });
});

app.post('/projects/edit', urlencodedParser, (req, res) => {
  couchPut(dbName, {
    _id: req.body.id,
    _rev: req.body.rev,
    name: req.body.name,
    link: req.body.link,
    createdAt: req.body.createdAt,
    url: req.body.url,
    awsKey: req.body.awsKey,
    updatedAt: Date.now(),
  })
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error);
    sendError('Express', error, 'Project Delete Error');
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
    ContentType: req.file.mimetype,
  }, function(err, data) {
    var params = this.request.params;
    var region = this.request.httpRequest.region;
    res.send({
      awsKey: params.Key,
      url: `https://s3-${region}.amazonaws.com/${params.Bucket}/${params.Key}`
    });
  });
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
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});
const port = process.env.PORT || 5000;

server = app.listen(port, function(){
  console.log(`server is running on port ${port}`)
})


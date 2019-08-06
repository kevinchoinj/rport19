const AWS = require('aws-sdk');
const bluebird = require('bluebird');

let jsonData = require('../config.json');
const awsAccessKey = jsonData.awsAccessKey;
const awsSecretKey = jsonData.awsSecretKey;
const awsBucketName = jsonData.awsBucketName;

AWS.config.update({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey
});
AWS.config.setPromisesDependency(bluebird);
const s3 = new AWS.S3();

class AwsController {

  createImage(req, res) {
    return s3.putObject({
      Bucket: awsBucketName,
      Key: Date.now().toString() + req.file.originalname,
      Body: req.file.buffer,
      ACL: 'public-read',
      ContentType: req.file.mimetype,
    }, function(err, data) {
      if (data) {
        var params = this.request.params;
        var region = this.request.httpRequest.region;
        res.send({
          awsKey: params.Key,
          url: `https://s3-${region}.amazonaws.com/${params.Bucket}/${params.Key}`
        });
      }
      if (err) {
        res.status(400).send({
          success: 'false',
          message: 'aws added failure',
          err,
        });
      }
    });
  }

  deleteImage(req, res) {
    return s3.deleteObject({
      Bucket: awsBucketName,
      Key: req.body.awsKey,
    },function (err,data){
      if (data) {
        res.send(data);
      }
      if (err) {
        res.status(400).send({
          success: 'false',
          message: 'aws added failure',
          err,
        });
      }
    })
  }

}

const awsController = new AwsController();
export default awsController;